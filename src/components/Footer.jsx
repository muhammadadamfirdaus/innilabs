import React from "react";
import Innilabs from "/brand/innilabs-logo.png";
import Email from "/icons/social/email.svg";
import Facebook from "/icons/social/facebook.svg";
import Instagram from "/icons/social/instagram.svg";
import Linkedin from "/icons/social/linkedin.svg";
import Whatsapp from "/icons/social/whatsapp.svg";

function Footer() {
  return (
    <footer className="bg-[#001E1B] md:bg-opacity-50 md:absolute bottom-0 left-0 w-full mt-[-0.5px]">
      <div className="lg:flex flex-wrap px-4 md:px-12 2xl:px-24 pt-12 pb-24">
        <div className="basis-1/3 px-8 mb-4">
          <div className="logo pt-2 mb-4">
            <img src={Innilabs} className="h-10" alt="Innilabs Logo" />
          </div>
          <h1 className="font-bold text-lg mb-2 uppercase">PT CNA INNILABS INDONESIA</h1>
          <div className="flex flex-col">
            <p>
              Soho Capital, Lt.19, Unit 01-09,
              <br />
              Podomoro City,
              <br />
              Jalan Letjend S. Parman Kav.28,
              <br />
              Tanjung Duren Selatan, Grogol Petamburan,
            </p>
            <p>West Jakarta - Indonesia</p>
            <p>11470</p>
          </div>
        </div>
        <div className="basis-1/3 px-8 mb-4">
          <div className="lg:px-8 py-4">
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul>
              <li className="mb-4">
                <span className="font-light text-base">Microservices Architecture</span>
              </li>
              <li className="mb-4">
                <span className="font-light text-base">Cloud Native Architecture</span>
              </li>
              <li className="mb-4">
                <span className="font-light text-base">Finance Service</span>
              </li>
              <li className="mb-4">
                <span className="font-light text-base">Unified Messaging System</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/3 px-8 mb-4">
          <div className="lg:px-8 py-4">
            <h3 className="font-bold text-lg mb-4">Let's Connect</h3>
            <ul className="flex">
              <li className="mr-4">
                <img src={Email} className="mr-2 w-8 h-8" alt="icon Email" />
              </li>
              <li className="mr-4">
                <img src={Facebook} className="mr-2 w-8 h-8" alt="icon facebook" />
              </li>
              <li className="mr-4">
                <img src={Instagram} className="mr-2 w-8 h-8" alt="icon instagram" />
              </li>
              <li className="mr-4">
                <img src={Linkedin} className="mr-2 w-8 h-8" alt="icon linkedin" />
              </li>
              <li className="mr-4">
                <img src={Whatsapp} className="mr-2 w-8 h-8" alt="icon whatsapp" />
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-full px-8 mt-4">
          <div className="border-t-slate-100 border-t border-opacity-10 flex justify-center py-4 my-4">
            <span className="font-medium text-sm text-slate-500 mr-1">&copy; 2024 - Muhammad Adam Firdaus.</span>
            <span className="font-medium text-sm text-slate-500">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
