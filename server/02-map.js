const letters = ['a','b','c','d','e']

const newArray =[]
for (let index = 0 ; index < letters.length; index++){
	const element= letters[index]
	newArray.push(element + '++')     //es un metodo mutable, pero estamos mutando un nuevo array
}

console.log('original', letters)
console.log('new', newArray)


//con MAP
const arrayMap=letters.map(item =>item + '++')
console.log('original', letters)
console.log('map', arrayMap)
