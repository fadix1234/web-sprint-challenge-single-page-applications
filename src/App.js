import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Box from "./Components/Pizza";






const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      
      <nav>
        <Link id="order-pizza" to ="/">homepage</Link>&nbsp;
        <Link id="pizza-form" to ="/pizza">order-pizza</Link>&nbsp;
      </nav>
      <Routes>
        <Route path="/" element={<homepage/>} />
        <Route path="/pizza" element={<Box/>} />
      </Routes>

      

      
      <p>ORGANIC PIZZA</p>
    </div>
  );
  
};
export default App;
