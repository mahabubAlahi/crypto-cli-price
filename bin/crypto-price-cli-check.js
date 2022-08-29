const program = require('commander');
const check = require('../commands/check')


program
    .command('price')
    .description('Check price of Coin')
    .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETC,XRP')
    .option('--cur <currency>', 'Change the currency', 'USD')
    .action((cmd) => check.price(cmd))

program.parse(process.argv);