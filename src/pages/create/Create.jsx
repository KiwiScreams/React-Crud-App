import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { Link } from "react-router-dom";
const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3030/users", inputData).then((res) => {
      alert("success");
      navigate("/");
    });
  };
  const isFormValid = () => {
    const { name, email } = inputData;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return name.trim() !== "" && email.trim() !== "" && emailRegex.test(email);
  };
  return (
    <>
      <Link to="/" className="arrow">
        <i class="fa-solid fa-arrow-left"></i>
      </Link>
      <section className="create-section">
        <div className="create-container">
          <div className="header">
            <div className="line"></div>
            <h1>Create</h1>
            <div className="line"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
              />
            </div>
            <button disabled={!isFormValid()}>Create</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Create;
