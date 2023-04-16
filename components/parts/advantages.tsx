import React from "react";

export default function Advantages() {
  return (
    <section className="advantages-sec bg-[#252525] ">
      <div className="container mx-auto">
        <div className="contact-container">
          <h1 className="sec-title text-[#ffffff] relative leading-normal">Advantages</h1>

          <section className="max-w-[700px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-[1.8rem] sm:mt-[2.8rem] md:mt-[3.8rem] lg:mt-[4.8rem] xl:mt-[5.875rem]">

            <div className="advantages-card">
              <div className="c-title">
                <figure>
                  <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00021 29.9999C1.8591 30.0008 1.7194 29.9718 1.5903 29.9148C1.46121 29.8578 1.34563 29.7741 1.25118 29.6693C1.15673 29.5644 1.08553 29.4408 1.04228 29.3065C0.999022 29.1722 0.984686 29.0302 1.00021 28.8899L1.90021 20.7199C1.92543 20.4927 2.02779 20.2809 2.19021 20.1199L21.2702 1.04994C21.6011 0.717046 21.9945 0.452864 22.4278 0.272591C22.8612 0.0923182 23.3259 -0.000488281 23.7952 -0.000488281C24.2646 -0.000488281 24.7293 0.0923182 25.1626 0.272591C25.5959 0.452864 25.9894 0.717046 26.3202 1.04994L30.0002 4.67993C30.3331 5.01079 30.5973 5.40421 30.7776 5.83755C30.9578 6.27088 31.0506 6.73559 31.0506 7.20494C31.0506 7.67428 30.9578 8.13899 30.7776 8.57232C30.5973 9.00566 30.3331 9.39908 30.0002 9.72993L10.8802 28.7999C10.7193 28.9624 10.5075 29.0647 10.2802 29.0899L2.11021 29.9999H2.00021ZM3.86021 21.2799L3.13021 27.8699L9.72021 27.1399L28.5402 8.30994C28.8321 8.01424 28.9958 7.61545 28.9958 7.19993C28.9958 6.78442 28.8321 6.38564 28.5402 6.08994L24.9102 2.45994C24.6145 2.16802 24.2157 2.00435 23.8002 2.00435C23.3847 2.00435 22.9859 2.16802 22.6902 2.45994L3.86021 21.2799Z" fill="#F9F9F9" />
                    <path d="M26.5199 12.7399C26.2576 12.7388 26.0062 12.6346 25.8199 12.4499L18.5499 5.17988C18.363 4.9876 18.26 4.72892 18.2638 4.46074C18.2675 4.19257 18.3777 3.93686 18.5699 3.74988C18.7622 3.56291 19.0209 3.45997 19.2891 3.46372C19.5573 3.46747 19.813 3.5776 19.9999 3.76988L27.2299 10.9999C27.4162 11.1872 27.5207 11.4407 27.5207 11.7049C27.5207 11.9691 27.4162 12.2225 27.2299 12.4099C27.1399 12.5098 27.0306 12.5906 26.9086 12.6473C26.7866 12.704 26.6544 12.7355 26.5199 12.7399Z" fill="#F9F9F9" />
                    <path d="M18.5431 11.0404L9.46387 20.1196L10.8781 21.5338L19.9573 12.4546L18.5431 11.0404Z" fill="#F9F9F9" />
                  </svg>
                </figure>
                <h2 className="text-white">
                  High Quality
                </h2>
              </div>
              <article className="c-content">
                <p>
                  we make cool projects and always responsible for quality design.
                </p>
              </article>
            </div>

            <div className="advantages-card">
              <div className="c-title">
                <figure>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.91406 0.375L6.14062 1.18359L1.18359 6.14062L0.375 6.91406L8.46094 15L2.83594 20.625L2.76562 20.9766L1.53516 27.1641L1.18359 28.8164L2.83594 28.4648L9.02344 27.2344L9.375 27.1641L15 21.5391L23.0508 29.5898L23.8242 28.7812L28.7812 23.8242L29.5898 23.0508L21.5391 15L27.0938 9.44531C28.9043 7.63477 28.9043 4.7168 27.0938 2.90625C26.1885 2.00098 25.0063 1.53516 23.8242 1.53516C22.6421 1.53516 21.46 2.00098 20.5547 2.90625L15 8.46094L6.91406 0.375ZM6.91406 3.57422L9.09375 5.78906L7.44141 7.44141L9.05859 9.05859L10.7109 7.40625L13.3828 10.0781L10.043 13.418L3.53906 6.91406L6.91406 3.57422ZM23.8242 3.71484C24.4087 3.71484 25.002 3.97852 25.5117 4.48828C26.5269 5.50342 26.5269 6.81299 25.5117 7.82812L24.7734 8.56641L21.4336 5.22656L22.1719 4.48828C22.6816 3.97852 23.2397 3.71484 23.8242 3.71484ZM19.8516 6.80859L23.1914 10.1484L9.58594 23.7539C8.84326 22.3257 7.67432 21.1567 6.24609 20.4141L19.8516 6.80859ZM19.957 16.582L22.6289 19.2539L20.9414 20.9414L22.5586 22.5586L24.2461 20.8711L26.3906 23.0156L23.0156 26.3906L16.582 19.957L19.957 16.582ZM4.80469 22.207C6.15381 22.7739 7.22607 23.8462 7.79297 25.1953L4.06641 25.9336L4.80469 22.207Z" fill="#F9F9F9" />
                  </svg>
                </figure>
                <h2 className="text-white">
                  UX Design
                </h2>
              </div>
              <article className="c-content">
                <p>
                  we make futuristic digital projects which is easy to sell.
                </p>
              </article>
            </div>
            <div className="advantages-card">
              <div className="c-title">
                <figure>
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.0859 4.19922C36.9219 3.96484 36.6523 3.82422 36.3711 3.82422H30.9219V1.50391C30.9219 1.02344 30.5234 0.625 30.043 0.625H10.2969C9.81641 0.625 9.41797 1.02344 9.41797 1.50391V15.707C9.41797 16.1875 9.81641 16.5859 10.2969 16.5859H12.7812C13.2383 18.1797 14.7148 19.3633 16.4492 19.3633C18.1836 19.3633 19.6602 18.1914 20.1172 16.5859H29.8555C30.3125 18.1797 31.7891 19.3633 33.5234 19.3633C35.2578 19.3633 36.7344 18.1914 37.1914 16.5859H39.0078C39.4883 16.5859 39.8867 16.1875 39.8867 15.707V8.47656C39.8867 8.28906 39.8281 8.11328 39.7227 7.97266L37.0859 4.19922ZM38.1406 8.73437H34.2031V5.59375H35.9258L38.1406 8.73437ZM11.1758 2.39453H29.1641V14.8398H20.1992C19.8594 13.0703 18.3125 11.7344 16.4492 11.7344C14.5859 11.7344 13.0273 13.0703 12.6992 14.8398H11.1758V2.39453ZM16.4492 17.6055C15.3125 17.6055 14.3867 16.6797 14.3867 15.543C14.3867 14.4062 15.3125 13.4805 16.4492 13.4805C17.5859 13.4805 18.5117 14.4062 18.5117 15.543C18.5117 16.6797 17.5859 17.6055 16.4492 17.6055ZM33.5352 17.6055C32.3984 17.6055 31.4727 16.6797 31.4727 15.543C31.4727 14.4062 32.3984 13.4805 33.5352 13.4805C34.6719 13.4805 35.5977 14.4062 35.5977 15.543C35.5977 16.6797 34.6719 17.6055 33.5352 17.6055ZM37.2852 14.8398C36.9453 13.0703 35.3984 11.7344 33.5352 11.7344C32.5273 11.7344 31.6016 12.1328 30.9219 12.7773V5.59375H32.4336V9.61328C32.4336 10.0937 32.832 10.4922 33.3125 10.4922H38.1523V14.8398H37.2852Z" fill="#F9F9F9" />
                    <path d="M0.96875 2.39453H7.23828C7.71875 2.39453 8.11719 1.99609 8.11719 1.51563C8.11719 1.03516 7.71875 0.636719 7.23828 0.636719H0.96875C0.488281 0.636719 0.0898438 1.03516 0.0898438 1.51563C0.0898438 1.99609 0.488281 2.39453 0.96875 2.39453Z" fill="#F9F9F9" />
                    <path d="M7.23828 3.83594H2.41016C1.92969 3.83594 1.53125 4.23437 1.53125 4.71484C1.53125 5.19531 1.92969 5.59375 2.41016 5.59375H7.23828C7.71875 5.59375 8.11719 5.19531 8.11719 4.71484C8.11719 4.23437 7.73047 3.83594 7.23828 3.83594Z" fill="#F9F9F9" />
                    <path d="M7.23828 7.03516H4.19141C3.71094 7.03516 3.3125 7.43359 3.3125 7.91406C3.3125 8.39453 3.71094 8.79297 4.19141 8.79297H7.23828C7.71875 8.79297 8.11719 8.39453 8.11719 7.91406C8.11719 7.43359 7.73047 7.03516 7.23828 7.03516Z" fill="#F9F9F9" />
                    <path d="M7.23828 10.2344H6.18359C5.70313 10.2344 5.30469 10.6328 5.30469 11.1133C5.30469 11.5938 5.70313 11.9922 6.18359 11.9922H7.23828C7.71875 11.9922 8.11719 11.5938 8.11719 11.1133C8.11719 10.6328 7.73047 10.2344 7.23828 10.2344Z" fill="#F9F9F9" />
                  </svg>
                </figure>
                <h2 className="text-white">
                  To The End
                </h2>
              </div>
              <article className="c-content">
                <p>
                  we accompany projects till end. so that it can be easy for clients.
                </p>
              </article>
            </div>
            <div className="advantages-card">
              <div className="c-title">
                <figure>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_36_193)">
                      <path d="M15.9996 31.3599C24.4827 31.3599 31.3596 24.483 31.3596 15.9999C31.3596 7.5168 24.4827 0.639893 15.9996 0.639893C7.51655 0.639893 0.639648 7.5168 0.639648 15.9999C0.639648 24.483 7.51655 31.3599 15.9996 31.3599Z" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                      <path d="M16.0001 17.9201C17.0605 17.9201 17.9201 17.0605 17.9201 16.0001C17.9201 14.9397 17.0605 14.0801 16.0001 14.0801C14.9397 14.0801 14.0801 14.9397 14.0801 16.0001C14.0801 17.0605 14.9397 17.9201 16.0001 17.9201Z" fill="#F9F9F9" />
                      <path d="M10.8799 21.1201L15.9999 16.0001V3.84009" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_193">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </figure>
                <h2 className="text-white">
                  Quick Operation
                </h2>
              </div>
              <article className="c-content">
                <p>
                  our team is ready to work on any complex projects in a short time.
                </p>
              </article>
            </div>
            <div className=" advantages-card">
              <div className="c-title">
                <figure>
                  <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 29H13C11.895 29 11 28.105 11 27V25H17V27C17 28.105 16.105 29 15 29Z" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M21 14C21 16.518 19.814 18.889 17.8 20.4L17 21V25H11V21L10.2 20.4C8.186 18.889 7 16.518 7 14C7 10.134 10.134 7 14 7C17.866 7 21 10.134 21 14Z" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M14 4V0" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M6.92959 6.9291L4.10059 4.1001" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M21.0703 6.9291L23.8993 4.1001" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M4 14H0" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M24 14H28" stroke="#F9F9F9" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                  </svg>
                </figure>
                <h2 className="text-white">
                  The Best Minds
                </h2>
              </div>
              <article className="c-content">
                <p>
                  our team is having full of professionals and creative thinkers
                </p>
              </article>
            </div>
            <div className=" advantages-card">
              <div className="c-title">
                <figure>
                  <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.0183 11.6669H7.00641C6.72891 11.6669 6.50391 11.4419 6.50391 11.1644V0.954355C6.50391 0.676855 6.72891 0.451855 7.00641 0.451855L25.052 0.44873C25.1858 0.44873 25.3139 0.501856 25.4077 0.596231C25.502 0.691231 25.5552 0.819355 25.5545 0.953105L25.5208 11.1662C25.5202 11.4425 25.2952 11.6669 25.0183 11.6669ZM7.50891 10.6619H24.517L24.5477 1.45436L7.50891 1.45748V10.6619Z" fill="#F9F9F9" />
                    <path d="M16.0368 29.5513C15.8906 29.5513 15.7512 29.4875 15.6562 29.3763L-0.302547 10.8169C-0.483172 10.6063 -0.459422 10.2894 -0.248797 10.1081C-0.0387973 9.92752 0.279328 9.95127 0.459953 10.1619L16.0375 28.2775L31.6056 10.1594C31.7875 9.94877 32.105 9.92564 32.3143 10.1056C32.525 10.2863 32.5487 10.6038 32.3681 10.8144L16.4187 29.3763C16.3231 29.4875 16.1837 29.5513 16.0368 29.5513Z" fill="#F9F9F9" />
                    <path d="M24.9198 11.8538C24.7766 11.8538 24.6385 11.7925 24.5429 11.6838L15.9141 1.90129L7.28477 11.6838C7.17914 11.8032 7.02164 11.8644 6.86414 11.8519L0.113518 11.2669C-0.163357 11.2432 -0.405857 11.0707 -0.519607 10.8163C-0.632732 10.5625 -0.599607 10.2663 -0.432107 10.0438L6.50664 0.838795C6.67352 0.61692 6.98852 0.57192 7.21039 0.740045C7.43227 0.90692 7.47602 1.22254 7.30914 1.44379L0.631643 10.3025L6.69852 10.8282L15.5366 0.808795C15.7273 0.592545 16.1004 0.592545 16.2904 0.808795L25.1285 10.8288L31.5398 10.2763C31.5398 10.2757 31.5404 10.275 31.5404 10.275L24.6723 1.2613C24.5041 1.04067 24.5466 0.725045 24.7673 0.55692C24.9891 0.388795 25.3035 0.431295 25.4716 0.65192L32.4835 9.8538C32.5691 9.96567 32.6035 10.1075 32.5785 10.2457C32.4654 10.8857 32.1879 11.2294 31.7535 11.2669L24.9629 11.8519C24.9485 11.8532 24.9341 11.8538 24.9198 11.8538Z" fill="#F9F9F9" />
                    <path d="M16.0326 28.5225C15.8476 28.5225 15.677 28.4206 15.5895 28.2575L6.56263 11.4012C6.43138 11.1569 6.52388 10.8519 6.76825 10.7212C7.01325 10.59 7.31763 10.6825 7.44825 10.9269L16.0295 26.9506L24.5758 10.8125C24.7058 10.5675 25.0089 10.4731 25.2551 10.6031C25.5008 10.7331 25.5945 11.0375 25.4645 11.2825L16.477 28.255C16.3901 28.4194 16.2195 28.5219 16.0339 28.5225C16.0333 28.5225 16.0326 28.5225 16.0326 28.5225Z" fill="#F9F9F9" />
                  </svg>
                </figure>
                <h2 className="text-white">
                  Quality Assurance
                </h2>
              </div>
              <article className="c-content">
                <p>
                  we can say with responsibility that our design will bring money.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
