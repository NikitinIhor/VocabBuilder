import logo from "../assets/images/logo-small.png";

const HomePage: React.FC = () => {
  return (
    <div className="bg-[var(--green)]">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" />

        <p className="">VocabBuilder</p>
      </div>
    </div>
  );
};

export default HomePage;
