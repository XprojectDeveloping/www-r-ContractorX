import "../../../styles/about/about-home.scss";
function AboutHome({ img, alt, title, text }) {
  return (
    <>
      <div className="about-home">
        <div className="about-img">
          <img src={img} alt={alt} />
        </div>
        <div className="about-text">
          <h2>{title}</h2>

          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
export default AboutHome;
