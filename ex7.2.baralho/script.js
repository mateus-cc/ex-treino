let cartas = [];
let cartaPuxada = "";
let opcao = "";

do {
  opcao = prompt(
    "Lista de cartas: " + cartas +
    "\n1. Adicionar uma carta" +
    "\n2. Puxar uma carta" +
    "\n3. Sair"
  )

  switch (opcao) {
    case "1":
      cartas.push(prompt("Digite a carta: "));
      break
    case "2":
    
    if (cartas.length > 0) {
      cartaPuxada = cartas.shift();
      alert(cartaPuxada);
         } else {
           alert("Não há cartas no baralho.")
         }
      break
    case "3":
      alert('Finalizando');
      break
  }
} while (opcao !== "3")