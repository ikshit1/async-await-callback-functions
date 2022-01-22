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

module.exports = calculateSquare;