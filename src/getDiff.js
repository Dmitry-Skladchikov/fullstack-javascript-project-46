import _ from 'lodash';

export default (obj1, obj2) => {
    const keys1= Object.keys(obj1);
    const keys2= Object.keys(obj2);
    const sortedKeys = _.uniq(_.sortBy([...keys1, ...keys2]));

    let diff = '';

    for (const key of sortedKeys) {
        if (!Object.hasOwn(obj1, key)) {
            diff += `  + ${key}: ${obj2[key]}\n`;
        } else if (!Object.hasOwn(obj2, key)) {
            diff += `  - ${key}: ${obj1[key]}\n`;
        } else if (obj1[key] !== obj2[key]) {
            diff += `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
        } else {
            diff += `    ${key}: ${obj1[key]}\n`;
        }
    }
    let difString = `{\n${diff}}`;
    console.log(difString);
}
