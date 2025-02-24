function verificar_par_impar() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").innerText = "Informe um número válido.";
    } else {
        let resultado = (numero % 2 === 0) ? "PAR" : "ÍMPAR";
        document.getElementById("resultado").innerText = "O número " + numero + " é " + resultado + ".";
    }
}

function verificar_primo() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 1) {
        document.getElementById("resultado").innerText = "Informe um número válido.";
    } else {
        let primo = numero > 1;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
        let mensagem = primo ? 'O número ' + numero + ' é primo.' : 'O número ' + numero + ' não é primo.';
        document.getElementById("resultado").innerText = mensagem;
    }
}

function calc_fatorial() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 0) {
        document.getElementById("resultado").innerText = "Informe um número válido.";
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        document.getElementById("resultado").innerText = "O fatorial de " + numero + " é " + fatorial + ".";
    }
}

function identificar_tipo() {
    let dado = prompt("Digite algo:");
    
    
    if (!isNaN(dado)) {
        
        dado = parseFloat(dado);
        if (Number.isInteger(dado)) {
            document.getElementById("resultado").innerText = "O tipo de dado informado é INT.";
        } else {
            document.getElementById("resultado").innerText = "O tipo de dado informado é FLOAT.";
        }
    } else {
        
        document.getElementById("resultado").innerText = "O tipo de dado informado é STRING.";
    }
}
