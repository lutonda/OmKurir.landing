import React, { Component, useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import "./SignOnForm.scss";
function SingOnForm({ register }: { register: any }) {
  const navigate = useNavigate();
  return (
    <div id="singOnForm" className="form-wrapper-content">
      <div className="content">
        <div className="col-md-12">
          <div className="title" style={{ textAlign: "left" }}>
            <h2>
              <FormattedMessage id={"app.auth.on.title"} />
            </h2>
            <FormattedMessage id={"app.auth.on.description"} />
            <br />
            <br />
            <br />
          </div>

          <div className="subtitle"></div>
        </div>
        <div style={{ textAlign: "left" }}>
          <SimpleForm register={register} navigate={navigate} />
        </div>
      </div>
    </div>
  );
}

const handleFailure = (result: any) => {
  alert(JSON.stringify(result));
};
const handleLogin = (result: any) => {
  alert(JSON.stringify(result));
};
function SimpleForm(props: any) {
  const { user, register } = props;
  const initialState = {
    type: NaN,
    email: "",
    password: "",
    repeatPassword: "",
  };

  const { addToast } = useToasts()
  const [state, setState] = useState(initialState);
  const [validated, setValidated] = useState(false);
  const handleChange = (event: any) => {
    const obj: any = { [event.target.name]: event.target.value };

    setState({ ...state, ...obj });
  };

  const { type, email, password, repeatPassword } = state;
  const selectHandler = (t: number) => {
    const obj: any = { type: t };
    setState(obj);
  };

  const handleSubmit = (e: any) => {

    debugger
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      setValidated(true);
      register(state, { ...props, addToast })
    } else {
      setValidated(false);
    }

    e.preventDefault();
    e.stopPropagation();
    return false
  }
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {isNaN(type) ? (
          <>
            <Row>
              <div id="registationType" className="col-md-12">
                <div className="row">
                  <div
                    className={
                      "col-md-6 selector text-center " +
                      (type == 1 ? "selected" : "")
                    }
                    onClick={() => selectHandler(1)}
                  >
                    <i className="lni lni-apartment"></i>
                    <p>Business account</p>
                  </div>
                  <div
                    className={
                      "col-md-6 selector text-center " +
                      (type == 0 ? "selected" : "")
                    }
                    onClick={() => selectHandler(0)}
                  >
                    <i className="lni lni-user"></i>
                    <p>Personal account</p>
                  </div>
                </div>
              </div>
            </Row>
          </>
        ) : (
          <>
            <div
              className="alert alert-primary main-btn wow fadeInUp"
              role="alert"
              style={{ width: "100%", textAlign: "left" }}
            >
              {[<><i className="lni lni-user"></i> Creating a Personal account</>,
              <><i className="lni lni-apartment"></i> Creating a Business account</>]
              [type]}
            </div>
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
              {}
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Enter your valid E-mail.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="form.password">
              <Form.Label>
                <FormattedMessage id={"app.label.password"} />
              </Form.Label>
              <Form.Control
                type="password"
                min={6} max={16}
                defaultValue={password}
                name="password"
                required
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">chose your password.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="form.password">
              <Form.Label>
                <FormattedMessage id={"app.label.repeatPassword"} />
              </Form.Label>
              <Form.Control
                type="password"
                defaultValue={repeatPassword}
                name="repeatPassword"
                required
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Repeat your password.</Form.Control.Feedback>
            </Form.Group>
            <div>
              <span>
                <FormattedMessage id={"app.auth.on.policy"} />
              </span>
            </div>
            <p>
            </p>
            <Button
              type={"submit"}
              variant="primary"
              className="main-btn wow fadeInUp"
            >
              <FormattedMessage id={"app.label.singOn"} />
            </Button>
          </>
        )}
      </Form>
      <br />
      <br />
      <Link className="wow fadeInUp" to="/auth">
        <FormattedMessage id={"app.label.singIn2"} />
      </Link>
    </Container>
  );
}

export default SingOnForm;
