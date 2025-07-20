import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import ua from "../assets/images/ukraine.png";
import en from "../assets/images/united kingdom.png";
import { addNewWord } from "../redux/dictionary/ops";
import type { AppDispatch, RootState } from "../redux/store";

import type { NewWordInput, Word } from "../redux/dictionary/ops";

import { useState } from "react";
import toast from "react-hot-toast";

interface AddWordModalProps {
  handleCloseModal: () => void;
}

const isValidSingleWord = (word: string) => {
  return /^[a-zA-Z]+$/.test(word.trim());
};

const AddWordModal: React.FC<AddWordModalProps> = ({ handleCloseModal }) => {
  const dispatch = useDispatch<AppDispatch>();

  const words =
    useSelector((state: RootState) => state.dictionary.results) || [];

  const [ueWord, setUeWord] = useState("");
  const [enWord, setEnWord] = useState("");

  const handleAddNewWord = (newWord: NewWordInput) => {
    console.log(newWord);
    return dispatch(addNewWord(newWord));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!enWord.trim() || !ueWord.trim()) {
      toast.error("Please fill in both English and Ukrainian words.");
      return;
    }

    if (!isValidSingleWord(enWord)) {
      toast.error("English word must be a single word.");
      return;
    }

    const exists = words.some(
      (w: Word) => w.en.toLowerCase() === enWord.trim().toLowerCase()
    );

    if (exists) {
      toast.error(
        `The word "${enWord.trim()}" already exists in your dictionary.`
      );
      return;
    }

    const newWord: NewWordInput = {
      en: enWord.trim(),
      ua: ueWord.trim(),
      category: "verb",
      isIrregular: false,
    };

    try {
      await handleAddNewWord(newWord);
      toast.success(`Word ${newWord.en} successfully added`, {
        duration: 4000,
        position: "top-right",
      });

      setEnWord("");
      setUeWord("");
    } catch (err: any) {
      if (err.response?.status === 409) {
        toast.error(`The word "${newWord.en}" already exists.`);
      } else {
        toast.error(
          err.message || "Something went wrong... please reload the page.",
          {
            duration: 4000,
            position: "top-right",
          }
        );
      }

      setEnWord("");
      setUeWord("");
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
              value={ueWord}
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
              placeholder="go"
              className="h-12 w-full bg-transparent border border-white rounded-2xl pl-6 placeholder:text-white
              md:order-1 md:w-[354px]"
              value={enWord}
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
