import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/formInput";
import Custombutton from "../components/customButton";
import Avatar from "../assests/user-icon.jpg";

const defaultformFields = {
  avatar: undefined,
  username: undefined,
  password: undefined,
  user: undefined,
};

const Homepage = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultformFields);
  const { avatar, username, password, user } = formFields;

  const handleSubmit = () => {
    navigate("/user");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <p>{formFields.avatar}</p>
      <p>{formFields.username}</p>
      <p>{formFields.password}</p>
      <p>{formFields.user}</p>

      <img
        className="h-40 aspect-square rounded-[50%]"
        src={Avatar}
        alt="avatar"
      />

      {!avatar ? (
        <>
          <label for="avatar">Choose a profile picture:</label>
          <input
            type="file"
            name="avatar"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => console.log(e.target.files[0])}
          />
        </>
      ) : (
        <></>
      )}

      <FormInput
        type="text"
        onChange={handleChange}
        name="username"
        placeholder="Username"
      />
      <FormInput
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />

      <div className="flex gap-3">
        <input
          type="radio"
          value="Student"
          name="user"
          onChange={handleChange}
        />
        <label>Student</label>
        <input type="radio" value="Staff" name="user" onChange={handleChange} />
        <label>Staff</label>
      </div>

      <Custombutton>Login</Custombutton>
    </form>
  );
};

export default Homepage;
