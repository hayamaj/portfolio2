import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="bg-white w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-sm ml-4 text-black text-xs md:font-light font-light">
          Copyright © 2024 Haya AlMajali
        </p>
      </div>
    </footer>
  );
};

export default Footer;