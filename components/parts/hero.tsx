import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="hero-sec">
      <div className="container mx-auto">
        <div className="flex items-center ">
          <h1 className="hero-title w-fit text-black">
            <span>Design</span>
          </h1>
          <span className="text-black">
            design that can brings insights into reality.
          </span>
        </div>
        <h1 className="hero-title text-black">
          <span>Agency</span>
        </h1>
      </div>
    </section>
  );
}
