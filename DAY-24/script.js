/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/

const todoContainer = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


//add or delete 


const todos = []
int mode='a'
const handleList=(id)=>{
console.log(id)
}

const renderList = ()=>{
    todoContainer.innerHTML = ''
    todos.forEach((todo)=>{
        const li = document.createElement('li')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
        button.addEventListener('click',(e)=>{
            li.remove()
            const id = todo.id
            const index = todos.findIndex((todo)=>todo.id===id)
            todos.splice(index,1)
        })
     editButton.addEventListener('click',(e)=>{
        handleAdd.Edit(todo.id)
     })

deleteButton.innerHTML='delete'
        editButton.innerHTML = 'delete'
        li.innerHTML = `
        ${todo.text} 
        `
        li.appendChild(button)
        todoContainer.appendChild(li)
    })

    console.log(todos)
}

const handleAdd = (e)=>{
    const itemToAdd = input.value
    if(itemToAdd!==null && itemToAdd!==''){
        todos.push({
            text: itemToAdd,
            completed: false,
            id: Date.now()
        })
        input.value=""
        renderList()
        return 
    }else{
       return window.alert('adding an empty item is not possible')
    }
}

button.addEventListener('click',handleAdd)

