import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: RegisterFormValues = {
  name: "",
  email: "",
  password: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

const RegisterForm: React.FC<RegisterFormValues> = () => {
  const handleSubmit = (values: any, actions: any) => {
    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h1>Register</h1>
      <p>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <label>Name</label>
            <Field className={css.field} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.container}>
            <label>Email</label>
            <Field className={css.field} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>

          <div className={css.container}>
            <label>Password</label>
            <Field type="password" className={css.field} name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>

          <button>Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
