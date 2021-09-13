// función de suma total
const suma = (ns) => {
  let acumulado = 0;
  
  for (i = 0; i < ns.length; i++){
    acumulado += ns[i];
  }
  return acumulado
} 

const numeros = [1, 2, 3, 4, 5];
// multiplicar * 2
const multiplicados = numeros.map(x => x * 2)
// a pares
const parejas = numeros.map(x => [x, x])

const animal = [
  { nombre: 'Chocolate', edad: 12, tipo: 'perro' },
  { nombre: 'Mefuise', edad: 19, tipo: 'burro' },
  { nombre: 'El cazabito', edad: 10, tipo: 'toro' },
  { nombre: 'Felino', edad: 12, tipo: 'tigre' },
]

const edades = animal.map(x => x.edad)
const resultado = suma(edades)
console.log("El resultado es =", (resultado / edades.length)); 
// [ resultado = 53 & edad.length = 6 ] 
// entonces [ 53/4 = 13.25 ]
