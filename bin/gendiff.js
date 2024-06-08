#!/usr/bin/env node
import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information');

program.parse();




//   import { program } from 'commander';

// const join = (first, second, connector = '') => `${first}${connector}${second}`;

// program
//   .name('string-util')
//   .description('Инструмент для работы со строками')
//   .version('1.0.0');

// program.command('join')
//   .description('Команда соединяет две строки в одну')
//   .argument('<first>', 'первая строка')
//   .argument('<second>', 'вторая строка')
//   .option('-c, --connector <type>', 'соединительная строка', '')
//   .action((first, second, options) => {
//     // BEGIN
//     const result = join(first, second, options.connector);
//     console.log(result);
//     // END
//   });

// program.parse();