import * as fs from 'fs';
import * as path from 'path';
import { HeartRateFunctions } from '../../Src/Pages/HeartRateFunctions';
import { TestUtils } from '../../Src/Util/TestUtils';


const PROJECT_FOLDER = __filename.substring(0, __filename.indexOf("HeartRateAssignment") + 19);
const inputPath = path.join(PROJECT_FOLDER, "TestData", "HeartRateBatch", 'heartrate.json');

const rawData = fs.readFileSync(inputPath, 'utf-8');
const heartRateData = JSON.parse(rawData);

let objHeartRateFunctions = new HeartRateFunctions();
const dailyStatistics = objHeartRateFunctions.processHeartRateData(heartRateData);

const outputPath = path.join(PROJECT_FOLDER, "TestData", "HeartRateBatch", 'output.json');
let objTestUtils = new TestUtils();
objTestUtils.writeJSONOutputToFile(outputPath, dailyStatistics);

// To execute the test, kindly use below command
// node ./Bin/Tests/HeartRateBatch/Test_001_HeartRate.js