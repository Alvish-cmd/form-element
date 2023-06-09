/*
 *** This piece of code is written by Hemang Kanojiya ***
 */

import React from "react";

import classes from "./FieldSet.module.css";

export default class FieldSet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { field, children, className } = this.props;
    return (
      <>
        <fieldset
          className={`${className} ${classes.__fieldset}`}
          {...this.props}
        >
          <legend>{field ? field : "form"}</legend>
          {children}
        </fieldset>
      </>
    );
  }
}
