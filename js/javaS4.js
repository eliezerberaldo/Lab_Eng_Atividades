document.addEventListener('DOMContentLoaded', function() {
    const professorRadio = document.querySelector('input[name="opção"][value="professor"]');
    const alunoRadio = document.querySelector('input[name="opção"][value="aluno"]');
    const camposDinamicos = document.getElementById('campos-dinamicos');

    const areaSection = criarCampo('area-section', 'Área: ', 'Digite sua área de atuação');
    const matriculaProfessorSection = criarCampo('matricula-professor-section', 'Matrícula: ', 'Digite sua matrícula');
    const lattesSection = criarCampo('lattes-section', 'Lattes: ', 'Digite aqui o endereço para seu Lattes');

    const cursoSection = criarCampo('curso-section', 'Curso: ', 'Digite seu curso');
    const matriculaAlunoSection = criarCampo('matricula-aluno-section', 'Matrícula: ', 'Digite sua matrícula');

    function criarCampo(id, labelTexto, placeholder) {
        const section = document.createElement('section');
        section.id = id;
        section.style.display = 'none';
        section.classList.add('input');

        const label = document.createElement('label');
        label.textContent = labelTexto;

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholder;

        section.appendChild(label);
        section.appendChild(input);

        return section;
    }

    function mostrarCampos() {
        camposDinamicos.innerHTML = '';

        if (professorRadio.checked) {
            camposDinamicos.appendChild(areaSection);
            camposDinamicos.appendChild(matriculaProfessorSection);
            camposDinamicos.appendChild(lattesSection);
            areaSection.style.display = 'flex';
            matriculaProfessorSection.style.display = 'flex';
            lattesSection.style.display = 'flex';
        } else if (alunoRadio.checked) {
            camposDinamicos.appendChild(cursoSection);
            camposDinamicos.appendChild(matriculaAlunoSection);
            cursoSection.style.display = 'flex';
            matriculaAlunoSection.style.display = 'flex';
        }
    }

    professorRadio.addEventListener('change', mostrarCampos);
    alunoRadio.addEventListener('change', mostrarCampos);

    mostrarCampos();
});