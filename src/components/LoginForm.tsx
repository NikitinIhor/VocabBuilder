import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import sprite from "../assets/sprite.svg";

import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../redux/auth/ops";
import { selectError, selectLoading } from "../redux/auth/slice";
import type { AppDispatch } from "../redux/store";
import { emailPattern, passwordPattern } from "../utils/patterns";
import Loader from "./Loader";

interface LoginFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(emailPattern, "Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .matches(passwordPattern, "Password must be 6 letters and 1 digit ")
    .required("Password is required"),
});

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await dispatch(signin(data)).unwrap();
      toast.success("Successfully signed in!", {
        duration: 4000,
        position: "top-right",
      });
    } catch (err: any) {
      toast.error(err.message || "Registration failed", {
        duration: 4000,
        position: "top-right",
      });
    }
  };

  if (loading) return <Loader />;

  if (error) {
    toast.error(error, {
      duration: 4000,
      position: "top-right",
    });
  }

  return (
    <div className="container">
      <div
        className="rounded-tl-[25px] rounded-tr-[25px] bg-[rgba(133,170,159,0.1)] py-8 px-4
      md:px-12 md:py-16 md:mx-9
      xl:mx-0 xl:w-[628px]"
      >
        <h2 className="text-2xl mb-4 font-semibold md:text-[40px] md:mb-5">
          Login
        </h2>
        <p className="mb-4 md:mb-8 md:text-[20px]">
          Please enter your login details to continue using our service:
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[14px]">
            <input
              {...register("email")}
              placeholder="Email"
              className="bg-transparent border border-[rgba(18,20,23,0.1)] h-[56px] w-full px-4 rounded-[16px] placeholder-[var(--black)]"
            />
            {errors.email?.message &&
              typeof errors.email.message === "string" && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
          </div>

          <div className="mb-8 relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border border-[rgba(18,20,23,0.1)] h-[56px] w-full px-4 rounded-[16px] placeholder-[var(--black)]"
            />
            <svg
              onClick={handleShowPassword}
              width={20}
              height={20}
              className="absolute top-4 right-4 stroke-black fill-white cursor-pointer"
            >
              {showPassword ? (
                <use href={`${sprite}#icon-eye`} />
              ) : (
                <use href={`${sprite}#icon-eye-off`} />
              )}
            </svg>
            {errors.password?.message &&
              typeof errors.password?.message === "string" && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
          </div>

          <button
            type="submit"
            className="text-white font-bold py-4 w-full bg-[var(--green)] rounded-[30px] mb-4"
          >
            Login
          </button>
          <Link to="/" className="underline mb-12">
            <button
              type="button"
              className="font-bold block mx-auto text-[rgba(18,20,23,0.5)] "
            >
              Register
            </button>
          </Link>
        </form>
      </div>
      <p className="hidden md:block md:mt-[98px] md:mb-[106px] md:text-center xl:hidden">
        Word · Translation · Grammar · Progress
      </p>
    </div>
  );
};

export default LoginForm;
