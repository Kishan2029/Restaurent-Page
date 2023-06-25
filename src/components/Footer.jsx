import React from "react";
import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="bg-[#FFF0DB] mt-32 pb-24">
      <div className="flex justify-evenly gap-2 p-14 ">
        {/* logl */}
        <img className="h-16 w-36" src={Logo} />
        {/* Main Link */}
        <div>
          <div className="font-bold text-xl text-[#565656] mb-3">Main Link</div>
          <div className="font-light text-sm">Order Tracking</div>
          <div className="font-light text-sm">New Order</div>
          <div className="font-light text-sm">Contact Us</div>
          <div className="font-light text-sm">News & Blogs</div>
        </div>
        {/* Support */}
        <div>
          <div className="font-bold text-xl text-[#565656] mb-3">Support</div>
          <div className="font-light text-sm">About Us</div>
          <div className="font-light text-sm">Private Policy</div>
          <div className="font-light text-sm">Terms & Condition</div>
        </div>
        {/* Join Our Newsletter */}
        <div>
          <div className="font-bold text-xl text-[#565656] mb-3">
            Join Our Newslatter
          </div>
          <div className="">
            <input
              className="p-1 text-sm text-normal text-black w-64 min-w-full max-w-64"
              type="text"
              placeholder="Enter Your Email Addresss"
              width={""}
            />
          </div>
          <div className="font-bold text-xl text-[#565656] mt-3">Follow Us</div>
          <div className="flex space-x-5 mt-4">
            <img src={Facebook} />
            <img src={Twitter} />
            <img src={Instagram} />
            <img src={Youtube} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
