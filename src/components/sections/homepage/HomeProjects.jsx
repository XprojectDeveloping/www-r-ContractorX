import { Link } from "react-router-dom";
import "../../../styles/homepage/_homepage_projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function HomeProjects({ title, title2, btnText1, btnText2, dataCard, btnTo }) {
  return (
    <>
      <div className="projects">
        <span>{title}</span>

        <div className="projects-title">
          <h3>{title2}</h3>

          <div className="projects-buttons">
            <Link className="one" to={"/"}>
              {btnText1}
            </Link>

            <Link className="two" to={btnTo || "/"}>
              {btnText2}
            </Link>
          </div>
        </div>
        <div className="projects-cards">
          <Swiper
            slidesPerView={2}
            spaceBetween={60}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 1 },
            }}
            loop={true}
          >
            {dataCard &&
              dataCard?.map((item) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <div className="projects-card">
                      <img src={item?.cardImg} alt={item?.cardAlt} />

                      <div className="projects-card-title">
                        <h3>{item?.cardTitle}</h3>
                        <p>{item?.cardText}</p>

                        <div className="bottom">
                          <img src={item?.cardIco} alt={item?.cardIcoAlt} />
                          <p>{item?.cardBottomTitle}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default HomeProjects;
