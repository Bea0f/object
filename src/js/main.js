import "./../scss/style.scss";
import { Person } from "./modules/Person";
import { handleUserInput, persons } from "./modules/UserInput";



let btn = document.getElementById("createBtn");
btn.addEventListener("click", handleUserInput);








