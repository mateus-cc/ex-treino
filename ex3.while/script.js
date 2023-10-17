let turista = prompt('Qual é o seu nome?');
let cidades = [];
let numeroCidades = 0;
let decisao = prompt('Você já visitou alguma cidade? (sim/nao)');

while (decisao === 'sim') {
    cidades.push(prompt('Digite o nome da cidade que você visitou: '));
    decisao = prompt('Visitou alguma outra cidade?');
    numeroCidades += 1;
    if (decisao === 'nao') {
        break;
    }
}

alert(`Seu nome é ${turista}, você visitou ${numeroCidades} cidades, são elas: ${cidades}`);
