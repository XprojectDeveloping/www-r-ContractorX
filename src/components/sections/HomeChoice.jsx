import "../../styles/homepage/_homepage_choice.scss";
function HomeChoice({
  imgLeft,
  altLedft,
  title,
  title2Left,
  textLeft,
  markData,
  imgRigth,
  altRigth,
  title2Rigth,
  textRigth,
}) {
  return (
    <>
      <div className="choice">
        <div className="choice-container">
          <div className="choice-img">
            <img src={imgLeft} alt={altLedft} />
          </div>

          <div className="choice-title">
            <span>{title}</span>
            <h3>{title2Left}</h3>
            <p>{textLeft}</p>
            <ul>
              {markData &&
                markData.map((item) => {
                  return (
                    <li key={item?.id}>
                      <img src={item?.ico} alt={item?.alt} />
                      {item?.text}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="choice-container">
          <div className="choice-title">
            <h3>{title2Rigth}</h3>
            <p>{textRigth}</p>

            <div className="choice-num">
              <div className="num">
                <p className="top">
                  <span>{"+"}</span>
                  {"350"}
                </p>
                <span className="up">{"Successful Projects"}</span>
              </div>
              <div className="num">
                <p className="top">
                  {"100"} <span>{"%"}</span>
                </p>
                <span className="up">{"Client Satisfaction"}</span>
              </div>
            </div>
          </div>
          <div className="choice-img">
            <img src={imgRigth} alt={altRigth} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomeChoice;
