import css from "./Login.module.css";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> Login</div>
    </div>
  );
};

export default Login;
