const knapp = document.getElementById('slumpknapp');
const delikatesser = document.querySelectorAll('.delikatess');

knapp.addEventListener('click', () => {
    delikatesser.forEach(bild => bild.style.display = 'none');

    const slumpIndex = Math.floor(Math.random() * delikatesser.length);
    const valdBild = delikatesser[slumpIndex];

    valdBild.style.display = 'block';
});