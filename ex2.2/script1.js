const atacante = prompt('Qual o nome do personagem atacante?');
const poderAtaque = parseFloat(prompt('Digite o dano do poder: '));

const defensor = prompt('Qual o nome do personagem defensor?');
let pontosDeVide = parseFloat(prompt('Quantos pontos de vida ele possui?'));
const poderDeDefesa = parseFloat(prompt('Qual seu poder de defesa?'));
const possuiEscudo = prompt('Ele possui um escudo? (Sim/Não)');

let danoCausado = 0;

if (poderAtaque > poderDeDefesa && possuiEscudo ==='Não') {
    danoCausado = poderAtaque - poderDeDefesa;
} else if (poderAtaque > poderDeDefesa && possuiEscudo ==='Sim') {
    danoCausado = (poderAtaque = poderDeDefesa) / 2;
};

pontosDeVide -= danoCausado; 

alert(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`);

