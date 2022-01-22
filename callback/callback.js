const express = require('express');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/**
 * Basic Example of callback
 */
    // function print(num) {
    //     console.log(num);
    // }
    // const numbers = [1,2,3,4];
    // numbers.forEach(print)
/**
 * Basic Example of callback ends
 */

/**
 * Handle Asynchronous calls
 */
    // Example 1
    // Using try catch block
    // In this example we will get an 'Uncaught error' instead of Caught error
    // This is because by the time callback function has been called, try catch block with surrounding code has already been executed.
    // That is everything in the call stack queue will be executed before we get to the message queue. So, we can't use try catch mechanism here
    // function calculateSquare(number, callback) {
    //     setTimeout(function() {
    //         if (typeof number !== 'number') {
    //             throw new Error('Argument of type number is expected');
    //         }
    //         const res = number*number;
    //         callback(res)
    //     }, 2000)
    // }

    // try {
    //     calculateSquare('Bad payload', function(result) {
    //         console.log(result);
    //     })
    // } catch(e) {
    //     console.log('e', e);
    // }

    // Example 2
    // Asynchronous callbacks are handled using error first callbacks i.e as an arguments of callback
    // In this first argument will be an error argument

    function calculateSquare(number, callback) {
        setTimeout(function() {
            if (typeof number !== 'number') {
                callback(new Error('Argument of type number is expected'));
                return;
            }
            const res = number*number;
            // To specify that there is no error
            callback(null, res)
        }, 2000)
    }

    calculateSquare(4, function(err, result) {
        if (err !==null) return console.log(`Error: ${err} `);
        console.log(`Result = ${result}`);
    });

/**
 * Handle Asynchronous calls ends
 */


app.listen(3000, () => {
    console.log('Port listening on 3000');
});