// unknown is useful if you are not sure of the type of a given variable
// will need extra type checks in your code to work with properly, though
let userInput: unknown;
let userName: string

userInput = 5;
userInput = 'Shawn';

if (typeof userInput === 'string') {
  userName = userInput;
}

// lets you know this function will never return anything and will break your script
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
};

generateError('An error occured', 500);