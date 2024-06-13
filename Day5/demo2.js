//a Javascript callback is a function which is to be executed after another Function has finished execution.
// A more formal definition would be - Any furction that is passed as an argument to another function
//so that it can be axecuted in that othep function is called as a callback Function

// Example 1: Synchronous Callback
function processUserData(name, callback){
    console.log("Processing User Data for: " + name);
    callback(name); 
}

function greetUser(name){
    console.log("Hello" + name + "!");
}

//Using processUserData with a synchronous callback 
processUserData("John", greetUser);
// Output: Processing user data for John 
// Hello, John!