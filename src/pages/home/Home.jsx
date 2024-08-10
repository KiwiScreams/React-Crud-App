import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="container">
        <Link to="/create">Create</Link>
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
            {data.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>
                    <button>EDIT</button>
                    <button>DELETE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Home;
