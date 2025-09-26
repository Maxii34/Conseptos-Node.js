//Crear un programa que solicite 2 argumentos y me genere el numero aleatios entre esos 2 valores. si no me pasan los argumentos entonses par defecto usaremos el valor del 1 al 100,

const argumentos = process.argv;
const argv = argumentos.slice(2);
console.log(argumentos);
console.log(argv);

//declarar variables de min y max
let min = 1;
let max = 100;

if(argv.length === 2){
    //pasar los argv a numeros
    const minparse = parseInt(argv[0]);
    const maxparse = parseInt(argv[1]);
    //preguntar si los 2 numeros son validos
    if(!isNaN(minparse) && !isNaN(maxparse) && minparse < maxparse){
        min = minparse;
        max = maxparse;
    }else{
        console.log("Rango invalidos, usaremos los valores por defecto min=1 y max=100");
    }
}

//realizar el aleatorio
const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`el numero aleatorio entre ${min} y ${max} es: ${aleatorio}`);

