import React from 'react'
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const FormDisplayFlex = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    margin-top: 2%;
    font-family: 'Quicksand', sans-serif;
`;
const Header = styled.h1`
    margin: 5% 0% 0% 0%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Quicksand', sans-serif;
`;

const Border = styled.div`
    border: 1px solid #D3D3D3;
    padding: 5% 5% 15% 5%;
    border-radius: 5px;
    box-shadow: 8px 8px 3px lightgrey;
`;

const Card = styled.div`
    padding: 6%;
`;

const CreateATripForm = ({ errors, touched }) => {
    return (
        <>
        <Card>
            <Border>
                <Header>Create A Trip</Header>
                <Form>
                    <FormDisplayFlex>
                        {touched.destination && errors.destination && <p className="error">{errors.destination}</p>}
                        <Field type="text" id='fieldstyle' name="destination" placeholder="destination" />
                        {touched.start_date && errors.start_date && <p className="error">{errors.start_date}</p>}
                        <Field type="date" id='fieldstyle' name="start_date" placeholder="Start Date" />
                        {touched.end_date && errors.end_date && <p className="error">{errors.end_date}</p>}
                        <Field type="date" id='fieldstyle' name="end_date" placeholder="End Date" />
                        <button type="submit">Submit</button>
                    </FormDisplayFlex>
                </Form>
            </Border>
            </Card>
        </>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            destination: values.destination || '',
            start_date: values.start_date || '',
            end_date: values.end_date || ''
        }
    },
    validationSchema: yup.object().shape({
        destination: yup.string().required('Destination is a required field!'),
        start_date: yup.string().required('Start Date is a required field'),
        end_date: yup.string().required('End Date is a required field!')
    }),
    handleSubmit: (values, { resetForm }) => {
        Axios.post('https://trip-split-api.herokuapp.com/api/trips', values)
            .then(() => {
                resetForm();
                return MySwal.fire({ type: 'success', title: 'Trip Created Successfully', text: 'Good Job!' })
            })
            .catch((error) => {
                return MySwal.fire({ type: 'error', title: 'There was an error', text: 'Try Again!' })
            })
    }
})(CreateATripForm)