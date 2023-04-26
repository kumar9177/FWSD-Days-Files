
// const i ="kumar+"
// for(let i=0;i<100;i++)
// console.log(i)

// const getTodos=()=>{


//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(data=>data.json())
//     .then(result=>{
//         console.log(result)
//     })
//     .catch(error =>{
//         console.log(error)
    
//     })
//     console.log(getTodos)
// }

// getTodos()
//   fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json())
// .then(result=>{
//   console.log(result)
// }).catch(error=>{
//   console.log(error)
// })

// const getTodos = async () => {
//     try {

   
//         console.log(1)

//        const p1= new Promise(resolve=>{
//         setTimeout(()=>resolve(),4000)
// })
// await p1
//         // console.log(2)
//       const p2= new Promise(resolve=>{
//           setTimeout(()=>resolve(),5000)
  
              
//           })
//           const p3=Promise.all([p1,p2])
//           await p3
//          console.log(p3);
          
      
//     } catch (err) {
//       console.log(err);
//     }
//   };
// getTodos();
//   console.log('hello')

//   getTodos();
//   console.log("hello")
//   await fetch("https://jsonplaceholder.typicode.com/todos");
//       console.log(result)
//       console.log(2)
//       const data =  await result.json();
//       console.log(data)
//       console.log(3)


// const input=document.querySelector('input')

// const button=document.querySelector('button')
// const ul = document.querySelector('ul');
// try{

// const searchforreceipe= input.value;
// const endpoint='https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=286bc7ab&app_key=35a1884caeea3f9d221f90a10178d3de%09'
// const response= await fetch(endpoint);
// const data= await response,json();
// console,log(data);
// const receipes=data.hits;
// console.log(recepies);
// receipes.forEach(obj=>{
//     const {recipe}=obj;
//     console.log(recipe)
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = recipe.image;
//     li.innerHTML = recipe.label
//     li.appendChild(img)
//     ul.appendChild(li)
// })
// }
// catch(error){

// }
// button.addEventListener('click',searchforreceipe)

const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

const app_id= '9cde8c4a'
const API_key='f97fabc827d267eb8ff9478fa6d2078e'
const searchForRecipe = async()=>{
  
    ul.innerHTML=""
    const searchString = input.value;
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${app_id}&app_key=${API_key}`
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     console.log(data);
//     const recipes = data.hits;
//     console.log(recipes);
//     recipes.forEach(obj=>{
//       const {recipe} = obj
//       console.log(recipe);
//       const li = document.createElement('li');
//       const img = document.createElement('img');
//       img.src = recipe.image;
//       li.innerHTML = recipe.label
//       li.appendChild(img)
//       ul.appendChild(li)
//     })

//   } catch (error) {
    
console.log(endpoint)
  }


// button.addEventListener('click', searchForRecipe)