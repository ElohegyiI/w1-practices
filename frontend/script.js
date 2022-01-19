/* const data = ["Gergely Kiss",
"Krisztián Bui",
"Buczkó Balázs",
"András Varga",
"Borbála Teréz"];
 */

const data = [
    {
        name: "Gergely Kiss",
        favouriteFood: "Csirke/rizs"
    },
    {
        name: "Krisztián Bui",
        favouriteFood: "Banán"
    },
    {
        name: "Buczkó Balázs",
        favouriteFood: "Pizza"
    },
    {
        name: "András Varga",
        favouriteFood: "Brassói"
    },
    {
        name: "Borbála Teréz",
        favouriteFood: "Avokádó"
    },

]
function loadEvent() {
  console.log("Az oldal betöltődött.");
  
const root = document.querySelector("#root")

for (const frontendStudent of data) {
  root.insertAdjacentHTML("beforeend", `
  <section>
  <h1>${frontendStudent.name}</h1>
  <p>${frontendStudent.favouriteFood}</p>
  </section>`
  )  
}
}
window.addEventListener("load", loadEvent);