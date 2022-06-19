import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AccordionContent from "./AccordionContent";
const useStyles = makeStyles({
  accordionBox: {
    marginTop: "10px",
    cursor: "pointer",
    "& > *": {
      // fontFamily: defaultFont,
      color: " #4a4a4a",
      fontStyle: "normal",
    },
  },
  collaseLabel: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "19px",
    color: "#9C9C9C",
  },
  refundAmount: {
    color: "#3B3B3B",
    fontWeight: 800,
    fontSize: "14px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  collapse: {
    padding: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #C4C4C4",
    borderBottom: "1px solid #C4C4C4",
  },
  arrowDown: {
    height: "20px",
    width: "20px",
  },
  arrowUp: {
    height: "20px",
    width: "20px",
    transform: "rotate(180deg)",
  },
  accordionContents: {
    padding: "0px 10px",
    color: "#3B3B3B",
    fontWeight: 800,
    fontSize: "14px",
    lineHeight: "19px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contentBox: {
    padding: "10px 0px",
    borderBottom: "1px solid #C4C4C4",
    width: "100%",
    color: "#9C9C9C",
    display: "flex",
    justifyContent: "space-between",
  },
});

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <>
      jere
      {data.map((elem, index) => {
        console.log(elem);
        <>
          <div>elem</div>
        </>;
        elem.children ? (
          <>
            <div>{elem.children}</div>
            <div>elem.children</div>
          </>
        ) : (
          <>
            <div className={classes.accordionBox}>{elem}</div>
            <div className={classes.accordionBox}>elem</div>
          </>
        );
      })}
    </>
  );
};

export default Accordion;
