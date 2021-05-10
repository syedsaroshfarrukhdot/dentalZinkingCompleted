import React, { useEffect, useState } from "react";
import totalflat from "../../images/total-flat-sq.svg";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import formImageTwo from "../../images/tuev_500.png";
import { Form, Col } from "react-bootstrap";
import Checkbox from "react-custom-checkbox";
import tick from "../../images/tick.svg";
import plus from "../../images/plus-sign.png";
import styled from "styled-components";
import formLogo from "../../images/beraterin.jpg";

const Styles = styled.div`
  label : {
    font-size: 18pt;
  }
`;

const StepFive = ({ setForm, formData, navigation, colorBg }) => {
  const { StepOne } = formData;
  const [btn, setBtn] = useState(false);
  const { previous, next } = navigation;
  const [value, setValue] = useState(12);
  const [state, setState] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [color, setColor] = useState("grey");
  const [color1, setColor1] = useState("grey");
  const [color2, setColor2] = useState("grey");
  const [color4, setColor4] = useState("grey");
  const [color5, setColor5] = useState("grey");
  const [color6, setColor6] = useState("grey");
  const [color7, setColor7] = useState("grey");
  const [color8, setColor8] = useState("grey");
  const [color3, setColor3] = useState("white");
  const [bgcolor, setBGColor] = useState("white");
  const [bgcolor1, setBGColor1] = useState("white");
  const [bgcolor2, setBGColor2] = useState("white");
  const [bgcolor3, setBGColor3] = useState("white");
  const [bgcolor4, setBGColor4] = useState("white");
  const [bgcolor5, setBGColor5] = useState("white");
  const [bgcolor6, setBGColor6] = useState("white");
  const [bgcolor7, setBGColor7] = useState("white");
  const [bgcolor8, setBGColor8] = useState("white");

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  };

  React.useEffect(() => {
    if (state === true || one === true || two === true) {
      setTimeout(() => {
        console.log(formData);
        next();
      }, 800);
    }
  });

  const _onButtonClick = () => {
    setBtn(true);
  };

  return (
    <>
      <div className="site_wrapper animate__animated  animate__fadeInUp">
        <div className="form">
          <h4 className="Form-Header">
            Wie sind Sie <strong>versichert</strong>?
          </h4>
          <div>
            <Form className="">
              <Form.Row className="form-row-custom-checkbox-full-width">
                <Form.Group controlId="formGridFname">
                  <div
                    className="check-box-custom-full-width"
                    style={{ backgroundColor: bgcolor }}
                  >
                    <Styles>
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
                        size={20}
                        label="gesetzlich versichert (GKV)
                    "
                        labelStyle={{ fontSize: 20, marginLeft: 15 }}
                        onChange={(checked) => {
                          if (checked) {
                            setOne(true);
                            setState(false);
                            setTwo(false);
                            setColor("#59ADB7");
                            setBGColor("#59ADB7");
                            setColor1("grey");
                            setBGColor1("white");
                            setColor2("grey");
                            setBGColor2("white");
                            setColor3("white");
                            setBGColor3("white");
                            setColor4("grey");
                            setBGColor4("white");
                            setColor5("grey");
                            setBGColor5("white");
                            setColor6("grey");
                            setBGColor6("white");
                            setColor7("grey");
                            setBGColor7("white");
                            setColor8("grey");
                            setBGColor8("white");
                            formData.StepFive = "gesetzlich versichert (GKV)";
                          }
                          if (!checked) {
                            setColor("grey");
                            setBGColor("white");
                          }
                        }}
                      />
                    </Styles>
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row className="form-row-custom-checkbox-full-width">
                <Form.Group controlId="formGridFname">
                  <div
                    className="check-box-custom-full-width"
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
                      size={20}
                      label=" privat versichert (PKV)
                  "
                      labelStyle={{ fontSize: 20, marginLeft: 15 }}
                      onChange={(checked) => {
                        if (checked) {
                          setOne(false);
                          setState(true);
                          setTwo(false);
                          setColor1("#59ADB7");
                          setBGColor1("#59ADB7");
                          setColor("grey");
                          setBGColor("white");
                          setColor2("grey");
                          setBGColor2("white");
                          setColor3("white");
                          setBGColor3("white");
                          setColor4("grey");
                          setBGColor4("white");
                          setColor5("grey");
                          setBGColor5("white");
                          setColor6("grey");
                          setBGColor6("white");
                          setColor7("grey");
                          setBGColor7("white");
                          setColor8("grey");
                          setBGColor8("white");
                          formData.StepFive = " privat versichert (PKV)";
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
              <Form.Row className="form-row-custom-checkbox-full-width">
                <Form.Group controlId="formGridFname">
                  <div
                    className="check-box-custom-full-width"
                    style={{ backgroundColor: bgcolor2 }}
                  >
                    <Checkbox
                      name="two"
                      checked={two}
                      icon={
                        <img
                          src={tick}
                          style={{ width: 24, fill: "white" }}
                          alt=""
                        />
                      }
                      borderColor={color2}
                      borderRadius={4}
                      size={20}
                      label=" nicht versichert
                  "
                      labelStyle={{ fontSize: 20, marginLeft: 15 }}
                      onChange={(checked) => {
                        if (checked) {
                          setOne(false);
                          setState(false);
                          setTwo(true);
                          setColor2("#59ADB7");
                          setBGColor2("#59ADB7");
                          setColor("grey");
                          setBGColor("white");
                          setColor1("grey");
                          setBGColor1("white");
                          setColor3("white");
                          setBGColor3("white");
                          setColor4("grey");
                          setBGColor4("white");
                          setColor5("grey");
                          setBGColor5("white");
                          setColor6("grey");
                          setBGColor6("white");
                          setColor7("grey");
                          setBGColor7("white");
                          setColor8("grey");
                          setBGColor8("white");
                          formData.StepFive = "nicht versichert";
                        }
                        if (!checked) {
                          setColor2("grey");
                          setBGColor2("white");
                        }
                      }}
                    />
                  </div>
                </Form.Group>
              </Form.Row>
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
                    Für die Auswahl der Tarife benötigen wir Ihren
                    Vorversicherungsstatus.
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

export default StepFive;
