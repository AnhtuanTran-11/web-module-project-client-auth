import React, { useState } from "react";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

export default function LoginPage(props) {
  const [state, setState] = useState(initialValues);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", state)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/protected')
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={onChange}
        />
        <label htmlFor="name">Password</label>
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
