import React, { Component, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function SingInForm() {
  return (
    <div className="form-wrapper-content">
      <div className="content">
        <div className="col-md-12">
          <div className="title" style={{ textAlign: "left" }}>
            <h2>
              <FormattedMessage id={"app.auth.in.title"} />
            </h2>
            <FormattedMessage id={"app.auth.in.description"} />
            <br />
            <br />
            <br />
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
          <Form.Label><FormattedMessage id={"app.label.email"} /></Form.Label>
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
          <Form.Label><FormattedMessage id={"app.label.password"} /></Form.Label>
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
      <div className="text-right">
        <Link className="wow fadeInUp pull-right" to="/auth/recover">
          <FormattedMessage id={"app.label.forgotPassword"} />
        </Link>
      </div>
      <p>
        <hr />
      </p>
      <Button variant="primary" className="main-btn wow fadeInUp">
        <FormattedMessage id={"app.label.singIn"} />
      </Button>{" "}
      <GoogleAuth />
      <br />
      <br />
      <Link className="wow fadeInUp" to="/auth/join">
        <FormattedMessage id={"app.label.register"} />
      </Link>
    </Container>
  );
}

export default SingInForm;
