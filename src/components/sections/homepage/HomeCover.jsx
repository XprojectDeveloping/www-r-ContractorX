import { Link } from "react-router-dom";
import "../../../styles/homepage/_homepage_cover.scss";
function HomeCover({
  bgImg,
  alt,
  title1,
  title2,
  text1,
  text2,
  btnText1,
  btnText2,
  btnTo,
}) {
  return (
    <>
      <div className="cover">
        <div className="cover-img-container">
          <img className="cover-img" src={bgImg} alt={alt} />
        </div>

        <div className="cover-title">
          <h3>{title1}</h3>
          <h3>{title2}</h3>
          <p>{text1}</p>
          <p>{text2}</p>

          <div className="cover-buttons">
            <Link className="one" to={"/"}>
              {btnText1}
            </Link>

            <Link className="two" to={btnTo || "/"}>
              {btnText2}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeCover;
