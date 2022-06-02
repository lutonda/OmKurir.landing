import React, { Component, useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./SignOnForm.scss";
function SingOnForm() {
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
          <SimpleForm />
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
function SimpleForm() {
  const initialState = {
    type: NaN,
    email: "",
    password: "",
    repeatPassword: "",
  };

  const [state, setState] = useState(initialState);
  const handleChange = (event: any) => {
    const obj: any = { [event.target.name]: event.target.value };
    setState(obj);
  };

  const { type, email, password, repeatPassword } = state;
  const selectHandler = (type: number) =>setState({ type });
  return (
    <Container>
      <Form>
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
            <div className="alert alert-primary main-btn wow fadeInUp" role="alert" style={{width:'100%', textAlign:"left"}}>
              {type === 0 ? (
                <>
                  <i className="lni lni-user"></i> Creating a Personal account
                </>
              ) : (
                <>
                  <i className="lni lni-apartment"></i> Creating a Business account
                </>
              )}
            </div>
            <Form.Group controlId="form.Email">
              <Form.Label>
                <FormattedMessage id={"app.label.email"} />
              </Form.Label>
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
              <Form.Label>
                <FormattedMessage id={"app.label.password"} />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                defaultValue={password}
                name="password"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="form.password">
              <Form.Label>
                <FormattedMessage id={"app.label.repeatPassword"} />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat your password"
                defaultValue={repeatPassword}
                name="password"
                required
                onChange={handleChange}
              />
            </Form.Group>
            <div>
              <span>
                <FormattedMessage id={"app.auth.on.policy"} />
              </span>
            </div>
          </>
        )}
      </Form>
      <p>
        <hr />
      </p>
      <Button variant="primary" className="main-btn wow fadeInUp">
        <FormattedMessage id={"app.label.singOn"} />
      </Button>
      <br />
      <br />
      <Link className="wow fadeInUp" to="/auth">
        <FormattedMessage id={"app.label.singIn2"} />
      </Link>
    </Container>
  );
}

export default SingOnForm;
