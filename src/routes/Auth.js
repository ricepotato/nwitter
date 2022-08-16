import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { authService } from "fbase";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(data);
      } else {
        // login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      //alert(error.message);
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount(!newAccount);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="email"
          required
          value={email}
          onChange={onChange}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
        ></input>
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Log in"}
        ></input>
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Acccount"}
      </span>
      <div>
        <button>continue with google</button>
        <button>continue with github</button>
      </div>
    </div>
  );
};
export default Auth;
