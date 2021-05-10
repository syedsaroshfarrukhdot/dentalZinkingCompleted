import React from "react";
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

import bar1 from "../../images/bar1.png";
import bar2 from "../../images/bar2.png";
import bar3 from "../../images/bar3.png";

// Radial separators
import RadialSeparators from "../animation-circle/RadialSeparators";

const percentage = 66;

const StepThirteen = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const { previous, next } = navigation;


  React.useEffect(() => {
    setTimeout(() => {
     next()
    }, 4800);
  });

  return (
    <>
    <p className="header_animation">Regionale Angebote werden gesucht ...</p>
    <div className="animation">
      <Example description="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Region">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={100}
          duration={1.4}
          delay={0}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbarWithChildren
                value={value}
                strokeWidth={2}
                /* This is important to include, because if you're fully managing the
      animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({
                  pathTransition: "none",
                  pathColor: "#577b0a",
                  background: {
                    fill: "white",
                  },
                })}
              >
                <img
                   className="image_animation"
                  src={bar1}
                  alt="doge"
                />
              </CircularProgressbarWithChildren>
            );
          }}
        </AnimatedProgressProvider>
      </Example>

      <Example className="anforderungen-class" description="Anforderungen">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={100}
          duration={1.4}
          delay={1.4}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbarWithChildren
                value={value}
                strokeWidth={2}
                /* This is important to include, because if you're fully managing the
  animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({
                  pathTransition: "none",
                  pathColor: "#577b0a",
                })}
              >
                <img
                  className="image_animation"
                  src={bar2}
                  alt="doge"
                />
              </CircularProgressbarWithChildren>
            );
          }}
        </AnimatedProgressProvider>
      </Example>

      <Example description="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objekt">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={100}
          duration={1.4}
          delay={2.8}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbarWithChildren
                value={value}
                strokeWidth={2}
                /* This is important to include, because if you're fully managing the
      animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({
                  pathTransition: "none",
                  pathColor: "#577b0a",
                })}
              >
                <img
                  className="image_animation"
                  src={bar3}
                  alt="doge"
                />
              </CircularProgressbarWithChildren>
            );
          }}
        </AnimatedProgressProvider>
      </Example>
    </div>
    </>
  );
};

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 30 }}>
        <div className="animation_size_one">{props.children}</div>
        <div className="animation_size_two">
          <h3 className="h5">{props.label}</h3>
          <p className="animation_desciption">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default StepThirteen;
