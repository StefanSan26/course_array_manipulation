const elements = [1,1,2,3]
const othersElements = [4,4,5,5]

const newArray = [...elements]
for (let index = 0; index < othersElements.length; index++) {
	const element = othersElements[index];
	newArray.push(element)
}
console.log('for', newArray)


const rta = elements.concat(othersElements)
const rta2 = [...elements,...othersElements]
const rta3 = [...elements,...'RANDOM']
console.log('rta', rta)
console.log('rta2', rta2)
console.log('rta3', rta3)
//mutando el array :  con el spread operator para agregarlos uno a uno
elements.push(...othersElements)
console.log(elements)





let str = 'hello'
const rta5 = str.concat(elements)

console.log(rta5)
