import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <article className="mt-10 grid grid-cols-1 p-[1rem] rounded-[var(--border-radius)] max-w-[576px] mx-auto w-[var(--fluid-width)] border shadow-sm md:p-[2rem]">
        <div className="flex flex-col items-center gap-2 text-center">
          <Logo path="" hideText className="mt-6 w-[5rem] h-[5rem]" />
          <h2 className="mt-6 font-bold">Welcome to Court Control!</h2>
          <p className="">Make court queueing easier and hassle free!</p>
        </div>
        <form className="mt-8 grid w-full p-1 gap-2">
          <FormRow type="text" name="username" labelText="username" />
          <FormRow type="email" name="email" labelText="email address" />
          <FormRow
            type="password"
            name="create password"
            show={showPassword}
            setShow={setShowPassword}
            isPassword
          />
          <FormRow
            type="password"
            name="confirmPassword"
            labelText="confirm password"
            show={showConfirmPassword}
            setShow={setShowConfirmPassword}
            isPassword
          />
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
          <span className="text-center text-sm mt-3">
            Already have an account? {"  "}
            <Link to="/login" className="font-bold text-[var(--primary-700)]">
              Log in
            </Link>
          </span>
        </form>
      </article>
    </>
  );
};

export default Register;
