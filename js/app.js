// Variável para armazenar o valor total dos produtos adicionados ao carrinho.
let totalGeral = 0;

// Obtém o botão de limpar pelo seu class name e armazena na constante 'botaoLimpar'.
const botaoLimpar = document.getElementsByClassName('botao-form botao-limpar');

// Chama a função 'limpar' para inicializar o carrinho como vazio.
limpar();

// Função para adicionar produtos ao carrinho de compras.
function adicionar() {
    // Obtém o valor do produto selecionado e divide a string para obter o nome e o valor unitário.
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    // Obtém a quantidade do produto a ser adicionada ao carrinho.
    let quantidade = document.getElementById('quantidade').value;

    // Verifica se um produto foi selecionado e alerta o usuário caso contrário.
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verifica se a quantidade é um número válido e maior que zero, alertando o usuário caso contrário.
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // Calcula o preço total para a quantidade de produtos selecionados.
    let preco = quantidade * valorUnitario;
    // Obtém o elemento que lista os produtos no carrinho e adiciona o novo produto à lista.
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

    // Atualiza o valor total geral com o preço do novo produto adicionado.
    totalGeral = totalGeral + preco;
    // Atualiza o texto do campo total com o novo valor total geral.
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    // Reseta o valor da quantidade no input para zero após adicionar o produto ao carrinho.
    document.getElementById('quantidade').value = 0;
}

// Função para limpar todos os produtos do carrinho e resetar o valor total para zero.
function limpar() {
    // Reseta o valor total geral para zero.
    totalGeral = 0;
    // Limpa a lista de produtos no carrinho.
    document.getElementById('lista-produtos').innerHTML = '';
    // Atualiza o texto do campo total para refletir o carrinho vazio.
    document.getElementById('valor-total').textContent = 'R$ 0';
}
