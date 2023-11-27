import "./flowgram.css";
import image from "../assets/flowgram.png";

const Flowgram = () => {
  return (
    <div className="flowgram-container">
      <div>
        <h1>How do we generate Synthetic Data?</h1>
      </div>
      <img src={image} alt="flowgram" />
    </div>
  );
};

export default Flowgram;
