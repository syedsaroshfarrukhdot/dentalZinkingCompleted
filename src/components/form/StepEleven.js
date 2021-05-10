import React, { useEffect, useState } from "react";
import formLogo from "../../images/icon-wohngeld.png";
import formImageTwo from "../../images/tuev_500.png";
import house from "../../images/house.svg";
import two from "../../images/two.svg";
import three from "../../images/three.svg";
import four from "../../images/four.svg";
import five from "../../images/five.svg";
import { Button } from "react-bootstrap";
import { Form, Col } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import axios from "axios"

const StepOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;
  const [validated, setValidated] = useState(false);

  const { next } = navigation;

  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 12;

        return newValue;
      });
    }, 200);
  }, []);
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      console.log(formData);
      event.preventDefault();
      next();
      await axios.post(
        "https://eigenheim-backend.herokuapp.com/zinking/create-form",
        formData
      );
    }

    console.log(form.checkValidity());
  };

  return (
    <div className="site_wrapper animate__animated  animate__fadeInUp">
      <div className="form">
        <h4 className="Form-Header step11-size">
          Wie kann ich Sie <strong>zur Angebotserstellung erreichen?</strong>
        </h4>
        <div>
          <Form
            className=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Row className="form-row-custom">
              <Form.Group
                controlId="formGridFname"
                className="form-group-custom"
              >
                <Form.Label className="form-label-custom9">
                  Vor- / Nachname:
                </Form.Label>
                <Form.Control
                  required
                  className="form-address"
                  type="text"
                  label="Nachname"
                  placeholder="PLZ"
                  onChange={(event) =>
                    (formData.Nachname = event.target.value)
                  }
                />
              </Form.Group>
              <Form.Group
                controlId="formGridFname"
                className="form-group-custom"
              >
                <Form.Label className="form-label-custom9">Telefon:</Form.Label>

                <Form.Control
                  required
                  className="form-address"
                  type="number"
                  label="Telefon"
                  placeholder="lhre Telefon:"
                  onChange={(event) =>
                    (formData.Telefon = event.target.value)
                  }
                />
              </Form.Group>
              <div className="discription">
                Um alle <b>Testsieger-Vorteile</b> zu erhalten, ist eine{" "}
                <b className="bold-red">korrekte</b>{" "}
                <b>Telefonnummer notwendig.</b> Alle Aktions-Vorteile werden für
                Sie persönlich reserviert.
              </div>
              <Form.Group
                controlId="formGridFname"
                className="form-group-custom"
              >
                <Form.Label className="form-label-custom9">E-Mail:</Form.Label>

                <Form.Control
                  required
                  className="form-address"
                  type="email"
                  label="Email"
                  placeholder="lhre E-Mail:"
                  onChange={(event) =>
                    (formData.Email = event.target.value)
                  }
                />
              </Form.Group>
            </Form.Row>
            <div className="btn_container_1_single">
              <Button
                className="animation_btn"
                variant="primary"
                type="submit"
                value="Weiter"
              >
                <b>></b>
                <span className="glyphicon glyphicon-menu-right"></span> JETZT
                VERGLEICHEN
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
