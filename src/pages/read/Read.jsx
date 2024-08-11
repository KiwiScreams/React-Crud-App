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
      <Link to="/" className="arrow">
        <i class="fa-solid fa-arrow-left"></i>
      </Link>
      <section className="read-section">
        <div className="read-container">
        <div className="header">
            <div className="line"></div>
            <h1>Detail</h1>
            <div className="line"></div>
          </div>
          <table>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
            </tr>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default Read;
