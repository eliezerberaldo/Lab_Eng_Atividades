document.addEventListener("DOMContentLoaded", function () {

    function exibirDataAtual() {
        const elementoData = document.getElementById("data");
        if (elementoData) {
            const data = new Date();
            const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
            const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
            const diaSemana = diasSemana[data.getDay()];
            const dia = data.getDate();
            const mes = meses[data.getMonth()];
            const ano = data.getFullYear();
            elementoData.textContent = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
        }
    }

    function atualizarRelogio() {
        const elementoRelogio = document.getElementById("relogio");
        if (elementoRelogio) {
            function atualizar() {
                const agora = new Date();
                const horas = agora.getHours().toString().padStart(2, "0");
                const minutos = agora.getMinutes().toString().padStart(2, "0");
                const segundos = agora.getSeconds().toString().padStart(2, "0");
                elementoRelogio.textContent = `${horas}:${minutos}:${segundos}`;
                setTimeout(atualizar, 1000);
            }
            atualizar();
        }
    }

    function verificarPalindromo() {
        const entrada = document.getElementById("entrada");
        const resultadoPalindromo = document.getElementById("resultado-palindromo");
        if (entrada && resultadoPalindromo) {
            const textoOriginal = entrada.value.toLowerCase().replace(/\s+/g, '');
            const textoInvertido = textoOriginal.split("").reverse().join("");
            if (textoOriginal === textoInvertido) {
                resultadoPalindromo.textContent = "É um palíndromo!";
            } else {
                resultadoPalindromo.textContent = "Não é um palíndromo.";
            }
        }
    }

    exibirDataAtual();
    atualizarRelogio();

    const botaoPalindromo = document.querySelector("button");
    if (botaoPalindromo) {
        botaoPalindromo.addEventListener("click", verificarPalindromo);
    }
});
