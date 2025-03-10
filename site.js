

document.getElementById("slumpknapp").addEventListener("click", function() {
    let bilder = document.querySelectorAll(".delikatess"); 
    
    let slumpIndex = Math.floor(Math.random() * bilder.length); 

    bilder.forEach(bild => bild.classList.remove("show"));

    bilder[slumpIndex].classList.add("show");
});


/*
document.addEventListener("DOMContentLoaded", function() {
    const clipElement = document.getElementById("clip");
    console.log(clipElement); 

    if (clipElement) {
        clipElement.addEventListener("scroll", function () {
            console.log("du har skorllat");
            if (window.scrollY > 100) {
                clipElement.classList.add("scrolled");
            } else {
                clipElement.classList.remove("scrolled");
            }
        });
    } else {
        console.log("Elementet med id 'clip' finns inte i DOM.");
    }
});

*/





console.log("site.js är laddad");




