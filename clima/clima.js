const axios = require('axios');

const getClima = async(lat, lng) => {

    //poner la apiid
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=`);
    // console.log('Temperatura', resp.data.main.temp);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}