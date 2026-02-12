import HomeBanner from "../components/sections/HomeBanner";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";

function HomePage(params) {
  const { data } = useGlobalFetch();
  return (
    <>
      <main>
        <section>
          {data.mainBanner && (
            <HomeBanner
              title={data?.mainBanner?.bannerTitle}
              text={data?.mainBanner?.bannerText}
              buttonText1={data?.mainBanner?.bannerBtn1}
              buttonText2={data?.mainBanner?.bannerBtn2}
            />
          )}
        </section>  
      </main>
    </>
  );
}
export default HomePage;
