import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div clasasName="flex items-centre justify-centre mt-2">
      <MotionLink
        href="/"
        className="w-12 h-12 bg-dark text-light flex items-centre  justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light
    
        "
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeast: Infinity },
        }}
      >
        MK
      </MotionLink>
    </div>
  );
};

export default Logo;
