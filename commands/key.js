const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager')
const {isRequired } = require('../utils/validation');

const key = {
    async set () {
        const keyManager = new KeyManager()

        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter your api key'.green + 'https://nomics.com',
                validate: isRequired
            }
        ])

        const key = keyManager.setKey(input.key)

        if(key){
            console.log(`Api key is set`.blue);
        }
    },
    show () {
        try {
            const keymanager = new KeyManager()

            const key = keymanager.getKey()
            console.log('Api key is- ', key.yellow);
            return key;
        } catch (error) {
            console.log(error.message.red)
        }
    },
    remove () {
        try {
            const keymanager = new KeyManager()

            keymanager.deleteKey()
            console.log('Key removed. ');
            return;
        } catch (error) {
            console.log(error.message.red)
        }
    }
}

module.exports = key;