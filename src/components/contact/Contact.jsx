import React from "react"
import { Formik, Form } from "formik";
import Back from "../common/back/Back"
import { TextField } from './TextField';
import * as Yup from 'yup';
import './contact.css'
export const Contact = () => {
 
  const validate = Yup.object({
      firstName:Yup.string()
      .max(15,'Must be 15 characters or less')
      .required('Required'),
      lastName:Yup.string()
      .max(20,'Must be 20 characters or less')
      .required('Required'),
      email:Yup.string()
      .email('Email is invalid')
      .required('Email is Required'),
      password:Yup.string()
      .min(6,'Password must be at least 6 charaters')
      .required('Password is Required'),
      confirmPassword:Yup.string()
      .oneOf([Yup.ref('password'),null],'Password must match')
      .required('Confirm password is Required'),
  })
  
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '



return (
  
  <section className='contacts padding'>
    
    <Back title='' />
  <div className='container shadow flexSB'>
  
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
 
     
<Formik

  initialValues={{
      firstname: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
  }}
  validationSchema={validate}
  onSubmit={values => {
      console.log(values)
  }}
  >
  {formik => (
    
      <div  >
        
          <h1 className='my-4 font-weight-bold-display-4'>Regjistrohu</h1>
       
          <Form>
          <TextField label="Emri" name="firstName" type="text" />
          <TextField label="Mbiemri" name="lastName" type="text" />
          <TextField label="E-mail" name="email" type="email" />
          <TextField label="Passwordi" name="password" type="password" />
          <TextField label="Konfirmo Passwordin" name="confirmPassword" type="password" />
          <button className='btn btn-dark mt-3' type="submit">Regjistrohu</button>
          <button className='btn btn-danger mt-3 ml-3' type="reset">Reset</button>
          </Form>
         
      </div>
   )}
   
</Formik>
</div>
</section>
)

}
export default Contact;