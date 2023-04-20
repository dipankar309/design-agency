import React from "react";

export default function Company() {
  return (
    <section className="company-sec ">
      <div className="container mx-auto">
        <div className="contact-container">

          <h1 className="text-7xl text-[#fff] leading-[1.2]">Company</h1>

          <div className="xl:ml-36 lg:ml-24">
            <h2 className="text-[7.5rem] text-[#fff] font-extrabold leading-[1.2]">
              Dot.Design
            </h2>

          </div>

          <section className="btn-wrapper mt-10 flex justify-center w-full items-center relative ">
            <p className="text-white  absolute left-0">
              <span>
                We make
              </span>
              
              <span>
                Futuristic Design
              </span>
            </p>
            <a href="" className="btn-primary">
              Contact us
            </a>
          </section>

        </div>
      </div>
    </section>
  );
}
