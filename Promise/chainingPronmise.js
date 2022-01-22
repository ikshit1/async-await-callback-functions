const express = require('express');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');
const { resolve } = require('path/posix');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


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

calculateSquare(6)
.then((val) => {
    console.log('val', val);
    throw new Error('Failed')
    // return calculateSquare(7);
}, (err) => {
    console.log('err', err);
})
.then((val2) => {
    console.log('val2', val2);
}, (reason) => {
    console.log('reason', reason);
})
.catch((e) => {
    console.log('e', e);
})



/**
 * Fetch Example
 */
// fetch('your API url')
//  .then(res => res.json())//This will return a promise as it will resolve the response body in JSON format
//  .then(jsonV => console.log(jsonV))
app.listen(3000, () => {
    console.log('Port listening on 3000');
});