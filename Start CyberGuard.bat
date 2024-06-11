@echo off
echo Starting Cyberguard...

rem Change directory to files
cd project_files

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