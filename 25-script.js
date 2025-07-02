let produto = Number(prompt("Qual o valor do produto?"));

let valor1 = 1 * Number(prompt("Quantas moedas de 1 real você tem?"));
let valor50cent = 0.50 * Number(prompt("Quantas moedas de 50 centavos você tem?"));
let valor25cent = 0.25 * Number(prompt("Quantas moedas de 25 centavos você tem?"));
let valor10cent = 0.10 * Number(prompt("Quantas moedas de 10 centavos você tem?"));
let valor5cent = 0.05 * Number(prompt("Quantas moedas de 5 centavos você tem?"));

let totaldinheiro = valor1 + valor50cent + valor25cent + valor10cent + valor5cent;

alert("Você tem essa quantia de dinheiro: R$ " + totaldinheiro.toFixed(2));

if(totaldinheiro >= produto){
    alert("Você tem dinheiro para comprar o produto!");
}else{
    alert("Você não tem dinheiro para comprar o produto!");
}