import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${props => props.width};

    -webkit-appearance: none;
    appearance: none;
    @media screen and (max-device-width: 480px) and (orientation: portrait) {
      width:250px;
    }
  }


  progress[value]::-webkit-progress-bar {
    height: 5px;
    border-radius: 0px;
    background-color: white;
  }  

  progress[value]::-webkit-progress-value {
    height: 5px;
    border-radius: 0px;
    background-color: ${props => props.color};
    transition: 0.5s ease 0.3s;
  }
`;

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px"
};

export default ProgressBar;