import { NavLink } from "react-router-dom";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import { useEffect, useState } from "react";

function Header(params) {
  const { data } = useGlobalFetch();
  const [scroll, setScroll] = useState(false);
  const SCROLL_Y = 200;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_Y) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`${scroll ? "header-scroll header-scroll-block" : ""}`}
      >
        <div className={`header-block ${scroll ? "header-scroll-block" : ""}`}>
          {data?.header &&
            data?.header?.map((item, index) => {
              return (
                <NavLink key={item?.id || index} to={item?.to}>
                  {item?.link_name}
                </NavLink>
              );
            })}
        </div>
      </header>
    </>
  );
}
export default Header;
