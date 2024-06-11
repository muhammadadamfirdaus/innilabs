import React from "react";
import Icon1 from "/icons/molecules.svg";
import Icon2 from "/icons/cloud.svg";
import Icon3 from "/icons/money.svg";
import Icon4 from "/icons/chat.svg";

function Section3() {
  return (
    <div className="section section-3">
      <div className="py-16">
        <h1 className="font-bold px-4 text-4xl text-center mb-12">Unlock Revenue Growth for Your Business</h1>

        <div className="flex justify-center flex-wrap px-12 md:px-4 xl:px-8">
          <div className="card md:max-w-[300px] lg:max-w-[440px] p-6 mb-6 md:mr-4 lg:mr-6">
            <div className="flex items-center mb-4">
              <img src={Icon1} className="mr-4" alt="icon microservices" />
              <h1 className=" font-bold text-xl">Microservices Architecture</h1>
            </div>
            <p className="text-opacity-75 mb-4">Microservices allow for easier maintenance and debugging of individual components within a system.</p>
            <p className="text-opacity-75 mb-4">Implementing a microservices architecture requires careful planning and coordination to ensure seamless communication between services.</p>
          </div>
          <div className="card md:max-w-[300px] lg:max-w-[440px] p-6 mb-6 md:mr-4 lg:mr-6">
            <div className="flex items-center mb-4">
              <img src={Icon2} className="mr-4" alt="icon cloud native architecture" />
              <h1 className=" font-bold text-xl">Cloud Native Architecture</h1>
            </div>
            <p className="text-opacity-75 mb-4">Utilizing a hybrid cloud approach can provide the flexibility to meet changing business needs while maintaining security and cost-efficiency.</p>
            <p className="text-opacity-75 mb-4">Leveraging serverless computing can lead to improved resource utilization and cost savings within your cloud architecture.</p>
          </div>
          <div className="card md:max-w-[300px] lg:max-w-[440px] p-6 mb-6 md:mr-4 lg:mr-6">
            <div className="flex items-center mb-4">
              <img src={Icon3} className="mr-4" alt="icon finance service" />
              <h1 className=" font-bold text-xl">Finance Service</h1>
            </div>
            <p className="text-opacity-75 mb-4">Developing a comprehensive budgeting strategy to align with business goals.</p>
            <p className="text-opacity-75 mb-4">Establishing strong internal controls to prevent fraud and ensure compliance with regulations.</p>
          </div>
          <div className="card md:max-w-[300px] lg:max-w-[440px] p-6 mb-6 md:mr-4 lg:mr-6 2xl:mr-0">
            <div className="flex items-center mb-4">
              <img src={Icon4} className="mr-4" alt="icon unified messaging system" />
              <h1 className=" font-bold text-xl">Unified Messaging System</h1>
            </div>
            <p className="text-opacity-75 mb-4">With a unified messaging system, businesses can improve efficiency and collaboration among team members.</p>
            <p className="text-opacity-75 mb-4">Investing in a unified messaging system can lead to cost savings and increased communication effectiveness.</p>
          </div>
        </div>

        <div className="flex justify-center py-8">
          <button className="default">View All Services</button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
