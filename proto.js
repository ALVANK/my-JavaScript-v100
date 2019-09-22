class Cat_constr {
    constructor(length, age){
        this.length = length;
        this.age = age;
    }
    eat(){

    }
}
var cat1 = new Cat_constr(0.5, 5);
console.log(cat1);

var cat2 = new Cat_constr(0.6, 6);
console.log(cat2);
///////////////////////////////
//
//////////////////////////////
var animal = {
    age: 10,
    eat: function(){
        return 'ChafChaf'

    }
};

var cat = {
    mustache: true,
    GetVoice: function(){
        return 'myaMya'
    }

};
var dog = {
    mustache: false,
    GetVoice: function(){
        return 'gafGaf'
    }

};

dog.__proto__ = animal;
cat.__proto__ = animal;

console.log(cat.GetVoice());
console.log(cat.age);
console.log(cat.eat());
