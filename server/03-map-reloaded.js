const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log('original', orders)

const rta = orders.map(item => item.total)

console.log('respuesta', rta)
const rta2 = orders.map(item => {				// para evitar que se modifique el objeto original
	return {...item,
		tax:.019
	}
})
console.log('rta2', rta2)
console.log('original', orders)
