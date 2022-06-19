import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  contentBox: {
    padding: "10px 0px",
    borderBottom: "1px solid #C4C4C4",
    width: "100%",
    color: "#9C9C9C",
    display: "flex",
    justifyContent: "space-between",
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
});

const AccordionContent = ({ index, title, value }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contentBox} key={index}>
        <span>{title}</span>
        <span className={classes.refundAmount}>{value}</span>
      </div>
    </>
  );
};

export default AccordionContent;
