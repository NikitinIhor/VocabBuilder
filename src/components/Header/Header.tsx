import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import css from "./Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={css.wrapper}>
      <div className="container">
        <nav>
          <div className={css.image}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <span>VocabBuilder</span>
          </div>
          {/* <ul>
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
          </ul> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
