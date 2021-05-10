import React, { useEffect, useState } from "react";
import formImageTwo from "../../images/tuev_500.png";
import house from "../../images/house.svg";
import two from "../../images/two.svg";
import three from "../../images/three.svg";
import four from "../../images/four.svg";
import five from "../../images/five.svg";
import { Button } from "react-bootstrap";
import { Form, Col } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import formLogo from "../../images/beraterin.jpg";

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
    }

    console.log(form.checkValidity());
  };

  return (
    <>
      <div className="site_wrapper animate__animated  animate__fadeInUp">
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
                  <Form.Label className="form-label-custom9">PLZ</Form.Label>
                  <Form.Control
                    required
                    className="form-place"
                    type="text"
                    label="PLZ"
                    placeholder="PLZ"
                    onChange={(event) =>
                      (formData.PLZ = event.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom9">Ort</Form.Label>

                  <Form.Control
                    required
                    className="form-postcode"
                    type="text"
                    label="Ort"
                    placeholder="Ort"
                    onChange={(event) =>
                      (formData.ORT = event.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Form.Label className="form-label-custom9">
                    Straße / Nr.
                  </Form.Label>

                  <Form.Control
                    required
                    className="form-address"
                    type="text"
                    label="Straße / Nr."
                    placeholder="Straße / Nr."
                    onChange={(event) =>
                      (formData.Straße = event.target.value)
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
                  <span className="glyphicon glyphicon-menu-right"></span>{" "}
                  WEITER
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
                    Um die{" "}
                    <strong>
                      besten Ersparnisse Ihrer regionalen Absicherung
                    </strong>{" "}
                    zu ermitteln, geben Sie bitte Ihre Anschrift ein.
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
