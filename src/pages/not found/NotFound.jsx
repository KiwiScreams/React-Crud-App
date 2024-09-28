import "./NotFound.css";
import notfoundImage from "../../assets/not-found.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigateToHomePage = () => {
    navigate("/");
  };
  return (
    <>
      <section className="notfound-section">
        <img src={notfoundImage} alt="" />
        <h2>Oops!</h2>
        <p>
          It looks like the page you're looking for doesn't exist. It might have
          been moved, deleted, or never existed in the first place.
        </p>
        <button onClick={handleNavigateToHomePage}>Go Home</button>
      </section>
    </>
  );
};

export default NotFound;
