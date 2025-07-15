import { Link } from "react-router-dom";
import sprite from "../assets/sprite.svg";
import Categories from "../components/Categories";
import Filter from "../components/Filter";
import Header from "../components/Header";

interface DictionaryPageProps {}

const DictionaryPage: React.FC<DictionaryPageProps> = () => {
  return (
    <div>
      <Header />
      <div className="mb-8 xl:flex xl:items-center xl:justify-between">
        <div className="container flex flex-col gap-2 mb-10 md:mb-7 xl:mb-0 md:flex-row">
          <Filter />
          <Categories />
        </div>

        <div className="container flex flex-col gap-2 md:flex-row md:gap-4">
          <div className="flex gap-2 items-center">
            <p className="text-[rgba(18,20,23,0.5)] text-[14px]">To study:</p>
            <span className="text-lg text-black">20</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 p-4
             text-black
             transition-all duration-500
             hover:text-white hover:bg-[var(--green)] hover:rounded-xl"
            >
              Add word
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-arrow`} />
              </svg>
            </button>

            <Link
              to="/training"
              className="flex items-center gap-2 p-4 transition-all duration-500
             hover:text-white hover:bg-[var(--green)] hover:rounded-xl"
            >
              Train oneself
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;
