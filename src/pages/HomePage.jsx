import MaxWidth from "../components/MaxWidth/MaxWidth";
import HomeAbout from "../components/sections/HomeAbout";
import HomeBanner from "../components/sections/HomeBanner";
import useGlobalFetch from "../components/useGlobalFetch/useGlobalFetch";

function HomePage(params) {
  const { data } = useGlobalFetch();
  return (
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
      <section>
        <MaxWidth>
          {data.mainAbout && (
            <HomeAbout
              img={data?.mainAbout?.aboutImg}
              title1={data?.mainAbout?.aboutTitleUp}
              title2={data?.mainAbout?.aboutTitleBottom}
              text={data?.mainAbout?.aboutText}
              buttonText={data?.mainAbout?.aboutBtn}
            />
          )}
        </MaxWidth>
      </section>
    </main>
  );
}
export default HomePage;
