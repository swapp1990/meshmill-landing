import landCss from "./landing.module.scss";

const moveToSection = (secName: any) => {
  console.log(secName);
  //   const titleElement: any = document.getElementById(secName);
  // console.log(titleElement);
  //   titleElement.scrollIntoView({ behavior: "smooth" });
};

const Landing = () => (
  <div className={landCss.landing_main}>
    <div className={landCss.navigation}>
      <div className={landCss.navLeft}>
        <div className={landCss.title}>Meshmill</div>
      </div>
      <div className={"flex space-x-4 justify-end mr-4 " + landCss.navRight}>
        <button onClick={() => moveToSection("home")}>Home</button>
        <button onClick={() => moveToSection("about")}>About</button>
        {/* <button onClick={() => moveToSection("features")}>Features</button>
        <button onClick={() => moveToSection("genesis")}>Genesis</button> */}
        <button onClick={() => moveToSection("contact")}>Contact</button>
      </div>
    </div>
    <div className={"flex justify-center " + landCss.wrapper}>
      <img className={landCss.bgImg} src="/images/landing_bg.png"></img>
      <div className={landCss.titleWrapper}>
        <div className={landCss.title}>MESHMILL</div>
        <div className={landCss.tagline}>
          <div>BUILD.</div> <div>PLAY.</div> <div>EARN.</div>
        </div>
        <div className={landCss.playBtn}>
          {/* <img src="/images/playGame.png" height={"80px"}></img> */}
        </div>
        <div className={landCss.scroll}>
          <img src="/images/ellipsis.png"></img>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .wrapper {
        }
      `}
    </style>
  </div>
);

export { Landing };
