import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import { useRoutes } from "react-router-dom";
import { resumeAndPrerenderToNodeStream } from "react-dom/static";
function PageRouters() {
  const page_routers = [
    {
      path: "/",
      element: <HomePage />,
      exact: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  const route = useRoutes(page_routers);
  return <>{route}</>;
}
export default PageRouters;
