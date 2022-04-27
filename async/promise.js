const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files...)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no netwrok'));
    }, 2000);
});

promise.then((value) => {
    console.log(value);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});


// Error Handling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);