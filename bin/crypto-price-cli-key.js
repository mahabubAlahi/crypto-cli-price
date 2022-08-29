const program = require('commander');


program
    .command('set')
    .description('Set API Key -- https://nomics.com')
    .action(() => {console.log('Hello From Set')})

program.parse(process.argv);