const elements = ['Fire', 'Air', 'Water']


let rtaFinal = ''
const separator = '--'

for (let index = 0; index < elements.length; index++) {
	const element = elements[index];
	rtaFinal = rtaFinal + element + separator
}

console.log('for',rtaFinal)

const rta= elements.join('--')

console.log('rta',rta)

const title = 'Cursos de manipulacion de arrays'

const titleFinal = title.split(' ').join('-').toLowerCase()

console.log(titleFinal)


