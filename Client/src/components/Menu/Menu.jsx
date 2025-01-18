import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants'; // Ensure correct path
import './Menu.css';
import hero from '../../assets/hero_vdo.mp4';

const Menu = () => {
  return (
    <div className="main">
      <div className="wealth-advisory">
        <div className="content">
          <motion.div
            variants={fadeIn('up', 0.3)} // Call fadeIn as a function
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="text-section"
          >
            <h1 className="title">
              Global #1 Trusted <br />
              Wealth Research Platform
            </h1>
            <p className="desc">
              Generate proposals, create reports, and manage portfolios with ease. Our AI-powered platform ensures simplicity and delivers a 15% profit every month.
            </p>
            <div className="money-pa">
              <button className="money-btn">Your Ultimate Money Making</button>
            </div>
          </motion.div>

          {/* Right Side: Video */}
          <div className="right-contain">
            <video src={hero} autoPlay loop muted></video>
          </div>
        </div>

        {/* Signup Section */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className="signup"
        >
          <button className="sign-btn">Signup for free</button>
        </motion.div>

        {/* Divider Line */}
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Menu;
