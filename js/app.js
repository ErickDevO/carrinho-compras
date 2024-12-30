function adicionar() {
    const produtoInput = document.getElementById('produto').value;
    const quantidadeInput = document.getElementById('quantidade').value;
    const quantidade = parseInt(quantidadeInput, 10);
  
    if (Number.isNaN(quantidade) || quantidade <= 0) {
      alert('Insira uma quantidade válida!');
      return;
    }
  
    const [produto, preco] = produtoInput.split(' - R$');
    const precoTotal = parseFloat(preco) * quantidade;
  
    const listaProdutos = document.getElementById('lista-produtos');
    const novoProduto = document.createElement('section');
    novoProduto.classList.add('carrinho__produtos__produto');
    novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${precoTotal.toFixed(2)}</span>`;
  
    listaProdutos.appendChild(novoProduto);
  
    atualizarTotal(precoTotal);
  }
  
  function limpar() {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = ''; // Remove todos os produtos
  
    atualizarTotal(0, true); // Reseta o total
  }
  
  function atualizarTotal(valor, reset = false) {
    const total = document.getElementById('valor-total');
    let totalAtual = parseFloat(total.textContent.replace('R$', ''));
  
    total.textContent = `R$${reset ? 0 : (totalAtual + valor).toFixed(2)}`;
  }
  