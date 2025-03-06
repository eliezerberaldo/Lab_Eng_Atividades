let testeArray = [];

const formulario = document.getElementById('formulario');
const inputItem = document.getElementById('itemArray');
const exibirArray = document.getElementById('exibirArray');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const novoItem = inputItem.value.trim();
    if (novoItem) {
        testeArray.push(novoItem);
        inputItem.value = "";
        mostrarArray();
    }
});


function mostrarArray() {
    const exibirArray = document.getElementById('exibirArray');
    if (testeArray.length === 0) {
        exibirArray.classList.add('empty');
        exibirArray.textContent = "Nenhum item no array.";
    } else {
        exibirArray.classList.remove('empty');
        exibirArray.innerHTML = "";
        testeArray.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            exibirArray.appendChild(listItem);
        });
    }
}

