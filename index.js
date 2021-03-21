let name1 ='mosh';
console.log(name1);

let interestRate=0.3;
interestRate=0.1;
console.log(interestRate);

const returnRate=0.5;
console.log(returnRate);

let person={
    name:'John',
    age:45
};

person.name='Holly';
person['name']='Susan';
console.log(person.name);

let selectedColors = [];
selectedColors=['red','blue'];
selectedColors[2]=3;
console.log(selectedColors)
console.log(selectedColors.length);

function foo(){
    console.log("hello John this is foo function")
};
foo();

function foo2(name){
    console.log('hello', name,'this is foo2 function')
};
foo2('Holly');

function squared(number){
    return number*number;
}

console.log(squared(2));