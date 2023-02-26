import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

const Cover = () => (
  <div className="cover">
    <motion.div
      className="cover-pic"
      animate={{ x: [-500, 0] }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay: 0.2,
      }}
    >
      <img src={img1} alt="cover" />
    </motion.div>
    <motion.div
      className="cover-pic"
      animate={{ x: [500, 0] }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay: 1,
      }}
    >
      <img src={img2} alt="cover" />
    </motion.div>
    <motion.div className="cover-pic middle">
      <img src={img3} alt="cover" />
    </motion.div>
    <motion.div
      className="cover-pic"
      animate={{ x: [-500, 0] }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay: 1.6,
      }}
    >
      <img src={img4} alt="cover" />
    </motion.div>
    <motion.div
      className="cover-pic"
      animate={{ x: [500, 0] }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        delay: 2.4,
        type: "tween",
      }}
    >
      <img src={img5} alt="cover" />
    </motion.div>
  </div>
);

export default Cover;
