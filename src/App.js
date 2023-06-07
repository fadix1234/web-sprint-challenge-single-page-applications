import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pizza from "./Components/Pizza";
import Homepage from './Components/Homepage';







const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      
      <nav>
        <Link id="order-pizza" to ="/">Homepage</Link>&nbsp;
        <Link id="pizza-form" to ="/pizza">order-pizza</Link>&nbsp;
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pizza" element={<Pizza/>} />
      </Routes>

      

      
      <p>ORGANIC PIZZA</p>
    </div>
  );
  
};
export default App;
