

document.getElementById("slumpknapp").addEventListener("click", function() {
    let bilder = document.querySelectorAll(".delikatess"); 
    
    let slumpIndex = Math.floor(Math.random() * bilder.length); 

    bilder.forEach(bild => bild.classList.remove("show"));

    bilder[slumpIndex].classList.add("show");
});




window.addEventListener("scroll", function() {
    let bild = document.getElementById("bildennummer1");
    if (window.scrollY > 100) { 
        bild.classList.add("scrolled");
    } else {
        bild.classList.remove("scrolled");
    }
});




//   <section class="knapparna">


