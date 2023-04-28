import React from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='"sm:px-16 px-6 py-8 relative"'>
      <div className="footer-gradient" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-gray-700">
            Unete Ahora!
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <Image
              src="https://www.cantajuegaconmigo.com/wp-content/uploads/2021/11/NUEVO-LOGO.png"
              alt="Logo"
              className="w-[24px] h-[24px] object-contain"
              height={20}
              width={20}
            />
            <span className="font-normal text-[16px] text-white">
              Mas informacion!
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-gray-700">info@cantajuegaconmigo.com</h4>
            <p className="font-normal text-[14px] text-gray-700 opacity-50">
              Copyright © 2023 - 2023 no se que poner aca. All rights reserved.
            </p>

            <div className="flex gap-4">
              <BsFacebook className="w-[24px] h-[24px] object-contain cursor-pointer" />
              <BsYoutube className="w-[24px] h-[24px] object-contain cursor-pointer" />
              <BsInstagram className="w-[24px] h-[24px] object-contain cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
