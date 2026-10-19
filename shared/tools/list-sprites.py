r"""
list-sprites.py - makes the list of picture names that lets a character write a SHORT prefix
(spriteImages: ['606']) instead of every file name.

A website can't look inside a folder, so this script does it for the site: it reads the file names
of assets/Sprite/HI3/Outfit and writes them into 03HI3/js/outfit-files.js.

RUN IT every time you add / rename / delete pictures in that folder (double-click  "list sprites.bat",
or:  py tools\list-sprites.py ), then push the new outfit-files.js together with the pictures.

Another folder / game:  py tools\list-sprites.py <folder> <output.js>
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
folder = os.path.join(ROOT, sys.argv[1] if len(sys.argv) > 1 else os.path.join('assets', 'Sprite', 'HI3', 'Outfit'))
output = os.path.join(ROOT, sys.argv[2] if len(sys.argv) > 2 else os.path.join('03HI3', 'js', 'outfit-files.js'))

if not os.path.isdir(folder):
    print('Folder not found:', folder)
    sys.exit(1)

names = set()
for name in os.listdir(folder):
    base, ext = os.path.splitext(name)
    if ext.lower() in ('.png', '.webp'):
        names.add(base)  # .png and .webp of the same picture count once


def natural(text):  # 2 before 10
    return [int(p) if p.isdigit() else p.lower() for p in re.split(r'(\d+)', text)]


names = sorted(names, key=natural)
lines = ',\n'.join(f"  '{n}'" for n in names)
with open(output, 'w', encoding='utf-8') as f:
    f.write('// MADE BY tools/list-sprites.py - do not edit by hand, run the script again instead.\n')
    f.write(f'window.OUTFIT_FILES = [\n{lines}\n];\n')

print(f'Found {len(names)} pictures in {os.path.relpath(folder, ROOT)}')
print('Wrote', os.path.relpath(output, ROOT))
