import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Lean1 from "/Lean1.jpeg";
import Lean2 from "/Lean2.jpeg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[60px] ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[1020px] text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px]">
                  Education and Training
                </h2>
                <p className="text-base text-gray-500">
                  ILS team members have a long history of excellent teaching and
                  education. We bring a profound level of knowledge and
                  understanding to all of our engagements and use our teaching
                  skills during transformation activities to ensure that
                  companies can become self-sufficient more quickly.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="View more"
              CardTitle="Executive Education "
              CardDescription="Unlock your potential with Executive Education."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              add="executive-education"
            />
            <BlogCard
              date="View more"
              CardTitle="Lean Systems Certification"
              CardDescription="Gain expertise in Lean methodologies with our Lean Systems Certification program."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
              add="lean-system-certification"
            />
            <BlogCard
              date="View more"
              CardTitle="Lean Leader Certification"
              CardDescription="Become a certified Lean Leader and drive organizational efficiency and improvement."
              image={Lean2}
              add="lean-leader-certification"
            />
            <BlogCard
              date="View more"
              CardTitle="Skills Development Workshops"
              CardDescription="Level up with Skills Development Workshops."
              image={Lean1}
              add="skill-development-workshops"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription, add }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".animated").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/2">
        <div className=" w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="animated w-full" />
          </div>
          <div className="animated">
            <h3>
              <div className="mb-4 inline-block text-xl font-bold text-dark hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl">
                {CardTitle}
              </div>
            </h3>
            <p className="text-base text-gray-700">{CardDescription}</p>
            {date && (
              <Link // Change <a> to <Link>
                className="my-3 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
                to={`/${add}`} // Change href to to
              >
                {date} <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
