import React, { useEffect, useState } from "react";
import totalflat from "../../images/total-flat-sq.svg";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import formImageTwo from "../../images/tuev_500.png";
import formLogo from "../../images/beraterin.jpg";

const StepEight = ({ setForm, formData, navigation }) => {
  const { StepOne } = formData;

  const { previous, next } = navigation;
  const [value, setValue] = useState(12);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 7;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepEight = statefromchild;
  };

  return (
    <>
      <div className="site_wrapper animate__animated  animate__fadeInUp">
        <div className="form">
          <h4 className="Form-Header">
            Wünschen Sie eine <strong>Selbstbeteiligung</strong>?
          </h4>
          <div className="">
            <div className="">
              <Slider
                left_text="<50 m²"
                right_text=">500 m²"
                value="0"
                min="0"
                max="450"
                step="150"
                unit="m²"
                text="Alternativ eintippen"
                callBackFromParent={myCallBack}
              />
            </div>
          </div>
          <div className="btn_container_1_single">
            <Button
              className="animation_btn"
              variant="primary"
              onClick={() => {
                next();
                console.log(formData)
              }}
              value="Weiter"
            >
              <b>></b>
              <span className="glyphicon glyphicon-menu-right"></span> WEITER
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
                    Wählen Sie Ihre Selbstbeteiligung pro Jahr. Desto{" "}
                    <strong>höher Ihre Selbstbteiligung</strong> im
                    Krankheitsfalls <strong>desto höher Ihre Ersparnis</strong>.
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

export default StepEight;
