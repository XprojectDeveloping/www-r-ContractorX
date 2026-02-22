import MaxWidth from "../components/MaxWidth/MaxWidth";
import HomeAbout from "../components/sections/HomeAbout";
import HomeBanner from "../components/sections/HomeBanner";
import HomeChoice from "../components/sections/HomeChoice";
import HomeCover from "../components/sections/HomeCover";
import HomeServices from "../components/sections/HomeServices";
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
      <section>
        <MaxWidth>
          <HomeServices
            title={data?.mainServices?.servicesTitleUp}
            title2={data?.mainServices?.servicesTitleBottom}
            btnText1={data?.mainServices?.servicesBtn1}
            btnText2={data?.mainServices?.servicesBtn2}
            dataCard={data?.mainServices?.servicesCards}
          />
        </MaxWidth>
      </section>
      <section>
        <HomeCover
          bgImg={data?.mainCover?.coverImg}
          title1={data?.mainCover?.coverTitle1}
          title2={data?.mainCover?.coverTitle2}
          text1={data?.mainCover?.coverText1}
          text2={data?.mainCover?.coverText2}
          btnText1={data?.mainCover?.coverBtn1}
          btnText2={data?.mainCover?.coverBtn2}
        ></HomeCover>
      </section>

      <section>
        <MaxWidth>
          <HomeChoice
            imgLeft={data?.mainChoice?.choiceImg1}
            altLeft={data?.mainChoice?.choiceAlt}
            title={data?.mainChoice?.choiceTitleUp}
            title2Left={data?.mainChoice?.choiceTitleBottom1}
            textLeft={data?.mainChoice?.choiceText1}
            markData={data?.mainChoice?.choiceList1}
            imgRigth={data?.mainChoice?.choiceImg2}
            altRigth={data?.mainChoice?.choiceAlt}
            title2Rigth={data?.mainChoice?.choiceTitleBottom2}
            textRigth={data?.mainChoice?.choiceText2}
          />
        </MaxWidth>
      </section>
    </main>
  );
}
export default HomePage;
