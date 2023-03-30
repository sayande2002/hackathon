import React from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/formInput";
import Custombutton from "../components/customButton";

const Homepage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/user");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <label for="avatar">Choose a profile picture:</label>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
      />

      <FormInput type="text" name="username" placeholder="Username" />
      <FormInput type="password" name="password" placeholder="Password" />

      <div className="flex gap-3">
        <input type="radio" value="Student" name="user" />
        <label for="student">Student</label>
        <input type="radio" value="Staff" name="user" />
        <label for="staff">Staff</label>
      </div>

      <Custombutton>Login</Custombutton>
    </form>
  );
};

export default Homepage;
