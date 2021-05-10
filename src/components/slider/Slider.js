import React, { useState } from "react";
import styled from "styled-components";
import NumberFormat from "./NumberFormat";
import { Button, ButtonGroup } from "react-bootstrap";

const sliderThumbStyles = (props) => `
    width:25px;
    height:25px;
    border-radius: 50%; 
    padding:10px;
    background :#004B54;
    cursor : pointer;
    -webkit-transition : .2s;
    transition : opacity .2s
   
  
   
`;

const Styles = styled.div`
  flex-direction: column;
  align-items: center;
  color: #004b54;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 4rem;
  margin-right: 5rem;

  @media (max-width: 600px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  input {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    min-height: 45px;
    overflow: hidden;
    width: 100%;
  }

  input:focus {
    box-shadow: none;
    outline: none;
  }

  input::-webkit-slider-runnable-track {
    background: white;
    content: "";
    height: 8px;
    pointer-events: none;
  }

  input::-webkit-slider-thumb {
    height: 35px;
    width: 35px;
    -webkit-appearance: none;
    appearance: none;
    background: #59adb7;
    border-radius: 50%;
    box-shadow: white !important;
    margin-top: -12px;
    border: 1px solid #777;
  }

  input::-moz-range-track {
    width: 400px;
    height: 2px;
  }

  input::-moz-range-thumb {
    height: 25px;
    width: 25px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #777;
    position: relative;
  }

  input::-moz-range-progress {
    height: 2px;
    background: #e33d44;
    border: 0;
    margin-top: 0;
  }

  input::-ms-track {
    background: transparent;
    border: 0;
    border-color: transparent;
    border-radius: 0;
    border-width: 0;
    color: transparent;
    height: 2px;
    margin-top: 10px;
    width: 240px;
  }

  input::-ms-thumb {
    height: 18px;
    width: 28px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #777;
  }

  input::-ms-fill-lower {
    background: #e33d44;
    border-radius: 0;
  }

  input::-ms-fill-upper {
    background: #c7c7c7;
    border-radius: 0;
  }

  input::-ms-tooltip {
    display: none;
  }
`;
export default class Slider extends React.Component {
  state = {
    value: this.props.value,
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.callBackFromParent(e.target.value);
  };

  render() {
    return (
      <div data={this.state}>
        <Styles
          min={this.props.min}
          max={this.props.max}
          value={this.state.value}
        >
          <div>
            <div className="bordercolor">
              <div className="value_class">{this.state.value} EUR</div>
            </div>

            <input
              type="range"
              min={this.props.min}
              max={this.props.max}
              value={this.state.value}
              onChange={this.handleOnChange}
              className="slider"
              step={this.props.step}
            />
          </div>
        </Styles>
      </div>
    );
  }
}
