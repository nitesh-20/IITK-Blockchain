import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Upload from "./pages/Upload";
import TradeSphere from "./pages/TradeSphere";
import Miner from "./pages/MoneyMiner";
import BuyToken from "./pages/BuyTokens";
import PaperTrading from "./pages/PaperTrading";
import Contest from "./pages/Contest";
import LeaderBoard from "./pages/LeaderBoard";
import Tron from "./components/Auth/Tron"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Upload" element={<Upload/>}/>
        <Route path="/TradeSphere" element={<TradeSphere/>} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/MoneyMiner" element={<Miner />} />
        <Route path="/PaperTrading" element={<PaperTrading />} />
        <Route path="/BuyTokens" element={<BuyToken />} />
        <Route path="/Tron" element={<Tron />} />

      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
