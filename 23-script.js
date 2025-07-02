let valorproduto = Number(prompt("Qual o valor do produto?"));
let valor30 = 0.30;
let valor45 = 0.45;

if (valorproduto >= 20) {
    alert("Valor final: R$ " + (valorproduto + (valorproduto * valor30)));
} else {
    alert("Valor final: R$ " + (valorproduto + (valorproduto * valor45)));
}