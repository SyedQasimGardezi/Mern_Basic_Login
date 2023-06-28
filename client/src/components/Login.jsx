import React, { useState } from "react";
import axios from "axios";
export default function Login() {
  const [form, setForm] = useState([]);
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/demo", {
        form: form,
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="auth-container">
        <div className="auth-card">
          <form onSubmit={handleSubmit}>
            <div className="auth-row">
              <h1>Name: </h1>
              <input type="text" name="username" onChange={handleForm} />
            </div>
            <div className="auth-row">
              <h1>Password: </h1>
              <input type="password" name="password" onChange={handleForm} />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
