import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Community from './pages/Community';
import Trending from './pages/Trending';
import Notification from './pages/Notification';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/community" element={<Community />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
