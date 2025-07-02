let nota = Number(prompt("Qual sua nota deste semestre?"));

if (nota >= 9 && nota <= 10) {
    alert("Parabéns, você tirou A");
} else if (nota >= 7 && nota < 9) {
    alert("Parabéns, você tirou B");
} else if (nota >= 6 && nota < 7) {
    alert("Você tirou C");
} else if (nota >= 4 && nota < 6) {
    alert("Sua nota foi D, precisa estudar mais!");
} else if (nota >= 0 && nota < 4) {
    alert("Você tirou E, foi péssimo!");
} else {
    alert("Nota inválida");
}
