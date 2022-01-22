function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(422);
        }, 2000);
    })
}

const handleData = await getData();
console.log(handleData);