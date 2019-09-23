@echo off

set LOG=C:\Users\Jason\Desktop\log.txt

time /t >> %LOG%

"node" "%~dp0index.js" %* 2>> %LOG%

echo %errorlevel% >> %LOG%