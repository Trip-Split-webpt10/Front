import React,{useState,useEffect} from 'react';
import { withFormik, Form} from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './trips.css';

const MySwal = withReactContent(Swal)

const FormDisplayFlex = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 2%;
`;
const Header = styled.h1`
    margin: 5% 0% 0% 0%;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
`;

const ButtonNewFriend = styled.button`
    margin-top: 2%;
    width: 100%;
    font-size: 1rem;
`;
  
const AddUserForm = ({ errors, touched, handleChange, handleBlur, values, addToSavedList, allUsers, isSubmitting}) => {
    useEffect(()=>{
        if(isSubmitting === true){
            addToSavedList(values.username)
        }
    },[isSubmitting])
    return (
        <>
        <Header>Add Trip Members</Header>
            <Form>
                <FormDisplayFlex>
                {touched.username && errors.username && <p className="error">{errors.username}</p>}
                    <select name="username" id="dropDown" value={values.username} onChange={handleChange} onBlur={handleBlur}>
                        <option value="''" label="Please select a username" disabled/>
                        {allUsers && Array.isArray(allUsers) && allUsers.length > 0 && allUsers.map((x,index)=>{
                            return <option value={x.username} key={index} label={x.username} />
                        })}
                    </select>
                    <ButtonNewFriend type="submit" className="AddFriendButton">Submit</ButtonNewFriend>
                </FormDisplayFlex>
            </Form>
        </>
    )
}

export default withFormik({
    mapPropsToValues: ({username}) => {
        return {
            username: username || ''
        }
    },
    validationSchema: yup.object().shape({
        username: yup.string().required('Username is a required field!')
    }),
    handleSubmit: (values, trip) => {
        console.log(trip.props.trip.match.params.id)
        Axios.post(`https://trip-split-api.herokuapp.com/api/trips/${trip.props.trip.match.params.id}/users`, values)
            .then(() => {
                return MySwal.fire({type:'success', title:'User Added Successfully',text:'Good Job!'})
            })
            .catch((response) => {
                console.log(response)
                return MySwal.fire({type:'error', title:'There was an error adding the user!', text: 'Try again!'})
            })
    }
})(AddUserForm)