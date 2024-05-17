
const userHelper = require('../helpers/userHelper')
module.exports ={

    register:async(req,res)=>{
        try
        {
            console.log(req.body,'data from register form')
      let data =   await userHelper.postRegister(req.body)
      return res.status(200).json({messgage:'data created'})
        }
        catch(e)
        {
            console.log('error is ',e)
            return res.status(500).json({messsage:'invalid server error'})
        }
        
      
},

login:async(req,res)=>{
    try {
        console.log(req.body)
      let result=   await userHelper.postLogin(req.body)
        if(result)
            {
                return res.status(200).json({message:'login success'})
            }
            else
            {
                return res.status(401).json({messgage:'invalid login details'})
            }
    } catch (error) {
        console.log('error is' ,error)
        return res.status(500).json({message:'invalid server eroor'})
        
    }
},

create:async(req,res)=>{

    try {
        console.log(req.body)
   let data=  await userHelper.createPost(req.body)
   console.log('details of created todo', data)
   if(data)
    {
        return res.status(200).json({message:'todo created'})
    }
    else
    {
        return res.status(401).json({message:'failure in creating todo'})
    }
    } catch (error) {
        
        console.log('error is',error)
        return res.status(500).json({message:'invalid server error'})
    }

    
},


getDetails:async(req,res)=>{
try {
    let details = await userHelper.getTodo()
    console.log('details')
    if(details)
        {
            return res.status(200).json({data:details,message:'data fetched'})
        }
} catch (error) {
    console.log('eror is ',error)
    return res.status(500).json({message:'invalid server eror'})
    
}
}
}