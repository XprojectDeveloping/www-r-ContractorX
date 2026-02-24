import { Link } from "react-router-dom";
import MaxWidth from "../components/MaxWidth/MaxWidth";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import "../styles/layout/_footer.scss";
import { useState } from "react";
function Footer() {
  const { data } = useGlobalFetch();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handeSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      alert("Please fill in all fields");
      return;
    }
  };

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
          <div className="footer-form">
            <p>{data?.footer?.footerTopContactUs} </p>
            <form onSubmit={handeSubmit}>
              <div className="form-block">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="button-block">
                <button type="submit">{data?.footer?.footerButton}</button>
              </div>
            </form>
          </div>
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
