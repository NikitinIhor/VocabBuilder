import Register from "../../components/HomePage/Register/Register";
import css from "./HomePage.module.css";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container">
        <div className={css.image}></div>
        <Register />
      </div>
    </div>
  );
};

export default HomePage;
