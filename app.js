//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let campo = document.querySelector('ul');
let listaAmigos = [];

function adicionarAmigo() {
    let nomeInserido = document.querySelector('input').value;

    if (nomeInserido != "") {
    listaAmigos.push(nomeInserido);
    campo.innerHTML += nomeInserido + "</br>";
    limparCampo();

} else alert('Por favor, insira um nome.');
}

function sortearAmigo() {
    for (let i = 0; i < listaAmigos.length; i++) {
        console.log(listaAmigos[i]);
        
    }
}

function limparCampo() {
    nomeInserido = document.querySelector('input');
    nomeInserido.value = '';
}