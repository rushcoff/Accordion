import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import s from "./Accordion.module.scss";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderKeyPress = e => {
    e.stopPropagation();

    if (e.key === " ") {
      setIsOpen(!isOpen);
    }
  };

  const handleHeaderClick = e => {
    e.stopPropagation();

    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(s.item, { [s.opened]: isOpen })}
      onKeyPress={handleHeaderKeyPress}
      tabIndex="0"
    >
      <div className={s.header} onClick={handleHeaderClick}>
        <span className={s.title}>{title}</span>
        <span className={s.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </span>
      </div>
      {isOpen && <div className={s.content}>{children}</div>}
    </div>
  );
};

export default AccordionItem;

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};
