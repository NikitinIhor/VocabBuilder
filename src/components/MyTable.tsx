import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWords } from "../redux/dictionary/ops";
import { selectDictionary } from "../redux/dictionary/slice";
import type { AppDispatch } from "../redux/store";

interface MyTableProps {}

interface Word {
  _id: string;
  en: string;
  ua: string;
  progress?: string;
}

const MyTable: React.FC<MyTableProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dictionary = useSelector(selectDictionary);

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  if (!dictionary) {
    return <p className="container text-xl text-center">No words found.</p>;
  }

  return (
    <div className="container">
      <table className="flex">
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Progress</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dictionary.results.map((word: Word) => {
            return (
              <tr key={word._id} className="">
                <td>{word.en}</td>
                <td>{word.ua}</td>
                <td>{word.progress}</td>
                <td>
                  <button
                    onClick={() => console.log("Clicked", word.en)}
                    className=""
                  >
                    ...
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
