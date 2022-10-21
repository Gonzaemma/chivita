var animales = ["el lobo", "el toro", "el león", "la rata", "el elefante", "la jirafa", "el gato",
"el pato", "el chancho", "el perro"];

// descomentar el bloque de abajo para obtener un arreglo de 100 animas (que se repiten cada 10)
/* for(let i=1; i<=10; i++){
    animales=animales.concat(animales);
} */

let numeroRandom = function (max){
    return Math.floor(Math.random()*max)
}

var N = 5; //cantidad de animales a llamar
var proximo = "";

console.log("Sal de ahí chivita chivita, sal de ahí de ese lugar. \n")

let ahora = "la chiva";
let sacar = [];
let randomIndex = null;

while(N!=0){
    randomIndex = numeroRandom(N);
    N--;
    proximo = animales[randomIndex];
    animales.splice(randomIndex, 1);

    console.log(`Hay que llamar a ${proximo} para que saque a ${ahora}`);

    sacar.unshift(proximo +" no quiere sacar a "+ahora);
    ahora=proximo;

    sacar.forEach((e)=>{
        console.log(e)
    })

    console.log("La chiva no quiere salir de ahí. Sal de ahí chivita chivita, sal de ahí de ese lugar.")
    console.log(sacar.length) //solo por motivos informativos
}
