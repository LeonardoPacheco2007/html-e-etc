let idadePresidente1 = Number(prompt("Digite a idade do presidente:"));
let idadeVice1 = Number(prompt("Digite a idade do vice:"));
let idadePresidente2 = Number(prompt("Digite a idade do presidente:"));
let idadeVice2 = Number(prompt("Digite a idade do vice:"));

let somaCandidato1 = idadePresidente1 + idadeVice1;
let somaCandidato2 = idadePresidente2 + idadeVice2;

if (somaCandidato1 > somaCandidato2) {
    alert("Os candidatos 1 têm mais experiência que os candidatos 2");
} else if (somaCandidato2 > somaCandidato1) {
    alert("Os candidatos 2 têm mais experiência que os candidatos 1");
} else {
    alert("As duas duplas têm a mesma experiência");
}