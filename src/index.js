import parser from './parsers.js'
import getDiff from './getDiff.js';

export default (filepath1, filepath2) => getDiff(parser(filepath1), parser(filepath2));