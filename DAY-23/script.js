// const headingObject=document.getElementById("list")
//  headingObject.innerHTML="hiikumar"
//  headingObject.innerHTML="swamy"

//  console.log(headingObject)

// button function in js

// const body = document.querySelector('body')
// const  button = document.querySelector('button')

// const callback = (event)=>{
//     console.log(event)
// }

// button.addEventListener('click', callback)

// body.addEventListener('mousemove',(event)=>{
// console.log('key pressed:  (event.key.clientX)$ (evcent.clientY)')
// const ele =document.createElement('div')
// ele.style='
// position: absolute;
// top:$(event.clientY)px;
// left:$(event.clientX)px;
// width:10px;
// height:10px
// background-color:;
// border-radius:50px;'

// body.appendChild(ele)
 

// })
// window.addEventListener('scroll',(event)=>{
//     console.log(event)
// })

const todoContainer = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const todos = []

const renderList=()=>{

}
const handleAdd = (e)=>{
    const itemToAdd = input.value
    if(itemToAdd!==null && itemToAdd!==''){
        todos.push({
            text: itemToAdd,
            completed: false,
            id: Date.now()
        })
    console.log(todos)
        return 
    }else{
       return window.alert('adding an empty item is not possible')
    }
}
Date.now()
button.addEventListener('click',handleAdd)
