import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import house from "../../images/house-sq.svg";
import formImageTwo from "../../images/tuev_500.png";
import formLogo from "../../images/beraterin.jpg";

import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../animation-circle/AnimatedProgressProvider";
import ChangingProgressProvider from "../animation-circle/ChangingProgressProvider";

// Radial separators
import RadialSeparators from "../animation-circle/RadialSeparators";

const percentage = 66;

const StepThree = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  const [value, setValue] = useState(19);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 7;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  };

  return (
    <>
      <div className="site_wrapper animate__animated  animate__fadeInUp">
        <div className="animation">
          <Example label="Sparpotential">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={58}
              duration={1.4}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbarWithChildren
                    value={value}
                    strokeWidth={6}
                    text={`${roundedValue}%`}
                    /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({
                      pathTransition: "none",
                      pathColor: "#59adb7",
                      strokeLinecap: "butt",
                      textColor: "black",
                    })}
                  >
                    <div style={{ fontSize: 25, marginTop: 25 }}>
                      <small>
                        für <span>30</span> jährige
                      </small>
                    </div>
                  </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider>
          </Example>
          <Example label="Tarifanzahl">
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={79}
              duration={1.4}
              easingFunction={easeQuadInOut}
            >
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbarWithChildren
                    value={value}
                    strokeWidth={6}
                    text={`${roundedValue}`}
                    /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                    styles={buildStyles({
                      pathTransition: "none",
                      pathColor: "#59adb7",
                      strokeLinecap: "butt",
                      textColor: "black",
                    })}
                  >
                    <div
                      style={{
                        fontSize: 25,
                        marginTop: 40,
                        width: 75,
                        lineHeight: "5px",
                        textAlign: "center",
                      }}
                    >
                      <small>Tarife wurden gefunden</small>
                    </div>
                  </CircularProgressbarWithChildren>
                );
              }}
            </AnimatedProgressProvider>
          </Example>
        </div>
        <div className="btn_container_1_single">
          <Button
            className="animation_btn"
            variant="primary"
            onClick={next}
            value="Weiter"
          >
            <b>></b>
            <span className="glyphicon glyphicon-menu-right"></span> JETZT
            VERGLEICHEN
          </Button>
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
                    Sie können <strong>jetzt</strong> weiter ( z. B. mit
                    Berufsstatus, gewünschte Leistungen ){" "}
                    <strong>
                      Ihr Sparpotential und die Tarifauswahl optimieren
                    </strong>
                    .
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

function Example(props) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ marginTop: 30 }}>
        <div>
          <h4 className="h5 aniimation-color">{props.label}</h4>
        </div>
        <div className="animation_size_one">{props.children}</div>
      </div>
    </div>
  );
}

export default StepThree;
