import { useState,useEffect } from "react"
import axios from 'axios'

const Home=()=>{
    const [todo,setTodo] = useState([])
    const [value,setValue] = useState('')

   async function getTodo()
    {
        
        const response= await axios({
            method:'get',
            url:'http://localhost:5000/gettodo',
           

        })
        console.log(response)
        setTodo(response.data.data)

    }

    async function handleSubmit(e)
    {
      
      e.preventDefault()
        const response= await axios({
            method:'post',
            url:'http://localhost:5000/create',
            data:{
                
                value:value,
            }

        })
        console.log(response)
        
    }

    useEffect(()=>{
        getTodo()
    },[value])

   
    

    return <>
    
    <br></br>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="enter todo" onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit'>add</button>
    </form>
    <br></br>
    <h3>Todo details</h3>
    {todo?todo.map((item)=><h3 key={item._id}>{item.post} <button>edit</button> <button>delete</button></h3>):''}


    
    </>
}

export default Home