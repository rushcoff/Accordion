import React from "react";
import PropTypes from "prop-types";
import s from "./Accordion.module.scss";

const Accordion = ({ children }) => {
  return <div className={s.accordion}>{children}</div>;
};

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.array.isRequired
};
