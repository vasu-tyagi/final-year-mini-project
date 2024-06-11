@echo off
echo Starting setup...

rem Change directory to files
cd files

rem Download and install OllamaSetup
echo Installing OllamaSetup...
msiexec.exe /a https://www.ollama.com/download/OllamaSetup.exe /quiet

rem Pull tinyllama package
echo Pulling tinyllama package...
ollama pull tinyllama

rem Install python
echo Installing python...
msiexec.exe /a https://www.python.org/ftp/python/3.12.4/python-3.12.4-amd64.exe

rem Install requirements
echo Installing requirements...
pip install -r requirements.txt

rem Download and install Node.js
echo Installing Node.js...
msiexec.exe /a https://nodejs.org/dist/v20.14.0/node-v20.14.0-x64.msi /quiet

rem Update npm to the latest version
echo Updating npm...
npm install -g npm

rem Install create-react-app globally
echo Installing create-react-app...
npm install -g create-react-app

rem Install Yarn globally
echo Installing Yarn...
npm install --global yarn

rem Run Yarn
echo Running Yarn...
yarn

echo Setup completed!
exit
