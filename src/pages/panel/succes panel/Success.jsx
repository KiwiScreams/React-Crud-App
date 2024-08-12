import { useEffect, useState } from "react";
import "./Success.css";
const SuccesPanel = () => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPanel(true);
    }, 100);
  }, []);
  return (
    <>
      <div className={`success-panel ${showPanel ? "show" : ""}`}>
        {" "}
        <div className="success-container">
          <i className="fa-regular fa-circle-check"></i>
          <p>
            Thank you for using our app. <br />
            Have a great day!
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccesPanel;
