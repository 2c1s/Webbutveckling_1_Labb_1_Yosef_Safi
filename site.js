

document.getElementById("slumpknapp").addEventListener("click", function() {
    let bilder = document.querySelectorAll(".delikatess"); 
    
    let slumpIndex = Math.floor(Math.random() * bilder.length); 

    bilder.forEach(bild => bild.classList.remove("show"));

    bilder[slumpIndex].classList.add("show");
});






// Hämta referenser till viktiga element
const kundvagnLista = document.getElementById('kundvagnlista');
const totalPrisEl = document.getElementById('totalpris');
let totalSumma = 0;

// Hämta alla köpknappar
const knappar = document.querySelectorAll('.shop');

knappar.forEach(knapp => {
    knapp.addEventListener('click', () => {
        // Hämta priset från knappens text
        const prisText = knapp.textContent.match(/(\d+)kr/);
        if (prisText) {
            const pris = parseInt(prisText[1]);

            // Lägg till produkten i listan
            const produktNamn = knapp.previousElementSibling.alt;
            const nyProdukt = document.createElement('li');
            nyProdukt.textContent = `${produktNamn} - ${pris} kr`;
            kundvagnLista.appendChild(nyProdukt);

            // Uppdatera totalen
            totalSumma += pris;
            totalPrisEl.textContent = `Totalt: ${totalSumma} kr`;
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    console.log("Scriptet är laddat!");

    const knappLista = document.querySelectorAll('.shop');
    console.log(knappLista); // Kollar om knapparna hittas

    knappLista.forEach(knapp => {
        console.log("Knapp hittad:", knapp); // Skriver ut varje knapp
        knapp.addEventListener('click', () => {
            console.log("Knapp klickad!");
        });
    });
});
