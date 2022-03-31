import React, { useState } from "react";
import axios from "axios";
import { SocialIcon } from 'react-social-icons';

import landCss from "./landing.module.scss";
import Link from "next/link";

const moveToSection = (secName: any) => {
  console.log(secName);
    const titleElement: any = document.getElementById(secName);
  // console.log(titleElement);
    titleElement.scrollIntoView({ behavior: "smooth" });
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
          <div className={"flex align-center justify-start " + landCss.navLeft}>
            <img className={"ml-4 " + landCss.logoImg} src="images/mm_logo.png"></img>
            {/* <div className={"flex align-center " + landCss.title}>MeshMill</div> */}
            {/* <button className={landCss.title}>MeshMill</button> */}
          </div>
          <div
            className={"flex space-x-4 justify-end mr-4 sm:mr-8 pr-2 pl-2 " + landCss.navRight}
          >
            <button onClick={() => moveToSection("home")}>Home</button>
            <button onClick={() => moveToSection("about")}>About</button>
            <button onClick={() => moveToSection("pricing")}>Pricing</button>
            <button onClick={() => moveToSection("contact")}>Contact</button>
            {/* <button onClick={() => moveToSection("about")}>About</button> */}

            {/* <button onClick={() => moveToSection("features")}>Features</button>
        <button onClick={() => moveToSection("genesis")}>Genesis</button> */}
            {/* <button
              onClick={() =>
                window.open("https://twitter.com/MeshMill3", "_blank")
              }
            >
              Contact
            </button> */}
          </div>
        </div>
        <div className={"flex justify-center " + landCss.wrapper} id="home">
          <img className={landCss.bgImg} src="/images/landing_bg.png"></img>
          <div className={landCss.titleWrapper}>
            <div className={"text-2xl sm:text-8xl sm:pb-8 " + landCss.title}>
              <span className="text-secondary-100">M</span>ESH
              <span className="text-secondary-100">M</span>ILL
            </div>
            {/* <div className={landCss.tagline}>
              <div>BUILD.</div> <div>PLAY.</div> <div>EARN.</div>
            </div> */}
            <div className="sm:text-4xl text-2xl text-center pt-8 sm:pt-32 mb-8 sm:mb-0 ">Web3 Game Development Made Easy</div>
            <div className="sm:mt-8 sm:ml-64 ml-8 text-sm sm:text-xl sm:mr-64 mr-8 sm:pb-4 text-center">Don't know much about blockchain technology? <br></br>No problem, you can easily build Web3-based games using your favorite game engine with the help of MeshMill tools .</div>
            <div className={landCss.playBtn}>
              {/* <img src="/images/playGame.png" height={"80px"}></img> */}
              <a
                className={"text-3xl mb-3 underline"}
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfJQYizFjN3miwBFqblGT0BXpZAs12XzzWxEjW2vC2mpYQsoQ/viewform?usp=sf_link"
              >
                <span className="text-link-500">Join the Waitlist</span>
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
        <div className={"flex justify-center flex-col ml-4 mr-4 " + landCss.about} id="about">
          <div className="text-center m-8 sm:m-16 text-primary-500 text-2xl sm:text-4xl">ABOUT</div>
          <div className="text-center sm:text-4xl sm:ml-16 sm:mr-16 sm:mb-8">
            Web3-based game development is inaccessible for many indie game
            developers who don’t know how NFTs and Web3 technology works under
            the hood. No one–not game developers or players–are able to use Web3
            technology in existing closed gaming ecosystems such as consoles.
          </div>
          <br/>
          <div className="text-center sm:text-4xl sm:ml-16 sm:mr-16">
            In response, we're developing tools to help create NFT games that
            can be played on consoles or mobile devices and deployed on
            different blockchains like Polygon or StarkNet. It also assists
            developers to create in-game, interoperable NFT assets.
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/brochure">
              <a target="_blank" className="text-3xl mb-3 underline cursor-pointer"><span className="text-link-500">More Info</span></a>
            </Link>
          </div>
        </div>
        <div className={"flex justify-center flex-col ml-4 mr-4"} id="pricing">
          <div className="text-center m-8 sm:m-16 text-primary-500 text-2xl sm:text-4xl">EARLY BIRD PRICING</div>
          <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
            <div className="border-2 border-primary-200 rounded-md p-4">
              <div className="relative flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold">Indie Developer</h3>
                <p className="tracking-tight text-gray-500">
                  <span className="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                  <span className="text-3xl font-bold text-primary-200">30</span>
                  <span className="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                </p>
              </div>
            </div>
            
            <div className="border-2 border-primary-200 rounded-md p-4">
              <div className="relative flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold">High School Student</h3>
                <p className="tracking-tight text-gray-500">
                  <span className="text-sm transform inline-block -translate-y-2.5 relative">$</span>
                  <span className="text-3xl font-bold text-primary-200">15</span>
                  <span className="text-sm -translate-y-0.5 inline-block transform">/ user</span>
                </p>
              </div>
            </div>
            
            <div className="border-2 border-primary-200 rounded-md p-4">
              <div className="relative flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold">Studio/School/Non-profit</h3>
                <p className="tracking-tight text-gray-500">
                  <span className="text-sm -translate-y-0.5 inline-block transform">Please Contact for Pricing</span>  
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div className={"flex justify-center flex-col mt-16 mb-16"} id="contact">
          <div className="text-center m-8 sm:m-16 text-primary-500 text-2xl sm:text-4xl">CONTACT</div>
          <div className="text-center text-2xl sm:text-4xl"><SocialIcon network="telegram"/> <a href="https://t.me/meshmill"  target="_blank" className="text-link-500 underline  ">@MeshMill</a></div>
          <div className="text-center text-2xl sm:text-4xl mt-2 sm:mt-2"> <SocialIcon network="twitter"/> <a href="https://twitter.com/MeshMill3" className="underline text-link-500" target="_blank"> @MeshMill3</a></div>
        </div>
      </div>
    </>
  );
};

export { Landing };
