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
            <button>
              <Link className="one">{buttonText1}</Link>
            </button>
            <button>
              <Link className="two">{buttonText2}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeBanner;
