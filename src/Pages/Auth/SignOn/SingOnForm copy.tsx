import React, { Component } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import "./SignOnForm.scss";
function SingOnForm() {
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
              <h2>Business Partners submition form</h2>
              Contact us today to get your customers’ purchases from your
              business to their home with same day and scheduled delivery. Want
              to deliver for PICKUP? Sign Up Now
            </div>

            <div className="subtitle"></div>
          </div>
          <div style={{ textAlign: "left" }}>
            <MultiStepForm />
          </div>
        </div>
      </div>
    </div>
  );
}

class MultiStepForm extends Component {
  state = {
    step: 0,
    total: 4,
    type: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      total,
      step,
      type,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
      zip,
    } = this.state;
    const inputValues = {
      type,
      firstName,
      lastName,
      email,
      address,
      city,
      state,
      zip,
      phoneNumber,
    };
    switch (step) {
      case 0:
        return (
          <>
            <ProgressBar step={step} total={total} />
            <br />
            <RegistationType
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              inputValues={inputValues}
            />
          </>
        );
      case 1:
        return (
          <>
            <ProgressBar step={step} total={total} />
            <br />
            <UserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              inputValues={inputValues}
            />
          </>
        );
      case 2:
        return (
          <>
            <ProgressBar step={step} total={total} />
            <br />
            <AddressDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              inputValues={inputValues}
            />
          </>
        );
      case 3:
        return (
          <>
            <ProgressBar step={step} total={total} />
            <br />
            <Attachments
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              inputValues={inputValues}
            />
          </>
        );
      case 4:
        return (
          <>
            <ProgressBar step={step} total={total} />
            <br />
            <Confirmation
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              inputValues={inputValues}
            />
          </>
        );
    }
  }
}

function RegistationType(form: any) {
  const {
    inputValues: { type },
  } = form;

  const back = (e: any) => {
    e.preventDefault();
    form.prevStep();
  };

  const saveAndContinue = (e: any) => {
    e.preventDefault();
    form.nextStep();
  };

  const selectHandler = (t: number) => {
    form.handleChange({ target: { name: "type", value: t } });
  };
  return (
    <Container id="registationType">
      <Form>
        <Row>
          <div className="col-md-12">
            <div className="col-md-8 mx-auto">
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
          </div>
        </Row>
        <p>
          <hr />
        </p>
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
function UserDetails(form: any) {
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
        <Row>
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label className="label">First Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={form.inputValues.firstName}
              name="firstName"
              required
              onChange={form.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
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

        <Form.Group controlId="formEmail">
          <Form.Label className="label">Email Address</Form.Label>
          <Form.Control
            type="email"
            defaultValue={form.inputValues.email}
            name="email"
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhoneNumber">
          <Form.Label className="label">Phone Number</Form.Label>
          <Form.Control
            type="text"
            defaultValue={form.inputValues.phoneNumber}
            name="phoneNumber"
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <p>
          <hr />
        </p>
        <Button
          variant="primary"
          onClick={back}
          className="main-btn wow fadeInUp"
        >
          <i className="lni lni-chevron-left"></i> Back 
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

function AddressDetails(form: any) {
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
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            defaultValue={form.inputValues.address}
            name="address"
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              defaultValue={form.inputValues.city}
              name="city"
              required
              onChange={form.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              name="state"
              defaultValue={form.inputValues.state}
              onChange={form.handleChange}
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

          <Form.Group as={Col} controlId="formZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              defaultValue={form.inputValues.zip}
              name="zip"
              required
              onChange={form.handleChange}
            />
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

function Attachments(form: any) {
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

function Confirmation(form: any) {
  const back = (e: any) => {
    e.preventDefault();
    form.prevStep();
  };

  const saveAndContinue = (e: any) => {
    e.preventDefault();
    form.nextStep();
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
      <p>Adress: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zip}</p>
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
      <Button variant="primary" className="main-btn wow fadeInUp">
        Confirm
        <i className="lni lni-checkmark"></i>
      </Button>
    </Container>
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
export default SingOnForm;
