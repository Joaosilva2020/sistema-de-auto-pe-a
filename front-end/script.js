// 1. Variáveis e Elementos
var listaDePecas = [];
var idParaEditar = -1; 
var formulario = document.getElementById("pecaForm");
var tabelaCorpo = document.getElementById("pecaTable");
var caixaDoForm = document.getElementById("formBox");

// 2. Ao carregar a página, busca os dados do banco
window.onload = function() {
    carregarDadosDoBanco();
};

function carregarDadosDoBanco() {
    fetch('http://localhost:5000/pecas')
        .then(res => res.json())
        .then(dados => {
            listaDePecas = dados;
            mostrarTabela();
        })
        .catch(erro => console.error("Erro ao carregar:", erro));
}

// 3. Abrir/Fechar Formulário
document.getElementById("btnAdd").onclick = function () {
    idParaEditar = -1;
    document.getElementById("formTitle").innerText = "Adicionar Peça";
    caixaDoForm.classList.remove("hidden");
    formulario.reset();
};

document.getElementById("cancel").onclick = function () {
    caixaDoForm.classList.add("hidden");
};

// 4. Salvar (Envia para o Python)
formulario.onsubmit = function(event) {
    event.preventDefault();

    var nomePeca = document.getElementById("nome").value;
    var valorPeca = document.getElementById("valor").value;
    var qtdPeca = document.getElementById("quantidade").value;

    var dados = {
        nome: nomePeca,
        valor: valorPeca,
        quantidade: qtdPeca
    };

    // Define se vai adicionar ou editar (no banco de dados)
    var url = 'http://localhost:5000/pecas';
    var metodo = 'POST';

    // Se estiver editando, você pode ajustar a URL ou o método se seu Python suportar
    // Por enquanto, vamos focar no envio básico
    fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(function() {
        caixaDoForm.classList.add("hidden");
        carregarDadosDoBanco(); // Atualiza a tabela buscando do banco
    });
};

// 5. Desenhar Tabela (Igual ao anterior, mas usando as classes do CSS)
function mostrarTabela() {
    tabelaCorpo.innerHTML = ""; 

    for (var i = 0; i < listaDePecas.length; i++) {
        var peca = listaDePecas[i];
        tabelaCorpo.innerHTML +=
            "<tr>" +
            "<td>" + peca.nome + "</td>" +
            "<td> R$ " + parseFloat(peca.valor).toFixed(2) + "</td>" +
            "<td>" + peca.quantidade + "</td>" +
            "<td>" +
            "<button class='btn btn-edit' onclick='editarPeca(" + peca.id + ")'>Editar</button> " +
            "<button class='btn btn-delete' onclick='excluirPeca(" + peca.id + ")'>Deletar</button>" +
            "</td>" +
            "</tr>";
    }
}

// 6. Ações (Editar e Excluir)
window.editarPeca = function (id) {
    for (var i = 0; i < listaDePecas.length; i++) {
        if (listaDePecas[i].id === id) {
            document.getElementById("nome").value = listaDePecas[i].nome;
            document.getElementById("valor").value = listaDePecas[i].valor;
            document.getElementById("quantidade").value = listaDePecas[i].quantidade;

            idParaEditar = id; 
            document.getElementById("formTitle").innerText = "Editando Peça";
            caixaDoForm.classList.remove("hidden");
        }
    }
};

window.excluirPeca = function (id) {
    // Aqui você também faria um fetch com o método DELETE para o Python
    // Por enquanto, removemos localmente para teste:
    listaDePecas = listaDePecas.filter(p => p.id !== id);
    mostrarTabela();
};