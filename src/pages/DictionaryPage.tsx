import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AddWordModal from "../components/AddWordModal";
import Filter from "../components/Filter";
import Header from "../components/Header";
import MyTable from "../components/MyTable";

interface DictionaryPageProps {}

const DictionaryPage: React.FC<DictionaryPageProps> = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Header />
      <div className="mb-8 xl:flex xl:items-center xl:justify-between xl:mb-7">
        <div className="container mb-10 md:mb-7 xl:mb-0">
          <Filter />
        </div>

        <div className="container flex flex-col gap-2 md:flex-row md:gap-4">
          <div className="flex gap-2 items-center">
            <p className="text-[rgba(18,20,23,0.5)] text-[14px]">To study:</p>
            <span className="text-lg text-black">20</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenModal}
              type="button"
              className="group flex items-center gap-2 p-4
             text-black
             transition-all duration-500
             hover:text-white hover:bg-[var(--green)] hover:rounded-xl"
            >
              Add word
              <FaPlus className="text-[var(--green)] group-hover:text-white transition-colors duration-500" />
            </button>

            <Link
              to="/training"
              className="group flex items-center gap-2 md:p-4 
              transition-all duration-500
             hover:text-white hover:bg-[var(--green)] hover:rounded-xl"
            >
              Train oneself
              <FaLongArrowAltRight className="text-[var(--green)] group-hover:text-white transition-colors duration-500" />
            </Link>
          </div>
          {openModal && <AddWordModal handleCloseModal={handleCloseModal} />}
        </div>
      </div>
      <MyTable />
    </div>
  );
};

export default DictionaryPage;
