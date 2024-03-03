import React from "react";
import { createUseStyles } from "react-jss";

import list from "../../assets/svgs/list.svg";

const styles = createUseStyles({
  button: {
    display: "flex",
    backgroundColor: "red",
  },
  img: {
    width: 300,
    height: "auto",
  },
});

const Home = () => {
  const classes = styles();
  return (
    <div className={classes.button}>
      <img src={list} alt="" className={classes.img} />
    </div>
  );
};

export default Home;
