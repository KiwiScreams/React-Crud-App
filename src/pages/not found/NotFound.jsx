import "./NotFound.css";
import notfoundImage from "../../assets/not-found.png";
const NotFound = () => {
  return (
    <>
      <section className="notfound-section">
        <img src={notfoundImage} alt="" />
        <h2>Oops!</h2>
        <p>
          It looks like the page you're looking for doesn't exist. It might have
          been moved, deleted, or never existed in the first place.
        </p>
      </section>
    </>
  );
};

export default NotFound;
