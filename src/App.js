import React from "react";
import Home from "./Components/Home";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MHT from "./MHT.json"
import Insideformat from "./Components/Insideformat/Insideformat";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

      {MHT.map((Element) => (
        <Route path={"/"+Element.Title} element={<Insideformat data={Element.questions}/>} />
      ))}

        
      </Routes>
      </Router>

    </>
  );
};

export default App;
