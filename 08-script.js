//solicita a idade do usuário.
let idade 

idade = prompt("Digite sua idade para saber se é elegivel! ")

//diz se pode ou não votar.


if(idade < 16){
    alert("você ainda é muito jovem para votar!");
}
if(idade == 16 || idade == 17){
    alert("Você já pode votar, mas não é obrigatorio!");
}
if(idade >= 18 && idade <= 65){
    alert("Seu voto é obrigatorio!!");
}
if(idade > 65){
    alert("Você já pode votar, mas não é obrigatorio!");
}

