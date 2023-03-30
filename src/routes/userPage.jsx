import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Custombutton from "../components/customButton";
import Avatar from "../assests/user-icon.jpg";

const User = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-3xl font-bold text-center">User Page</p>
      <img
        className="h-40 aspect-square rounded-[50%]"
        src={Avatar}
        alt="avatar"
      />
      <table className="w-[480px] border-black">
        <tr className="bg-black text-white border-white border-2">
          <th>User Name</th>
          <th>User Type</th>
          <th>Password</th>
        </tr>
        <tr className="text-center">
          <td>Alfreds</td>
          <td>Alfreds</td>
          <td>Alfreds</td>
        </tr>
      </table>
      <Link onClick={() => navigate(-1)}>
        <Custombutton>Go Back</Custombutton>
      </Link>
    </div>
  );
};

export default User;
