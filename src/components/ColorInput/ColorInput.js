/*
 *** This piece of code is written by Sandeep Yadav ***
 */

import React from "react";

import classes from "./ColorInput.module.css";

export default class ColorInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value } = this.props;
    return (
      <div className={classes.color__input__wrapper}>
        <input type="color" {...this.props} value={value} />
      </div>
    );
  }
}
