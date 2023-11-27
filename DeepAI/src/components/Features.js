import "./features.css";
import { Link } from "react-router-dom";

function Features(props) {
  return (
    <>
      <div className="features">
        <h1>{props.title}</h1>

        <div className={props.cName}>
          <div className="feature-text">{props.text}</div>
          <div className="image">
            <Link to="/AgriUsecase">
              <img src={props.image1} alt="Feature image"></img>
            </Link>
            <Link to="/MedicalUsecase">
              <img src={props.image2} alt="feature image"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
