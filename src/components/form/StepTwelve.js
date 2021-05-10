import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import { Form, Col } from "react-bootstrap";
import formImageTwo from "../../images/tuev_500.png";
import axios from 'axios'

const StepThree = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    address,
    postcode,
    place,
    email,
    phone,
  } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(91.3);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 8.7;

        return newValue;
      });
    }, 200);
  }, []);

  return (
    <div className="form">
      <p className="text_form_step_2">
        Erhalten Sie jetzt 3 unverbindliche<br></br> Finanzierungsangebote aus
        Ihrer Region:
      </p>

      <div className="btn_container">
        <Form className="form_container">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFrau">
              <Form.Check
                className="form_checkbox"
                type="checkbox"
                label="Frau"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridHerr">
              <Form.Check
                className="form_checkbox"
                type="checkbox"
                label="Herr"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFname">
              <Form.Control
                type="text"
                label="Vorname"
                placeholder="Vorname"
                onChange={(event)=> formData.firstName = event.target.value}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLName">
              <Form.Control
                type="text"
                label="Nachname"
                placeholder="Nachname"
                onChange={(e)=> {formData.lastName = e.target.value}}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Control
              label="Straße und Hausnummer"
              placeholder="Straße und Hausnummer"
             
              onChange={(e)=> {formData.address = e.target.value}}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control
                label="PLZ"
                placeholder="PLZ"
             
                onChange={(e)=> {formData.postcode = e.target.value}}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                label="Ort"
                placeholder="Ort"
                
                onChange={(e)=> {formData.place = e.target.value}}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="email"
                label="Email"
                placeholder="E-Mail"
              
                onChange={(e)=> {formData.email = e.target.value}}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Control
                type="text"
                label="Telefon"
                placeholder="Telefon"
                onChange={(e)=> {formData.phone = e.target.value}}
              />
            </Form.Group>
          </Form.Row>

          <div className="align_btn">
            <Button
              variant="primary"
              
              value="Weiter"
              className="btn-last"
              onClick = {async () => {
                next()
                await axios
                  .post("http://localhost:8080/create-form/", formData);
                  
              }
            }
            >
              <span>Angebote erhalten</span>
              <br></br>
              <span className="btn_text">100% unverbindlich</span>
            </Button>
          </div>
        </Form>
      </div>

      <div className="progress_bar_container">
        <div className="progress_align">
          <ProgressBar
            color={"#577B0A"}
            width={"300px"}
            value={value}
            max={100}
          />
        </div>
      </div>

      <img src={formImageTwo} alt="img" className="imageCover" />
    </div>
  );
};

export default StepThree;
