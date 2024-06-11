@echo off
echo Starting files...

rem Change directory to CyberGuard
cd files

rem Change directory to src and run backend.py in a new Command Prompt window
cd src
start cmd /k "python backend.py"

rem Change back to CyberGuard directory
cd ..

rem Run yarn start
echo Starting yarn...
yarn start

echo Setup completed!
exit