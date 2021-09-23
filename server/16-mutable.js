console.clear();


const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = []

console.log('products' ,products)
console.log('myProducts' ,myProducts)
console.log("-".repeat(10))

const productIndex = products.findIndex(item =>item.id ==='🍔')


// //Eliminando del Array original
// if(productIndex !==-1){
// 	myProducts.push(products[productIndex])
// 	products.splice(productIndex,1)
// }

//sin modificar el original
// let newProducts = [...products]
// if(productIndex !==-1){
// 	myProducts.push(products[productIndex])
// 	newProducts.splice(productIndex,1)
// }

//sin modificar el original v2
if(productIndex !==-1){
	let product = products.slice(productIndex,productIndex+1)
	myProducts.push(...product)
}

console.log('products' ,products)
// console.log('newProducts' ,newProducts)
console.log('myProducts' ,myProducts)
console.log("-".repeat(10))



//Update

const update = {
	id: '🍔',
	changes:{
		price:200,
		description:'delicioso'
	}
}
// const productIndex2 = products.findIndex(item =>item.id ===update.id)
// // products[productIndex2] = update.changes
// products[productIndex2] = {
// 	...products[productIndex2],
// 	...update.changes
// }

//sin modificar el original
const products2 = [...products]
const productIndex2 = products.findIndex(item =>item.id ===update.id)
// products[productIndex2] = update.changes
products2[productIndex2] = {
	...products[productIndex2],
	...update.changes
}


console.log('products',products)
console.log('products2',products2)