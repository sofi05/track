@echo off
setlocal enabledelayedexpansion

:: Define the input and output folders (change to your folder paths)
set input_folder=.
set output_folder=.

:: Create the output folder if it doesn't exist
if not exist "!output_folder!" mkdir "!output_folder!"

:: Loop through each .webp file in the input folder
for %%f in ("%input_folder%\*.webp") do (
    echo Converting: %%f
    magick "%%f" "!output_folder!\%%~nf.png"
    echo Converted: %%f → !output_folder!\%%~nf.png
    
    :: Delete the .webp file after conversion
    del "%%f"
    echo Deleted: %%f
)

echo Done converting.
pause
