const gettoken=()=>{
    const token=localStorage.getItem('loggedInUser')
    console.log('token',token)
    if(token){
        return JSON.parse(token).token
    }
    return null;
}
export default   gettoken;