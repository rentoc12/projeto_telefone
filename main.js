const form = document.getElementById('numero-telefone');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomePessoal = document.getElementById('nome-pessoal')
    const inputNumeroCelular = document.getElementById('numero-celular')
    //alert(`Nome: ${inputNomePessoal.value} - Numero ${inputNumeroCelular.value} `);


    let linha = '<tr>';
    linha += `<td>${inputNomePessoal.value}</td>`;
    linha += `<td>${inputNumeroCelular.value}</td>`;
    linha += '</tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
});