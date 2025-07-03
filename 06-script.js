//solicita a pontuação do usuário
let numero = prompt("Digite sua pontuação: ")
let pontuaçao = parseInt(numero)

//exibe o desempenho do usuário
 if(pontuaçao >= 300){
   alert("Mandou super bem! ");
}
 else if(pontuaçao >=200){
    alert("Mandou muito bem! ");
 }
 else if(pontuaçao >= 100){
    alert("foi bem! ");
 }
 else if(pontuaçao >= 50){
    alert("pode melhorar! ");
 }
 else if(pontuaçao <= 10){
    alert("Foi pessimo vai treinar! ");
 }