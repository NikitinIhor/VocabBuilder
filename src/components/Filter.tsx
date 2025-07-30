import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../assets/sprite.svg";
import {
  selectFilterError,
  selectFilterLoading,
  selectFilterWord,
  setWord,
} from "../redux/filter/slice";
import type { AppDispatch } from "../redux/store";
import Loader from "./Loader";

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const word = useSelector(selectFilterWord);
  const [inputValue, setInputValue] = useState(word);

  const loading = useSelector(selectFilterLoading);
  const error = useSelector(selectFilterError);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setWord(inputValue));
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, dispatch]);

  if (loading) return <Loader />;

  if (error) {
    toast.error(error, {
      duration: 4000,
      position: "top-right",
    });
  }

  return (
    <div className="relative">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Find the word"
        className="bg-transparent border-2 border-[rgba(18,20,23,0.1)] placeholder:text-black rounded-xl py-3 px-6 w-full"
      />
      <svg
        width={20}
        height={20}
        className="absolute right-6 top-1/2 transform -translate-y-1/2"
      >
        <use href={`${sprite}#icon-search`} fill="white" stroke="black" />
      </svg>
    </div>
  );
};

export default Filter;
