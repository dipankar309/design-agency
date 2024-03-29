import React from 'react'
import Image from 'next/image'

// image import from a
import ImageOne from '../../public/project.jpg' // path to your image file, relative to the site root, e.g. 'images


import ImageTow from '../../public/project2.jpg';
import ImageThree from '../..//public/project3.jpg';


export default function Project() {
    return (
        <section className='project'>
            <div className='continuer mx-auto'>
                <div className='contact-container'>
                    <h1 className='sec-title text-black '>
                        Our Projects
                    </h1>

                    <section className='project-card-wrapper'>

                        <div className='pc-card'>
                            <p className="pvt">
                                traveling website
                            </p>
                            <Image src={ImageOne} width="200" height="240" alt=" project image " />
                        </div>

                        <div className='pc-card'>
                            <p className="pvt">
                                food delivery website
                            </p>
                            <Image src={ImageTow} width="200" height="240" alt=" project image " />
                        </div>

                        <div className='pc-card'>
                            <p className="pvt">
                                SaaS website
                            </p>
                            <Image src={ImageThree} width="200" height="240" alt=" project image " />
                        </div>

                    </section>
                    <div className='flex mt-12 justify-center w-full'>
                        <a href="" className='btn-secondary'>
                            <span>
                                See all
                            </span>
                            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 9L17 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
