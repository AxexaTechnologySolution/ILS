import executiveImg from "/BBB4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { GrWorkshop } from "react-icons/gr";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { MdOutlineSupport } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useState } from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { RiHandCoinFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineLineChart } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExecutiveEducation = () => {
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
  const features = [
    {
      name: "Verified Leadership",
      description:
        "Develop strong leadership skills to guide your team through the lean transformation journey with confidence and efficiency.",
      icon: BsFillPersonCheckFill,
    },
    {
      name: "Financial Optimization",
      description:
        "Gain insights into financial management strategies to optimize resource allocation and maximize profitability.",
      icon: RiHandCoinFill,
    },
    {
      name: "Operational Speed",
      description:
        "Streamline operational processes and improve speed to market by identifying and eliminating bottlenecks in your supply chain.",
      icon: IoSpeedometer,
    },
    {
      name: "Strategic Flexibility",
      description:
        "Cultivate strategic flexibility to adapt quickly to changing market dynamics and maintain a competitive edge.",
      icon: IoShuffleOutline,
    },
  ];

  const features1 = [
    {
      name: "Improved Productivity",
      description:
        "Boost productivity by implementing efficient workflows and automation techniques to streamline operations.",
      icon: HiOutlineLightBulb,
    },
    {
      name: "Enhanced Innovation",
      description:
        "Foster a culture of innovation within your organization by encouraging creativity and experimentation.",
      icon: AiOutlineLineChart,
    },
    {
      name: "Customer-Centric Approach",
      description:
        "Adopt a customer-centric approach to business operations by focusing on delivering value and exceeding customer expectations.",
      icon: GiMagnifyingGlass,
    },
    {
      name: "Effective Communication",
      description:
        "Establish clear channels of communication within your organization to improve collaboration and decision-making processes.",
      icon: IoIosRocket,
    },
  ];

  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="md:py-20 py-20">
      <div>
        {/* Main */}
        <div className="container-fluid lg:px-20 xl:px-20 md:p-14 p-8">
          <div className="row">
            <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center rounded-md">
              <img
                src={executiveImg}
                alt="No_Img"
                className="w-full h-auto lg:p-10 border-none my-3"
              />
            </div>
            <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-black font-bold my-lg-4 my-2 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
                  Executive Education
                </h3>
                <p className="text-black text-semibold text-justify text-md md:text-lg  xl:text-lg xxl:text-2xl lg:text-lg">
                  Despite your best efforts, without a supportive executive
                  staff, no lean effort goes very far. To help senior executives
                  understand the full potential impact of becoming a lean
                  organization, ILS has developed and proved two Executive
                  workshops which can be conducted in a public venue, or as a
                  dedicated workshop for a single company. Both of these
                  internationally acclaimed programs focus on lean as a total
                  system and the roles these executives must fill and perform to
                  assure a successful transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Layout Start */}

        <div>
          <div className="animated ">
            <h3 className="text-black text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
              Lean Systems 2-day Executive Workshop
            </h3>
          </div>
          <div>
            {/* NavPill Content Start */}
            <nav className="animated text-center">
              <div className="flex justify-center items-center flex-auto">
                <div
                  className="nav nav-pills flex flex-col md:flex-row"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active text-sm"
                    id="nav-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Description
                  </button>
                  <button
                    className="nav-link text-sm"
                    id="nav-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Outcomes & Objectives
                  </button>
                  <button
                    className="nav-link text-sm"
                    id="nav-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Target Audience
                  </button>
                </div>
              </div>
            </nav>

            {/* NavPill Content End */}

            <div className="animated text-center flex justify-center items-center">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="md:px-60 font-semibold py-3">
                    Lean Leader Bootcamp (5 days): Master Lean fast for business
                    transformation. Mixes lectures, activities & covers all
                    aspects (technical, people, financial). Hands-on project &
                    Hoshin planning included.
                  </div>
                  <div>
                    <div className="md:grid grid-cols-3 gap-2">
                      <div className="animated animated animated m-4 p-6 bg-white  rounded-lg shadow-md border">
                        <div className="flex justify-between flex-col">
                          <div className="text-5xl text-[#007dbd]  flex justify-center">
                            <BsBook />
                          </div>
                          <h1 className="text-xl my-3 font-bold mt-4 xl:text-2xl text-center ">
                            Assessment
                          </h1>
                          <p className="text-md text-center ">
                            They analyze your current operations to identify
                            waste and improvement opportunities.
                          </p>
                        </div>
                      </div>
                      <div className="animated animated m-4 p-6 bg-white  rounded-lg shadow-md border">
                        <div className="flex justify-between flex-col">
                          <div className="text-5xl text-[#007dbd] flex justify-center">
                            <MdOutlineSupport />
                          </div>
                          <h1 className="text-xl my-3 font-bold mt-4 xl:text-2xl text-center">
                            Long-Term Support
                          </h1>
                          <p className="text-md text-center">
                            They may develop special tools for your operations
                            and help you implement a daily management system.
                          </p>
                        </div>
                      </div>
                      <div className="animated m-4 p-6 bg-white  rounded-lg shadow-md border">
                        <div className="flex justify-between flex-col ">
                          <div className="text-5xl text-[#007dbd]  flex justify-center">
                            <BsFillCalendarCheckFill />
                          </div>
                          <h1 className="text-xl my-3 font-bold mt-4 xl:text-2xl text-center">
                            Implementation
                          </h1>
                          <p className="text-md text-center">
                            They assign a leader who works with your team to
                            prioritize improvements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="mt-5">
                    <h3 className=" text-[#007dbd] font-bold text-2xl">
                      Workshop Schedule
                    </h3>
                    <p>
                      {" "}
                     8:30 AM – 8:30 PM
                    </p>
                    <p>
                    8:00 PM – 5:00 PM
                    </p>
                  </div>
                  <div className=" mx-auto py-8 mb-5 w-full px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                      <div className="bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer border hover:border-gray-900">
                        <div className="flex text-2xl items-center gap-3 mb-3">
                          <div className="bg-indigo-600 text-white rounded-full p-2">
                            <GrWorkshop />
                          </div>
                          <h2 className="md:text-xl text-lg font-bold   ">
                            Become a Lean Leader{" "}
                          </h2>
                        </div>
                        <p className="text-gray-700">
                          Develop a vision, build strong teams, and foster a
                          positive culture. Implement standardized work and
                          leadership behaviors to empower employees.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover-effect-3 border cursor-pointer">
                        <div className="flex text-2xl items-center gap-3 mb-3">
                          <div className="bg-indigo-600 text-white rounded-full p-2">
                            <TbBulb />
                          </div>
                          <h2 className="md:text-xl text-lg font-bold  ">
                            Become a lean organization
                          </h2>
                        </div>
                        <p className="text-gray-700">
                          Learn from high-performing companies, eliminate waste,
                          and boost efficiency for growth. This includes
                          creating full visibility of restructuring progress.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover-effect-3 border cursor-pointer">
                        <div className="flex text-2xl items-center gap-3 mb-3">
                          <div className="bg-indigo-600 text-white rounded-full p-2">
                            <FaArrowUpShortWide />
                          </div>
                          <h2 className="md:text-xl text-lg font-bold  ">
                            Create a better work culture{" "}
                          </h2>
                        </div>
                        <p className="text-gray-700">
                          Describe how to build teams to establish new
                          relationships and new skill sets within your
                          organization- the leader’s role as teacher
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* targert Audinece */}
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="md:px-60 font-semibold py-3">
                    This Lean Immersion Workshop targets senior leaders across
                    all departments (sales, finance, HR) in single or multi-site
                    organizations. However, variations are available for
                    mid-level managers, shop floor/office managers, and even
                    value-adding operators.{" "}
                  </div>

                  {/* Timeline Content Start */}
                  <div>
                    <div className="flex items-center justify-center md:mt-5">
                      <div className="flex items-center">
                        <div
                          className={`step hover:cursor-pointer`}
                          onClick={() => handleStepClick(1)}
                        >
                          <span
                            className={`text-sm relative inline-block ${
                              activeStep === 1
                                ? "bg-indigo-600 rounded-full text-white"
                                : ""
                            }`}
                          >
                            <span className="border border-black w-5 h-5 p-2 rounded-full flex items-center justify-center">
                              1
                            </span>
                          </span>{" "}
                        </div>

                        <div className="connector h-0.5 md:w-96 w-40 bg-indigo-600"></div>
                        <div
                          className={`step hover:cursor-pointer`}
                          onClick={() => handleStepClick(2)}
                        >
                          <span
                            className={`text-sm relative inline-block ${
                              activeStep === 2
                                ? "bg-indigo-600 rounded-full text-white"
                                : ""
                            }`}
                          >
                            <span className="border border-black w-5 h-5 p-2 rounded-full flex items-center justify-center">
                              2
                            </span>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      {activeStep === 1 && (
                        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-6xl">
                          <dl className="grid max-w-xl grid-cols-1 gap-x-32 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features1.map((feature) => (
                              <div
                                key={feature.name}
                                className="relative pl-16 text-left "
                              >
                                <dt className="text-base font-bold leading-7 text-gray-900 ">
                                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <feature.icon
                                      className="h-6 w-6 text-white "
                                      aria-hidden="true"
                                    />
                                  </div>
                                  {feature.name}
                                </dt>
                                <dd className="mt-2 text-base text-sm leading-7 text-gray-600">
                                  {feature.description}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                      {activeStep === 2 && (
                        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-6xl">
                          <dl className="grid max-w-xl grid-cols-1 gap-x-32 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                              <div
                                key={feature.name}
                                className="relative pl-16 text-left  "
                              >
                                <dt className="text-base font-bold leading-7 text-gray-900 ">
                                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <feature.icon
                                      className="h-6 w-6 text-white"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  {feature.name}
                                </dt>
                                <dd className="mt-2 text-base text-sm leading-7 text-gray-600">
                                  {feature.description}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Timeline Content End */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Content Start */}
        <div className="mt-md-5 mt-3 md:py-20 py-10 px-3 bg-[#1E2634]">
          <div>
            <h3 className="animated text-white text-center font-bold  text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
              Lean Systems Executive Certification
            </h3>
          </div>
          <div className="animated md:px-60 font-semibold py-3 text-[#88969A] px-2 text-center">
            Lean Leader Bootcamp (5 days): Elevate your Lean expertise through
            an immersive journey tailored for business transformation. This
            comprehensive program seamlessly integrates insightful lectures,
            hands-on activities, and in-depth coverage of technical,
            organizational, and financial dimensions. Immerse yourself in
            practical projects and strategic Hoshin planning exercises to
            fortify your grasp and application of Lean methodologies
          </div>
          <div className="container-md container-fluid">
            <div className="row">
              <div className="animated animated animated col-12 col-lg-6 col-xl-6 col-xxl-6 py-md-2 flex items-center">
                <img
                  src="/manufacturing-10.jpeg"
                  alt="No Image"
                  className="max-w-full h-auto rounded-md mx-auto d-block"
                />
              </div>

              <div className="animated animated col-12 col-lg-6 col-xl-6 col-xxl-6 py-md-2 grid items-center ">
                <div className="grid items-center">
                <div className="px-md-5 px-1">
                  <h4 className="font-bold text-2xl md:text-2xl lg:text-2xl xl:text-3xl  text-[#c6a143]">
                    Description
                  </h4>
                </div>
                <div className="animated px-md-5 px-1">
                  <p className="text-white mb-4">
                    Join us for our intensive five-day workshop designed to
                    immerse participants in the principles and practices of Lean
                    Systems. Throughout the workshop, you'll gain hands-on
                    experience and practical knowledge to drive organizational
                    transformation. Our expert facilitators will guide you
                    through:
                  </p>
                  <div className="animated text-white">
                    <p className="mb-2 text-[#88969A] font-bold text-[18px]">
                      Workshop Schedule:
                    </p>
                    <p>
                      <FaArrowRight className="inline-block ml-1  text-[#c6a143]" />{" "}
                      Day 1 – 8:30 AM – 5:30 PM – Introduction to Lean Systems
                      <br />
                      <FaArrowRight className="inline-block ml-1  text-[#c6a143]" />{" "}
                      Day 2 – 8:00 PM – 5:30 PM – Applying lean principles and
                      lean tools
                      <br />
                      <FaArrowRight className="inline-block ml-1  text-[#c6a143]" />{" "}
                      Day 3 – 8:00 PM – 5:30 PM – Developing transformation
                      plans
                      <br />
                      <FaArrowRight className="inline-block ml-1  text-[#c6a143]" />{" "}
                      Day 4 – 8:00 PM – 5:30 PM – Transformation case
                      studies/Intro to Hoshin
                      <br />
                      <FaArrowRight className="inline-block ml-1  text-[#c6a143]" />{" "}
                      Day 5 – 8:00 PM – 2:00 PM – Developing the Lean Way
                      philosophy
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 grid items-center ">
                <div className="grid items-center">
                <div className="animated px-md-5 px-1 md:pt-5 pt-2">
                  <h4 className="font-bold text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#c6a143]">
                    Outcomes & Objectives
                  </h4>
                </div>
                <div className="px-md-5 px-1 text-white">
                  <ul>
                    <li className="animated py-2">
                      <div className=" text-[#88969A] font-bold text-lg">
                        Become a lean organization
                      </div>
                      <div>
                        Gain insights from successful companies to drive your
                        organizations growth even in challenging times. Develop
                        a clear vision and actionable plan, supported by a Daily
                        Management System for successful execution.
                      </div>
                    </li>
                    <li className="animated pb-2">
                      <div className=" text-[#88969A] font-bold text-lg">
                        Become more profitable
                      </div>
                      Improve processes, eliminate waste, and boost efficiency
                      for profitability. Design optimal workflows for customer
                      satisfaction. Develop leadership for a more engaged
                      workforce.
                    </li>
                    <li className="animated pb-2">
                      <div className=" text-[#88969A] font-bold text-lg">
                        Create a better place to work
                      </div>
                      Build strong teams with diverse skillsets and set clear
                      processes for consistency. Workplace structure can
                      influence company culture.
                    </li>
                  </ul>
                </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 py-md-2 flex items-center">
                <img
                  src="/EE1.jpg"
                  alt="No Image"
                  className="animated max-w-full h-auto rounded-md mx-auto d-block"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 py-md-2 mt-5 flex items-center">
                <img
                  src="/EE3.jpg"
                  alt="No Image"
                  className="animated max-w-full h-auto rounded-md mx-auto d-block"
                />
              </div>

              <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 py:lg-5 py-2 grid items-center ">
                <div className="grid items-center">
                <div className="animated px-md-5 px-1">
                  <h4 className="font-bold  text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#c6a143]">
                    Target Audience
                  </h4>
                </div>
                <div className="animated px-md-5 px-1 text-white">
                  <ul>
                    <li className="animated py-2">
                      <div className="text-[#88969A] font-bold text-lg">
                        Enhance Your Organizational Performance
                      </div>
                      <div>
                        Transform into a Lean Organization: Gain insights from
                        successful companies to drive growth, develop a clear
                        vision, and execute plans effectively with a Daily
                        Management System.
                      </div>
                    </li>
                    <li className="animated pb-2">
                      <div className="text-[#88969A] font-bold text-lg">
                        Boost Profitability
                      </div>
                      Improve processes, eliminate waste, and enhance efficiency
                      to maximize profitability. Design optimal workflows for
                      customer satisfaction and foster engaged leadership.
                    </li>
                    <li className="animated pb-2">
                      <div className="text-[#88969A] font-bold text-lg">
                        Cultivate a Positive Workplace Culture
                      </div>
                      Build strong, diverse teams, establish clear processes for
                      consistency, and shape a workplace structure that fosters
                      a positive company culture.
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Content End */}
      </div>
    </div>
  );
};

export default ExecutiveEducation;
