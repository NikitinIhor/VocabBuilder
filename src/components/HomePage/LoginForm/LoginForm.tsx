import css from "./LoginForm.module.css";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> LoginForm</div>
    </div>
  );
};

export default LoginForm;
