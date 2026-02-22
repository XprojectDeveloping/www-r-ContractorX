import { Link } from "react-router-dom";

function HomeServices({ title, title2, btnText1, btnText2, dataCard }) {
  return (
    <>
      <div className="services">
        <p>{title}</p>

        <div className="services-title">
          <h3>{title2}</h3>
          <div className="services-buttons">
            <button>
              <Link className="one" to={"/"}>
                {btnText1}
              </Link>
            </button>
            <button>
              <Link className="two" to={"/"}>
                {btnText2}
              </Link>
            </button>
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
                  <h3>{item?.cardTitle}</h3>
                  <p>{item?.cardText}</p>
                  <Link to={"/services"}>{item?.cardLink}</Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default HomeServices;
