import { useState } from "react";
import "./Read.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
        <div>
          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <Link to="/home">HOME</Link>
        </div>
      </div>
    </>
  );
};

export default Read;
