let car1 = prompt('Insira o nome do veículo 1: ');
let speedy1 = parseFloat(prompt('Insira velocidade do veículo 1: '));
let car2 = prompt('Insira o nome do veículo 2: ');
let speedy2 = parseFloat(prompt('Insira velocidade do veículo 2: '));

if (speedy1 > speedy2) {
    alert(`O ${car1} é mais rápido. Sua velocidade é de ${speedy1}km/h`);
} else if (speedy1 == speedy2){
    alert(`A velocidade dos dois carros são iguais`);
} else {
    alert(`O ${car2} é mais rápido. Sua velocidade é de ${speedy2}km/h`);
}