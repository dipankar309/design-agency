import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container mx-auto">
        <div className="contact-container">
          <h1 className="sec-title text-white mb-8 md:mb-12 lg:mb-16 xl:mb-20 after-line after:bg-[#ffffff]">
            Contact
          </h1>

          <section className="flex w-full ">
            <div className="w-full md:w-1/2 flex flex-col gap-6 mg:gap-10 lg:gap-16">

              <div className="w-full text-white">
                <h2 className="contact-title mb-2 ">
                  Address -
                </h2>
                <p className="contact-info">
                  New Town, 
                </p>
                <p className="contact-info">
                  Kolkata West Bengal
                </p>
              </div>

              <div className="w-full text-white">
                <h2 className="contact-title mb-2">
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
              <form action="" className="w-[313px]  bg-white rounded-lg py-6 px-8">
                <h2 className="text-center text-black font-semibold mb-4">
                  Get In Touch
                </h2>
                <input type="text" placeholder="Name" className="input input-element" />
                <input type="number" placeholder="Phone" className="input input-element" />
                <textarea className="textarea w-full bg-[#EEEEEE] text-sm mb-6 min-h-[5rem]" placeholder="Bio"></textarea>
                <button className="btn btn-sm capitalize px-6">Send</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
