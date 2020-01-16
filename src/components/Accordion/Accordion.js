import React from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";

const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.array.isRequired
};
