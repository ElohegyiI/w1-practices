function loadevent() {
  console.log("Az oldal betöltődött.");
  
  const list = document.querySelectorAll("section");
  
  for (const elem of list) {
      elem.insertAdjacentHTML("beforeend", 
      `<p>text</p>`);
      
}
}
window.addEventListener("load", loadevent)