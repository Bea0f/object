import "./../scss/style.scss";
import { Adress } from "./modules/Adress";
import { Person } from "./modules/Person";

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

const person = {
  name: "Beatrice",
  age: 25,
  isMarried: false,
  adress: {
    street: "Kolbäcksgränd",
    number: 11,
    city: "Stockholm",
  },
};

console.log(person.name, person.age, person.adress.street, person.adress.city);

const myAdress = new Adress("Kolbäcksgränd 11", "128 46", "Stockholm");
const me = new Person("Beatrice", "25", "false", myAdress);
console.log(me);

const youAdress = new Adress("Minväg 12", "134 56", "Göteborg");
const you = new Person("Hannah", "23", "true", youAdress);

const myList = [me, you];

for (let i = 0; i < myList.length; i++) {
  createHtml(myList[i]);
}

function createHtml(me) {
  const personContainer = document.createElement("div");
  const nameTag = document.createElement("p");
  const ageTag = document.createElement("p");
  const isMarriedTag = document.createElement("input");
  const adressList = document.createElement("ul");
  const streetTag = document.createElement("li");
  const zipTag = document.createElement("li");
  const cityTag = document.createElement("li");

  nameTag.innerHTML = me.name;
  ageTag.innerHTML = me.age;

  isMarriedTag.type = "checkbox";
  isMarriedTag.checked = me.isMarried;

  streetTag.innerHTML = me.adress.street;
  zipTag.innerHTML = me.adress.zip;
  cityTag.innerHTML = me.adress.city;

  document.body.appendChild(personContainer);
  personContainer.appendChild(nameTag);
  personContainer.appendChild(ageTag);
  personContainer.appendChild(isMarriedTag);
  personContainer.appendChild(adressList);
  adressList.appendChild(streetTag);
  adressList.appendChild(zipTag);
  adressList.appendChild(cityTag);
}
