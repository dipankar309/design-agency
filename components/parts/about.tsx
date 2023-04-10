import React from "react";

export default function About() {
  return (
    <section className="about-sec">
      <div className="container mx-auto">
        <div className="contact-container">
        <h1 className="text-[#fff] text-7xl font-bold mb-8">About Us</h1>
        <p className="text-[#fff] text-lg md:text-xl lg:text-2xl text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <section className="btn-wrapper mt-10">
          <a
            href=""
            className="btn bg-[#fff] btn-xs sm:btn-sm md:btn-md lg:btn-lg text-black outline-none border-0"
          >
            Read More
          </a>
        </section>
        </div>
      </div>
    </section>
  );
}
