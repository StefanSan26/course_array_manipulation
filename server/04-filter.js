const  words = ['spray' , 'limit' , 'elite', 'exuberant']

const newArray = []

for(let i = 0; i<words.length; i++){
	const item = words[i]
	if (item.length>=6) {
		newArray.push(item)
	}
}

console.log('newArray',newArray)
console.log('words',words)


//CON FILTER

const rts = words.filter(item => item.length >=6)
console.log('rts',rts)
console.log('words',words)

//OBJETOS

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
  {
    customerName: "Nicolas",
    total: 240,
    delivered: true,
  },
];

const rta2= orders.filter(item=>item.delivered && item.total>=100)
// console.log('rta2' , rta2)

const search = (query) =>{
	return orders.filter(item => {
		return item.customerName.includes(query)
	})
}

// console.log(search('Nico'))
console.log(search('sfsd'))