// Example 2: Asynchronous Callback
function fetchdata(callback){
    setTimeout(function(){
        const data = {id: 1, name: "Sample Data"};
        //callback("wrong result", data); // The first parameter is typically used for errors
        callback(null,data); // The first parameter is typically used for errors
        //callback("wrong data", data);
    }, 2000);// Simulating a delay of 2 seconds
}

// Using fetchData with an asynchronous callback
fetchdata(function (error,result) {
    if(error){
        console.error("Error: ", error);
    }
    else{
        console.log("Data", result);
    }
});

