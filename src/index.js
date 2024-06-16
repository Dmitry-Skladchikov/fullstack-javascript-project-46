import fs from 'fs';
import path from 'path';
import process from 'node:process';
import getDiff from './getDiff.js';

// const filepath1 = '/home/dmitryskl/Документы/fullstack-javascript-project-46/test_files/file1.json';
// const filepath2 = '/home/dmitryskl/Документы/fullstack-javascript-project-46/test_files/file2.json';

const currentDir = process.cwd();

const getData = path => fs.readFileSync(path, 'utf8');

const genDiff = (filepath1, filepath2) => {
    const relativePath1 = path.resolve(currentDir, filepath1);
    const relativePath2 = path.resolve(currentDir, filepath2);
    
    const data1 = getData(relativePath1);
    const data2 = getData(relativePath2);

    return getDiff(JSON.parse(data1), JSON.parse(data2));
    // return [JSON.parse(data1), JSON.parse(data2)];
}

export default genDiff;