function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const res = number*number;
        // To specify that there is no error
        callback(null, res)
    }, 1000)
}

// calculateSquare(4, function(err, result) {
//     if (err !==null) return console.log(`Error: ${err} `);
//     console.log(`Result = ${result}`);
// });

module.exports = calculateSquare;
