let pacientes = [];
let opcao = "";
let consulta = "";

do {
    opcao = prompt(
    "Lista de pacientes: " + pacientes +
    "\n1. Novo paciente" +
    "\n2. Consultar paciente" +
    "\n3. Consultar último paciente adicionado" +
    "\n4. Sair"
  )

  switch (opcao) {
    case "1":
      pacientes.push(prompt("Digite o nome completo do novo paciente: "));
      break
    case "2":
        if (pacientes) {
            consulta = pacientes.shift();
            alert(consulta);
        } else {
            alert("Não há pacientes a serem consultados")
        }
        break
    case "3":
        if (pacientes) {
            consulta = pacientes.slice(-1);
            alert(consulta);
        } else {
            alert("Não há pacientes na lista")
        }
        break
    case "4":
        alert('Finalizando');
        break
  }
} while (opcao !== "4")