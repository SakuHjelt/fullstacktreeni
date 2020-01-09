const request = require('request-promise');

const API_KEY = 'c03bff0dbb8fd7d8509a4d89a64a65e0';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'could not reach openweather.org API'});
        })
    }
}

module.exports = Weather;
