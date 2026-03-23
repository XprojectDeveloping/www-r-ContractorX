import { Link } from "react-router-dom";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import "../styles/layout/_footer.scss";
import { useState } from "react";
import Form from "../components/FormData/Form";
function Footer() {
  const { data } = useGlobalFetch();

  return (
    <footer>
      <MaxWidth>
        <div className="footer-top">
          <div className="footer-top-links">
            <p>{data?.footer?.footerTopTitle}</p>
            {data?.footer?.footerTopLinks &&
              data?.footer?.footerTopLinks?.map((item) => {
                return (
                  <Link to={item?.to} key={item.id}>
                    {item?.linkName}
                  </Link>
                );
              })}
          </div>
          <Form form={data?.footer} />

          <div className="footer-top-contact">
            <p>{data?.footer?.footerTopContactTitle}</p>
            <div className="footer-top-contacts">
              {data?.footer?.footerTopContactCall &&
                data?.footer?.footerTopContactCall?.map((item) => {
                  return (
                    <div className="contact" key={item?.id}>
                      <img src={item?.contactImg} alt={item?.contactAlt} />
                      <div className="block">
                        <p>{item?.contactTitle}</p>
                        <a href={"#"}>{item?.contactInfo}</a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{data?.footer?.footerBottomTitle}</p>
        </div>
      </MaxWidth>
    </footer>
  );
}
export default Footer;
