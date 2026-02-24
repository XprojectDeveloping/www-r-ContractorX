import { Link } from "react-router-dom";
import "../../styles/homepage/_homepage_about.scss";
function HomeAbout({ img, title1, title2, text, buttonText, btnTo }) {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={img} alt="construct" />
        </div>
        <div className="about-text">
          <span>{title1}</span>

          <div className="about-title">
            <h3>{title2}</h3>
            <p>{text}</p>
          </div>

          <div className="about-num">
            <div className="num">
              <p className="top">
                <span>{"+"}</span>
                {"350"}
              </p>
              <p className="up">{"Executed Projects"}</p>
            </div>
            <div className="num">
              <p className="top">
                {"12"} <span>{"Y"}</span>
              </p>
              <p className="up">{"Experience"}</p>
            </div>
            <div className="num">
              <p className="top">
                <span>{"+"}</span>
                {"400"}
              </p>
              <p className="up">{"Satisfied Clients"}</p>
            </div>
          </div>

          <Link to={btnTo || ""}>{buttonText}</Link>
        </div>
      </div>
    </>
  );
}
export default HomeAbout;
