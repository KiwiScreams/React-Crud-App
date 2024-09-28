import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SuccesPanel from "../panel/succes panel/Success";
import SearchBar from "../search/SearchBar";

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

  useEffect(() => {
    setFilteredData(data); // Update filteredData when data changes
  }, [data]);

  function handleDelete(id) {
    axios.delete("http://localhost:3030/users/" + id).then((res) => {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    });
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = data.filter((d) =>
      d.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <SearchBar onChange={(e) => handleSearch(e.target.value)} />
      <section className="home-section">
        <div className="home-container">
          <Link to="/create">
            <div className="create">
              <i className="fa-solid fa-plus"></i>
            </div>
          </Link>
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
              {filteredData.length > 0 ? (
                filteredData.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td className="flex">
                        <Link to={`/update/${d.id}`} className="btn">
                          <i className="fa-solid fa-pen"></i>
                        </Link>
                        <button
                          onClick={(e) => handleDelete(d.id)}
                          className="btn"
                        >
                          <i className="fa-solid fa-delete-left"></i>
                        </button>
                        <Link to={`/read/${d.id}`} className="btn">
                          <i className="fa-regular fa-folder-open"></i>
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
