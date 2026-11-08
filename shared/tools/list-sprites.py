r"""
list-sprites.py - makes the list of picture names that lets a character write a SHORT prefix
(spriteImages: ['606']) instead of every file name.

A website can't look inside a folder, so this script does it for the site: it reads the file names
of assets/Sprite/HI3/Outfit and writes them into 03HI3/js/outfit-files.js.

ORDER of the list = the order the pictures were ADDED. A short prefix ('606') shows its pictures in this order,
and with  newestFirst: true  in 03HI3/js/fit.js  the popup starts with the newest one.
  - Pictures that are already in outfit-files.js keep their place.
  - New pictures go at the end, the oldest of them first (by the date the file was created).
  - To rebuild the whole order from the dates of the files (once, or when the order got mixed up):
        py tools\list-sprites.py --by-date        (or double-click "hi3outfit by date.bat")

RUN IT every time you add / rename / delete pictures in that folder (double-click  hi3outfit.bat,
or:  py tools\list-sprites.py ), then push the new outfit-files.js together with the pictures.

Another folder / game:  py tools\list-sprites.py <folder> <output.js>   (--by-date can go anywhere in the line)
"""
import os
import re
import sys

# The main folder of the site (the one with 03HI3, assets, shared ...): found by walking up from this file,
# so the script works from tools/ and from shared/tools/.
ROOT = os.path.dirname(os.path.abspath(__file__))
while not os.path.isdir(os.path.join(ROOT, '03HI3')) and os.path.dirname(ROOT) != ROOT:
    ROOT = os.path.dirname(ROOT)

args = [a for a in sys.argv[1:] if not a.startswith('--')]
rebuild_by_date = '--by-date' in sys.argv
folder = os.path.join(ROOT, args[0] if len(args) > 0 else os.path.join('assets', 'Sprite', 'HI3', 'Outfit'))
output = os.path.join(ROOT, args[1] if len(args) > 1 else os.path.join('03HI3', 'js', 'outfit-files.js'))

if not os.path.isdir(folder):
    print('Folder not found:', folder)
    sys.exit(1)


def created(path):  # the date the file was created (Windows: the creation date; elsewhere the closest thing)
    info = os.stat(path)
    return getattr(info, 'st_birthtime', None) or info.st_ctime


def natural(text):  # 2 before 10
    return [int(p) if p.isdigit() else p.lower() for p in re.split(r'(\d+)', text)]


# picture name -> the oldest creation date of its .png / .webp (both files count as one picture)
found = {}
for file in os.listdir(folder):
    base, ext = os.path.splitext(file)
    if ext.lower() in ('.png', '.webp'):
        when = created(os.path.join(folder, file))
        found[base] = min(when, found.get(base, when))


def oldest_first(names):  # by creation date; the same moment: natural order
    return sorted(names, key=lambda n: (found[n], natural(n)))


# the order of the list the last time the script ran
previous = []
if os.path.isfile(output):
    with open(output, encoding='utf-8') as f:
        previous = re.findall(r"^\s*'([^']+)'", f.read(), flags=re.M)

if rebuild_by_date:
    names = oldest_first(found)
elif previous:
    kept = [n for n in previous if n in found]  # keep their place; deleted pictures drop out
    new = oldest_first(set(found) - set(kept))  # new pictures: at the end, oldest first
    names = kept + new
    if new:
        print('New at the end of the list:', ', '.join(new))
else:
    names = sorted(found, key=natural)  # first time: plain number order

lines = ',\n'.join(f"  '{n}'" for n in names)
with open(output, 'w', encoding='utf-8') as f:
    f.write('// MADE BY tools/list-sprites.py - do not edit by hand, run the script again instead.\n')
    f.write(f'window.OUTFIT_FILES = [\n{lines}\n];\n')

print(f'Found {len(names)} pictures in {os.path.relpath(folder, ROOT)}' + (' (order rebuilt from file dates)' if rebuild_by_date else ''))
print('Wrote', os.path.relpath(output, ROOT))
