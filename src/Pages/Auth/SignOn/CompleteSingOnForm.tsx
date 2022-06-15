import React, { Component, useEffect, useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { CompleteSingOnAction } from "../../../Api/Actions/AuthAction";
import { UserFindAction } from "../../../Api/Actions/UserAction";
import "./SignOnForm.scss";
const CompleteSingOnForm = ({ user, CompletesingOn, findUser }: { user: any, CompletesingOn: any, findUser: any }) => {
  return (
    <div
      id="singOnForm"
      className="form-wrapper-box push-into-header  wow fadeInUp"
      data-wow-duration="1.3s"
      data-wow-delay="0.2s"
      style={{ width: "100%", paddingTop: 0 }}
    >
      <div className="form-wrapper-content">
        <div className="content">
          <div className="col-md-12 title-wrapper">
            <div className="title" style={{ textAlign: "left" }}>
              <hr />

              <h2><FormattedMessage id="app.auth.on.complete" /></h2>
              <FormattedMessage id="app.auth.on.completeObs" />
            </div>

            <div className="subtitle"></div>
          </div>
          <div style={{ textAlign: "left" }}>
            <MultiStepForm user={user} completesingOn={CompletesingOn} />
          </div>
        </div>
      </div>
    </div>
  );
}

const MultiStepForm = ({ user, completesingOn }: { user: any, completesingOn: any }) => {

  const initialState = {
    ...{
      step: 0,
      total: 3,
      address: [],
    }, ...user.user
  };
  const { addToast } = useToasts();
  const [state, setState] = useState(initialState)

  const navigate = useNavigate();
  const nextStep = () => {
    const { step } = state;
    setState({
      ...state, ...{
        step: step + 1,
      }
    });
  };

  const prevStep = () => {
    const { step } = state;
    setState({
      ...state, ...{
        step: step - 1,
      }
    });
  };

  const handleChange = (event: any) =>
    setState({ ...state, ...{ [event.target.name]: event.target.value } });

  const handleChangeAddress = (address: any) =>
    setState({ ...state, ...{ address } });

  const submitChanges = () => {
    completesingOn(state, { navigate, addToast })
  }
  const {
    total,
    step,
  } = state;

  switch (step) {
    case 0:
      return (
        <>
          <ProgressBar step={step} total={total} />
          <br />
          <UserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            inputValues={state}
          />
        </>
      );
    case 1:
      return (
        <>
          <ProgressBar step={step} total={total} />
          <br />
          <AddressDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChangeAddress}
            inputValues={state}
          />
        </>
      );
    case 2:
      return (
        <>
          <ProgressBar step={step} total={total} />
          <br />
          <Attachments
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            inputValues={state}
          />
        </>
      );
    case 3:
      return (
        <>
          <ProgressBar step={step} total={total} />
          <br />
          <Confirmation
            submit={submitChanges}
            prevStep={prevStep}
            inputValues={state}
          />
        </>
      );
    default:
      return <></>
  }
}

const UserDetails = (form: any) => {

  const [validated, setValidated] = useState(false);
  const [formValidation, setFormValidation] = useState<Anonymous>();

  const saveAndContinue = (e: any) => {
    debugger
    setValidated(false);
    const f = e.currentTarget;
    if (f.checkValidity() === true) {
      setValidated(true);
      form.nextStep();
    } else {
      setValidated(false);
    }

    e.preventDefault();
    e.stopPropagation();
    // return false

  };

  const valid = (t: any): boolean => {
    switch (t.type) {
      case 'text':
        return t.value.length > 3;
        break;
      case 'telephone':
        return t.value.length > 8 && t.value.length < 13
        break;
      default:
        return true;
        break;
    }
  }
  interface Anonymous {
    [key: string]: any
  }

  const handleChange = (e: any) => {
    let i: Anonymous = {}
    i[e.target.name] = valid(e.target)
    debugger
    setFormValidation({ ...formValidation, ...i });
    form.handleChange(e)
  }
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={saveAndContinue}>
        <Row>
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label className="label">First Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={form.inputValues.firstName}
              name="firstName"
              required
              onChange={handleChange}
            />
            {formValidation?.firstName ? <small className="invalid-feedback error" style={{display: block}}>this field is required</small> : <></>}
            <Form.Control.Feedback type="invalid">Enter your valid E-mail.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="form.LastName">
            <Form.Label className="label">Last Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={form.inputValues.lastName}
              name="lastName"
              required
              onChange={form.handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="form.Email">
          <Form.Label className="label">Email Address</Form.Label>
          <Form.Control
            type="email"
            defaultValue={form.inputValues.email}
            name="email"
            readOnly
            required
          // onChange={form.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="form.PhoneNumber">
          <Form.Label className="label">Phone Number</Form.Label>
          <Form.Control
            type="text"
            defaultValue={form.inputValues.phoneNumber}
            name="phoneNumber"
            required
            isValid={false}
            onChange={form.handleChange}
          />
        </Form.Group>
        <p>
          <hr />
        </p>
        <Button
          variant="primary"
          type="submit"
          /*onClick={saveAndContinue}*/
          className="main-btn wow fadeInUp"
        >
          Next <i className="lni lni-chevron-right"></i>
        </Button>
      </Form>
    </Container>
  );
}

const AddressDetails = (form: any) => {
  const [address, setAddress] = useState(form.inputValues.address[0] ?? {})
  const back = (e: any) => {
    e.preventDefault();
    form.prevStep();
  };

  const saveAndContinue = (e: any) => {
    e.preventDefault();
    form.nextStep();
  };
  const handleChange = (event: any) => {
    let newAddress = { ...address, ...{ [event.target.name]: event.target.value } };
    setAddress(newAddress)
    form.handleChange([newAddress])
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            defaultValue={address.address}
            name="address"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              defaultValue={address.city}
              name="city"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formProvince">
            <Form.Label>Province</Form.Label>
            <Form.Control
              as="select"
              name="province"
              defaultValue={address.province}
              onChange={handleChange}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <p>
          <hr />
        </p>
        <Button
          variant="secondary"
          onClick={back}
          className="main-btn wow fadeInUp"
        >
          <i className="lni lni-chevron-left"></i>
          Back
        </Button>{" "}
        <Button
          variant="primary"
          onClick={saveAndContinue}
          className="main-btn wow fadeInUp"
        >
          Next <i className="lni lni-chevron-right"></i>
        </Button>
      </Form>
    </Container>
  );
}

const Attachments = (form: any) => {
  const back = (e: any) => {
    e.preventDefault();
    form.prevStep();
  };

  const saveAndContinue = (e: any) => {
    e.preventDefault();
    form.nextStep();
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formKtp">
          <Form.Label>KTP</Form.Label>
          <Form.Control
            type="file"
            defaultValue={form.inputValues.ktp}
            name="ktp"
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formSim">
          <Form.Label>SIM</Form.Label>
          <Form.Control
            type="file"
            defaultValue={form.inputValues.sim}
            name="sim"
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formStnk">
          <Form.Label>STNK</Form.Label>
          <Form.Control
            type="file"
            defaultValue={form.inputValues.stnk}
            name="stnk"
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formSkck">
          <Form.Label>SKCK</Form.Label>
          <Form.Control
            type="file"
            defaultValue={form.inputValues.skck}
            name="skck"
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <p>
          <hr />
        </p>
        <Button
          variant="secondary"
          onClick={back}
          className="main-btn wow fadeInUp"
        >
          <i className="lni lni-chevron-left"></i>
          Back
        </Button>{" "}
        <Button
          variant="primary"
          onClick={saveAndContinue}
          className="main-btn wow fadeInUp"
        >
          Next <i className="lni lni-chevron-right"></i>
        </Button>
      </Form>
    </Container>
  );
}

const Confirmation = (form: any) => {
  const back = (e: any) => {
    e.preventDefault();
    form.prevStep();
  };

  const saveAndContinue = (e: any) => {
    e.preventDefault();
    form.submit();
  };

  const {
    inputValues: { firstName, lastName, email, address, city, state, zip },
  } = form;

  return (
    <Container>
      <i className="lni lni-checkmark-circle" style={{ fontSize: 82 }}></i>
      <h1>Confirm your Details</h1>
      <p>Confirm if the following details are correct.</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      {address.map(({ address, city, province }: { address: string, city: string, province: string }) => {

        return (<>
          <p>Adress: {address}</p>
          <p>City: {city}</p>
          <p>State: {province}</p>
        </>)
      })}
      <p>
        <hr />
      </p>
      <Button
        variant="secondary"
        onClick={back}
        className="main-btn wow fadeInUp"
      >
        <i className="lni lni-chevron-left"></i> Back
      </Button>{" "}
      <Button variant="primary" className="main-btn wow fadeInUp" onClick={saveAndContinue}>
        Confirm {" "}
        <i className="lni lni-checkmark"></i>
      </Button>
    </Container >
  );
}
const ProgressBar = ({ step, total }: { step: number; total: number }) => {
  return (
    <div className="col-md-12">
      <div className="progress" style={{ height: 5 }}>
        <div
          className={
            "progress-bar progress-bar-striped progress-bar-animated " +
            (step === total ? "bg-success" : "")
          }
          style={{ width: (step * 100) / total + "%" }}
        ></div>
      </div>
    </div>
  );
};
// export default CompleteSingOnForm;

const mapStateToProps = (state: any) => {
  return { user: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    findUser: (userState: any, props: any) => dispatch(UserFindAction(userState, props)),
    CompletesingOn: (userState: any, props: any) => {
      dispatch(CompleteSingOnAction(userState, props));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CompleteSingOnForm);