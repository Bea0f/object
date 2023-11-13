export function createHtml(me) {
    const personContainer = document.createElement("div");
    const nameTag = document.createElement("h2");
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