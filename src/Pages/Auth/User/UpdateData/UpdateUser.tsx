import { useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";

import { UserFindAction } from "../../../../Api/Actions/UserAction";
import "../../SignOn/SignOnForm.scss";

import "./UpdateUser.scss";
import { Footer, UserHeader as Header } from "../../../Component";

import { connect } from "react-redux";
import { CompleteSingOnAction } from "../../../../Api/Actions/AuthAction";
import HeaderAddon from "../HeaderAddon";
import { FormattedMessage } from "react-intl";

const UpdateUser = (props: any) => {

  const { auth, register, singOut } = props;
  const [update, setUpdate] = useState(!auth.user.isActive)
  return (
    <>
      <Header
        title="app.footer.careers"
        Addon={() => update ? <></> : <HeaderAddon singOut={singOut} auth={auth} setUpdate={setUpdate} />}
        subTitle="app.careers.description"
      />

      <div
        id="updateUser"
        className="container single_features mt-30 features_1  wow fadeInUp"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
      >
        <div className="col-md-9 mx-auto">

          <div
            className="paylocity job-item wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="1s"
          >
            <UpdateUserForm user={auth.user} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
const UpdateUserForm = ({ user }: { user: any }) => {
  const [step, setStep] = useState(0)
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
          <div style={{ textAlign: "left" }} className="row">
            <div className="col-md-3">
              <ul className="list-group">
                <Button onClick={() => setStep(0)} className={"list-group-item" + (step === 0 ? ' active' : '')} aria-current="true">
                  <i className="lni lni-user"></i> {" "}
                  <FormattedMessage id="app.label.userdata" /></Button>
                <Button onClick={() => setStep(1)} className={"list-group-item" + (step === 1 ? ' active' : '')}>
                  <i className="lni lni-map"></i> {" "}
                  <FormattedMessage id="app.label.address" /></Button>
                <Button onClick={() => setStep(2)} className={"list-group-item" + (step === 2 ? ' active' : '')}>
                  <i className="lni lni-files"></i>{" "}
                  <FormattedMessage id="app.label.docs" />
                </Button>
                <Button onClick={() => setStep(3)} className={"list-group-item" + (step === 3 ? ' active' : '')}>
                  <i className="lni lni-image"></i>{" "}
                  <FormattedMessage id="app.label.avatar" />
                </Button>
                <Button onClick={() => setStep(3)} className={"list-group-item" + (step === 4 ? ' active' : '')}>
                  <i className="lni lni-control-panel"></i> {" "}
                  <FormattedMessage id="app.label.settings" /></Button>
              </ul>
            </div>
            <div className="col-md-9">
              <SimpleForm user={user} step={step} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SimpleForm = ({ user, step }: { user: any, step: number }) => {
  const initialState = {
    ...{
      address: [],
    }, ...user.user
  };
  const [state, setState] = useState(initialState)
  const handleChange = (event: any) =>
    setState({ ...state, ...{ [event.target.name]: event.target.value } });

  const handleChangeAddress = (address: any) =>
    setState({ ...state, ...{ address } });

  const submitChanges = () => {
    // completesingOn(state, { navigate })
  }
  const Forms = [UserDetails, AddressDetails, Attachments, Confirmation][step];

  return (<>
    <Forms
      handleChange={handleChange}
      inputValues={state}
    /></>)
}

const UserDetails = (form: any) => {
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
            <Form.Label className="label">
              <FormattedMessage id="app.label.firstName" />
            </Form.Label>
            <Form.Control
              type="text"
              defaultValue={form.inputValues.firstName}
              name="firstName"
              required
              onChange={form.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label className="label"><FormattedMessage id="app.label.lastName" /></Form.Label>
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
          <Form.Label className="label"><FormattedMessage id="app.label.emailAddress" /></Form.Label>
          <Form.Control
            type="email"
            defaultValue={form.inputValues.email}
            name="email"
            readOnly
            required
            onChange={form.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formphoneNumber">
          <Form.Label className="label"><FormattedMessage id="app.label.emailAddress" /></Form.Label>
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
          onClick={saveAndContinue}
          className="main-btn wow fadeInUp"
        ><FormattedMessage id="app.label.save" />
          <i className="lni lni-chevron-right"></i>
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
          <Form.Label><FormattedMessage id="app.label.address" /></Form.Label>
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
            <Form.Label><FormattedMessage id="app.label.city" /></Form.Label>
            <Form.Control
              type="text"
              defaultValue={address.city}
              name="city"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formProvince">
            <Form.Label><FormattedMessage id="app.label.province" /></Form.Label>
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
          <FormattedMessage id="app.label.save" /> <i className="lni lni-chevron-right"></i>
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
          variant="primary"
          onClick={saveAndContinue}
          className="main-btn wow fadeInUp"
        >
          <FormattedMessage id="app.label.save" /> <i className="lni lni-chevron-right"></i>
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
const mapStateToProps = (state: any) => {
  return { auth: state };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    findUser: (userState: any, props: any) => dispatch(UserFindAction(userState, props)),
    CompletesingOn: (userState: any, props: any) => {
      dispatch(CompleteSingOnAction(userState, props));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);