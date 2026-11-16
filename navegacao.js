function abrirConfiguracoes(faseAtual) {
    localStorage.setItem("faseAnterior", faseAtual);

    window.location.href = "tela-configuracao.html";
}

function sairConfiguracoes() {
    let faseAnterior = localStorage.getItem("faseAnterior");

    if (faseAnterior) {
        window.location.href = faseAnterior;
    } else {
        window.location.href = "play.html";
    }
}
