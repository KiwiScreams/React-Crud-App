import { useEffect } from "react";
import "./Update.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SuccesPanel from "../panel/succes panel/Success";
const Update = () => {
  const { id } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3030/users/" + id, inputData).then((res) => {
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
        setIsSuccess(false);
      }, 2000);
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
      <section className="update-section">
        <div className="update-container">
          <div className="header">
            <div className="line"></div>
            <h1>Update</h1>
            <div className="line"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={inputData.name}
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
                value={inputData.email}
                onChange={(e) =>
                  setInputData({ ...inputData, email: e.target.value })
                }
              />
            </div>
            <br />
            <button disabled={!isFormValid()}>Update</button>
          </form>
        </div>
      </section>
      {isSuccess && <SuccesPanel />}
    </>
  );
};

export default Update;
