import React from "react";
import Home from "../pages/Home/Home";

import globalStyles from "../styles/globalStyles";

const App = () => {
  globalStyles();
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
