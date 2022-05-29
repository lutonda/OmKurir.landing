import React, { Component, useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function SingInForm() {
  return (
    
      <div className="form-wrapper-content">
        <div className="content">
          <div className="col-md-12">
            <div className="title" style={{ textAlign: "left" }}>
              <h2>
                <FormattedMessage id={"app.contactUs.form"} />
              </h2>
              <FormattedMessage id={"app.contactUs.formdescription"} />
            </div>

            <div className="subtitle"></div>
          </div>
          <div style={{ textAlign: "left" }}>
            <SimpleForm />
          </div>
        </div>
      </div>
  );
}

function SimpleForm() {
  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const handleChange = (event: any) => {
    const obj: any = { [event.target.name]: event.target.value };
    setState(obj);
  };

  const { email, password } = state;

  return (
    <Container>
      <Form>
        <Form.Group controlId="form.Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            defaultValue={email}
            name="email"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="form.password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            defaultValue={password}
            name="password"
            required
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <p>
        <hr />
      </p>
      <Button variant="primary" className="main-btn wow fadeInUp">
        Sing In
      </Button>
      <br/><br/>
      <Link className="wow fadeInUp" to="/auth/join">
        Create an Account
      </Link>
    </Container>
  );
}

export default SingInForm;
