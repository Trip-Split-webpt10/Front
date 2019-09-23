import React, {useState, useEffect} from 'react'
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';

const FormDisplayFlex = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 5%;
`;

const CreateATripForm = ({errors, touched}) => {
  return (
    <Form>
    <FormDisplayFlex>
      {touched.NameOfTrip && errors.NameOfTrip && <p className="error">{errors.NameOfTrip}</p>}
      <Field type="text" name="NameOfTrip" placeholder="Name Of Trip" />
      {touched.FriendAmount && errors.FriendAmount && <p className="error">{errors.FriendAmount}</p>}
      <Field type="number" name="FriendAmount" placeholder="Amount Of Friends" />
      {touched.AmountOfExpenses && errors.AmountOfExpenses && <p className="error">{errors.AmountOfExpenses}</p>}
      <Field type="number" name="AmountOfExpenses" placeholder="How Many Expenses?" />
      <button type="submit">Submit</button>
      </FormDisplayFlex>
    </Form>
  )
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      NameOfTrip: values.NameOfTrip || '',
      FriendAmount: values.FriendAmount || '',
      AmountOfExpenses: values.diet || ''
    }
  },
  validationSchema: yup.object().shape({
    NameOfTrip: yup.string().required('Species is a required field!'),
    FriendAmount: yup.number().positive().required('FriendAmount is a required field!'),
    AmountOfExpenses: yup.number().positive().required('FriendAmount is a required field!')
  }),
  handleSubmit:(values, {setStatus})=>{
    Axios.post('', values)
    .then((res)=>{
      setStatus(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
})(CreateATripForm)