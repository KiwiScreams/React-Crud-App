import { useEffect } from "react";
import "./Update.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then(res => setInputData(res.data))
      .catch(err => console.log(err))
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3030/users/" + id, inputData).then((res) => {
      alert("update");
      navigate("/");
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={inputData.name}
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
          
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={inputData.email}
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })}
          
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default Update;
