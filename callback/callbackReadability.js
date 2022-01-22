const express = require('express');
const path = require('path');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// If you look into this code, it is easy to understand that two http calls were made in order to get the image of a particular breed
// But consider if more http request added in this code then it will be get difficult to understand the code 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        const res = JSON.parse(xhr.responseText);
        const breeds = Object.keys(res.message);
        const xhr1 = new XMLHttpRequest();
        xhr1.open('GET', `https://dog.ceo/api/breed/${breeds[0]}/images`);
        xhr1.onreadystatechange = function() {
            if (xhr1.readyState === xhr1.DONE) {
                console.log('>>>i,age', JSON.parse(xhr1.responseText)['message'][0]);
            }
        }
        xhr1.send(null);
    }
}
xhr.send(null);

app.listen(3000, () => {
    console.log('Port listening on 3000');
});