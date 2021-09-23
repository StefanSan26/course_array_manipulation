const items = [1,3,2,3,3,10,1,14,15,20,17,7,8]

const rta = items.reduce((obj,item) =>{
	if (!obj[item]) {
		obj[item] = 1
	}else{
		obj[item] =obj[item]+ 1
	}
	return obj
},{})

console.log(rta)

//con objetos 
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item =>item.level)
.reduce((obj,item) =>{
	if (!obj[item]) {
		obj[item] = 1
	}else{
		obj[item] =obj[item]+ 1
	}
	return obj
},{})

console.log(rta1)


const rta3 = items.reduce((obj,item) =>{
	if (item<=5) {
		obj['0-5'] += 1
	}else if(item<=12){
		obj['5-12'] +=1
	}else{
		obj['12-20'] +=1
	}
	return obj
},{
	'0-5':0,
	'5-12':0,
	'12-20':0,
})

console.log(rta3)
