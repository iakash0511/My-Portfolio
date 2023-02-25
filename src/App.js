import React from "react";
import { Routes,Route } from "react-router-dom";
import HomePageComponent from "./Components/Home/HomePageComponent";
import Professional from "./Components/Links/Professional";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
      <Route path='/professional' element={<Professional/>}/>
      </Routes>
    </div>
  );
}

export default App;
