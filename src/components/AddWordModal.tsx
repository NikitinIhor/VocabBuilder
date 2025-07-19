import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import ua from "../assets/images/ukraine.png";
import en from "../assets/images/united kingdom.png";
import { addNewWord } from "../redux/dictionary/ops";
import type { AppDispatch } from "../redux/store";

import { useState } from "react";
import toast from "react-hot-toast";
import { selectUser } from "../redux/auth/slice";

interface Word {
  en: string;
  ua: string;
  category: string;
  isIrregular: boolean;
  owner: string;
  progress: number;
}

interface AddWordModalProps {
  handleCloseModal: () => void;
}

const AddWordModal: React.FC<AddWordModalProps> = ({ handleCloseModal }) => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector(selectUser);

  const [ueWord, setUeWord] = useState("");
  const [enWord, setEnWord] = useState("");

  const handleAddNewWord = (newWord: Word) => {
    console.log(newWord);
    return dispatch(addNewWord(newWord));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const newWord: Word = {
        en: enWord,
        ua: ueWord,
        category: "verb",
        isIrregular: true,
        owner: user!.name,
        progress: 0,
      };

      await handleAddNewWord(newWord);

      toast.success(`Word ${newWord.en} successfully added`, {
        duration: 4000,
        position: "top-right",
      });
    } catch (err: any) {
      toast.error(
        err.message || "Something went wrong... please reload the page.",
        {
          duration: 4000,
          position: "top-right",
        }
      );
    } finally {
      handleCloseModal();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-[rgba(18,20,23,0.2)] z-30"
        onClick={handleCloseModal}
      ></div>
      <div
        className="w-[343px] h-[360px] text-white rounded-2xl px-4 py-12 bg-[var(--green)] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40
      md:w-[628px] md:h-[346px] md:px-[64px] md:py-[64px]"
      >
        <button
          className="absolute right-5 top-5"
          onClick={handleCloseModal}
          type="button"
        >
          <IoClose size={30} color="white" />
        </button>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-between h-full"
        >
          <div className="md:flex md:items-center md:gap-8">
            <label
              htmlFor="ukrainian"
              className="flex items-center gap-2 mb-2
            md:order-2 md:mb-0"
            >
              <img
                width={28}
                height={28}
                src={ua}
                alt="image of Ukrainian flag"
              />
              <span>Ukrainian</span>
            </label>
            <input
              id="ukrainian"
              name="ukrainian"
              type="text"
              placeholder="Трохи, трішки"
              className="h-12 w-full bg-transparent border border-white rounded-2xl pl-6 placeholder:text-white
              md:order-1 md:w-[354px]"
              onChange={(e) => setUeWord(e.target.value)}
            />
          </div>

          <div className="md:flex md:items-center md:gap-8">
            <label
              htmlFor="english"
              className="flex items-center gap-2 mb-2
            md:order-2 md:mb-0"
            >
              <img
                width={28}
                height={28}
                src={en}
                alt="image of English flag"
              />
              <span>English</span>
            </label>

            <input
              id="english"
              name="english"
              type="text"
              placeholder="A little bit"
              className="h-12 w-full bg-transparent border border-white rounded-2xl pl-6 placeholder:text-white
              md:order-1 md:w-[354px]"
              onChange={(e) => setEnWord(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-[158px] h-12 text-black bg-white rounded-full
              md:w-[245px] md:h-14"
            >
              Save
            </button>
            <button
              type="button"
              className="w-[158px] h-12 text-white bg-transparent border-white border rounded-full
              md:w-[245px] md:h-14"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddWordModal;
