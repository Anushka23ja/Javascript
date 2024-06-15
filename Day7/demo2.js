//Creating a Promise
const myPromise = new Promise ((resolve,reject) =>{
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(()=>{
        const success = false // Change to false to simulate rejection

        if(success){
            resolve('Operation completed successfully!');
        } else{
            reject('Operation failed!');
        }
    }, 2000); // Simulating a 2-second delay
});

// Consuming the Promise
myPromise.then((result) =>{
    // This block is executed if the promise is fulfilled
    console.log('Fulfilled: ', result);
});
