import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) =>
  {
    event.preventDefault();
    axios.post('http://localhost:3030/users', inputData).then(res => 
    {
        alert('success');
        navigate("/");
    }
    )
  };
  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default Create;
