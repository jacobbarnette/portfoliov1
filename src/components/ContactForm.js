import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
export const ContactForm = () => {
  const form = useRef();
  console.log(form.current);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w9uypyf",
        "template_pwn5i8k",
        form.current,
        "0cffI7b5O9RyerITF"
      )
      .then(
        (result) => {
          toast.success("Email has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Container>
      <h2 className="subSectionHeader py-3 text-center">Whats Next?</h2>
      <p className="py-2 text-center contactP">
        I am currently looking for new oppurtunities to grow as a developer!
        Intersted in working with me? Send me an email using the below form :)
      </p>
      <Form
        id="contact"
        className="py-2 contactForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Name"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Email"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label className="py-2">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                type="text"
                id="description"
                name="description"
                placeholder="Message"
              />
            </Form.Group>
            <Button className="my-2 contactFormBtn" type="submit">
              Submit
            </Button>
          </Col>
        </Row>

        <ToastContainer />
      </Form>
    </Container>
  );
};

export default ContactForm;
