import React,  {useState} from 'react';

import styled from 'styled-components';
import {withFormik, Form, Field} from 'formik'
import Axios from 'axios';

function Login() {
    const [isLogin, setIsLogin ] = useState(true)
    
    return (

        <LongInStyles>
            <div className='login'>
                <ul>
                    <li>Login</li>
                    <li>Sing Up</li>
                </ul>
                { isLogin ? 
                    <Form>
                    <div className='fieldDiv'>
                        {/* {touched.name && errors.name && <p className="error">{errors.name}</p>} */}
                        <Field type='text' placeholder='Name' name='name'/>
                    </div>
                    <div className='fieldDiv' >
                        {/* {touched.email && errors.email && <p className="error">{errors.email}</p>} */}
                        <Field type='email' placeholder='Email' name='username'/>
                    </div>
                    <div>
                        {/* {touched.password && errors.password && <p className="error">{errors.password}</p>} */}
                        <Field type='password' placeholder='Password' name='password'/>
                    </div>
                    <Field type='submit' placeholder='Login' name='Submit'/>
                </Form> :
                <Form>
                <div className='fieldDiv'>
                    {/* {touched.name && errors.name && <p className="error">{errors.name}</p>} */}
                    <Field type='text' placeholder='Name' name='name'/>
                </div>
                <div className='fieldDiv' >
                    {/* {touched.email && errors.email && <p className="error">{errors.email}</p>} */}
                    <Field type='email' placeholder='Email' name='username'/>
                </div>
                <div>
                    {/* {touched.password && errors.password && <p className="error">{errors.password}</p>} */}
                    <Field type='password' placeholder='Password' name='password'/>
                </div>
                <Field type='submit' placeholder='Login' name='Submit'/>
            </Form>
                }
            </div>
        </LongInStyles>
    )
}

//formik
const LoginForm = withFormik({
    mapPropsToValues({name, username, password}){
      return{
            name: name || '',
            username: username || '',
            password: password || '',
      }
    },
    user(users){
        return users
    },
    handleSubmit(values){
        console.log(values)
        Axios.post('https://trip-split-api.herokuapp.com/api/users/login', values)
            .then(res=>{
                const token = res.data.token;
                console.log(res)
                localStorage.setItem('token', token);
                this.user(res.config)
            })
            .catch(err=>console.log(err))
            this.getUser();
    },
    getUser(){
        Axios.get('https://trip-split-api.herokuapp.com/api/users/1')
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }
})(Login);

//styles
const LongInStyles = styled.div`
    margin-top: 50px;
    width: 40%;
    margin: 50px auto 0 auto;
    padding: 10px;
    ul{
        display: flex;
        width: 100%;
        padding: 15px;

    }
    li{
        margin-right: 35px;
        font-size: 2rem;
        font-weight: bolder;
        padding: 5px;
    } 
    li:hover{
        text-underline-position: below;
        border-bottom: 3px solid lightgrey
    }
    .login{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
    form{
        width: 100%;
        /* margin: 25% auto ; */
    }
    input{
        width: 80%;
        height: 25px;
        padding: 5px;
        margin: 10px 0px;
    }
    input[type='submit']{
        height: 25px;
    }
`;



export default LoginForm;