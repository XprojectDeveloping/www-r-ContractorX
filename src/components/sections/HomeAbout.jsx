import { Link } from "react-router-dom";
import "../../styles/homepage/_homepage_about.scss";
function HomeAbout({ img, title1, title2, text, buttonText }) {
  return (
    <>
      <div className="home-about">
        <div className="home-about-img">
          <img src={img} alt="construct" />
        </div>
        <div className="home-about-text">
          <p className="title1">{title1}</p>

          <h2>{title2}</h2>
          <p>{text}</p>

          <div className="home-about-num">
            <div className="num">
              <p className="top">
                <span>{"+"}</span>
                {"350"}
              </p>
              <span className="up">{"Executed Projects"}</span>
            </div>
            <div className="num">
              <p className="top">
                {"12"} <span>{"Y"}</span>
              </p>
              <span className="up">{"Experience"}</span>
            </div>
            <div className="num">
              <p className="top">
                <span>{"+"}</span>
                {"400"}
              </p>
              <span className="up">{"Satisfied Clients"}</span>
            </div>
          </div>

          <button>
            <Link>{buttonText}</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default HomeAbout;
