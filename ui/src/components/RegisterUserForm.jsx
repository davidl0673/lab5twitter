import React, { useState, useGlobal } from "reactn";
import { Redirect } from "react-router-dom";
import client from "../api/client";

const RegisterUserForm = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });
  const [registered, setRegister] = useState(false);

  const { 1: setToken } = useGlobal("token");

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await client.post(
      "/auth/sign-up",
      formState
    );
    setToken(data.token);
    setRegister(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {(registered) && (
        (props.redirect) && (
          <Redirect push to={props.redirect} />
        )
      )}
      <div>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="E-mail"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <input
          type="password"
          name="passwordConfirm"
          value={formState.passwordConfirm}
          onChange={handleChange}
          placeholder="confirm password"
        />
      </div>
      <div>
        <button>sign-up</button>
      </div>
    </form>
  );
};

export default RegisterUserForm;
