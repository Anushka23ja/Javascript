// Promises are used to handle asynchronous operations in JavaScript.
// A Promise is a special JavaScript object.
// It produces a value after an
// operation completes successfully, or an error if it does 
//not complete successfully due to time out, network error, /land so on.
// Successful call completions are indicated by the resolve 
// function call, and errors are indicated by the reject function call.
// we can create a promise using the promise constructor like this:

const mypromise = new Promise((resolve, reject) => {
    const a = 5, b = 5;
    const c = a + b;
    if(c === 4){
        resolve(`yes ${a} + ${b} = 4`);
    } else {
        reject(`no ${a} + ${b} != 4`);
    }
});

mypromise.then((n) => {
    console.log(n);
}).catch((err) => {
    console.log(err);
});
