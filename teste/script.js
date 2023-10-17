// let num1 = parseFloat(prompt('Digite o primeiro número: '));
// let num2 = parseFloat(prompt('Digite o segundo número: '));
// let operacao = prompt("Escolha a operação: (+, -, *, /)");

// switch (operacao) {
//     case "+": 
//         let soma = num1 + num2;
//         alert(soma);
//         break;
//     case "-": 
//         let sub = num1 - num2;
//         alert(sub);
//         break;
//     case "*": 
//         let mult = num1 * num2;
//         alert(mult);
//         break;
//     case "/": 
//         let div = num1 / num2;
//         alert(div);
//         break;
//     default:
//         alert('Nenhuma opção válida');
// }

function dividir (num) {
    alert(num);
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num;
    }
}

dividir(400)