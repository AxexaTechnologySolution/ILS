import React from "react";
import { GrWorkshop } from "react-icons/gr";
import { TbBulb } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import ls1 from "/ls1.jpg";
import ls2 from "/ls2.jpg";
import ls3 from "/ls3.jpg";
import Week from "/Week.jpg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ imageUrl, title, description, isImageRight }) => {
  return (
    <div className={`flex flex-col lg:flex-row bg-[#111928] rounded-lg shadow-lg overflow-hidden mb-4 ${isImageRight ? 'lg:flex-row-reverse' : ''}`}>
      <div className="lg:w-1/2">
        <img className="object-cover w-full" src={imageUrl} alt={title} />
      </div>
      <div className="lg:w-1/2 p-4 flex justify-center items-center">
        <div>
          <h2 className="text-[#9b7722] font-bold mb-3 text-center text-4xl">{title}</h2>
          <p className="text-white text-center text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};
const LeanSystem = () => {
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
  const [dropdown1, setDropdown1] = React.useState(false);
  const [dropdown2, setDropdown2] = React.useState(false);
  const [dropdown3, setDropdown3] = React.useState(false);
  return (
    <div className="pt-14  overflow-x-hidden">
      {/* intro */}
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[1020px] text-center lg:mb-20">
           
            <h2 className="mb-4 text-3xl font-bold  sm:text-4xl md:text-[40px]">
              Lean System Certification
            </h2>
            <p className="text-base text-gray-500">
              ILS team members have a long history of excellent teaching and
              education. We bring a profound level of knowledge and
              understanding to all of our engagements and use our teaching
              skills during transformation activities to ensure that companies
              can become self-sufficient more quickly.
            </p>
          </div>
        </div>
      </div>
      {/* 3 points */}
      <div className="animated container-fluid lg:px-10 xl:px-10 p-8 bg-[#111928]">
        <Card
          imageUrl={ls1}
          title="Designing the lean system"
          description="This workshop teaches Lean principles for designing efficient workflows value stream mapping and implementing pull systems to optimize production.          "
          isImageRight={false}
        />
        <Card
          imageUrl={ls2}
          title="The lean work system"
          description="This workshop teaches practical Lean tools through simulations: 5S organization, design, visual aids, standardized processes, faster setups, and quality control. It also covers pull systems for production management."
          isImageRight={true}
        />
        <Card
          imageUrl={ls3}
          title=" Managing the lean system"
          description="This workshop emphasizes empowering employees through team building and problem-solving techniques (C4, Six Sigma, TRIZ). It also covers creating a Daily Management System to foster continuous learning and improvement.           "
          isImageRight={false}
        />
      </div>
      {/* outcomes and objective */}

      <div className="animated container mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Outcomes & Objectives
        </h2>
        <div className="w-full  mx-auto">
          <div className="animated mb-8">
            <button
              onClick={() => setDropdown1(!dropdown1)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>
                Apply lean principles, techniques, tools and practices
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
                      Describe the principles, techniques, tools and practices
                      associated with lean
                    </span>
                  </li>
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
                      Plan and execute a series of improvement projects in the
                      workplace
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="animated mb-8">
            <button
              onClick={() => setDropdown2(!dropdown2)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Help your company become more profitable</span>
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
                      Focus on value, eliminate waste (improve processes,
                      profitability).
                    </span>
                  </li>
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
                      Smooth workflow for faster, higher quality deliveries.
                    </span>
                  </li>
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
                      Teach lean principles to colleagues for continuous
                      improvement.
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="animated mb-8">
            <button
              onClick={() => setDropdown3(!dropdown3)}
              className="flex justify-between items-center w-full bg-white shadow-md rounded-md p-4"
            >
              <span>Create a better place to work</span>
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
                      Build strong teams to solve problems better.
                    </span>
                  </li>
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
                      Set clear processes for consistent results.
                    </span>
                  </li>
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
                      Lead the lean change with clear direction.
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Delivery Options */}
      <div className="bg-[#111928]">
        <div className="container-fluid py-md-5 py-3 mt-md-5">
          <div>
            <h3 className="animated text-center text-[#9b7722] font-bold text-3xl">
              Delivery Options
            </h3>
            <p className="animated text-center text-[#88969A] md:px-40 py-3">
              We apply ILS System™ using a special version that has been
              specially designed to meet the needs of our private equity
              clients. This methodical approach is designed to:
            </p>
          </div>
          <div>
            <div className=" mx-auto py-8 mb-5 w-full px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer  hover:border-gray-900">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <IoIosTimer />
                    </div>

                    <h2 className="text-lg font-semibold">Public delivery</h2>
                  </div>
                  <p className="text-gray-700">
                    Our Kentucky public workshops offer lean training for your
                    team at $7,500 per person. Discounts available for larger
                    groups. Network with professionals from other companies for
                    broader learning and idea sharing.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer hover:border-gray-900">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <GrWorkshop />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Conventional on-site delivery
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    We will train your team (up to 28 people) on-site for
                    $75,000 + expenses (travel, materials, meals). You provide
                    the training space (10m x 12m) and refreshments. We
                    encourage you to coordinate the student projects, so that
                    the smaller projects will have a significant impact for the
                    company.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <TbBulb />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Lean systems certification boot camp
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    We assess your facility, identify key areas for improvement,
                    and develop projects for on-site learning and cost savings.
                    You provide the training space and materials. Everyone needs
                    access to the work area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guaranteed */}
      <div className="relative animated bg-gray-100 p-8">
        <div
          className="container-lg container-fluid bg-cover bg-center h-64 md:h-88 rounded-lg shadow-md overflow-hidden relative"
          style={{
            backgroundImage: "url(/new-pixel.png)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center  ">
            <div className="bg-[#161F2A] bg-opacity-90 p-6  md:max-w-md rounded-md text-center">
              <h2 className="text-md md:text-md font-semibold mb-4 text-white">
                Guaranteed ROI Lean Training
              </h2>
              <p className="text-white text-sm md:text-md">
                Our week-long program guarantees cost savings exceeding program
                cost (average 12:1 ROI). We develop and lead on-site projects
                for your team (up to 28) to achieve this. Price: $120,000 +
                expenses.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* week */}
      <div className="animated bg-white px-8 pb-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <p className="my-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
            Lean systems certification boot camp week – systems
          </p>
        </div>
        <div className="md:grid grid-cols-2 gap-8 items-center">
          <div className=" flex items-center">
            <img
              className="animated w-full h-full rounded-lg shadow-md mb-10"
              src={Week}
              alt="Vision and Mission"
            />
          </div>

          <div className="vission-mission flex flex-col gap-5">
            <div className="animated ">
              <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[#007dbd]">
                Week 1
              </h1>
              <p>Assess your facility and map key value streams.</p>
            </div>
            <div className="animated ">
              <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[#007dbd]">
                Week 2
              </h1>
              <p>
                Lean Systems Certification Boot Camp - Processes Rapid
                Improvement/LIFT activity (focus on restructuring of key
                operations and core processes).
              </p>
            </div>
            <div className="animated ">
              <h1 className="lg:text-2xl md:text-2xl text-xl font-bold text-[#007dbd]">
                Week 3
              </h1>
              <p>
                Lean Systems Certification Boot Camp - Kaizen Rapid
                Improvement/LIFT activity (focus on detailed improvements and
                problem-solving).
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* target audiance */}

      <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="animated px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="animated mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#9b7722] md:text-5xl lg:text-6xl">
            Target Audience
          </h1>
          <p class="animated mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 ">
            This series is designed for all levels (change agents, leaders, team
            members). Physically demanding when part of a partnership (data
            gathering, process analysis, hands-on tasks).
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

export default LeanSystem;
