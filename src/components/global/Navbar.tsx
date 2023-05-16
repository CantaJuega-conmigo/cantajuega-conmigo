"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// USER
import Login from "./Login";
import Resgister from "./Register";
import { AUTH_MODAL_TYPE } from "@/utils";

//ICONS
import { HiOutlineMenu, HiOutlineUserAdd, HiUser, HiUserAdd } from "react-icons/hi";
import {
  AiOutlineMobile,
  AiOutlineClose,
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
  AiFillFacebook,
  AiOutlineFacebook,
} from "react-icons/ai";
import { BsFacebook, BsTelephone, BsYoutube } from "react-icons/bs";
import { TiMail, TiSocialFacebook, TiSocialFacebookCircular, TiUser, TiUserAdd, TiUserAddOutline } from "react-icons/ti";
import { IoLogoFacebook, IoMdMail } from "react-icons/io";

const Navbar = () => {
  const items = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Cancionero", href: "/cancionero" },
    { name: "Membresías", href: "/membresias" },
    { name: "Cursos", href: "/cursos" },
    { name: "Contacto", href: "/contacto" },
  ];

  interface OpenInterface {
    LOGIN: boolean;
    REGISTER: boolean;
  }
  const [openMenu, setOpenMenu] = useState(false); // -> Menu hamburguesa
  // const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [open, setOpen] = useState<OpenInterface>({
    LOGIN: false,
    REGISTER: false,
  });

  const handleOpen = (name: AUTH_MODAL_TYPE) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [name]: !prevOpen[name],
    }));
  };

  return (
    <nav className="shadow-md w-full h-auto  top-0 left-0">
      {/* top nav */}
      <div className="hidden bg-white 2xl:w-full font-sans font-normal md:pb-5 md:flex md:top-0 md:w-auto md:px-4
       md:py-2 md:justify-end md:items-center  md:border-b-2 md:border-dashed 
        md:border-orangeicons  2xl:text-2xl   xl:text-xl lg:text-lg  sm:text-sm ">
        <section className="flex w-full justify-between lg:w-11/12 ">
          <div className="flex   justify-evenly w-7/12  ">
            <a href="" className="flex items-center">
            <BsTelephone className="fill-current h-4 w-4 flex-shrink-0 mr-2 text-orangeicons" />
            <span className="">+502 5430-1174 </span>
            </a >
            <a href="" className="flex items-center">
            <IoMdMail className="fill-current h-4 w-4 flex-shrink-0 mr-2  text-orangeicons" />
            <span className="">info@cantajuegaconmigo</span>
            </a >
          </div>

          <div className="flex  space-x-4  cursor-pointer items-center">
            <BsYoutube className="text-[#FF0302] text-2xl"  />
            <TiSocialFacebook className="text-[#1877F2] text-2xl" />
            <HiUserAdd className=" text-orangeicons transform scale-x-[-1] text-2xl" />
            <span
              className="hover:text-[#FFC172] cursor-pointer"
              onClick={() => handleOpen(AUTH_MODAL_TYPE.LOGIN)}
            >
              Iniciar Sesión
            </span>
          </div>
        </section>
      </div>
      {/* top nav */}



      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <Link href={"/"}>
            <Image
              src="https://www.cantajuegaconmigo.com/wp-content/uploads/2021/11/NUEVO-LOGO.png"
              alt=""
              width={200}
              height={50}
              className=" gap-4 px-2 py-2"
            />
          </Link>
        </div>

        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
          {openMenu ? (
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <HiOutlineMenu
              className="cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[20] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? "top-20 " : "top-[-490px]"
          }`}
        >
          {items.map((item) => (
            <li key={item.name} className="md:ml-8 text-2xl md:my-0 my-7">
              <Link
                href={item.href}
                className="text-gray-800 hover:text-yellow-500 duration-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <button
            onClick={() => handleOpen(AUTH_MODAL_TYPE.LOGIN)}
            className="md:hidden bg-yellow-600 text-white  py-2 px-6 rounded md:ml-8 hover:bg-yellow-400 
                duration-500"
          >
            Iniciar sesión
          </button>
        </ul>
      </div>
      {open.LOGIN && <Login handleOpen={handleOpen} />}
      {open.REGISTER && <Resgister handleOpen={handleOpen} />}
    </nav>
  );
};

export default Navbar;
