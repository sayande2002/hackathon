import React from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/forminput";

const Homepage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <FormInput type="text" name="username" placeholder="Username" />
      <FormInput type="text" name="password" placeholder="Password" />
      <button
        className="flex justify-center items-center gap-2 font-semibold px-5 py-[0.4rem]
      bg-black text-white  hover:bg-white hover:text-black hover:ring-1 hover:ring-black
      "
      >
        Login
      </button>
    </form>
  );
};

export default Homepage;
