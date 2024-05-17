const userModel = require("../models/userModel");
const todoModel = require('../models/todoModel')
const bcrypt = require('bcrypt')

module.exports = {
  postRegister: async (data) => {
    let { name, email, password } = data;
    const newPassword = await bcrypt.hash(password, 10);
    let result = await userModel.create({
      name: name,
      email: email,
      password: newPassword,
    });
    console.log(result)
  },

  postLogin:async(data)=>{
    let {email,password} = data
    let user = await userModel.findOne({email:email})
    if(user)
      {
        let result = await bcrypt.compare(password,user.password)
        if(result)
          {
            return true
          }
          else
          {
            return false
          }
      }
      else
      {
        return false
      }
    
    
  },

  createPost:async(data)=>{

    try {
      let {value} = data
    let result = await todoModel.create({post:value})
    return result
    } catch (error) {
      console.log('eror is',error)
      return false
    }
    
    
  },

  getTodo:async()=>{
  let result =  await todoModel.find()
  console.log(result,'data from database')
  return result
  }
};
