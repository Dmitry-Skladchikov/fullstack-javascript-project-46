import jsYaml from "js-yaml";
import process from 'node:process';
import path from 'path';
import fs from "fs";

const currentDir = process.cwd();

const getData = (filepath) => {
    const data = fs.readFileSync(filepath, 'utf8');
    const extname = path.extname(filepath);
 
    return [data, extname];
}

const parser = (filePath) => {
    const relativePath = path.resolve(currentDir, filePath);
    const [ data, extname ] = getData(relativePath);
    let parsedData;
    if (extname === '.json') parsedData =JSON.parse(data);
    if (extname === '.yml' || extname === '.yaml') {
        parsedData = jsYaml.load(fs.readFileSync(filePath, 'utf8'));
    }
    
    return parsedData;
}

export default parser;
