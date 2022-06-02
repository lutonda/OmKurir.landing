import React, { Component, useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

function SingOffForm() {
  return (
    <div className="form-wrapper-content">
      <div className="content">
        <div className="col-md-12">
          <div className="title" style={{ textAlign: "left" }}>
            <h2>
              <FormattedMessage id={"app.auth.off.title"} />
            </h2>
            <FormattedMessage id={"app.auth.off.description"} />
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
    email: "",
    stage: false,
  };

  const [state, setState] = useState<any>(initialState);
  const handleChange = (event: any) => {
    const obj: any = { [event.target.name]: event.target.value };
    setState(obj);
  };
  const { email, stage } = state;

  return (
    <Container>
      {!stage ? (
        <>
          <Form>
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
            <br />
            <br />
            <Button
              variant="primary"
              className="main-btn wow fadeInUp"
              onClick={() => setState({ stage: true })}
            >
              <FormattedMessage id={"app.label.recover"} />{" "}
              <i className="lni lni-reload"></i>
            </Button>

            <br />
            <br />
          </Form>
        </>
      ) : (
        <>
          <br />
          <br />
          <br />
          <i className="lni lni-checkmark-circle" style={{ fontSize: 100 }}></i>
          <br />
          <br />
          <br />
          <p>
            <FormattedMessage id={"app.message.sucessRecover"} />
          <hr />
          </p>
        </>
      )}
      <Link className="wow fadeInUp" to="/auth">
        <FormattedMessage id={"app.label.back"} />
      </Link>
    </Container>
  );
}

export default SingOffForm;
