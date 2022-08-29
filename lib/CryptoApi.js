const axios = require('axios');

const colors = require('colors');

class CryptoApi {
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPriceData(coinOption, curOption) {
        try {
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`)

            let outPut = ''

            res.data.forEach(coin => {
                outPut += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} | Rank: ${coin.rank.blue}\n` 
            });

            return outPut;
        } catch (err) {
            console.error(err)
        }
    }
}

module.exports = CryptoApi;