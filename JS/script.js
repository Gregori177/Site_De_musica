document.addEventListener("DOMContentLoaded", function () {

    let indiceMusica = 0;

    const musicas = document.querySelectorAll(".musica");

    function mostrarMusica(indice) {

        musicas.forEach(function (musica) {

            musica.classList.remove("ativa");

            const audio = musica.querySelector("audio");

            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        musicas[indice].classList.add("ativa");
    }

    function proximaMusica() {

        indiceMusica++;

        if (indiceMusica >= musicas.length) {
            indiceMusica = 0;
        }

        mostrarMusica(indiceMusica);
    }

    function musicaAnterior() {

        indiceMusica--;

        if (indiceMusica < 0) {
            indiceMusica = musicas.length - 1;
        }

        mostrarMusica(indiceMusica);
    }

    // Disponibiliza as funções para os botões do HTML
    window.proximaMusica = proximaMusica;
    window.musicaAnterior = musicaAnterior;

    mostrarMusica(indiceMusica);

});