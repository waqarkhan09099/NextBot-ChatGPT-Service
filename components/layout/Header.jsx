// components/Navigation.js

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import { useAnimation } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navigation() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
        controls.start({ width: "100%" });
      } else {
        setIsSticky(false);
        controls.start({ width: "80%" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const isActive = (href) => {
    if (router.pathname === href) {
      return " text-white";
    } else {
      return "text-gray-500 hover:text-white transform transition duration-500 hover:scale-110";
    }
  };

  return (
    <motion.nav
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 sticky top-0 z-50  ${
        isSticky
          ? "bg-gradient-to-br from-yellow-200 to-green-400 rounded-2xl"
          : ""
      }`}
      initial={{ opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.4 }}
      aria-label="Top"
    >
      <div className="relative w-full py-4 flex items-center justify-between border-b border-gray-800 lg:border-none">
        <motion.div
          className="fixed top-0 left-0 right-0 h-[10px] bg-gradient-to-l from-yellow-500 via-red-400 to-green-400 origin-[0%] rounded-full"
          style={{ scaleX: scrollYProgress }}
        />
        <Link
          href="/"
          className="text-4xl font-extrabold font-sans tracking-widest text-yellow-600"
        >
          AI GPT
        </Link>
        <div className="ml-10 space-x-4 ">
          <Link href="/settings" className={`text-sm  font-medium `}>
            <IconButton
              className={`text-grey transform transition duration-500 hover:scale-110 ${isActive(
                "/settings"
              )}`}
            >
              <SettingsIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
