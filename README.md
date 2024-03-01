# QA-Automation-Admin
Perquisite Git: Ensure that Git is installed on your local machine.

You can download and install Git from the official website.

To verify if Git is installed, open your command line or terminal and run the following command :

git --version

Node.js and npm (or Yarn): Node.js is required to execute JavaScript code and npm (Node Package Manager) or Yarn is used for managing project dependencies.

You can download and install Node.js from the official website.

To verify if Node.js and npm are installed, run the following commands:

node --version

npm --version

If you prefer Yarn, you can install it using npm: npm install -g yarn Then, you can check Yarn's version. To verify yarn is installed run the following command.

yarn --version

Clone and Run this project Step 1: Clone the Git Repository

Clone this Git Repository running the following command in command prompt

git clone Step 2: Install cypress in the project terminal

npm install cypress --save-dev

Step 3: Install all Dependencies: Once the repository is cloned, navigate to the project's directory and run the following command If you use npm

npm i -force

OR If you use yarn

yarn install i

Step 4: On the project's directory run the following command to directly run this project in command prompt.

npx cypress run

If you want to see the test visually

Perform the following command. It will open cypress.

npx cypress open

Select E2E Testing

Select your desire browser and clicked on start E2E testing

you will see spec files. Select any spec which one you want to run

Spec will run automatically

By following these steps, you'll clone the Git repository, install the project's dependencies, and run the project

Access to the Git Repository: You should have access to the Git repository from which you want to clone the project. Ensure that you have the necessary permissions to clone the repository.

Project Documentation: It's helpful to have access to the project's documentation or README file. This documentation typically provides instructions on how to set up and run the project, including any specific commands or environment configurations required.