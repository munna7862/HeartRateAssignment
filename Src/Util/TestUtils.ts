import * as fs from 'fs';

export class TestUtils {

    public writeJSONOutputToFile(filePath: string, output: any): void {
        fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
    }

}