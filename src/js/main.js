import './../css/style.css'

/* class Person {
    name;
    length;
    eyeColor;
    constructor(name, length, eyeColor){
        this.name = name;
        this.length = length;
        this.eyeColor = eyeColor;
    }
}

const myList = [];
const me = new Person ("Beatrice", "165", "Brown");
console.log(me);

const you = new Person ("Tomas", "175", "Green");
console.log(myList);
myList.push(me, you); */


const person ={
    name: "Beatrice",
    age:25,
    isMarried: false,
    adress: {
        street: "Kolbäcksgränd",
        number: 11,
        city: "Stockholm"
    }
}

console.log(person.name, person.age, person.adress.street, person.adress.city);

class Person {
    name;
    age;
    isMarried;
    adress;
    constructor(name, age, isMarried, adress){
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.adress = adress;
    }
}
class Adress {
    street;
    zip;
    city;
    constructor(street, zip, city){
        this.street = street;
        this.zip = zip;
        this.city = city;
    }
}

const myAdress = new Adress("Kolbäcksgränd 11", "128 46", "Stockholm");
const me = new Person("Beatrice", "25", "false", myAdress);
console.log(me);