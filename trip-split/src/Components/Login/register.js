import Axios from 'axios';
export default function register(values){
    console.log(values)
    Axios.post('https://trip-split-api.herokuapp.com/api/users/register', 
        values)
    .then(res=>{
        console.log(res)
        
    })
    .catch(err=>console.log(err))
}