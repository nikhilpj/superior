import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

   async function handleSubmit(e)
    {
      console.log(email,password)
      e.preventDefault()
        const response= await axios({
            method:'post',
            url:'http://localhost:5000/login',
            data:{
                
                email:email,
                password:password
            }

        })
        console.log(response)
        if(response.status===200)
          {
            navigate('/home')
          }
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        
        
        <input type="text" placeholder="enter your email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br/>
        <input type="text" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <br/>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default Login;
