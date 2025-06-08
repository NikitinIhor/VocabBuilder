import css from "./Register.module.css";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> Register</div>
    </div>
  );
};

export default Register;
