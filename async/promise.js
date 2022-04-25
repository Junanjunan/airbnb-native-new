const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files...)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
    }, 2000);
});

promise.then((value) => {
    console.log(value);
})


