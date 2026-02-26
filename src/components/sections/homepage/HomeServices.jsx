import { Link } from "react-router-dom";
import "../../../styles/homepage/_homepage_services.scss";
function HomeServices({ title, title2, btnText1, btnText2, dataCard, btnTo }) {
  return (
    <>
      <div className="services">
        <span>{title}</span>

        <div className="services-title">
          <h3>{title2}</h3>
          <div className="services-buttons">
            <Link className="one" to={"/"}>
              {btnText1}
            </Link>

            <Link className="two" to={btnTo || "/"}>
              {btnText2}
            </Link>
          </div>
        </div>
        <div className="services-cards">
          {dataCard &&
            dataCard?.map((item) => {
              return (
                <div className="services-card" key={item?.id}>
                  <div className="card-img">
                    <img src={item?.cardImg} alt={item?.cardAlt} />
                  </div>
                  <div className="card-text">
                    <h3>{item?.cardTitle}</h3>
                    <p>{item?.cardText}</p>
                  </div>
                  <div className="card-link">
                    <Link to={item?.cardLinkTo || "/"}>{item?.cardLink}</Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomeServices;
