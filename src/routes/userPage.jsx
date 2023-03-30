import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/datacontext";
import Custombutton from "../components/customButton";
import Avatar from "../assests/user-icon.jpg";

const Userpage = () => {
  const { fields } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-bold text-center">User Page</p>
      <img
        className="h-40 aspect-square rounded-[50%] border-black border-2"
        src={Avatar}
        alt="avatar"
      />
      <table className="w-[480px] border-black border-2">
        <tr className="bg-black text-white">
          <th className="border border-white">User Name</th>
          <th className="border border-white">User Type</th>
          <th className="border border-white">Password</th>
        </tr>
        <tr className="text-center">
          <td className="border border-black">{fields?.username ?? "Null"}</td>
          <td className="border border-black">{fields?.user ?? "Null"}</td>
          <td className="border border-black">{fields?.password ?? "Null"}</td>
        </tr>
      </table>
      <Link onClick={() => navigate(-1)}>
        <Custombutton>Go Back</Custombutton>
      </Link>
    </div>
  );
};

export default Userpage;
