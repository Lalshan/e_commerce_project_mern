import React from "react";
import { Button, Spinner } from "react-bootstrap";

function loader() {
  return (
    <Button
      variant="primary"
      disabled
      style={{
        witht: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  );
}

export default loader;
