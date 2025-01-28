// Hämta knappen och alla bilder
const knapp = document.getElementById('slumpknapp');
const delikatesser = document.querySelectorAll('.delikatess');

// Lägg till en klickhändelse på knappen
knapp.addEventListener('click', () => {
    // Dölj alla bilder först
    delikatesser.forEach(bild => bild.style.display = 'none');

    // Välj en slumpmässig bild
    const slumpIndex = Math.floor(Math.random() * delikatesser.length);
    const valdBild = delikatesser[slumpIndex];

    // Visa den valda bilden
    valdBild.style.display = 'block';
});