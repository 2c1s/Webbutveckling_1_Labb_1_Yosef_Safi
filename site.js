document.addEventListener("DOMContentLoaded", function() {
    let slumpknapp = document.getElementById("slumpknapp");
    if (slumpknapp) {
        slumpknapp.addEventListener("click", function() {
            let bilder = document.querySelectorAll(".delikatess"); 
            
            let slumpIndex = Math.floor(Math.random() * bilder.length); 

            bilder.forEach(bild => bild.classList.remove("show"));

            bilder[slumpIndex].classList.add("show");
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    let kundvagnLista = document.getElementById("kundvagnlista");
    let totalPrisEl = document.getElementById("totalpris");
    let varukorgAntal = 0;
    let totalPris = 0;

    let knappar = document.querySelectorAll(".shop");

    knappar.forEach(knapp => {
        knapp.addEventListener("click", () => {
            let produktNamn = knapp.getAttribute("data-title");
            let produktPris = parseInt(knapp.getAttribute("data-price"));

            let listItem = document.createElement("li");
            listItem.textContent = `${produktNamn} - ${produktPris} kr`;
            kundvagnLista.appendChild(listItem);

            varukorgAntal++;
            uppdateraAntal(varukorgAntal);

            totalPris += produktPris;
            totalPrisEl.textContent = `Totalt: ${totalPris} kr`;
        });
    });

    function uppdateraAntal(antal) {
        let badge = document.getElementById("varukorg-antal");

        if (!badge) {
            badge = document.createElement("span");
            badge.id = "varukorg-antal";
            badge.style.backgroundColor = "red";
            badge.style.color = "white";
            badge.style.borderRadius = "50%";
            badge.style.padding = "5px 10px";
            badge.style.position = "absolute";
            badge.style.top = "-10px";
            badge.style.right = "-10px";
            badge.style.fontSize = "14px";

            let kundvagnRubrik = document.querySelector("#kundvagn h3");
            kundvagnRubrik.style.position = "relative";
            kundvagnRubrik.appendChild(badge);
        }

        badge.textContent = antal;
    }
});
