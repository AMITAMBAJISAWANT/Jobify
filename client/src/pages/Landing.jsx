import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <motion.div
          className="info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Job <span>Application Tracker</span>
          </h1>
          <p>
            Keep track of all your job applications in one place. Add new jobs,
            update their status, and view everything neatly from a single
            dashboard
          </p>
          <div className="btn-group">
            <Link to="/register" className="btn primary-btn">
              Get Started
            </Link>
            <Link to="/login" className="btn secondary-btn">
              Login / Explore the App
            </Link>
          </div>
        </motion.div>

        <motion.img
          src={main}
          alt="job hunt"
          className="img main-img"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </Wrapper>
  );
}

export default Landing;
