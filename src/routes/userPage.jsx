import React from "react";
import Custombutton from "../components/customButton";

const User = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="text-3xl font-bold text-center">User Page</p>
      <table>
        <tr>
          <th>User Name</th>
          <th>User Type</th>
          <th>Password</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
      <Custombutton>Go Back</Custombutton>
    </div>
  );
};

export default User;
