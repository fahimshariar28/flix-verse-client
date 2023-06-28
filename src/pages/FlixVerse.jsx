import { useState } from "react";
import Navbar from "../components/Navbar";

const FlixVerse = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="bg-black">
      <Navbar isScrolled={isScrolled} />
    </div>
  );
};

export default FlixVerse;
