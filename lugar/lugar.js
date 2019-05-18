const axios = require('axios');


const getLugarLatLong = async(dir) => {


    const encodedUri = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUri}`,
        //poner los headers
        headers: {
            'X-RapidAPI-Host': '',
            'X-RapidAPI-Key': ''
        }
    });

    const respuesta = await instance.get();

    //console.log('Respuesta', respuesta);

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLong
};