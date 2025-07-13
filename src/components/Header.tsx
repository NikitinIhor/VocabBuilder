import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import image_375 from "../assets/images/375.png";
import image_375_2x from "../assets/images/375@2x.png";
import image_768 from "../assets/images/768.png";
import image_768_2x from "../assets/images/768@2x.png";
import logo_big from "../assets/images/logo-big.png";
import logo from "../assets/images/logo-small.png";
import sprite from "../assets/sprite.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloceMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="container h-[68px] mb-9 bg-white flex items-center justify-between">
      <div className="flex items-center gap-4">
        <picture>
          <source media="(min-width:768px)" srcSet={logo_big} />
          <img src={logo} alt="logo" />
        </picture>
        <p className="text-lg font-semibold md:text-[22px]">VocabBuilder</p>
      </div>
      <div className="flex gap-2 items-center">
        <span>Iryna</span>
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--green)]">
          <svg width={13} height={13}>
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        </div>
      </div>
      <button onClick={handleOpenMenu} type="button">
        <RxHamburgerMenu size={40} />
      </button>

      {openMenu && (
        <>
          <div
            className="fixed inset-0 bg-[rgba(18,20,23,0.2)] z-30"
            onClick={handleCloceMenu}
          ></div>
          <div className="pt-4 bg-[var(--green)] fixed top-0 right-0 w-[185px] h-screen overflow-auto z-40">
            <div className="container">
              <div className="flex justify-between items-center mb-[166px]">
                <div className="flex gap-2 items-center">
                  <span className="text-white">Iryna</span>
                  <div className="flex gap-2 items-center">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center border">
                      <svg width={13} height={13}>
                        <use href={`${sprite}#icon-user`}></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="" onClick={handleCloceMenu} type="button">
                  <IoClose size={40} color="white" />
                </button>
              </div>
              <ul className="flex flex-col gap-7 text-white mb-[92px]">
                <li>
                  <NavLink
                    to="/dictionary"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black py-3 px-5 rounded-[15px] bg-white"
                        : "text-white"
                    }
                  >
                    Dictionary
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recommended"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black py-3 px-5 rounded-[15px] bg-white"
                        : "text-white"
                    }
                  >
                    Recommend
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/training"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black py-3 px-5 rounded-[15px] bg-white"
                        : "text-white"
                    }
                  >
                    Training
                  </NavLink>
                </li>
                <li>
                  <button type="submit" className="flex items-center gap-2">
                    <p>Log out</p>
                    <FaLongArrowAltRight />
                  </button>
                </li>
              </ul>
            </div>

            <picture>
              <source
                media="(min-width:768px)"
                srcSet={`${image_768} 1x, ${image_768_2x} 2x`}
              />
              <img
                src={image_375}
                srcSet={`${image_375} 1x, ${image_375_2x} 2x`}
                alt="main image"
              />
            </picture>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
