import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container mx-auto">
        <div className="contact-container">
          <h1 className="sec-title text-white">
            Contact
          </h1>

          <section className="flex">
            <div className="w-full md:w-1/2">
              <div className="w-full text-white">
                <h2 className="contact-title ">
                  Address -
                </h2>
                <p className="contact-info">
                  New Town, Kolkata
                  West Bengal
                </p>

              </div>
              <div className="w-full text-white">
                <h2 className="contact-title">
                  Address -
                </h2>
                <p className="contact-info">
                  123-456-7890
                </p>
                <p className="contact-info">
                  123-456-7890
                </p>
              </div>

            </div>
            <div className="w-full md:w-1/2">

              <form action="" className="w-[313px] h-[341px] bg-white rounded-lg py-6 px-8">
                <h2 className="text-center text-black font-semibold mb-4">
                  Get In Touch
                </h2>

                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-4" />
                <textarea className="textarea w-full" placeholder="Bio"></textarea>
                <button className="btn">Button</button>



              </form>

            </div>

          </section>

        </div>
      </div>
    </section>
  );
}
