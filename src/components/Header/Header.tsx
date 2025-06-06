import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={css.wrapper}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/dictionary">dictionary</NavLink>
          </li>
          <li>
            <NavLink to="/recomended">recomended</NavLink>
          </li>
          <li>
            <NavLink to="/training">training</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
