let prod = [
  {
    nome: "Trena aço (l) 5m x 19mm vonder plus",
    nome_secundario: "trena aço 5m",
    imgPrincipal:
      "/static/assets/D_NQ_NP_2X_817529-MLU69958991589_062023-F.webp",
    valor: 99.99,
    descrição: "vendido por minha loja<br>entregue por minha loja",
    i_prateleira: "1",
  },
  {
    nome: "Alicate Universal 8 Polegadas<br> Cabo Emborrachado Profissional - ELITE SUPERFLEX",
    nome_secundario: "Alicate Universal",
    imgPrincipal: "/static/assets/939d756f6ac7bb545f5869db7b3be8c6.webp",
    valor: 28.99,
    descrição: "vendido por minha loja<br>entregue por minha loja",
    i_prateleira: "3",
  },
  {
    nome: "Chave de Fenda Philips Ponta Dupla 2x1 em Cromo 2 em 1 - Lith",
    nome_secundario: "chave de Fenda",
    imgPrincipal: "/static/assets/44aa8a1386e9b18eb82dbb86a0cd165c.webp",
    valor: 26.99,
    descrição: "vendido por minha loja<br>entregue por minha loja",
    i_prateleira: "2",
  },
];

function add_item(index) {
  let item = prod[index];
  if (!item) {
    console.error("produto não encontrado");
    return;
  }
  let precoFormatado = item.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  document.getElementById(
    "coluna_img"
  ).innerHTML = `<img class="img_P" src="${item.imgPrincipal}" alt="${item.nome}">`;

  document.getElementById("coluna_compra").innerHTML = `
  <h2>${item.nome}</h2>
  <p>${item.descrição}</p>
  <p>${item.valor}</p>
  <button class="_butao" id="_botao_">compre</button>
  `;
  console.log("Adicionando item:", item);
}
function prateleira_dupla(index1, index2) {
  let item1 = prod[index1];
  let item2 = prod[index2];

  // Verificações básicas
  if (!item1 || !item2) {
    console.error("Um dos produtos não existe.");
    return;
  }

  let preco1 = item1.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  let preco2 = item2.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  document.getElementById("coluna_prateleira").innerHTML = `
    <div class="item_prateleira">
      <img src="${item1.imgPrincipal}" alt="${item1.nome_secundario}" >
      <h3>${item1.nome_secundario}</h3>
      <p>${preco1}</p>
      <button class="_butao"><a href="${item1.i_prateleira}">comprar</a></button>
    </div>

    <div class="item_prateleira">
      <img src="${item2.imgPrincipal}" alt="${item2.nome_secundario}" >
      <h3>${item2.nome_secundario}</h3>
      <p>${preco2}</p>
      <button class="_butao"><a href="${item2.i_prateleira}">comprar</a></button>
    </div>
  `;
}

function conferirURL() {
  if (window.location.pathname === "/produto_venda/1") {
    add_item(0);
    prateleira_dupla(1, 2);
  }
  if (window.location.pathname === "/produto_venda/2") {
    add_item(1);
    prateleira_dupla(0, 2);
  }
  if (window.location.pathname === "/produto_venda/3") {
    add_item(2);
    prateleira_dupla(1, 0);
  }
  function alerta() {
    window.alert("Pedido de compra enviado");
  }
  document.getElementById("_botao_").addEventListener("click", function () {
    alert("Pedido de compra enviado");
  });
}
conferirURL();
