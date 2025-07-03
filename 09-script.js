//pede o peso e a altura do usuário.
let peso = parseFloat(prompt("Digite seu peso:"))
let altura = parseFloat(prompt("Digite sua altura:"))

//calcula o imc.
let imc = peso / (altura * altura)

//diz qual é o imc do usuário.
alert("Seu IMC é: " + imc)