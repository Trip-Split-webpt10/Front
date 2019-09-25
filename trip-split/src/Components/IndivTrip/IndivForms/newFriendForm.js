import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './AddFriend.css';

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


const AddUserForm = ({ errors, touched, trip}) => {
    return (
        <>
            <Header>Add Trip Members</Header>
            <Form>
                <FormDisplayFlex>
                    {touched.users && errors.users && <p className="error">{errors.user}</p>}
                    <Field type="text" id='fieldstyle' name="users" placeholder="users" />
                    <ButtonNewFriend type="submit" className="AddFriendButton">Submit</ButtonNewFriend>
                </FormDisplayFlex>
            </Form>
        </>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            users: values.users || ''
        }
    },
    validationSchema: yup.object().shape({
        users: yup.string().required('Users is a required field!'),
    }),
    handleSubmit: (values, trip) => {
        console.log(trip)
        Axios.post(`https://trip-split-api.herokuapp.com/api/trips/${trip.match.params.id}/users`, values)
            .then(() => {
                return MySwal.fire({type:'success', title:'User Added Successfully',text:'Good Job!'})
            })
            .catch(() => {
                return MySwal.fire({type:'error', title:'There was an error!',text:'Try Again!'})
            })
    }
})(AddUserForm)