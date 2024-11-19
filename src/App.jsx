import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Contactpage from "./pages/Contactpage";
import Register from "./component/Register"
import Chart from "./component/Chart";
import Hammer from "./Candlestick/Hammer"
import Bullish from "./Candlestick/Bullish_engulfing"
import InverseHammer from "./Candlestick/InverseHammer"
import Eveningstar from "./Candlestick/EveningStar"
import Morningstar from "./Candlestick/MorningStar"
import Piercingline from "./Candlestick/PiercingLine"
import Shootingstar from "./Candlestick/ShootingStar"
import TWS from "./Candlestick/ThreeWhiteSoldiers"
import Crypto from "./component/Crypto";

function App() {
  return (
    <div className="MainApp">
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={Aboutpage} />
        <Route path="/chart" Component={Chart} />
        <Route path="/service" Component={Servicepage} />
        <Route path="/contact" Component={Contactpage} />
        <Route path="/register" Component={Register} />
        <Route path="/hammer" Component={Hammer} />
        <Route path="/bullishengulfing" Component={Bullish} />
        <Route path="/inversehammer" Component={InverseHammer} />
        <Route path="/eveningstar" Component={Eveningstar} />
        <Route path="/morningstar" Component={Morningstar} />
        <Route path="/piercingline" Component={Piercingline} />
        <Route path="/shootingstar" Component={Shootingstar} />
        <Route path="/threewhitesoldiers" Component={TWS} />
        <Route path="/crypto" Component={Crypto} />
      </Routes>
    </div>
  );
}

export default App;

