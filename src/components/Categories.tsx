import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { showWordsByCategory } from "../redux/filter/ops";
import { selectFilterCategory, setCategory } from "../redux/filter/slice";
import type { AppDispatch } from "../redux/store";

const Categories: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const category = useSelector(selectFilterCategory);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    dispatch(setCategory(selectedCategory));

    if (selectedCategory !== "") {
      dispatch(showWordsByCategory(selectedCategory));
    }
  };

  return (
    <div className="relative">
      <select
        className="appearance-none w-full py-3 px-6 border border-[rgba(18,20,23,0.1)] rounded-xl
        bg-transparent text-black text-base focus:outline-none focus:ring-2"
        value={category}
        onChange={handleChange}
      >
        <option value="">Categories</option>
        <option value="verb">Verb</option>
        <option value="participle">Participle</option>
        <option value="noun">Noun</option>
        <option value="adjective">Adjective</option>
        <option value="pronoun">Pronoun</option>
        <option value="numerals">Numerals</option>
        <option value="adverb">Adverb</option>
        <option value="conjunction">Conjunction</option>
        <option value="preposition">Preposition</option>
        <option value="phrasal verb">Phrasal verb</option>
        <option value="functional phrase">Functional phrase</option>
      </select>
      <button
        type="button"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none"
      >
        <IoIosArrowDown size={22} />
      </button>
    </div>
  );
};

export default Categories;
