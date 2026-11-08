@echo off
title Update HoyoDex
rem ---------------------------------------------------------------------------
rem  Uploads your HoyoDex changes to GitHub.
rem  It asks what you changed (that becomes the commit message) - just type it
rem  and press Enter. Pressing Enter without typing uses "update <today's date>".
rem ---------------------------------------------------------------------------
cd /d "%~dp0"

echo These changes will be uploaded:
echo.
git status --short
echo.

set "msg="
set /p "msg=What did you change? (Enter = update %date%): "
if not defined msg set "msg=update %date%"
rem quotes inside the message would break the command, so they're taken out
set "msg=%msg:"=%"

echo.
git add .
git commit -m "%msg%"
git push origin main

echo.
if errorlevel 1 (
    echo Something went wrong - read the lines above.
) else (
    echo Done! Uploaded with the message: %msg%
)
echo.
pause
