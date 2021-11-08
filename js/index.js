const render = (container, items) => {

    const elements = items.map((element) => {
        if (element.completed === true) {
            return `<li> 
        <input type="checkbox" name="completed" class="completed" disabled value="completed" checked >
        <label>${element.title}</label>
        </li>`
        } else {
            return `<li> 
        <input type="checkbox" name="completed" class="completed" value="completed" disabled>
        <label>${element.title}</label>
        </li>`
        }



    });

    const poppete = document.querySelector(".popitem");
    poppete.addEventListener("click", () => {
        elements.pop();

        const content = elements.join('');

        container.innerHTML = content;
    }
    );

    const content = elements.join('');

    container.innerHTML = content;


}


document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');

    render(list, listT)
});


// Modale inizio 

const modal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#btn-accept");
const denyBtn = document.querySelector("#btn-deny");


setTimeout(() => {
    modal.style.opacity = 1;
    modal.zIndex = 100000
},10000);
    
    


function hideModal() {
    modal.style.opacity = 0;
    
    setTimeout(() => {
    document.body.removeChild(modal);
    },350)
};

acceptBtn.addEventListener('click', hideModal, {once: true});

// Solar System

const solarSystem = [
    { name: "Sun", radius: 696340, surface: "star" },
    { name: "Mercury", radius: 2440, surface: "terrestrial" },
    { name: "Venus", radius: 6052, surface: "terrestrial" },
    { name: "Earth", radius: 6371, surface: "terrestrial" },
    { name: "Mars", radius: 3389, surface: "terrestrial" },
    { name: "Jupiter", radius: 69911, surface: "gas giant" },
    { name: "Saturn", radius: 58232, surface: "gas giant" },
    { name: "Uranus", radius: 25362, surface: "ice giant" },
    { name: "Neptune", radius: 24622, surface: "ice giant" },
];



// const sistemaSolare = {
// it: solarSystem
// };

// const sistemaSolare = solarSystem.map((
//     obj.name) => {
//     it: solarSystem
//    });


const changeLang = (pianeti) => {
  switch (pianeti.name) {
    case "Sun":
      pianeti.name = "Sole";
      break;
    case "Mercury":
      pianeti.name = "Mercurio";
      break;
    case "Venus":
      pianeti.name = "Venere";
      break;
    case "Earth":
      pianeti.name = "Terra";
      break;
    case "Mars":
      pianeti.name = "Marte";
      break;
    case "Jupiter":
      pianeti.name = "Giove";
      break;
    case "Saturn":
      pianeti.name = "Saturno";
      break;
    case "Uranus":
      pianeti.name = "Urano";
      break;
    case "Neptune":
      pianeti.name = "Nettuno";
      break;
  }
  return pianeti
}

const itaPlanet = solarSystem.map(changeLang)
console.log(itaPlanet)

// Diametro


// function planetDiameter (diametro, callback) {
//     const raggio = [];
    
//     for (num of solarSystem) {
//         raggio.push(callback(num))
//     };
//     return raggio;
   
// }

// const diametro = raggio;

// const result = planetDiameter(diametro, (num) => num * 2);

// console.log(result);

const planetDiameter = solarSystem.map((element) => element.radius * 2);
console.log(planetDiameter);