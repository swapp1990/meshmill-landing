import React, { useState } from "react";
import axios from "axios";

import landCss from "./landing.module.scss";
import { Timeline } from "./Timeline";

const moveToSection = (secName: any) => {
  console.log(secName);
  //   const titleElement: any = document.getElementById(secName);
  // console.log(titleElement);
  //   titleElement.scrollIntoView({ behavior: "smooth" });
};

const Landing: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [notValidated, setNotValidated] = useState(false);
  const [waitlistApiRes, setWaitlistApiRes] = useState(null);

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const getValidatedBorder = () => {
    if (notValidated) {
      return "border-2 border-red-600";
    } else {
      return "";
    }
  };

  const submitWaitlist = () => {
    console.log(waitlistEmail);
    if (!validateEmail(waitlistEmail)) {
      setNotValidated(true);
      return;
    } else {
      setNotValidated(false);
    }
    axios
      .post(`https://getwaitlist.com/api/v1/waitlists/submit`, {
        api_key: "II6QM8",
        email: waitlistEmail,
        referral_link: document.URL,
      })
      .then((res) => {
        console.log(res);
        setWaitlistApiRes(res.data);
      });
  };
  return (
    <>
      <div className={landCss.landing_main}>
        <div className={landCss.navigation}>
          <div className={landCss.navLeft}>
            <div className={landCss.title}>Meshmill</div>
          </div>
          <div
            className={"flex space-x-4 justify-end mr-4 " + landCss.navRight}
          >
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
            <div className={"text-9xl " + landCss.title}>
              <span className="text-primary-500">M</span>ESH
              <span className="text-primary-500">M</span>ILL
            </div>
            <div className={landCss.tagline}>
              <div>BUILD.</div> <div>PLAY.</div> <div>EARN.</div>
            </div>
            <div className={landCss.playBtn}>
              {/* <img src="/images/playGame.png" height={"80px"}></img> */}
              <div className="text-3xl mb-3 mt-3">Join the waitlist now</div>
              {!waitlistApiRes && (
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={
                      "px-3 py-3 text-gray-800 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full " +
                      getValidatedBorder()
                    }
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                  />
                  <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => submitWaitlist()}
                  >
                    Submit
                  </button>
                </div>
              )}
              {waitlistApiRes && <div>You are on the waiting list!</div>}
            </div>
            <div className={landCss.scroll}>
              <img src="/images/ellipsis.png"></img>
            </div>
          </div>
        </div>
        <div>
          <Timeline></Timeline>
        </div>
        <style jsx>
          {`
            .wrapper {
            }
          `}
        </style>
      </div>
    </>
  );
};

export { Landing };
