import React, { useState } from 'react'
import '../scss/Contact.scss'
import {useNavigate} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function Contact() {
  const navigate = useNavigate();
  const [input, setInput ] = useState({
    fname: 'First name',
    lname: 'Last name',
    email: 'Enter email',
    description: 'How can i help you ?'
  });

  const handleSubmit= async(event)=>{
    const {fname,lname,email,description} = input

    event.preventDefault();

    const resData = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname,lname,email,description
      })

    })

    const data = await resData.json();

    if (!data) {
      window.alert('data not found');
    } else{
      navigate('/')
      window.alert('success !')
    }

    console.log(input);
  }

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setInput(values => ({...values, [name]: value}))
  }


  return (
    <div className='form'>
      <h1>Contact Us</h1>
    <Form className='contact__form' method='POST' onSubmit={handleSubmit}>
      <Row style={{width:'85%'}} className="mb-3">
        <div className='contact__rowOne'>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={handleChange} name='fname' style={{width:'90%'}} type="text" placeholder={input.fname} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={handleChange} name='lname' style={{width:'90%'}} type="text" placeholder={input.lname} />
        </Form.Group>
        </div>

        <div className='contact__rowTwo'>
        <Form.Group style={{marginTop: '2%'}} as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={handleChange} name='email' style={{width:'95%'}} type="email" placeholder={input.email} />
        </Form.Group>
        </div>

        <div className='contact__rowThree'>
        <Form.Group style={{marginTop: '2%'}} as={Col} controlId="formGridEmail">
          <Form.Label>Description</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Description">
        <Form.Control
         onChange={handleChange}
        name='description'
          as="textarea"
          placeholder={input.description}
          style={{ height: '100px', width: '95%' }}
        />
      </FloatingLabel>
      <Button style={{marginTop: '30px'}} variant="primary" type="submit">
        Submit
      </Button>
        </Form.Group>
        </div>
      </Row>
      
    </Form>
    </div>
  )
}

export default Contact
