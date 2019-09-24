import React, {useState, useEffect} from 'react'
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import { EventEmitter } from 'events';

const FormDisplayFlex = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 2%;
`;
const Header = styled.h1`
    margin-top: 2%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
`;

const CreateATripForm = ({errors, touched}) => {
  return (
      <>
    <Header>Create A Trip</Header>
    <Form>
    <FormDisplayFlex>
      {touched.NameOfTrip && errors.NameOfTrip && <p className="error">{errors.NameOfTrip}</p>}
      <Field type="text" id='fieldstyle' name="NameOfTrip" placeholder="Name Of Trip" />
      {touched.FriendAmount && errors.FriendAmount && <p className="error">{errors.FriendAmount}</p>}
      <Field type="number" id='fieldstyle' name="FriendAmount" placeholder="Amount Of Friends" />
      <Header>Expense(s)</Header>
      <Row id="hello">
      {touched.ExpenseDescription && errors.ExpenseDescription && <p className="error">{errors.ExpenseDescription}</p>}
            <Field type="text" id='fieldstyle' name="ExpenseDescription" placeholder="Expense Description" />
            {touched.ExpenseCost && errors.ExpenseCost && <p className="error">{errors.ExpenseCost}</p>}
            <Field type="text" id='fieldstyle' name="ExpenseCost" placeholder="Cost" />
      </Row>
      <button type="submit">Submit</button>
      </FormDisplayFlex>
    </Form>
    </>
  )
}

export default withFormik({
  mapPropsToValues: (values) => {
    return {
      NameOfTrip: values.NameOfTrip || '',
      FriendAmount: values.FriendAmount || '',
      ExpenseDescription: values.ExpenseDescription || '',
      ExpenseCost: values.ExpenseCost || ''
    }
  },
  validationSchema: yup.object().shape({
    NameOfTrip: yup.string().required('Name of Trip is a required field!'),
    FriendAmount: yup.number().positive().required('Friend Amount is a required!'),
    ExpenseDescription: yup.string().required('Expense Description is a required field!'),
    xpenseCost: yup.string().required('Expense Cost is a required field!')
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