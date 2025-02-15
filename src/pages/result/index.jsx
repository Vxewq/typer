import { Link } from "react-router-dom";
import "./style.scss";

export default function Result({ wpm, mistakes, time, again }) {
  return (
    <div className="container-result">
      <div className="main-info">
        <div className="info wpm" data-aos="fade-up">
          <h1 className="header">
            {wpm} <i class="fa-regular fa-keyboard bg-icon"></i>
          </h1>
          <h1 className="txt">wpm</h1>
        </div>
        <div className="info time" data-aos="fade-up" data-aos-delay="300">
          <h1 className="header">
          {time}s <i class="fa-regular fa-clock bg-icon"></i>
          </h1>
          <h1 className="txt">time</h1>
        </div>
        <div className="info mis" data-aos="fade-up" data-aos-delay="600">
          <h1 className="header">
          {mistakes} <i class="fa-regular fa-circle-xmark bg-icon"></i>
          </h1>
          <h1 className="txt">mistakes</h1>
        </div>
      </div>
      <div className="buttons">
          <button onClick={again}>
            try again <i class="fa-solid fa-arrow-rotate-right"></i>
          </button>
      </div>
    </div>
  );
}
