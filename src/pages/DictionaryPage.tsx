import Categories from "../components/Categories";
import Filter from "../components/Filter";
import Header from "../components/Header";

interface DictionaryPageProps {}

const DictionaryPage: React.FC<DictionaryPageProps> = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Categories />
    </div>
  );
};

export default DictionaryPage;
