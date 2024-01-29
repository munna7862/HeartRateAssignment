# HeartRateAssignment
Two ways to execute the test
1. Add Code Runner Extention in the vscode, a run button will appear on the top right side. Navigate to "Tests/HeartRateBatch/Test_001_HeartRate.ts" and click on run button. It executes the code and saves the output in "output.json" file under TestData folder under HeartRateBatch.
2. open terminal and execute the command tsc, ts files will compile and js files will be created under Bin folder. Use below command to execute the js file
Command --> node ./Bin/Tests/HeartRateBatch/Test_001_HeartRate.js
Note:
Please try to run the above command directly first, if problem occurs that tsc command not recognized or existed, please install below dependencies step by step. Before that delete node_modules folder, package.json & package-lock.json files.
Installation steps::
 Use npm init -f to create package.json file
 Install node typescript using command npm install -g typescript
 Use tsc -v to find version
 Install ts-node using command npm i -g ts-node
 Use tsc –v to find version
 Install ts-node using command npm i -g ts-node
 Create tsconfig file using tsc -init
 Installing and Configuring Selenium
o npm install --save selenium-webdriver
o npm install --save @types/node
o npm install --save @types/selenium-webdriver
