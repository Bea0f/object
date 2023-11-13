import { Person } from "./Person";
export const persons = [];

const personContainer = document.createElement("div");
const personList = document.createElement("ul");
personContainer.appendChild(personList);
document.body.appendChild(personContainer);

export function handleUserInput() {
  let inputName = document.getElementById("personName").value;
  let inputLength = document.getElementById("personLength").value;
  let inputColor = document.getElementById("personEye").value;

  const p = new Person(inputName, inputLength, inputColor);
  persons.push(p);
  personContainer.innerHTML = "";
  
  createListItem();
  

  document.getElementById("personName").value = "";
  document.getElementById("personLength").value= "";
  document.getElementById("personEye").value = "";
}

function createListItem() {
    for (let i = 0; i < persons.length; i++) {
    const pItem = document.createElement("li");
    pItem.innerHTML =
      persons[i].name + " " + persons[i].length + " " + persons[i].eyeColor;
    personList.appendChild(pItem);
    console.log(persons);
  }
}