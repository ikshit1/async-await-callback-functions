const express = require('express');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');
const { resolve } = require('path/posix');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const myPromise = new Promise((resolve, reject) => {
    resolve('Ikshit');
});
console.log('myPromise', myPromise);


function calculateSquare(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'));
            }
            const res = number*number;
            resolve(res)
        }, 1000)
    });
    return promise;
}

calculateSquare(6).then((val) => {
    console.log('val', val);
}, (err) => {
    console.log('err', err);
});

calculateSquare('testing string error call').then((val) => {
    console.log('val', val);
}, (err) => {
    console.log('err', err);
})

app.listen(3000, () => {
    console.log('Port listening on 3000');
});