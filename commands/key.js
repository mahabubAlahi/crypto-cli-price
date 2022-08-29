const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager')

const key = {
    async set () {
        const keyManager = new KeyManager()

        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter your api key'.green + 'https://nomics.com'
            }
        ])

        const key = keyManager.setKey(input.key)

        if(key){
            console.log(`Api key is set`.blue);
        }
    },
    show () {
        console.log('Hello from Show');
    },
    remove () {
        console.log("Hello from remove");
    }
}

module.exports = key;