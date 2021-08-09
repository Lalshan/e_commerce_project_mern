import React from "react";
import { Alert } from "react-bootstrap";

function message({ variant, clildren }) {
  return <Alert variant={variant}>{clildren}</Alert>;
}

export default message;
