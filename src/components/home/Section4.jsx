import React from "react";
import BCA from "/clients/bank-bca.png";
import BNI from "/clients/bank-bni.png";
import CIMB from "/clients/bank-cimb-niaga.png";
import Hana from "/clients/bank-hana-bank.png";
import Line from "/clients/bank-line-bank.png";
import Mandiri from "/clients/bank-mandiri.png";

function Section4() {
  return (
    <div className="section section-4">
      <div className="flex flex-col justify-center md:justify-end h-full px-8 pt-8 md:pt-24">
        <h1 className="font-bold px-4 text-2xl text-center mb-8">Our Clients</h1>
        <ul className="flex flex-wrap items-center justify-center">
          <li className="basis-1/2 md:basis-1/3 md:flex md:justify-center mb-4 lg:basis-auto lg:mr-8 xl:mr-8">
            <img src={BCA} className="h-12" alt="Bank BCA" />
          </li>
          <li className="basis-1/2 md:basis-1/3 md:flex md:justify-center mb-4 lg:basis-auto lg:mr-8 xl:mr-8">
            <img src={BNI} className="h-9" alt="Bank BNI" />
          </li>
          <li className="basis-1/2 md:basis-1/3 md:flex md:justify-center mb-4 lg:basis-auto lg:mr-8 xl:mr-8">
            <img src={CIMB} className="h-8" alt="Bank CIMB" />
          </li>
          <li className="basis-1/2 md:basis-1/3 md:flex md:justify-center mb-4 lg:basis-auto lg:mr-8 xl:mr-8">
            <img src={Hana} className="h-10" alt="Bank Hana" />
          </li>
          <li className="basis-1/2 md:basis-1/3 md:flex md:justify-center mb-4 lg:basis-auto lg:mr-8 xl:mr-8">
            <img src={Line} className="h-12" alt="Bank Line" />
          </li>
          <li className="basis-1/2 md:basis-1/3 md:flex md:justify-center mb-4 lg:basis-auto lg:mr-8 xl:mr-8">
            <img src={Mandiri} className="h-10" alt="Bank Mandiri" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section4;
