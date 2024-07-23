import React, { useEffect } from "react";
import { IoIosTimer } from "react-icons/io";
import { BsBarChartSteps, BsGraphUpArrow } from "react-icons/bs";
import {
  MdOutlineIntegrationInstructions,
  MdOutlineManageSearch,
} from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import product_1 from "/product-developement-1.webp";
import product_2 from "/product-developement-2.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProductDevelopement = () => {
  const [dropdown1, setDropdown1] = React.useState(false);
  const [dropdown2, setDropdown2] = React.useState(false);
  const [dropdown3, setDropdown3] = React.useState(false);
  const [dropdown4, setDropdown4] = React.useState(false);
  const [dropdown5, setDropdown5] = React.useState(false);
  const [dropdown6, setDropdown6] = React.useState(false);
  const [dropdown7, setDropdown7] = React.useState(false);
  const [dropdown8, setDropdown8] = React.useState(false);
  const [dropdown9, setDropdown9] = React.useState(false);
  const [dropdown10, setDropdown10] =React.useState(false);
  const [dropdown11, setDropdown11] = React.useState(false);

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
    <div>
      {/* intro */}
      <div className="mx-auto max-w-2xl pt-14 sm:pt-10 lg:pt-16 pb-8 mt-4">
         
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ILS Product Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            ILS Product Development: Innovating solutions to meet market demands through strategic planning, design, and implementation of cutting-edge products.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
      {/* intro end */}
      <div class="p-5  mx-auto  flex flex-col lg:flex-row items-center justify-center bg-gray-100 ">
        <div class="bg-white p-6 rounded-lg  lg:w-1/2 lg:mr-4 mb-3 md:mb-0">
          <h2 class="text-2xl font-semibold mb-4">
            Our experience includes diverse industries like:
          </h2>
          <p class="mb-4">- Custom equipment design</p>
          <p class="mb-4">- Automotive power systems</p>
          <p class="mb-4">- Clothing brand development</p>
          <p class="mb-4">- Heavy equipment manufacturing</p>
        </div>
        <div class="lg:w-1/2 lg:ml-4">
          <img
            src={product_1}
            alt="Your Image"
            class="rounded-lg shadow-md hover-effect-2"
          />
        </div>
      </div>

      <div class=" mx-auto py-8  w-full px-10 bg-gray-100">
        <div class="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="animated  bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <IoIosTimer />
              </div>

              <h2 class="text-lg font-semibold">
                Shortening development times
              </h2>
            </div>
            <p class="text-gray-700">
              Implementing Lean principles can help reduce the time it takes to
              develop products, allowing you to bring them to market faster.
            </p>
          </div>
          <div class="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <BsGraphUpArrow />
              </div>
              <h2 class="text-xl font-semibold  ">
                Increasing product value and profit
              </h2>
            </div>
            <p class="text-gray-700">
              By focusing on value creation and eliminating waste, Lean
              principles can enhance the value of your products while also
              increasing profitability.
            </p>
          </div>
          <div class="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <MdOutlineIntegrationInstructions />
              </div>
              <h2 class="text-xl font-semibold  ">
                Integrating product and process design
              </h2>
            </div>
            <p class="text-gray-700">
              Integrating product and process design streamlines operations and
              ensures that products are developed with manufacturing efficiency
              in mind.
            </p>
          </div>
          <div class="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <GrWorkshop />
              </div>
              <h2 class="text-xl font-semibold  ">Reducing rework</h2>
            </div>
            <p class="text-gray-700">
              Lean principles help identify and eliminate defects early in the
              process, reducing the need for costly rework later on.
            </p>
          </div>
          <div class="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <MdOutlineManageSearch />
              </div>
              <h2 class="text-xl font-semibold  ">
                Managing projects effectively
              </h2>
            </div>
            <p class="text-gray-700">
              Efficient project management ensures that resources are used
              effectively and projects are completed on time and within budget.
            </p>
          </div>
          <div class="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <FaArrowUpShortWide />
              </div>
              <h2 class="text-xl font-semibold  ">Improving efficiency</h2>
            </div>
            <p class="text-gray-700">
              Lean principles focus on eliminating waste and maximizing value,
              leading to improved efficiency across all aspects of product
              development.
            </p>
          </div>
          <div class="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <TbBulb />
              </div>
              <h2 class="text-xl font-semibold  ">
                Accelerating learning and innovation
              </h2>
            </div>
            <p class="text-gray-700">
              A culture of continuous improvement fosters innovation and allows
              teams to learn from their experiences, driving ongoing innovation.
            </p>
          </div>
          <div class="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
            <div className="flex text-2xl items-center gap-3 mb-3">
              <div className="bg-[#007dbd] text-white rounded-full p-2">
                <GiSkills />
              </div>
              <h2 class="text-xl font-semibold  ">
                Developing highly skilled engineers
              </h2>
            </div>
            <p class="text-gray-700">
              By providing training and opportunities for skill development,
              Lean principles help cultivate a team of highly skilled engineers.
            </p>
          </div>
        </div>
      </div>


      {/* <div className="md:flex px-10 py-10  justify-evenly ">
        <div className="  ">
          <div className="text-xl font-semibold mb-3">What We Do</div>
          <h1>Streamline your product development! We can help you:</h1>
          <p>
            We specialize in enhancing team structure for engineering and
            development, enabling you to manage multiple projects effectively
            while prioritizing the best development opportunities, including
            sales. Our expertise lies in seamlessly integrating innovation with
            product development, optimizing engineering workflows, and fostering
            technology and learning within your organization. Additionally, we
            can help implement robust daily management systems and document and
            train your product development process, ensuring efficiency and
            success at every stage.
          </p>
        </div>

        <div className="  border-gray-300 border-r-2 mx-3" />
        <hr className="my-3 " />
        <div className="">
          <div className="text-xl font-semibold mb-3">Our Approach</div>
          <h1>We improve your product development by:</h1>
          <p>
            In our consulting, we meticulously analyze your processes to find
            strengths and weaknesses, paving the way for targeted improvements.
            We optimize your structure for better collaboration, ensuring
            smoother workflows. By aligning projects with customer needs and
            prioritizing effectively, we focus your efforts on impactful
            endeavors. Our expertise lies in integrating innovation seamlessly,
            driving progress. We enhance learning throughout, foster smooth
            execution with daily management systems, and provide real-time
            progress visibility with custom tracking tools. We equip your teams
            with lean principles through comprehensive training.
          </p>
        </div>
        <div className="  border-gray-300 border-r-2 mx-3" />
        <hr className="my-3 " />
        <div className="">
          <div className="text-xl font-semibold mb-3">Our Work</div>
          <h1>We improve your product development by:</h1>
          <p>
            We prioritize the early identification of major technical risks,
            ensuring proactive mitigation strategies. Our focus remains on
            achieving on-time and on-budget project completion, minimizing
            delays and financial overruns. Through efficient resource allocation
            and streamlined processes, we facilitate a significant reduction in
            engineering hours and material costs. Additionally, our approach
            accelerates the development of advanced product technologies,
            enabling quicker market entry and competitive advantage.
          </p>
        </div>
      </div> */}

    
{/*     
      <div className="  container mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">ILS Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Our 11-step Lean Product Development Process:
            </h3>
            <ul className="list-disc pl-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  1. Build a Leadership Team:
                </h4>
                <p>Get key players on board.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  2. Train on Lean Principles:
                </h4>
                <p>Ensure everyone understands the approach.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  3. Analyze Your Current State:
                </h4>
                <p>Identify strengths and weaknesses.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  4. Brainstorm Solutions:
                </h4>
                <p>Address challenging issues collaboratively.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">5. Develop Concepts:</h4>
                <p>Craft initial ideas for improvement.</p>
              </div>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <ul className="list-disc pl-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  6. Plan the Future State:
                </h4>
                <p>Design the optimized process.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">7. Bootcamp Training:</h4>
                <p>Develop methods and launch the new process.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  8. Team Training & Launch:
                </h4>
                <p>Train teams and implement the new process.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  9. Daily Management System:
                </h4>
                <p>Establish routines for monitoring and improvement.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">10. Coach Executives:</h4>
                <p>Guide leaders for effective change management.</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">
                  11. Follow-up & Troubleshooting:
                </h4>
                <p>Address challenges and ensure success.</p>
              </div>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="animated container mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
        ILS Methodology
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-24 md:gap-10 sm:gap">
        <div className="w-full  mx-auto">
          <div className=" mb-8">
            <button
              onClick={() => setDropdown1(!dropdown1)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>
              Build a Leadership Team
              </span>
              <span className="text-gray-600">{dropdown1 ? "-" : "+"}</span>
            </button>
            {dropdown1 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Get key players on board.
                    </span>
                  </li>
             
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown2(!dropdown2)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Train on Lean Principles</span>
              <span className="text-gray-600">{dropdown2 ? "-" : "+"}</span>
            </button>
            {dropdown2 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Ensure everyone understands the approach.
                    </span>
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown3(!dropdown3)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>CAnalyze Your Current State</span>
              <span className="text-gray-600">{dropdown3 ? "-" : "+"}</span>
            </button>
            {dropdown3 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Identify strengths and weaknesses.
                    </span>
                  </li>
                
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown7(!dropdown7)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>
              Brainstorm Solutions
              </span>
              <span className="text-gray-600">{dropdown7 ? "-" : "+"}</span>
            </button>
            {dropdown7 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Address challenging issues collaboratively.
                    </span>
                  </li>
             
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown8(!dropdown8)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Develop Concepts</span>
              <span className="text-gray-600">{dropdown8 ? "-" : "+"}</span>
            </button>
            {dropdown8 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Craft initial ideas for improvement.
                    </span>
                  </li>
                  
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown9(!dropdown9)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Plan the Future State</span>
              <span className="text-gray-600">{dropdown9 ? "-" : "+"}</span>
            </button>
            {dropdown9 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Design the optimized process.
                    </span>
                  </li>
                
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="w-full  mx-auto">
          <div className=" mb-8">
            <button
              onClick={() => setDropdown4(!dropdown4)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>
              Bootcamp Training
              </span>
              <span className="text-gray-600">{dropdown4 ? "-" : "+"}</span>
            </button>
            {dropdown4 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 ">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 "
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Develop methods and launch the new process.
                    </span>
                  </li>
             
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown5(!dropdown5)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Team Training & Launch</span>
              <span className="text-gray-600">{dropdown5 ? "-" : "+"}</span>
            </button>
            {dropdown5 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Train teams and implement the new process.
                    </span>
                  </li>
                 
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown6(!dropdown6)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Daily Management System</span>
              <span className="text-gray-600">{dropdown6 ? "-" : "+"}</span>
            </button>
            {dropdown6 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Establish routines for monitoring and improvement.
                    </span>
                  </li>
                
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown10(!dropdown10)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>
              Coach Executives
              </span>
              <span className="text-gray-600">{dropdown10 ? "-" : "+"}</span>
            </button>
            {dropdown10 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 ">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 "
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Guide leaders for effective change management.
                    </span>
                  </li>
             
                </ul>
              </div>
            )}
          </div>
          <div className=" mb-8">
            <button
              onClick={() => setDropdown11(!dropdown11)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Follow-up & Troubleshooting</span>
              <span className="text-gray-600">{dropdown11 ? "-" : "+"}</span>
            </button>
            {dropdown11 && (
              <div class=" p-2 bg-white rounded-lg md:p-4 dark:bg-gray-800">
                <ul
                  role="list"
                  class="space-y-4 text-gray-500 dark:text-gray-400"
                >
                  <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg
                      class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span class="leading-tight">
                    Address challenges and ensure success.
                    </span>
                  </li>
                 
                </ul>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
      {/* timeline */}
      <ol className="relative border-s border-gray-200  ml-5   py-5">
        <li className="animated   mb-10 ms-4 ">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white "></div>
          <time className="mb-1 text-sm  font-normal leading-none text-[#007dbd] ">
            What we do
          </time>
          <h3 className=" mb-4 text-xl font-bold text-gray-900">
            Streamline your product development!
          </h3>
          <p className="mb-2 text-base font-normal text-gray-500  ">
            Enhance team structure: Manage projects effectively, prioritize
            development opportunities, integrate innovation, and optimize
            engineering workflows for success.
          </p>
          <p className="mb-3 text-base font-normal text-gray-500  ">
            Implement daily management systems: Document and train product
            development processes, ensuring efficiency and success at every
            stage.
          </p>
        </li>
        <li className="animated  mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white "></div>
          <time className="mb-1  text-sm font-normal leading-none text-[#007dbd] ">
            Our Approach
          </time>
          <h3 className="mb-4 text-xl font-bold text-gray-900 ">
            We improve your product development
          </h3>
          <p className="text-base font-normal text-gray-500  mb-2">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
          <p className="text-base font-normal text-gray-500 mb-3">
            Seamless Innovation Integration: Our expertise drives progress
            through innovative integration, fostering learning and providing
            real-time progress visibility.
          </p>
        </li>
        <li className="animated  ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-8 border border-white "></div>
          <time className="mb-1 text-sm font-normal leading-none text-[#007dbd] ">
            Our Work
          </time>
          <h3 className="mb-4 text-xl font-bold text-gray-900 ">
          Optimizing Product Development Efficiency          </h3>
          <p className="text-base font-normal text-gray-500 mb-2">
            Early identification of major technical risks ensures proactive
            mitigation, minimizing delays and financial overruns.
          </p>
          <p className="text-base font-normal text-gray-500 mb-3">
            Efficient resource allocation reduces engineering hours and material
            costs, accelerating the development of advanced product
            technologies.
          </p>
        </li>
      </ol>
      {/* timeline end */}    

      <hr className="py-2" />

      <div className="animated w-full ">
        <h1 className="text-center pt-3 text-3xl font-bold">
          Capital Equipment Design and Build
        </h1>
        <div className="container mx-auto px-8 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg">
              <h1 className="text-xl mb-3 font-semibold">
                A large, leading US company that designs and builds custom metal
                forming equipment faced several issues:
              </h1>
              <div>★ Late and over-budget engineering designs</div>
              <div>★ Difficulty managing multiple projects</div>
              <div>★ Excessive design rework</div>
              <div>★ Stagnant technology and knowledge sharing</div>
              <div>★ Slow project handoff and bottlenecks</div>
            </p>
          </div>
          <div className="md:w-1/2 hover-effect-2 rounded-md">
            <img src={product_2} alt="" className="rounded-md" />
          </div>
        </div>
      </div>

      <hr className="py-2" />

      <div className="animated container mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Transformation Highlights
        </h2>
        <div className="w-full  mx-auto">
          <div className="mb-8">
            <button
              onClick={() => setDropdown1(!dropdown1)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Enhanced up-front design process.</span>
              <span className="text-gray-600">{dropdown1 ? "-" : "+"}</span>
            </button>
            {dropdown1 && (
              <div className="bg-gray-100 rounded-md p-4 mt-2">
                <p>
                  The old way: reference design, siloed departments, late
                  issues. The new way: cross-functional team, upfront planning,
                  faster design, better products.
                </p>
              </div>
            )}
          </div>
          <div className="mb-8">
            <button
              onClick={() => setDropdown2(!dropdown2)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>
                A new system for design standardization, learning, and
                application.
              </span>
              <span className="text-gray-600">{dropdown2 ? "-" : "+"}</span>
            </button>
            {dropdown2 && (
              <div className="bg-gray-100 rounded-md p-4 mt-2">
                <p>
                  Pre-built, tested components (certified lots) and a library of
                  proven designs (confirmed proposals) boost efficiency. This
                  allows for faster quotes, better design starts, and more
                  standardization.
                </p>
              </div>
            )}
          </div>
          <div className="mb-8">
            <button
              onClick={() => setDropdown3(!dropdown3)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>
                A novel pull-based approach to multi-project management.
              </span>
              <span className="text-gray-600">{dropdown3 ? "-" : "+"}</span>
            </button>
            {dropdown3 && (
              <div className="bg-gray-100 rounded-md p-4 mt-2">
                <p>
                  New process = Faster project completion, 40% more efficient
                  assembly, and better margins: Upfront planning with both
                  design and manufacturing teams. Defined build sequences that
                  match lead times and capacity. Dedicated assembly bays with
                  sequenced machine builds. Controlled material release to
                  ensure efficient assembly. "Pull system" keeps work flowing
                  smoothly and prioritized. Improved procurement process reduces
                  costs.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
        <div className=" container mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animated p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Designing and Building Custom Capital Equipment
            </h3>
            <p className="text-gray-700">
              We specialize in designing and building custom capital equipment
              tailored to the unique needs of our clients. Our expertise
              includes conceptualization, prototyping, testing, and
              manufacturing to deliver innovative solutions.
            </p>
          </div>
          <div className="animated p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Developing Automotive Power System Components
            </h3>
            <p className="text-gray-700">
              Our team excels in the development of automotive power system
              components and their manufacturing processes. From electric
              vehicle batteries to hybrid powertrains, we deliver cutting-edge
              solutions for the automotive industry.
            </p>
          </div>
          <div className="animated p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Managing Product Lines and Catalogs for Clothing Companies
            </h3>
            <p className="text-gray-700">
              With extensive experience in the fashion industry, we offer
              comprehensive management of product lines and catalogs for
              clothing companies. Our services cover selection, design,
              sourcing, and supply chain management to ensure success in the
              competitive market.
            </p>
          </div>
          <div className="animated p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Developing Processes for Large Component Fabrication and Machining
            </h3>
            <p className="text-gray-700">
              We specialize in developing processes for large component
              fabrication and machining. Whether it's aerospace components or
              industrial machinery parts, we provide efficient and
              cost-effective solutions to meet the demands of complex
              manufacturing requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductDevelopement;
