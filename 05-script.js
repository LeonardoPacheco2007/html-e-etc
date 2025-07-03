// Solicita as três notas ao usuário
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calcula a média
let media = (nota1 + nota2 + nota3) / 3;

// Exibe a média
alert("A média do aluno é: " + media);