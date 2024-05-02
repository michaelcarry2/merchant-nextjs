import * as React from "react";
import Image from 'next/image'
import logo from '../public/logo.png'

const Navbar = () => {
  return (
    <div className="w-full border-b border-dark-800 h-[48px] flex px-10 bg-white ">
      <div className="flex-1">
        <Image src={logo} alt="logo"
        width={50}
        />
      </div>
    </div>
  );
};

export default Navbar;
