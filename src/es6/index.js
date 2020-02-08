// Parámetros por defecto
function newFunction(
  name = 'Nombre por defecto',
  lastName = 'Apellido por Defecto',
  country = 'Mx'
) {
  console.log(`Que hongo ${name} ${lastName}, que te parece ${country} `);
}

newFunction();
newFunction('David', 'Flores');
newFunction('David', 'Flores', 'Co');

// Multilínea
let lorem = 'línea corrida 1 \n' + 'línea corrida 2';
let loremES6 = `Línea corrida ES6 1
Línea corrida ES6 2`;

console.log(lorem);
console.log(loremES6);

// Desestructuración
let persona = {
  name: 'David',
  lastName: 'Flores',
  age: 23
};

let { name, lastName, age } = persona;
console.log(`Holi ${name}`);

// Spread
let team1 = ['Alberto', 'Lumia', 'Aurora'];
let team2 = ['Tomy', 'Carlitos', 'Angelica'];
let employees = ['Garrafón', 'Luis', ...team1, ...team2];
console.log(employees);

// Promesas

let promesa1 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('correcto');
    } else {
      reject('vacío');
    }
  });
};

let promesa2 = respuesta => {
  return new Promise((resolve, reject) => {
    if (respuesta == 'correcto') {
      resolve('promesa 2');
    } else {
      reject('vacío');
    }
  });
};

async function correrPromesas() {
  let valorPromesa1 = await promesa1();
  let valorPromesa2 = await promesa2(valorPromesa1);
  console.log(`promesa 1 = ${valorPromesa1}
  promesa 2 = ${valorPromesa2}`);
}

correrPromesas();

// exponencial
const base = 4;
const potencia = 2;

console.log(base ** potencia);

// include
const arr = ['React', 'Angular', 'node', 'rust'];

console.log(arr.includes('node'));

// De objeto a matriz

let object = {
  tipo: 'humano',
  planeta: 'tierra',
  galaxia: 'Vía Lactea'
};
console.log('original', object);

let conversion = Object.entries(object);
console.log('resultado', conversion);

// ES10
let original = Object.fromEntries(conversion);
console.log('Original', original);

let regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
let match = regex.exec('2018-04-20');

const year = match[1];
const month = match[2];
const day = match[3];

console.log(`${year} ${month} ${day}`);

let especie = {
  planeta: 'Tierra',
  espacio: 'R55',
  colonia: 'Galactus'
};

let { ...all } = especie;

console.log(planeta);
