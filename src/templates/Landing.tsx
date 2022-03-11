import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

import landCss from "./landing.module.scss";

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
            {/* <button onClick={() => moveToSection("about")}>About</button> */}

            {/* <button onClick={() => moveToSection("features")}>Features</button>
        <button onClick={() => moveToSection("genesis")}>Genesis</button> */}
            <button
              onClick={() =>
                window.open("https://twitter.com/MeshMill3", "_blank")
              }
            >
              Contact
            </button>
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
              <a
                className={"text-3xl mb-3 underline " + landCss.waitlistLink}
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfJQYizFjN3miwBFqblGT0BXpZAs12XzzWxEjW2vC2mpYQsoQ/viewform?usp=sf_link"
              >
                <span className="text-primary-500">Join the waitlist now</span>
              </a>
              {/* {!waitlistApiRes && (
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
              )} */}
              {/* {waitlistApiRes && <div>You are on the waiting list!</div>} */}
            </div>
            <div className={landCss.scroll}>
              <img src="/images/ellipsis.png"></img>
            </div>
          </div>
        </div>
        {/* <div className={"flex justify-center " + landCss.about}>
          <div>
            Web3-based game development is inaccessible for many indie game
            developers who don’t know how NFTs and Web3 technology works under
            the hood. No one–not game developers or players–are able to use Web3
            technology in existing closed gaming ecosystems such as consoles.
          </div>
          <div>
            In response, we're developing tools to help create NFT games that
            can be played on consoles or mobile devices and deployed on
            different blockchains like Polygon or StarkNet. It also assists
            developers to create in-game, interoperable NFT assets.
          </div>
        </div> */}
      </div>
    </>
  );
};

export { Landing };
