import React, { useEffect, useState } from "react";
import formLogo from "../../images/beraterin.jpg";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import formImageTwo from "../../images/tuev_500.png";
import { Form, Col } from "react-bootstrap";
import Checkbox from "react-custom-checkbox";
import tick from "../../images/tick.svg";
import Styled from "styled-components";

const Container = Styled.div`
check-boc-custom{
  background-color :${(props) => props.colorBg};
}  
`;

const StepTwo = ({ setForm, formData, navigation, colorBg }) => {
  const { StepOne } = formData;

  const { previous, next } = navigation;
  const [value, setValue] = useState(12);
  const [state, setState] = useState(false);
  const [one, setOne] = useState(false);
  const [color, setColor] = useState("grey");
  const [color1, setColor1] = useState("grey");
  const [bgcolor, setBGColor] = useState("white");
  const [bgcolor1, setBGColor1] = useState("white");

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  };

  React.useEffect(() => {
    if (state === true || one === true) {
      setTimeout(() => {}, 500);
    }
  });

  return (
    <>
      <div className="site_wrapper animate__animated  animate__fadeInUp">
        <div className="form">
          <h4 className="Form-Header">
            Ihr <strong>Geburtsdatum</strong>
          </h4>
          <div>
            <Form className="">
              <Form.Row className="form-row-custom-checkbox">
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <Container>
                    <div
                      className="check-boc-custom"
                      style={{ backgroundColor: bgcolor }}
                    >
                      <Checkbox
                        name="one"
                        checked={one}
                        icon={
                          <img
                            src={tick}
                            style={{ width: 24, fill: "white" }}
                            alt=""
                          />
                        }
                        borderColor={color}
                        borderRadius={4}
                        size={24}
                        label="weiblich"
                        onChange={(checked) => {
                          if (checked) {
                            setOne(true);
                            setState(false);
                            setColor("#59ADB7");
                            setBGColor("#59ADB7");
                            setColor1("grey");
                            setBGColor1("white");
                            formData.StepTwo = "weiblich";
                          }
                          if (!checked) {
                            setColor("grey");
                            setBGColor("white");
                          }
                        }}
                      />
                    </div>
                  </Container>
                </Form.Group>
                <Form.Group
                  controlId="formGridFname"
                  className="form-group-custom"
                >
                  <div
                    className="check-boc-custom"
                    style={{ backgroundColor: bgcolor1 }}
                  >
                    <Checkbox
                      name="two"
                      checked={state}
                      icon={
                        <img
                          src={tick}
                          style={{ width: 24, fill: "white" }}
                          alt=""
                        />
                      }
                      borderColor={color1}
                      borderRadius={4}
                      size={24}
                      label="männlich"
                      onChange={(checked) => {
                        if (checked) {
                          setOne(false);
                          setState(true);
                          setColor1("#59ADB7");
                          setBGColor1("#59ADB7");
                          setColor("grey");
                          setBGColor("white");
                          formData.StepTwo = "männlich";
                        }
                        if (!checked) {
                          setColor1("grey");
                          setBGColor1("white");
                        }
                      }}
                    />
                  </div>
                </Form.Group>
              </Form.Row>
            </Form>
          </div>

          <div className="btn_container">
            <Button
              variant="primary"
              onClick={() => {
                next();
                console.log(formData)
              }}
              value="Weiter"
            >
              <b>></b>
              <span className="glyphicon glyphicon-menu-right"></span> WEITER
              <br></br>
              <small>( Schritt 2 von 2 )</small>
            </Button>
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
                    <strong>Prima!</strong> Die{" "}
                    <strong>
                      Suche nach Testsieger Tarifen / Ihr Sparpotential
                    </strong>{" "}
                    für <span class="faq_0_answer">29</span> jährige kann gleich{" "}
                    <strong>starten</strong>.
                  </p>
                  <p
                    className="animated zoomIn"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Ich <strong>benötige</strong> nur noch die Angabe Ihres{" "}
                    <strong>Ihr Geschlechtes</strong>.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
