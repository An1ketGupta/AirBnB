import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageSelection from "./Page";
import LOGO from "./Logo";
import DropDownMenu from "./Menu";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setCurrentScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`px-12 w-full top-0 fixed z-50 bg-[#f3f3f3] border-b-solid border-b-1 transition-[height] duration-300 ${
        currentScroll > 50 ? "h-[15vh] bg-white" : "h-[25vh]"
      }`}
    >
      <AnimatePresence mode="wait">
        {currentScroll < 50 ? (
          <motion.div
            key="large"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <LOGO />
              <PageSelection />
              <DropDownMenu />
            </div>
            <div className="flex justify-center">
              <SearchBar />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="compact"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex py-2 justify-between items-center">
              <LOGO />
              <SearchBar />
              <DropDownMenu />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
