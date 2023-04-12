// const a = [1,2,3,4]
// const b = [5,6,7,8]

// const c=[...a,...b]
// console.log(c)

const a ={
    name:'john',
    age :20,
   
    car:{
        brand:'bmw'
        ,model:'s24'
    }
   
    }

// const b={
//    ...a,
// }
// a.name = 'Jack'
// a.age = 18
// a.car.brand = 'Mercedes'
// a.car.model = 'C300D'


//  for(let key in a){

//  Object.keys(a).forEach
// console.log(key,a[key])}
// const b={}
// const deepClone=()=>{

// }
// const {name,age,brand}=a
// console.log(name,age,brand)
// const arr=["kumar","swamy","mekala"]
// const [name1,name2,name3]=arr
// console.log( name3,name1,name2)


const{name1,...rest}=('john','kumar','swamy')

console.log(name1)
console.log(rest)