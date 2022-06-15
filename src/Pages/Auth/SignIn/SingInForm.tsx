import React, { Component, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import GoogleAuth from "./GoogleAuth";

function SingInForm({ singIn, navigate }: { singIn: any, navigate: any }) {
  
  return (
    <div className="form-wrapper-content">
      <div className="content">
        <div className="col-md-12">
          <div className="title" style={{ textAlign: "left" }}>
            <h2>
              <FormattedMessage id={"app.auth.in.title"} />
            </h2>

            <br />
            <br />
            <br />
          </div>

          <div className="subtitle"></div>
        </div>
        <div style={{ textAlign: "left" }}>
          <SimpleForm singIn={singIn} navigate={navigate} />

        </div>
      </div>
    </div>
  );
}

function SimpleForm(props: any) {
  const { singIn } = props;
  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const [validated, setValidated] = useState(false);

  const { addToast } = useToasts()
  const handleChange = (event: any) => {
    const obj: any = { [event.target.name]: event.target.value };
    setState({ ...state, ...obj });
  };
  const { email, password } = state;
  const handleSubmit = (e: any) => {
    const form = e.currentTarget;
    
    if (form.checkValidity() === true) {
      setValidated(true);
      singIn(state, {...props, addToast});
    }else{
      setValidated(true);
    }

    e.preventDefault();
    e.stopPropagation();
    return false
  }
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Form.Group controlId="form.Email">
          <Form.Label>
            <FormattedMessage id={"app.label.email"} />
          </Form.Label>
          <Form.Control
            type="email"
            defaultValue={email}
            name="email"
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Enter your valid E-mail.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="form.password">
          <Form.Label>
            <FormattedMessage id={"app.label.password"} />
          </Form.Label>
          <Form.Control
            type="password" min={6} max={24}
            defaultValue={password}
            name="password"
            required
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">Please type your Password.</Form.Control.Feedback>
        </Form.Group>
        <div className="text-right">
          <Link className="wow fadeInUp pull-right" to="/auth/recover">
            <FormattedMessage id={"app.label.forgotPassword"} />
          </Link>
        </div>
        <p>
        </p>
        <Button
          type="submit"
          variant="primary"
          className="main-btn wow fadeInUp"
        >
          <FormattedMessage id={"app.label.singIn"} />
        </Button>{" "}
        {/* 
        <GoogleAuth />
        */}
        <br />
        <br />
        <Link className="wow fadeInUp" to="/auth/join">
          <FormattedMessage id={"app.label.register"} />
        </Link>
      </Form>
    </Container>
  );
}

export default SingInForm;
