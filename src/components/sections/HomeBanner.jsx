import { Link } from "react-router-dom";
import "../../styles/homepage/_homepage_banner.scss";
function HomeBanner({ title, text, buttonText1, buttonText2, btnTo1, btnTo2 }) {
  return (
    <>
      <div className="banner">
        <div className="banner-img"></div>
        <div className="banner-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="banner-buttons">
            <Link to={btnTo1 || "/"} className="one">
              {buttonText1}
            </Link>

            <Link to={btnTo2 || "/"} className="two">
              {buttonText2}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeBanner;
