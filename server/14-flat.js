const matriz =[
	[1,2,3],
	[4,5,6,[1,2,[1,2]]],
	[7,8,9]
]


// const newArray = []
// for (let i = 0; i < matriz.length; i++) {
// 	const array = matriz[i];
// 	for (let j = 0; j < array.length; j++) {
// 		const element = array[j];
// 		newArray.push(element)
// 	}
// }

// const rta = matriz.flat(3)
// console.log('for' , newArray)
// console.log('rta' , rta)




// const newArr2 =[]

function flatArr(arr, n){
	let i = 0
	if(n<1){
		return arr[i]
	}
	else if(Array.isArray(arr[n])){
		const newArr2 = flatArr(arr[n],n-1)
	}
}


console.log(flatArr(matriz,3))
