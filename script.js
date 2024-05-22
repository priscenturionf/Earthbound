function abrirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}


function cerrarPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    abrirPopup();
});

const motherSound = document.getElementById("mothersound");

const music = document.querySelectorAll('.close-btn');

motherSound.volume = 0.1;

music.forEach(music => {
    music.addEventListener('click', () => {
        motherSound.play();
    });
});
