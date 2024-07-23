import React from "react";
import ll1 from "/ll1.jpg";
import ll2 from "/ll2.jpg";
import ll3 from "/ll3.jpg";
import ll4 from "/ll4.jpg";
import { IoIosTimer } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import { TbBulb } from "react-icons/tb";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LeanLeader = () => {
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
       
      <div className="bg-[#111928] ">
        <div className="row text-center   py-20">
          <h3 className="text-[#9b7722] font-bold text-3xl py-2">
            Lean Leader Certification
          </h3>
          <p className="text-[#88969A] lg:px-56 md:px-36 mt-2 sm:px-20 px-10">
            The Lean Leadership Certification is an advanced program for leaders
            to become internal lean consultants. It involves workshops,
            workplace projects, and presentations, equipping leaders to drive a
            company's self-sufficient lean transformation.
          </p>
        </div>
      </div>
      {/* timeline */}

      <div className="animated mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  sm:px-6 py-3 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-5    py-5">
          <li className="animated mb-6 ms-4 ">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1 -start-8 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           
          </time> */}
            <h3 className=" mb-4 text-xl font-bold text-black">
              Transformation Technology:
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Lean systems design goes beyond manufacturing. This program
              teaches you to apply lean principles to all areas of a business,
              using data and analytics to improve transactional processes,
              logistics, and equipment management. You'll also learn factory
              physics to analyze complex operations.
            </p>
          </li>
          <li className="animated animated mb-6 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="mb-4 text-xl font-bold text-black">
              Leadership the Lean Way:
            </h3>
            <p className=" text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
              This program teaches modern leadership for lean transformations.
              You'll learn servant leadership, coaching methods, and change
              management strategies. You'll also explore Hoshin planning for
              daily operations and improvement.
            </p>
          </li>
          <li className="animated ms-4 mb-6">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="mb-4 text-xl font-bold text-black">
              The Lean Enterprise:
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
              The final workshop tests your lean knowledge through a complex
              simulation. You'll also delve deeper into change management and
              problem-solving techniques.
            </p>
          </li>
        </ol>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8  item-center">
          <img
            src={ll1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />

          <img
            src={ll2}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />

          <img
            src={ll3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />
          <img
            src={ll4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />
        </div>
      </div>
      {/* timeline end */}
      {/* <div className="text-center">
        <h3 className="text-black font-bold mt-4 text-2xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-4xl text-center">
        Outcomes & Objectives
        </h3>
      </div> */}

      {/* objective Start */}
      <div className="">
        <div className="container-fluid py-md-5 py-3 ">
          <div>
            <h3 className="animated text-center text-black font-bold text-3xl py-2">
              Outcomes & Objectives
            </h3>
          </div>
          <div>
            <div className=" animated mx-auto py-6 mb-5 w-full md:px-10 px-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer  hover:border-gray-900">
                  <div className="animated flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-[#007dbd] text-white rounded-full p-2">
                      <IoIosTimer />
                    </div>

                    <h2 className="text-lg font-semibold">
                      Analyze and select applicable lean principles and tools
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    The program covers problem-solving, develop and deploying a
                    strategy, lean applications, logistics, and equipment
                    management.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer hover:border-gray-900">
                  <div className="animated flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-[#007dbd] text-white rounded-full p-2">
                      <GrWorkshop />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Become a learning organization
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    This section focuses on developing your leadership skills:
                    creating a servant leadership program, applying leadership
                    styles, and coaching others on lean principles.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                  <div className="animated flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-[#007dbd] text-white rounded-full p-2">
                      <TbBulb />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Create a better place to work
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    This section covers building and leading effective teams,
                    increasing employee engagement, and promoting a culture of
                    continuous improvement through suggestion systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* target audiance */}

      <section class="bg-center bg-no-repeat bg-[url('/timeline1.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="animated mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#9b7722] md:text-5xl lg:text-6xl">
            Target Audience
          </h1>
          <p class="animated mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 ">
          This advanced Lean Leadership Certification program is for experienced lean practitioners who are ready to become internal consultants and coaches. It equips them to lead and sustain a continuous improvement culture within your organization.

          </p>
          <div class="animated flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
                 href="/skill-development-workshops"
              class="inline-flex justify-center hover:text-black items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>      
    </div>
  );
};

export default LeanLeader;
