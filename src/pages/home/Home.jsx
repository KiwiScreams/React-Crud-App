import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SuccesPanel from "../panel/succes panel/Success";
const Home = () => {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleDelete(id) {
    axios.delete("http://localhost:3030/users/" + id).then((res) => {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    });
  }
  return (
    <>
      <section className="home-section">
        <div className="home-container">
          <div className="create">
            <Link to="/create">
              <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td className="flex">
                        <Link to={`/update/${d.id}`} className="btn">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <button
                          onClick={(e) => handleDelete(d.id)}
                          className="btn"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <Link to={`/read/${d.id}`} className="btn">
                          <i className="fa-solid fa-book-open-reader"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    List is empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      {isSuccess && <SuccesPanel />}
    </>
  );
};

export default Home;
