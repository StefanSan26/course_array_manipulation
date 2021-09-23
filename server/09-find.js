const numbers = [1,30,50,24,63,7,19,43]


let rta = undefined
for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	if (element === 30) {
		rta = element
		break
	}
}

console.log('for',rta)

const rta2 = numbers.find(item => item ===30)

console.log('rta2',rta2)


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3 = products.find(item => item.id ==='🍔')
console.log('rta3',rta3)

 
const rta4 = products.findIndex(item => item.id ==='🍔')   //si findIndex no se encuentra devuelve '-1'
console.log('rta4',rta4)


