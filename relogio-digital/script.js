const paragrafo = document.querySelector("p");

const atualizarDataEHora = () => {
    const novaData = new Date();
    let dataCompleta = `${novaData.toLocaleDateString("pt-BR")}, ${novaData.toLocaleTimeString("pt-BR")}`

    paragrafo.innerText = dataCompleta;
}

setInterval(atualizarDataEHora, 1000);