import MaxWidth from "../components/MaxWidth/MaxWidth";
import AboutHome from "../components/sections/about/abouthome";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";
import { motion } from "framer-motion";
function About() {
  const { data } = useGlobalFetch();
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <section>
          <MaxWidth>
            {data?.mainAbout && (
              <AboutHome
                img={data?.mainAbout?.aboutImg}
                alt={data?.mainAbout?.aboutAlt}
                title={data?.mainAbout?.aboutTitleBottom}
                text={data?.mainAbout.aboutText2}
              />
            )}
          </MaxWidth>
        </section>
      </motion.div>
    </main>
  );
}
export default About;
