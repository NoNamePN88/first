//function Declaration
function askUser (name){
    console.log('Hi ', name);
}

const userName='user';
askUser (userName);

//function Expression
const greet = function greet(name){
    console.log('Hay, you', name);
}
greet(userName)

console.log(typeof  askUser);
console.dir(askUser);
console.log(typeof greet);
