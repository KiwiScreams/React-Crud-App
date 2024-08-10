import { useEffect } from "react";
import "./Update.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const { id } = useParams();

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
      alert("Data Updated");
      navigate("/");
    });
  };

  return (
    <>
      <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id">ID:</label>
              <input
                type="number"
                disabled
                name="id"
                value={inputData.id}
              />
            </div>
            <div>
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
            <div>
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
            <button>Update</button>
          </form>
        </div>
    </>
  );
};

export default Update;
