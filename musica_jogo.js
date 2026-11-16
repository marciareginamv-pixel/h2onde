const musica = new Audio("seu-audio.mp3");

musica.loop = true;
musica.volume = 0.4;

let somAtivo = localStorage.getItem("somAtivo") !== "false";

let tempoSalvo = Number(
    localStorage.getItem("tempoMusica") || 0
);

musica.addEventListener("loadedmetadata", function () {
    if (tempoSalvo >= 0 && tempoSalvo < musica.duration) {
        musica.currentTime = tempoSalvo;
    }
});

musica.addEventListener("timeupdate", function () {
    if (!musica.paused) {
        localStorage.setItem(
            "tempoMusica",
            String(musica.currentTime)
        );
    }
});

window.addEventListener("pagehide", function () {
    localStorage.setItem(
        "tempoMusica",
        String(musica.currentTime)
    );
});

function iniciarMusica() {
    if (somAtivo && musica.paused) {
        musica.play().catch(function (erro) {
            console.log("Reprodução aguardando interação:", erro);
        });
    }
}

iniciarMusica();

document.addEventListener("click", iniciarMusica);
document.addEventListener("keydown", iniciarMusica);

function alternarSom() {
    somAtivo = !somAtivo;

    localStorage.setItem("somAtivo", String(somAtivo));

    if (somAtivo) {
        iniciarMusica();
    } else {
        musica.pause();
    }
}
