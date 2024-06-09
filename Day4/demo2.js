// A Javascript callback is a function which is to be executed after another Function has finished execution.
// A more formal definition would be - Any furction that is passed as an argument to another function
//so that it can be axecuted in that othep function is called as a callback Function

//Example 1: Synchronus Callback
function processUserData(name, callback){
    console.log("Proceessing user data for "+ name);
    callback(name);
}

function greetUser(name){
    console.log("Hello, " + name + "!");
}

// Using processUserData with a synchronous callback
processUserData("John",greetUser);
