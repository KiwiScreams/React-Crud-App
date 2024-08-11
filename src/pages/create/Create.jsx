import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
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
      navigate("/home");
    });
  };
  return (
    <>
      <section className="create-section">
        <div className="create-container">
          <h1>Create</h1>
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
            <button>Create</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Create;
