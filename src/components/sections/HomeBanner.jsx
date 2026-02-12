import { Link } from "react-router-dom";

function HomeBanner({ title, text, buttonText1, buttonText2 }) {
  return (
    <>
      <div className="banner">
        <div className="banner-img"></div>
        <div className="banner-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="banner-buttons">
            <Link className="one">{buttonText1}</Link>
            <Link className="two">{buttonText2}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeBanner;
