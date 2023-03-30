import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-5 h-[70vh]">
      <span className="text-6xl font-black"> ERROR 404 ! </span>{" "}
      <span className="text-xl font-bold">
        Page Not Found Unfortunately, The Page You Are Looking For Does Not
        Exist. Please Navigate To Home. Thank You
      </span>
      <div className="flex flex-row gap-2 ">
        <Link to={"/"}>
          <button
            className="flex justify-center items-center gap-2 font-semibold px-5 py-[0.4rem]
      bg-black text-white  hover:bg-white hover:text-black hover:ring-1 hover:ring-black
      "
          >
            Back to Home
          </button>
        </Link>
        <Link onClick={() => navigate(-1)}>
          <button
            className="flex justify-center items-center gap-2 font-semibold px-5 py-[0.4rem]
      bg-black text-white  hover:bg-white hover:text-black hover:ring-1 hover:ring-black
      "
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
