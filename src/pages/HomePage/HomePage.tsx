import css from "./HomePage.module.css";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> HomePage</div>
    </div>
  );
};

export default HomePage;
