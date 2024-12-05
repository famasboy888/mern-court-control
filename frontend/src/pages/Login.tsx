import { Link, useNavigate } from "react-router-dom";
import { FormRow, Logo } from "../components";
import { useState } from "react";
import { getLocalURL } from "../utils/backendUrl";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const url = getLocalURL(window.location.hostname);
      const res = await fetch(`${url}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      if (!res.ok) {
        toast.error(responseData.errorMessage);
        return;
      }
      console.log(responseData);
      console.log(res);
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Error during login");
    }
  };

  return (
    <div className="py-5 h-full min-h-screen bg-[var(--grey-300)]">
      <article className="mt-5 grid grid-cols-1 p-[1rem] rounded-[var(--border-radius)] max-w-[576px] mx-auto w-[var(--fluid-width)] bg-[var(--grey-100)] border shadow-sm md:p-[2rem]">
        <div className="flex flex-col items-center gap-2 text-center">
          <Logo path="" hideText className="mt-6 h-[5rem]" />
          <h2 className="mt-6 font-bold">Welcome back!</h2>
          <p className="text-sm flex items-center max-sm:flex-col gap-1">
            Don't have any account?{"  "}
            <Link
              to="/register"
              className=" text-nowrap font-bold text-[var(--primary-700)]"
            >
              Sign up now
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid w-full p-1 gap-2">
          <FormRow
            type="email"
            name="email"
            labelText="email address"
            defaultValue="judd@gmail.com"
          />
          <FormRow
            type="password"
            name="password"
            show={showPassword}
            setShow={setShowPassword}
            isPassword
            defaultValue="12345678"
          />
          <div className="mt-3 flex justify-between max-[400px]:flex-col max-[400px]:justify-center gap-2 items-center flex-wrap text-sm mb-3">
            <label
              htmlFor="remember"
              className=" inline-flex items-center gap-1"
            >
              <input type="checkbox" name="remember" id="remember" />
              Remember be
            </label>
            <Link to="/" className="font-bold text-[var(--primary-700)]">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </article>
    </div>
  );
};

export default Login;
