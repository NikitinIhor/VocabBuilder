import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import image_375 from "../assets/images/375.png";
import image_768 from "../assets/images/768.png";
import image_768_2x from "../assets/images/768@2x.png";
import logo_big from "../assets/images/logo-big.png";
import logo from "../assets/images/logo-small.png";
import sprite from "../assets/sprite.svg";
import { signout } from "../redux/auth/ops";
import { selectUser } from "../redux/auth/slice";
import type { AppDispatch } from "../redux/store";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector(selectUser);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloceMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="container h-[68px] mb-9 xl:mb-[80px] bg-white flex items-center justify-between">
      <div className="flex items-center gap-4">
        <picture>
          <source media="(min-width:768px)" srcSet={logo_big} />
          <img src={logo} alt="logo" />
        </picture>
        <p className="text-lg font-semibold md:text-[22px]">VocabBuilder</p>
      </div>
      <nav>
        <ul className="hidden xl:flex gap-7">
          <li>
            <NavLink
              to="/dictionary"
              className={({ isActive }) =>
                isActive
                  ? "text-white py-3 px-5 rounded-[15px] bg-[var(--green)]"
                  : "text-black"
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
                  ? "text-white py-3 px-5 rounded-[15px] bg-[var(--green)]"
                  : "text-black"
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
                  ? "text-white py-3 px-5 rounded-[15px] bg-[var(--green)]"
                  : "text-black"
              }
            >
              Training
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex gap-2 md:gap-7 items-center">
        <span className="text-lg xl:text-2xl">{user?.name}</span>
        <div className="w-9 h-9 xl:w-12 xl:h-12 rounded-full flex items-center justify-center bg-[var(--green)]">
          <svg width={15} height={15}>
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        </div>

        <button onClick={handleOpenMenu} type="button" className="xl:hidden">
          <RxHamburgerMenu size={40} />
        </button>
        <button
          onClick={() => dispatch(signout())}
          type="submit"
          className="hidden xl:flex items-center gap-2"
        >
          <p>Log out</p>
          <FaLongArrowAltRight />
        </button>
      </div>

      {openMenu && (
        <>
          <div
            className="fixed inset-0 bg-[rgba(18,20,23,0.2)] z-30"
            onClick={handleCloceMenu}
          ></div>
          <div className="pt-4 bg-[var(--green)] fixed top-0 right-0 w-[185px] md:w-[300px] h-screen overflow-auto z-40">
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
                  <button
                    onClick={() => dispatch(signout())}
                    type="submit"
                    className="flex items-center gap-2"
                  >
                    <p>Log out</p>
                    <FaLongArrowAltRight />
                  </button>
                </li>
              </ul>
            </div>

            <img
              src={image_375}
              srcSet={`${image_768} 1x, ${image_768_2x} 2x`}
              alt="main image"
            />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
