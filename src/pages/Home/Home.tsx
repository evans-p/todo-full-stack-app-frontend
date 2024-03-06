import React from "react";

import style from "./style";
import list from "../../assets/images/list.png";

const Home = () => {
  const styles = style();
  return (
    <div className={styles.button}>
      <img src={list} alt="" className={styles.img} />
    </div>
  );
};

export default Home;
