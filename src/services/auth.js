;
import instance from "../services/instance"
const signup=async(credentials)=>{
    
    try{
        console.log('signing up user')

  const response=await instance.authInstance.post('/users/signup',credentials);
  if(response){
    
    console.log(response)
    return response;
  }
    }catch(error){
    console.error('signup failed',error)    
    }
}


const signin=async(credentials)=>{
    
  try{
      console.log('signing in user')

const response=await instance.authInstance.post('/users/signin',credentials);
if(response){
  console.log("login successfull")  
  localStorage.setItem('loggedInUser',JSON.stringify(response.data))
  return response.data
}
return null;


  }catch(error){
  console.error('signin failed',error)    
  return null;
  }
}
export default{
    signup,
    signin
}