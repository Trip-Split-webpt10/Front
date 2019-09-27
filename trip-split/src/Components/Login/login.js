import Axios from 'axios';

export default function login(user, history){
    const {password,username } = user;

    Axios.post('https://trip-split-api.herokuapp.com/api/users/login', 
        {
            password, 
            username
        } 
        ).then(res=>{
        // const token = res.data.token;
        console.log(res);
        // localStorage.setItem('token', token);
        // this.user(res.config)
            history.push('/trips')
        })
        .catch(err=>console.log(err))
}


// {
// 	"username": "2@gmail.com",
// 	"password": "1212"
// }