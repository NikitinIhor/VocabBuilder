import css from "./DictionaryPage.module.css";

interface DictionaryPageProps {}

const DictionaryPage: React.FC<DictionaryPageProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> DictionaryPage</div>
    </div>
  );
};

export default DictionaryPage;
