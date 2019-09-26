import Axios from 'axios';

export default function login({password, username, history}){
    console.log(history)
    Axios.post('https://trip-split-api.herokuapp.com/api/users/login', 
        {
            password, 
            username
        } 
        ).then(res=>{
        // const token = res.data.token;
        console.log(res)
        // localStorage.setItem('token', token);
        // this.user(res.config)
    })
    .catch(err=>console.log(err))
}