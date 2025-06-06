import css from "./TrainingPage.module.css";

interface TrainingPageProps {}

const TrainingPage: React.FC<TrainingPageProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> TrainingPage</div>
    </div>
  );
};

export default TrainingPage;
