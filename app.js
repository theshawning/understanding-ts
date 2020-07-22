// unknown is useful if you are not sure of the type of a given variable
// will need extra type checks in your code to work with properly, though
var userInput;
var userName;
userInput = 5;
userInput = 'Shawn';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
;
generateError('An error occured', 500);
