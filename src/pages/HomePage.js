import React from "react";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};

export default HomePage;
