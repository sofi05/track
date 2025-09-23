@echo off
setlocal enabledelayedexpansion

for %%f in (*.webp) do (
    set "filename=%%~nxf"

    rem Remove %28 (encoded '(')
    set "newname=!filename:%%28=!"

    rem Remove %29 (encoded ')')
    set "newname=!newname:%%29=!"

    rem Remove %27 (encoded apostrophe or single quote)
    set "newname=!newname:%%27=!"

    if not "!filename!"=="!newname!" (
        ren "%%f" "!newname!"
        echo Renamed "%%f" to "!newname!"
    )
)

endlocal
pause
