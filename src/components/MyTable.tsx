import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ua from "../assets/images/ukraine.png";
import en from "../assets/images/united kingdom.png";
import { getAllWords } from "../redux/dictionary/ops";
import {
  selectDictionary,
  selectError,
  selectLoading,
} from "../redux/dictionary/slice";

import { selectFilterWord } from "../redux/filter/slice";
import type { AppDispatch } from "../redux/store";
import Loader from "./Loader";
import { PopoverMenu } from "./PopoverMenu";
import WordsPagination from "./WordsPagination";

interface Word {
  _id: string;
  en: string;
  ua: string;
  category: string;
  progress?: string;
}

const MyTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const dictionary = useSelector(selectDictionary);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filterWord = useSelector(selectFilterWord);

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        duration: 4000,
        position: "top-right",
      });
    }
  }, [error]);

  if (loading) return <Loader />;

  const results = Array.isArray(dictionary?.results) ? dictionary.results : [];

  if (!results.length) {
    return <p className="container text-xl text-center">No words found.</p>;
  }

  const search = filterWord.toLowerCase();

  const filteredWords = results.filter((word: Word) => {
    return (
      word.en.toLowerCase().includes(search) ||
      word.ua.toLowerCase().includes(search)
    );
  });

  if (filteredWords.length === 0) {
    return (
      <p className="container text-xl text-center">No matching words found.</p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-hidden rounded-t-2xl border border-gray-300 mb-8 md:p-4 bg-white">
        <table className="w-full border-collapse text-left bg-[rgba(252,252,252,1)]">
          <thead className="bg-[rgba(133,170,159,0.1)] text-gray-700">
            <tr>
              <th className="px-4 py-3 text-sm font-medium border-r border-gray-300 rounded-tl-2xl">
                <div className="flex items-center justify-between gap-2">
                  <span>Word</span>
                  <img
                    width={28}
                    height={28}
                    src={en}
                    alt="image of English flag"
                    className="hidden md:block"
                  />
                </div>
              </th>
              <th className="px-4 py-3 text-sm font-medium border-r border-gray-300">
                <div className="flex items-center justify-between gap-2">
                  <span>Translation</span>
                  <img
                    width={28}
                    height={28}
                    src={ua}
                    alt="image of Ukrainian flag"
                    className="hidden md:block"
                  />
                </div>
              </th>
              <th className="hidden md:table-cell px-4 py-3 text-sm font-medium border-r border-gray-300">
                Category
              </th>
              <th className="px-4 py-3 text-sm font-medium border-r border-gray-300">
                Progress
              </th>
              <th className="px-4 py-3 text-sm font-medium rounded-tr-2xl"></th>
            </tr>
          </thead>

          <tbody className="text-sm md:text-base text-gray-800">
            {filteredWords.map((word: Word) => (
              <tr
                key={word._id}
                className="border-t border-gray-300 hover:bg-gray-50 break-words"
              >
                <td className="p-2 border-r border-gray-300 break-words">
                  {word.en}
                </td>
                <td className="p-2 border-r border-gray-300 whitespace-pre-line break-words">
                  {word.ua}
                </td>
                <td className="hidden md:table-cell p-2 border-r border-gray-300 whitespace-pre-line break-words">
                  {word.category}
                </td>
                <td className="p-2 border-r border-gray-300">
                  <div className="flex justify-center items-center">
                    <CircularProgress
                      variant="determinate"
                      value={parseInt(word.progress || "0")}
                      size={24}
                      thickness={5}
                      sx={{
                        color: "#22c55e",
                        backgroundColor: "#e5e7eb",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </td>
                <td className="flex pt-2 justify-center">
                  <PopoverMenu word={word} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <WordsPagination />
    </div>
  );
};

export default MyTable;
