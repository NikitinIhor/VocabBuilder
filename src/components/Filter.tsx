import sprite from "../assets/sprite.svg";

interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Find the word"
        className="bg-transparent border border-[rgba(18,20,23,0.1)] placeholder:text-black rounded-xl 
        py-3 px-6 w-full"
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
