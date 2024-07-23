import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Manufacturing_1 from "/manufacturing-1.webp";
import Manufacturing_2 from "/manufacturing-2.webp";
import Manufacturing_3 from "/manufacturing-3.webp";
import Manufacturing_4 from "/manufacturing-4.jpeg";
import Manufacturing_5 from "/manufacturing-5.webp";
import Manufacturing_6 from "/Manufacturing_6.jpg";
import Manufacturing_61 from "/manufacturing-6.jpeg";
import Manufacturing_7 from "/Manufacturing_7.jpg";
import Manufacturing_8 from "/Manufacturing_8.jpg";
import Manufacturing_9 from "/manufacturing-9.webp";
import Manufacturing_10 from "/manufacturing-10.jpeg";
import tl1 from "/tl1.jpg";
import tl2 from "/tl2.jpg";
import tl3 from "/tl3.jpg";
import tl4 from "/tl4.jpg";
import tl5 from "/tl5.jpg";
import tl6 from "/tl6.jpg";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Manufacturing = () => {
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

  const [activePoint, setActivePoint] = useState(0);
  const points = [
    "Value stream design",
    "Lean tools implementation",
    "Detailed Work Design",
    "Facility layout ",
    "Internal logistics and material flow",
  ];

  const descriptions = [
    "Most companies can significantly improve by streamlining their entire operation (value stream). This includes indirect functions, suppliers, and everyone else involved. We help design systems that achieve this goal.",
    "We help you implement key lean tools (5S, standardized work, etc.) to transform operations. We tackle even complex applications, like reducing downtime to zero in machining cells.",
    "We partner with leaders to identify and eliminate productivity blockers. Our process leads to creative solutions with high impact (30-40% gains in efficiency). Examples include flex-work for variable workloads and supercells for maximized output.",
    "Efficient internal logistics & supervision. Flexible workload management (e.g., one worker running multiple machines).Adaptability to changing production needs.",
    "Smooth material flow with minimal waste. Reduced transportation time (minimizing `deadheading`). Pull systems, level scheduling, and kitting for high-variety production.",
  ];

  const handlePointClick = (index) => {
    setActivePoint(index);
  };
  return (
    <div className="pt-8">
      <div class="flex items-center justify-center w-full mt-5 ">
        <div class=" items-center p-5  bg-[#dee1e5] overflow-hidden md:flex justify-evenly">
          <div class="md:w-1/3">
            <img
              class="w-full h-auto rounded-md"
              src={Manufacturing_1}
              alt="Image"
            />
          </div>

          <div class="p-4 md:w-1/2 text-center">
            <h2 class=" font-semibold mb-2 text-3xl lg:text-6xl">
              Manufacturing
            </h2>
            <p className="justify-center flex">
              ILS has lead major operations improvements for our clients in a
              wide range of manufacturing settings. Whether the goal is solving
              a complex quality problem or total lean transformation at the
              extended enterprise level, we create for our clients
            </p>
          </div>
        </div>
      </div>

      <div className="relative  p-8">
        <div
          className=" bg-cover bg-center h-64 md:h-96 rounded-lg shadow-md overflow-hidden relative"
          style={{
            backgroundImage: `url(${Manufacturing_2})`,
          }}
        >
          <div className="animated absolute inset-0 flex justify-center items-center text-center">
            <div className="bg-white mx-10 bg-opacity-80 p-6 rounded-sm hidden lg:block">
              <h2 className="text-xl md:text-2xl font-bold mb-4 ">Value</h2>
              <p className="text-gray-800 ">
                Identify the specific value that your customers expect from your
                products or services. Understanding customer needs is crucial
                for guiding process improvements.
              </p>
            </div>
            <div className="animated bg-white bg-opacity-80 p-6 max-w-full md:max-w-md rounded-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Lean Transformation
              </h2>
              <p className="text-gray-800">
                A "lean transformation" refers to the process of implementing
                lean principles and practices within an organization to improve
                efficiency, eliminate waste, and deliver greater value to
                customers. The term "lean" originated in the manufacturing
                industry, particularly with Toyota's production system, but it
                has since been applied to various sectors, including services,
                healthcare, and software development.
              </p>
            </div>
            <div className="animated bg-white mx-10 bg-opacity-80 p-6 rounded-sm hidden lg:block">
              <h2 className="text-xl md:text-2xl font-bold mb-4 ">
                Value Stream
              </h2>
              <p className="text-gray-800">
                Analyze and map out the end-to-end processes (value streams)
                that deliver the product or service to the customer. This helps
                identify bottlenecks, inefficiencies, and waste.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center py-5 bg-gray-200 flex-col lg:hidden">
        <div className="my-5">
          <div class="container mx-auto flex flex-col gap-10 justify-between md:flex-row bg-cover bg-center bg-no-repeat md:bg-none">
            <div class="animated w-full md:w-1/2 bg-white p-8 rounded-md">
              <h2 class="text-3xl font-semibold mb-4">Value</h2>
              <p>
                Identify the specific value that your customers expect from your
                products or services. Understanding customer needs is crucial
                for guiding process improvements.
              </p>
            </div>

            <div class="animated w-full md:w-1/2 bg-white p-8 rounded-md">
              <h2 class="text-3xl font-semibold mb-4">Value Stream</h2>
              <p>
                Analyze and map out the end-to-end processes (value streams)
                that deliver the product or service to the customer. This helps
                identify bottlenecks, inefficiencies, and waste.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center w-full ">
        <div class=" items-center p-5  bg-[#dee1e5] overflow-hidden md:flex justify-evenly">
          <div class="animated md:p-4 py-5 md:py-0 md:ml-[-2%] md:w-1/2 ">
            <h2 class="animated font-semibold mb-2 text-3xl lg:text-3xl">
              Value Stream Mapping (VSM)
            </h2>
            <p className="justify-center flex">
              A tool used to visually map out and analyze the flow of materials
              and information required to bring a product or service to a
              customer. A successful lean transformation requires commitment
              from top leadership, involvement and engagement of employees at
              all levels, and a dedication to creating a culture of continuous
              improvement. It's a journey that focuses on long-term
              sustainability and adaptability to changing customer needs and
              market demands.
            </p>
          </div>

          <div class="md:w-1/3 ">
            <img
              class="animated w-full  h-auto rounded-md"
              src={Manufacturing_3}
              alt="Image"
            />
          </div>
        </div>
      </div>

      <div className=" mx-auto flex flex-wrap justify-center mt-5">
        <div className="animated text-center">
          <div className="text-4xl font-bold">We create for our clients</div>
          <p className="lg:mx-20 md:mx-10  my-7 text-lg =">
            When creating products or services for clients, it's essential to
            keep their needs and preferences at the forefront. Here are some
            steps you can follow to ensure your offerings align with client
            expectations:
          </p>
        </div>

        <div className="lg:flex grid grid-cols-4">
          <div className="animated max-w-[300px] md:max-w-[500px] rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={Manufacturing_61} alt="Image 2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Market Research</div>
              <p className="text-gray-700 text-base">
                Conduct thorough market research to understand your target
                audience and their pain points. Identify the specific needs,
                desires, and challenges your product and services
              </p>
            </div>
          </div>

          <div className="animated max-w-[300px] md:max-w-[500px] rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={Manufacturing_5} alt="Image 2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"> Customer Support</div>
              <p className="text-gray-700 text-base">
                Provide excellent customer support and after-sales service. Be
                responsive to client inquiries, feedback, and issues to
                demonstrate your commitment to their satisfaction
              </p>
            </div>
          </div>

          <div className="animated max-w-[300px] md:max-w-[500px] rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={Manufacturing_6} alt="Image 3" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Clear Communication</div>
              <p className="text-gray-700 text-base">
                Clearly communicate the features, benefits, and value of your
                products or services to your clients. Make sure they understand
                how your offerings can address their specific needs.
              </p>
            </div>
          </div>

          <div className="animated max-w-[300px] md:max-w-[500px] rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={Manufacturing_7} alt="Image 4" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Quality Assurance</div>
              <p className="text-gray-700 text-base">
                Ensure that your products or services meet high-quality
                standards. Consistently deliver reliable and effective solutions
                to build trust and credibility with your clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="container mx-auto">
        <div className="max-w-full  rounded overflow-hidden shadow-lg my-4">
          <img
            className="w-full h-72 object-cover"
            src={Manufacturing_8}
            alt="Image"
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-4xl mb-2">
              Continuous Improvement
            </div>
            <p className="text-gray-700  text-xl">
              Embrace a culture of continuous improvement. Regularly assess
              client feedback and data to identify areas for enhancement and
              make necessary adjustments.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="flex justify-center items-center py-5 bg-gray-200 flex-col">
        <h1 className="text-3xl mb-10">What we do</h1>
        <div className="container mx-auto sm:flex flex-row gap-5 items-center lg:mt-3">
          <div className="lg:w-1/2">
            <img src={Manufacturing_9} />
          </div>

          <div className="w-full lg:w-1/3 ">
            <ul>
              {points.map((point, index) => (
                <li
                  key={index}
                  onClick={() => handlePointClick(index)}
                  className="cursor-pointer  flex items-center gap-3 my-3"
                >
                  <div className="text-sm">
                    <FaHandPointRight />
                  </div>{" "}
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/3 ">
            {activePoint !== null && (
              <div className="max-w-md bg-white shadow-md rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {points[activePoint]}
                </h3>
                <p>{descriptions[activePoint]}</p>
              </div>
            )}
          </div>
        </div>
      </div> */}
      {/* timeline */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  sm:px-6 py-5 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-5    py-5">
          <li className="animated mb-6 ms-4 ">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white  "></div>
            {/* <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           
          </time> */}
            <h3 className=" mb-4 text-xl font-bold text-black">
              Value stream design
            </h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Most companies can significantly improve by streamlining their
              entire operation (value stream). This includes indirect functions,
              suppliers, and everyone else involved. We help design systems that
              achieve this goal.
            </p>
          </li>
          <li className="animated  mb-6 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white  "></div>

            <h3 className="mb-4 text-xl font-bold text-black">
              Lean tools implementation
            </h3>
            <p className=" text-base font-normal text-gray-500  mb-2">
              We help you implement key lean tools (5S, standardized work, etc.)
              to transform operations. We tackle even complex applications, like
              reducing downtime to zero in machining cells.
            </p>
          </li>
          <li className="animated  ms-4 mb-6">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white  "></div>

            <h3 className="mb-4 text-xl font-bold text-black">
              Detailed Work Design
            </h3>
            <p className="text-base font-normal text-gray-500  mb-2">
              We partner with leaders to identify and eliminate productivity
              blockers. Our process leads to creative solutions with high impact
              (30-40% gains in efficiency). Examples include flex-work for
              variable workloads and supercells for maximized output.
            </p>
          </li>
          <li className="animated  ms-4 mb-6">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white  "></div>

            <h3 className="mb-4 text-xl font-bold text-black">
              Facility layout
            </h3>
            <p className="text-base font-normal text-gray-500  mb-2">
              Efficient internal logistics & supervision. Flexible workload
              management (e.g., one worker running multiple
              machines).Adaptability to changing production needs.
            </p>
          </li>
          <li className="animated  ms-4 mb-6 xl:mx-10">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white "></div>

            <h3 className="mb-4 text-xl font-bold text-black">
              Internal logistics and material flow
            </h3>
            <p className="text-base font-normal text-gray-500  mb-2">
              Smooth material flow with minimal waste. Reduced transportation
              time (minimizing `deadheading`). Pull systems, level scheduling,
              and kitting for high-variety production.
            </p>
          </li>
        </ol>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8  item-center">
          <img
            src={tl1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />
          <img
            src={tl2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />
          <img
            src={tl3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />
          <img
            src={tl4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />

          <img
            src={tl5}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />
          <img
            src={tl6}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
          />
        </div>
      </div>
      {/* timeline end */}

      <div class="flex items-center justify-center w-full ">
        <div class=" items-center p-3  bg-white overflow-hidden md:flex justify-evenly">
          <div class="md:w-1/3 ">
            <img
              class="animated w-full  h-auto rounded-md"
              src={Manufacturing_10}
              alt="Image"
            />
          </div>

          <div class="animated md:p-4 py-5 md:py-0 md:ml-[-2%] md:w-1/2 ">
            <h2 class=" font-semibold mb-2 text-3xl lg:text-3xl">
              Our Approach
            </h2>
            <p className="justify-center flex">
              We analyze and design product development and engineering
              processes to ensure strong cross-functional integration,
              excellence in functional execution, smooth work flow, technical
              focus, flexible deployment, and strong horizontal leadership. We
              use pull-based dispatching and Jidoka to ensure smooth, level-
              paced work flow, create custom tracking tools, and train teams and
              leaders to participate in an effective daily management system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
