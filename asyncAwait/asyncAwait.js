const express = require('express');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');
const { resolve } = require('path/posix');
const { rejects } = require('assert');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// state will be fulfilled as JS will transformed it into a promise
async function y() {
    return 'Hello world';
}
console.log(y());


// here function is already returning a promise so there won't be any transformation from JS side
async function x() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    })
}
console.log(x());


async function r() {
    return Promise.reject('404');
}
// console.log(r());


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(422);
        }, 2000);
    })
}

async function awaitMethod() {
    const handleData = await getData();
    console.log(handleData);
}
awaitMethod();

// we can still use the same functionality using promise then method

function t() {
    getData().then(res => {
        console.log('res', res);
    })
}

t();


// await will work in browser if we write like this
// const dataObj = await getData();
// console.log(dataObj);
// but will fail in node js

// To handle it, we have to create an async function around it
// (async function() {
//     const dataObj1 = await getData();
//     console.log(dataObj1);
// })();

// If we don't use this approach will get this error
// await is only valid in async functions and the top level bodies of modules
// So, if we don't want to use async wrapper we can change file extension from js to mjs
// then file will be treated as ecma script module
// node version should be above 14.8

//second way is to add type module in package.json file
// "type": "module",


app.listen(3000, () => {
    console.log('Port listening on 3000');
});