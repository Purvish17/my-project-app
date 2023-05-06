import React from "react";
import DataPre from "../DataPre";




const Home = () => {
  return (
    <div data-testid='home-component'>


      <h4  data-testid ="home-title"> Cryptocurrency Prices by Market Cap</h4>


      <DataPre />
    
    </div>
  );
};

export default Home;
