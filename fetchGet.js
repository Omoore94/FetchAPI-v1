const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response =>  response.json())
.then(data => {
    fs.writeFile('./result/posts.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err)
        }else
            console.log("File successfully written to json file!");
    });

});