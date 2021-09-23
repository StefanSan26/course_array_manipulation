const numbers = [1,30,50,24,63,7,19,43]

let rta = true
for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	if (element>=80) {
		rta = false
		break
	}
}
console.log('for',rta)

const rta2 = numbers.every(item => item<=40)

console.log('rta2',rta2)


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta3 = team.every(player =>player.age<15)

console.log(rta3)