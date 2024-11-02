import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* OVERLAY */}
      <div
        className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>

      {/* NAVLINKS  bg-[#c1205e]*/}
      <div
        className={`transfrom ${navOpen} text-white transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-yellow-400 space-y-6 z-[10000]`}
      >
        {navLinks.map((item) => {
          return (
            <Link key={item.id} href={item.url}>
              <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-black">
                {item.label}
              </p>
            </Link>
          );
        })}
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeNav}
          className="absolute border-2 text-center border-white top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        >
          <p className="font-bold text-white">X</p>
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
