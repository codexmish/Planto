import Image from "next/image";
import logo from "../../public/logo-icon.png";
import { menuitem } from "@/constants";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <nav className="py-15 absolute top-0 left-0 w-full z-50 hidden lg:block">
        <div className="main container flex items-center justify-between">
          {/* --------logo------- */}
          <div className="logo flex gap-3 items-center">
            <Image width={48} height={48} src={logo} />
            <h1 className=" text-xl text-white font-black font-inter">
              Planto.
            </h1>
          </div>

          {/* -------menu---------- */}
          <div className="flex items-center gap-15">
            {menuitem.map((item, id) => (
              <Link
                className="text-base text-white hover:text-green-400 font-medium font-inter"
                key={id}
                href={item.navLink}
              >
                {item.menuName}
              </Link>
            ))}
          </div>

          {/* --------Icons---- */}
          <div className="text-2xl text-white flex items-center gap-15">
            <IoSearchOutline className="cursor-pointer hover:text-green-400" />
            <PiShoppingCartLight className="cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
