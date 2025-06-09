import css from "./Register.module.css";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <div className={css.wrapper}>
      <h1>Register</h1>
      <p>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>
    </div>
  );
};

export default Register;
