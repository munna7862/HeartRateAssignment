# HeartRateAssignment
Two ways to execute the test
1. Add Code Runner Extention in the vscode, a run button will appear on the top right side. Navigate to Tests/HeartRateBatch/Test_001_HeartRate.ts and click on run button. It executes the code and saves the output in output json file under TestData folder under HeartRateBatch.
2. open terminal and execute the command tsc, ts files will compile and js files will be created under Bin folder. Use below command to execute the js file
node ./Bin/Tests/HeartRateBatch/Test_001_HeartRate.js
