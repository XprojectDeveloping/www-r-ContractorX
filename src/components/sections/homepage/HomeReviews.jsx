import { Swiper, SwiperSlide } from "swiper/react";
import "../../../styles/homepage/_homepape_reviews.scss";
function HomeReviews({ title, title2, dataCard }) {
  return (
    <>
      <div className="reviews">
        <span>{title}</span>

        <div className="reviews-title">
          <h3>{title2}</h3>
        </div>

        <div className="reviews-cards">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 0 },
              566: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 1, spaceBetween: 0 },
              767: { slidesPerView: 1, spaceBetween: 0 },
              1024: { slidesPerView: 2, spaceBetween: 60 },
              1280: { slidesPerView: 2, spaceBetween: 60 },
            }}
            loop={true}
          >
            {dataCard &&
              dataCard?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="reviews-card">
                      <div className="reviews-card-img">
                        <img src={item?.cardImg} alt={item?.cardAlt} />
                      </div>
                      <div className="reviews-card-text">
                        <h3>{item?.cardTitle}</h3>
                        <p>{item?.cardText}</p>

                        <div className="reviews-card-text-author">
                          <div className="text">
                            <h4>{item?.cardName}</h4>
                            <p>{item?.cardPosition}</p>
                          </div>
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
export default HomeReviews;
