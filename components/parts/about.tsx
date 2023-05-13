import React from "react";

export default function About() {
  return (
    <section className="about-sec">
      <div className="container mx-auto">
        <div className="contact-container">
        <h1 className="text-[#fff] text-7xl font-bold mb-8">About Us</h1>
        <p className="text-[#fff] text-lg md:text-xl lg:text-[22px] text-left leading-8 font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took wa galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Leeriest sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Lauds PageMaker
          including versions of Lorem Ipsum.
        </p>
        <section className="btn-wrapper mt-10 md:mt-16 lg:mt-24">
          <a
            href=""
              className="btn-primary"
          >
            Read More
          </a>
        </section>
        </div>
      </div>
    </section>
  );
}
