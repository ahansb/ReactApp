import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const initialFormData = Object.freeze({
    username: "",
    email: "",
    mobile: "",
    query: ""
  });


function FormPage () {
    const [formData, updateFormData] = React.useState(initialFormData);

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        const templateId = 'template_qlzviyr';
        const serviceID = "service_react_app";
        sendFeedback(serviceID, templateId, { from_name: formData.name, mobile: formData.mobile, message_html: formData.query, email: formData.email })
        console.log(formData);
        alert(`Thank you for your message. Your query has been forwarded.`);
        window.location.reload();
      };

    return (

        <Form>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>Mobile no.*</Form.Label>
                <Form.Control onChange= {handleChange} name="mobile" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Query*</Form.Label>
                <Form.Control onChange= {handleChange} name="query" as="textarea" rows={3} />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
                </Button>
        </Form >

    )
}

export default FormPage;