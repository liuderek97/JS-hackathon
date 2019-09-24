// node web api app

const fetch = require('node-fetch');

console.log("Welcome to the Karoake machine, Select one of the genres by press 1, 2 or 3")

let genres = []

const getGenres = async () => {  
    let genre1 = await fetch('https://api.musixmatch.com/ws/1.1/');
    let genre1Data = await genre1.json();
    genres.push(genre1.value)
    return genre1;
}

getGenres()
    .then(genre1 => console.log(genre1))
    .catch(err => console.log(err));
