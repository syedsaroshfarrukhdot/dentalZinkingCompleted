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

const StepTwo = ({ setForm, formData, navigation, colorBg }) => {
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

  React.useEffect(() => {
    if (
      state === true ||
      one === true ||
      two === true ||
      four === true ||
      five === true ||
      six === true ||
      seven === true ||
      eight === true
    ) {
      setTimeout(() => {
        next();
        console.log(formData)
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
            Wie ist Ihr derzeitiger <strong>Berufsstatus</strong>?
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
                        label="Angestellte/r"
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
                            formData.StepFour = "Angestellte/r";
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
                      label=" Selbstständige/r"
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
                          formData.StepFour = "Selbstständige/r";
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
                      label="Beamte/r"
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
                          formData.StepFour = "Beamte/r";
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
              <Form.Row className="form-row-custom-checkbox-full-width">
                <Form.Group controlId="formGridFname">
                  <div
                    className="check-box-custom-full-width"
                    style={{ backgroundColor: bgcolor3 }}
                    onClick={_onButtonClick}
                  >
                    <Checkbox
                      name="two"
                      disabled={true}
                      checked={three}
                      icon={
                        <img
                          src={plus}
                          style={{ width: 24, fill: "white" }}
                          alt=""
                        />
                      }
                      borderColor={color3}
                      borderRadius={4}
                      size={20}
                      label="
                  weitere anzeigen "
                      labelStyle={{ fontSize: 20, marginLeft: 15 }}
                      onChange={(checked) => {
                        if (checked) {
                        }
                      }}
                    />
                  </div>
                </Form.Group>
              </Form.Row>
              {btn ? (
                <>
                  <Form.Row className="form-row-custom-checkbox-full-width">
                    <Form.Group controlId="formGridFname">
                      <div
                        className="check-box-custom-full-width"
                        style={{ backgroundColor: bgcolor4 }}
                      >
                        <Checkbox
                          name="four"
                          checked={four}
                          icon={
                            <img
                              src={tick}
                              style={{ width: 24, fill: "white" }}
                              alt=""
                            />
                          }
                          borderColor={color4}
                          borderRadius={4}
                          size={20}
                          label=" Schüler(in)
                   "
                          labelStyle={{ fontSize: 20, marginLeft: 15 }}
                          onChange={(checked) => {
                            if (checked) {
                              setOne(false);
                              setState(false);
                              setTwo(true);
                              setColor2("grey");
                              setBGColor2("white");
                              setColor("grey");
                              setBGColor("white");
                              setColor1("grey");
                              setBGColor1("white");
                              setColor3("white");
                              setBGColor3("white");
                              setColor4("#59ADB7");
                              setBGColor4("#59ADB7");
                              setColor5("grey");
                              setBGColor5("white");
                              setColor6("grey");
                              setBGColor6("white");
                              setColor7("grey");
                              setBGColor7("white");
                              setColor8("grey");
                              setBGColor8("white");
                              formData.StepFour = "Schüler(in)";
                            }
                            if (!checked) {
                              setColor4("grey");
                              setBGColor4("white");
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
                        style={{ backgroundColor: bgcolor5 }}
                      >
                        <Checkbox
                          name="two"
                          checked={five}
                          icon={
                            <img
                              src={tick}
                              style={{ width: 24, fill: "white" }}
                              alt=""
                            />
                          }
                          borderColor={color5}
                          borderRadius={4}
                          size={20}
                          label=" Auszubildende(r)
                     "
                          labelStyle={{ fontSize: 20, marginLeft: 15 }}
                          onChange={(checked) => {
                            if (checked) {
                              setOne(false);
                              setState(false);
                              setTwo(true);
                              setColor2("grey");
                              setBGColor2("white");
                              setColor("grey");
                              setBGColor("white");
                              setColor1("grey");
                              setBGColor1("white");
                              setColor3("white");
                              setBGColor3("white");
                              setColor4("grey");
                              setBGColor4("white");
                              setColor5("#59ADB7");
                              setBGColor5("#59ADB7");
                              setColor6("grey");
                              setBGColor6("white");
                              setColor7("grey");
                              setBGColor7("white");
                              setColor8("grey");
                              setBGColor8("white");
                              formData.StepFour = "Auszubildende(r)";
                            }
                            if (!checked) {
                              setColor5("grey");
                              setBGColor5("white");
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
                        style={{ backgroundColor: bgcolor6 }}
                      >
                        <Checkbox
                          name="six"
                          checked={six}
                          icon={
                            <img
                              src={tick}
                              style={{ width: 24, fill: "white" }}
                              alt=""
                            />
                          }
                          borderColor={color6}
                          borderRadius={4}
                          size={20}
                          label="Student(in)"
                          labelStyle={{ fontSize: 20, marginLeft: 15 }}
                          onChange={(checked) => {
                            if (checked) {
                              setOne(false);
                              setState(false);
                              setTwo(true);
                              setColor2("grey");
                              setBGColor2("white");
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
                              setColor6("#59ADB7");
                              setBGColor6("#59ADB7");
                              setColor7("grey");
                              setBGColor7("white");
                              setColor8("grey");
                              setBGColor8("white");
                              formData.StepFour = "Student(in)";
                            }
                            if (!checked) {
                              setColor6("grey");
                              setBGColor6("white");
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
                        style={{ backgroundColor: bgcolor7 }}
                      >
                        <Checkbox
                          name="seven"
                          checked={seven}
                          icon={
                            <img
                              src={tick}
                              style={{ width: 24, fill: "white" }}
                              alt=""
                            />
                          }
                          borderColor={color7}
                          borderRadius={4}
                          size={20}
                          label="Hausfrau / Hausmann "
                          labelStyle={{ fontSize: 20, marginLeft: 15 }}
                          onChange={(checked) => {
                            if (checked) {
                              setOne(false);
                              setState(false);
                              setTwo(true);
                              setColor2("grey");
                              setBGColor2("white");
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
                              setColor7("#59ADB7");
                              setBGColor7("#59ADB7");
                              setColor8("grey");
                              setBGColor8("white");
                              formData.StepFour = "Hausfrau/Hausmann";
                            }
                            if (!checked) {
                              setColor7("grey");
                              setBGColor7("white");
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
                        style={{ backgroundColor: bgcolor8 }}
                      >
                        <Checkbox
                          name="eight"
                          checked={eight}
                          icon={
                            <img
                              src={tick}
                              style={{ width: 24, fill: "white" }}
                              alt=""
                            />
                          }
                          borderColor={color8}
                          borderRadius={4}
                          size={20}
                          label="Rentner(in)"
                          labelStyle={{ fontSize: 20, marginLeft: 15 }}
                          onChange={(checked) => {
                            if (checked) {
                              setOne(false);
                              setState(false);
                              setTwo(true);
                              setColor2("grey");
                              setBGColor2("white");
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
                              setColor8("#59ADB7");
                              setBGColor8("#59ADB7");
                              formData.StepFour = "Rentner(in)";
                            }
                            if (!checked) {
                              setColor8("grey");
                              setBGColor8("white");
                            }
                          }}
                        />
                      </div>
                    </Form.Group>
                  </Form.Row>
                </>
              ) : null}
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
                    Für eine <strong>korrekte Berechnung</strong> des Beitrags
                    ist <strong>Ihr Berufsstatus wichtig</strong>.
                  </p>
                  <p
                    className="animated zoomIn"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <strong>
                      Der Beitrag unterscheidet sich je nach Berufsstatus stark.
                    </strong>
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

export default StepTwo;
