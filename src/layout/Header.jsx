import { NavLink } from "react-router-dom";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";

function Header(params) {
  const { data } = useGlobalFetch();
  return (
    <>
      <header>
        <div className="header-block">
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
