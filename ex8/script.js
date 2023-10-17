const imoveis = [];
let opcao = " ";
let qtdImoveis = 0;

do {
  opcao = prompt(
  "Há " + qtdImoveis + " cadastrados\n" +
  "\n1. Deseja cadastrar novo imóvel?" +
  "\n2. Deseja consultar os imóveis cadastrados?" + 
  "\n3. Deseja sair?" 
  )

switch (opcao) {
  case "1":
    let imovel = {};    
    imovel.nomeProp = prompt("Digite o nome do proprietário: ");
    imovel.qtdQuartos = prompt("Quantos quartos o imóvel possui?");
    imovel.qtdBanheiros = prompt("Quantos banheiros o imóvel possui?");
    imovel.garagem = prompt("O imóvel possui garagem? (s/n)");

        const confirma = confirm(
          "Deseja salvar esse imóvel?\n" + 
          "\nProprietário: " + imovel.nomeProp + 
          "\nQuantidade de Quartos: " + imovel.qtdQuartos + 
          "\nQuantidade de Banheiros: " + imovel.qtdBanheiros + 
          "\nPossui garagem? " + imovel.garagem
        )
        if (confirma) {
          imoveis.push(imovel);
          alert("Imóvel cadastrado com sucesso")
          qtdImoveis += 1;
        } else {
            alert("Voltando ao menu")
        }
    break
  case "2":
    for (let index = 0; index <= imoveis.length; index += 1) {
      alert(
        "Imóvel " + (index + 1) +
        "\nProprietário: " + imoveis[index].nomeProp + 
        "\nQuantidade de Quartos: " + imoveis[index].qtdQuartos + 
        "\nQuantidade de Banheiros: " + imoveis[index].qtdBanheiros + 
        "\nPossui garagem? " + imoveis[index].garagem
      )
    }
    break
  case "3":
    alert("Finalizando");
    break
    default:
        alert("Digite uma opção válida")
}

} while (opcao !== "3")