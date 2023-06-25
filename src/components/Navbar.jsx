import React from "react";
import Burger from "../assets/vector.png";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between mt-0 mx-12 ">
      {/* <div className="font-bold text-xl">XYZ Company</div> */}
      <img className="h-20 w-40" src={Logo} />
      <img className="h-6 w-7 self-center" src={Burger} />
    </div>
  );
}

export default Navbar;
