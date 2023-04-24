
// const getProducts1 =()=>{ -
// }

// const syncFunction (  ()=>{
//    for(leti=0;i<10;i++)
//     console.log("logo")
// },1000)


// const resul
// console.log("hello")

// console.log("hello")

// console.log("hello")

// console.log(10+12)


// const age=11


// const mypromise=new Promise((resolve,reject,moretime)=>{
//     setTimeout(()=>{
//         if(age>18)resolve('you are eligibleto vote ') 
//         else reject("you are not eligible to vote")
        
//     },500)
//     })

// mypromise.then(result=>{
//     console.log(result)
// })

// .catch(error=>{
//     console.log(error)
// })


const response = fetch('https://jsonplaceholder.typicode.com/todos')
.then(data=>data.json())
.then(result=>{
    console.log(result)
})

// console.log(response)


// response.then(data=>{
//     // console.log(data)
//     // console.log(data.json())
//     const streamdata=data.json()
//     streamdata.then(finalData=>{
//         console.log(finalData)
//     })
// })

// .then(data=> data.json()
// )
// .then(finaldata=>{
//     console.log(finaldata)
// })

// .catch(err=>{
//     console.log(err)
// })
