import React, { useEffect, useState } from "react";
import formLogo from "../../images/beraterin.jpg";
import formImageTwo from "../../images/tuev_500.png";
import house from "../../images/house.svg";
import two from "../../images/two.svg";
import three from "../../images/three.svg";
import four from "../../images/four.svg";
import five from "../../images/five.svg";
import { Button } from "react-bootstrap";
import { Form, Col } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";

const StepOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const { next } = navigation;
  const [ssnValues, setSSNValue] = React.useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
  });

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      event.preventDefault();
      formData.Day = value;
      formData.Month = value1;
      formData.Year = value2;
      console.log(formData);
      console.log(value);
      console.log(value1);
      console.log(value2);
      next();
    }
  };
  const focusMove = (event) => {
    let { maxLength, value, min, max, name } = event.target;
    const [fieldName, fieldIndex] = name.split("-");
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 3) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  };
  const handleChange = (event) => {
    let { maxLength, value, min, max, name } = event.target;

    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setValue(value);
  };
  const handleChange1 = (event) => {
    let { value, min, max } = event.target;

    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setValue1(value);
  };
  const handleChange2 = (event) => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    setValue2(value);
  };

  return (
    <>
      <div className="site_wrapper">
        <div className="form">
          <h4 className="Form-Header">
            Ihr <strong>Geburtsdatum</strong>
          </h4>
          <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Row className="form-row-custom">
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom">Tag</Form.Label>
                  <Form.Control
                    required
                    name="ssn-1"
                    maxLength={2}
                    className="form-m-d"
                    value={value}
                    label="TT"
                    max={31}
                    placeholder="TT"
                    onChange={(event) => {
                      handleChange(event);
                      focusMove(event);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom">Monat</Form.Label>

                  <Form.Control
                    required
                    name="ssn-2"
                    maxLength={2}
                    className="form-m-d"
                    label="MM"
                    placeholder="MM"
                    value={value1}
                    max={12}
                    onChange={(event) => {
                      handleChange1(event);
                      focusMove(event);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom">Jahr</Form.Label>

                  <Form.Control
                    required
                    name="ssn-3"
                    className="form-y"
                    max={2021}
                    label="JJJJ"
                    value={value2}
                    placeholder="JJJJ"
                    onChange={(event) => {
                      handleChange2(event);
                      focusMove(event);
                    }}
                  />
                </Form.Group>
              </Form.Row>
              <div className="btn_container">
                <Button type="submit" variant="primary" value="Weiter">
                  <b>></b>
                  <span className="glyphicon glyphicon-menu-right"></span>{" "}
                  WEITER
                  <br></br>
                  <small>( Schritt 1 von 2 )</small>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="site_wrapper1">
        <div className="form-tooltipp">
          <div className="row1">
            <div className="col-xs-12">
              <div className="tooltipp">
                <div className="tooltipp-people animated zoomIn">
                  <img src={formLogo} />
                </div>
                <div className="tooltipp-text">
                  <p
                    className="animated zoomIn"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <strong>Hallo, ich bin Julia</strong> und begleite Sie durch
                    die wenigen Schritte.
                  </p>
                  <p
                    className="animated zoomIn"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Für die <strong>Erstellung Ihres Angebotes</strong> benötige
                    ich vorab <strong>Ihr Geburtsdatum</strong> und im nächsten
                    Schritt <strong>Ihr Geschlecht</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
