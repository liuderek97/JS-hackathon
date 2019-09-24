// node web api app

const fetch = require('node-fetch');

console.log('Welcome to the Karaoke machine')

let genres = []
let url = 'https://api.musixmatch.com/ws/1.1/'

fetch(url)
  .then(respone => Response.json)
