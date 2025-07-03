let distancia = (prompt("Qual a distância da corrida?"))
let tempodeviagem
let velocidadedaluz

if (distancia>=1){
    velocidadedaluz = 300.000
}

tempodeviagem= distancia / velocidadedaluz

alert("o seu tempo de viagem é" + tempodeviagem + "km/s")