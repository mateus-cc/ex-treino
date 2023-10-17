let medida = parseFloat(prompt('Insira o valor da medida em metros: '));
let operacaoConverter = prompt('Escolha para qual medida o valor deve ser convertido: (mm/cm/dm/dam/hm/km)');

switch (operacaoConverter) {
    case 'mm':
        let milimetro = medida * 1000;
        alert(`O valor em milímetros é ${milimetro}mm`);
        break;
    case 'cm':
        let centimetro = medida * 100;
        alert(`O valor em centímetros é ${centimetro}cm`);
        break;
    case 'dm':
        let decimetro = medida * 10;
        alert(`O valor em decímetros é ${decimetro}dm`);
        break;
    case 'dam':
        let decametro = medida / 10;
        alert(`O valor em decâmetro é ${decametro}dam`);
        break;
    case 'hm':
        let hectometro = medida / 100;
        alert(`O valor em hectômetro é ${hectometro}hm`);
        break;
    case 'km':
        let quilometro = medida / 1000;
        alert(`O valor em quilômetro é ${quilometro}km`);
        break;
    default: 
        alert('Opção inválida');
        break;
}