import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="hero-sec">
      <div className="container mx-auto">
        <div className="contact-container">
          <div className="flex items-center relative ">
            <h1 className="hero-title w-fit text-black">
              <span>Design</span>
            </h1>

            <span className="flex w-12 bottom-b-2 border-black h-1 z-10"></span>
          </div>
          <span className="text-black absolute flex ">
            design that can brings insights into reality.
          </span>
          <div className="flex justify-center">
            <h1 className="hero-title text-black">
              <span>Agency</span>
            </h1>

          </div>
        </div>
      </div>
    </section>
  );
}
