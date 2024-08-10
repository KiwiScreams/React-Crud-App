import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleDelete(id) {
    const confirm = window.confirm("Do you like to Delete?");
    if (confirm) {
      axios.delete("http://localhost:3030/users/" + id).then((res) => {
        alert("Record Deleted");
        navigate("/home");
      });
    }
  }
  return (
    <>
      <section className="home-container">
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
                    <Link to={`/update/${d.id}`}>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button onClick={(e) => handleDelete(d.id)}>
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <Link to={`/read/${d.id}`}>
                      <i class="fa-solid fa-book-open-reader"></i>
                    </Link>
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
