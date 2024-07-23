import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosTimer } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import { TbBulb } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaAssistiveListeningSystems, FaBookReader } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import Manufacturing_4 from "/manufacturing-4.jpeg";
import Manufacturing_9 from "/manufacturing-9.webp";
import Manufacturing_8 from "/manufacturing-1.webp";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import flowChart from "/private-equity-flow.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const timelineItems = [
  { id: '1', title: 'Investment Criteria and Strategy' },
  { id: '2', title: 'Due Diligence Process Overview' },
  { id: '3', title: 'Value Creation Plan(VCP) and Execution' },
  { id: '4', title: 'Financial Planning and Analysis' },
  { id: '5', title: 'Decision Making for the Purchases' },
  { id: '6', title: 'Implementation of Value Creation' },
  { id: '7', title: 'Exiting Investment Strategy' },  
];
gsap.registerPlugin(ScrollTrigger);

const PublicEquity = () => {
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
  // const WorkIcon = () => <></>;
  return (
    <div className="pt-24">
      <div className="container-fluid container-md">
        <div className="row flex justify-center items-center">
          <div className="col-12  col-lg-6 col-xl-6 col-xxl-6 py-sm-2 py-3">
            <p className="font-bold lg:text-[44px] md:text-[30px] sm:text-[26px] xl:text-[44px] text-[20px]">
              ILS helps Private Equity clients create operational value with
              acquisitions.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 py-sm-5 py-3 flex items-center">
            <img
              src="/BBB6.jpg"
              alt="No Image"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="">
          <div className="bg-[#1E2634] py-md-5">
            <div className="animated  row text-center sm:py-10 py-28">
              <h3 className="text-[#88969A] font-bold text-3xl pb-3">
                How we work
              </h3>
              <p className="text-[white] text-md  lg:px-56 md:px-36 mt-2 sm:px-20 px-10">
              The creation and application of creative process designs for the key value streams of each acquisition is at the core of our work. These designs focus on minimizing operational waste, which enhances performance and raises values. Low-capital upgrades with rapid payback times and high returns on investment are given priority. We go beyond formulaic solutions and focus on regions with unnecessary labor. We devise efficient and often original ways to get rid of the wastes and possibilities that others might ignore. We work closely with internal specialists and floor leaders, imparting knowledge and gaining their trust. We strive to create and implement the future state, using cutting-edge methods to generate operational value and provide quantifiable outcomes. We work in partnership with our private equity clients across the entire ownership timeline from due diligence to exit. Up front, during the initial restructuring phase, we focus on the smooth implementation of aggressive and high-impact change.
              </p>
            </div>
          </div>
        </div>
      </div>

    
   
{/*      
      Unlocking business potential: Beyond EBITDA metrics */}
  

      <div className="bg-[#DCE0E5] ">
        <div className="container-fluid py-md-5 py-3 mt-md-5">
          <div>
            <h3 className="animated text-center text-black font-bold text-3xl">
        Unlocking business potential: Beyond EBITDA metrics{" "}
            
            </h3>
          </div>
          <div>
            <div className=" mx-auto py-8 mb-5 w-full px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer  hover:border-gray-900">
                 
                  <p className="text-gray-700">
                  We strengthen the operations management process and team, enabling
            them to consistently meet demanding performance goals and to solve
            problems quickly and systematically.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer hover:border-gray-900">
                  
                  <p className="text-gray-700">
                  We resolve, once and for all, the nagging, persistent operational
                  problems that have been holding operations back
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                
                  <p className="text-gray-700">
                  We build internal skills and capability to sustain lean operations and to continue with an aggressive continuous improvement program throughout the ownership cycle
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer  hover:border-gray-900">
                  
                  <p className="text-gray-700">
                  Our scope of improvement is by no means limited to direct production or service operations. We address office processes, accounting, sales, procurement, IT, inventory management, engineering and product development, maintenance, logistics, supply chain, etc.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer hover:border-gray-900">
                 
                  <p className="text-gray-700">
                  He goal is total enterprise transformation and it is critical to address the most critical and/or wasteful direct and supporting value streams.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                 
                  <p className="text-gray-700">
                  Our goal is to continue in long term partnership with the acquired company after their sale is complete as a trusted advisor where we continue to learn together and make improvements that create higher levels of operational performance and value delivery.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driving operational excellence and value creation */}
      <div className="container-md container-fluid">
        <div className="row">
          <div className="animated  col-12 col-lg-6 col-xl-6 col-xxl-6 py-sm-5 py-3 flex items-center">
            <img
              src="/BBB3.jpg"
              alt="No Image"
              className="max-w-full h-auto rounded-md mx-auto d-block"
            />
          </div>

          <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 py-sm-5">
            <div className="animated  md:px-5 px-2 py-2.5">
              <h4 className="font-bold text-3xl">
                Driving operational excellence and <br /> value creation
              </h4>
              <h5 className="font-semibold text-lg text-[#88969A]">
                Innovative process designs for superior performance
              </h5>
            </div>
            <div className="md:px-5 px-2">
              <ul>
                <li className="animated py-2">
                  At ILS, we specialize in developing and implementing
                  innovative process designs that optimize major value streams
                  for acquisitions.
                </li>
                <li className="animated pb-2">
                  Our focus is on reducing operational waste, driving superior
                  performance gains, and increasing valuations.
                </li>
                <li className="animated pb-2">
                  We emphasize low-capital improvements with rapid payback and a
                  strong return on investment.
                </li>
                <li className="animated pb-2">
                  Unlike traditional consultants, we go beyond formulaic
                  solutions, identifying hidden wastes and opportunities to
                  create effective and novel approaches.
                </li>
                <li className="animated ">
                  Through collaboration with floor leaders and internal experts,
                  we design and implement smarter ways of working, delivering
                  tangible results.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Third Layout Start */}
      {/* <div className="container-md container-fluid py-md-5 py-3 md:px-20 px-5">
        <div>
          <h3 className="animated  text-center font-bold text-3xl">
            Unlocking business potential: Beyond EBITDA metrics
          </h3>
        </div>
        <div>
          <div className="row pt-md-5 px-md-5 py-2 ">
            <div className="animated  col-12 col-md-8 border border-cyan-500 shadow-md rounded text-[#657491] my-md-0 my-3">
              We strengthen the operations management process and team, enabling
              them to consistently meet demanding performance goals and to solve
              problems quickly and systematically.
            </div>
            <div className="animated  col-12 col-md-4 border border-cyan-500 shadow-md rounded text-[#657491] my-md-0">
              We resolve, once and for all, the nagging, persistent operational
              problems that have been holding operations back
            </div>
          </div>
          <div className="row px-md-5 py-2">
            <div className="animated  col-12 col-md-4 border border-cyan-500 shadow-md rounded text-[#657491] my-md-0 my-3">
              We build internal skills and capability to sustain lean operations
              and to continue with an aggressive continuous improvement program
              throughout the ownership cycle
            </div>
            <div className="animated  col-12 col-md-8 border border-cyan-500 shadow-md rounded text-[#657491] my-md-0">
              Our scope of improvement is by no means limited to direct
              production or service operations. We address office processes,
              accounting, sales, procurement, IT, inventory management,
              engineering and product development, maintenance, logistics,
              supply chain, etc.
            </div>
          </div>
          <div className="row px-md-5 py-2">
            <div className="animated col-12 col-md-6 border border-cyan-500 shadow-md rounded text-[#657491] my-md-0 my-3">
              he goal is total enterprise transformation and it is critical to
              address the most critical and/or wasteful direct and supporting
              value streams.
            </div>
            <div className="animated col-12 col-md-6  border border-cyan-500 shadow-md rounded text-[#657491] my-md-0">
              Our goal is to continue in long term partnership with the acquired
              company after their sale is complete as a trusted advisor where we
              continue to learn together and make improvements that create
              higher levels of operational performance and value delivery.
            </div>
          </div>
        </div>
      </div> */}
      {/* Third Layout End */}

      {/* Fourth layout Start */}
      <div className="bg-[#1E2634]">
        <div className="container-fluid py-md-5 py-3 ">
          <div>
            <h3 className="animated text-center text-[#9b7722] font-bold text-3xl">
              Our Approach
            </h3>
            <p className="animated text-center text-[#88969A] md:px-40 py-3">
              We apply ILS System using a special version that has been
              specially designed to meet the needs of our private equity
              clients. This methodical approach is designed to:
            </p>
          </div>
          <div>
            <div className=" mx-auto py-8 mb-5 w-full md:px-10 px-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer  hover:border-gray-900">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <IoIosTimer />
                    </div>

                    <h2 className="text-lg font-semibold">
                      Maximize operational performance and value
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    Implementing Lean principles can help reduce the time it
                    takes to develop products, allowing you to bring them to
                    market faster.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer hover:border-gray-900">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <GrWorkshop />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Build a solid skill base inside the company
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    So that they can sustain the new systems and assume primary
                    responsibility for continuous improvement programs that
                    increase operational value.
                  </p>
                </div>
                <div className="animated animated animated animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <TbBulb />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Effectively manage project implementation.
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    This includes creating full visibility of restructuring
                    progress, identifying issues, applying timely and effective
                    problem solving efforts.
                  </p>
                </div>

                <div className="animated animated animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <BsGraphUpArrow />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Effectively engage with the company
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    Using special strategies to rapidly and efficiently
                    implement major operational change and achieve
                    stabilization.
                  </p>
                </div>
                <div className="animated animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <FaArrowUpShortWide />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Strengthen operations management
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    To insure that performance gains are sustained, capacity is
                    effectively deployed, problems are visible and
                    quickly/effectively addressed.
                  </p>
                </div>
                <div className="animated bg-white p-6 rounded-lg shadow-md hover-effect-3 cursor-pointer">
                  <div className="flex text-2xl items-center gap-3 mb-3">
                    <div className="bg-black text-white rounded-full p-2">
                      <MdOutlineManageSearch />
                    </div>
                    <h2 className="text-xl font-semibold  ">
                      Project management excellence
                    </h2>
                  </div>
                  <p className="text-gray-700">
                    Project Management focus on eliminating waste and maximizing
                    value, leading to improved efficiency across all aspects of
                    product development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth layout End */}

      {/* our value start */}
      <div className="bg-[#DCE0E5] p-md-5 p-3 md:py-20">
        <div>
          <h3 className="animated text-center font-bold text-3xl">
            Restructuring Process
          </h3>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          <div className="animated m-lg-4 p-lg-6 m-2 p-2 bg-white  rounded-lg shadow-md py-4">
            <div className="flex justify-between flex-col text-center">
              <div className="flex self-center text-5xl text-[#007dbd]">
                <FaBookReader />
              </div>
              <h1 className="lg:text-2xl text-lg my-3 text-center font-bold">
                War Room Management:
              </h1>
              <p className="text-md">
                Track all improvement projects with details like owner, goals,
                timelines, progress, and problem-solving steps.
              </p>
            </div>
          </div>

          <div className="animated animated m-lg-4 p-lg-6 m-2 p-2 bg-white  rounded-lg shadow-md py-4">
            <div className="flex justify-between flex-col  text-center">
              <div className="text-5xl flex self-center text-[#007dbd]">
                <SiLevelsdotfyi />
              </div>
              <h1 className="lg:text-2xl text-lg my-3 text-center font-bold">
                Bootcamps (3-5 days):
              </h1>
              <p className="text-md">
                Intensive workshops for project teams to learn lean principles
                and implement improvements. It involve cross-company
                participation for knowledge sharing.
              </p>
            </div>
          </div>

          <div className="animated  m-lg-4 p-lg-6 m-2 p-2 bg-white  rounded-lg shadow-md py-4">
            <div className="flex justify-between flex-col text-center">
              <div className="flex self-center text-5xl text-[#007dbd] text-center">
                <FaAssistiveListeningSystems />
              </div>
              <h1 className="lg:text-2xl text-lg my-3 text-center  font-bold">
                Project Implementation:
              </h1>
              <p className="text-md">
                Utilize various tools like 5S, standardized work, and visual
                controls. Employ different engagement models based on project
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="">
      <h3 className=" text-center text-black font-bold my-lg-4 my-2 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
      ILS 7-step deal flow process:
</h3>
{/* <div className="container flex items-center justify-center">
<img src={flowChart} alt="" className="lg:w-10/12 " />
</div> */}
<div className=" bg-white flex items-center justify-center md:p-10 lg:p-10 ">
      <div className="w-full p-4  ">
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7  sm:gap-x-4 gap-y-7">
          {timelineItems.map((item,index) => (
            <li key={item.id} className="relative mb-6 sm:mb-0">
              <div className="flex items-center justify-center">
                <div className={`z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0" ${item.id === '7' ? 'md:-ml-[290px] lg:-ml-[270px] xl:-ml-40' : ''}`}>
                  <span className="text-blue-800 dark:text-blue-300">{item.id}</span>
                </div>
                {index !== timelineItems.length - 1 && (
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 ml-3 dark:bg-gray-700"></div>
            )}
              </div>
              
              <div className="mt-7 sm:pe-8   text-center">
                <h3 className ={`text-lg font-semibold text-gray-900 dark:text-white border-b-2 border-blue-100 px-4 py-6 shadow-md rounded-md`}>{item.title}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
      </div>

      <div className="bg-white">
        {/* Help your bussiness code start */}
        <div className="container lg:px-20 xl:px-20 md:p-14 p-8">
          <div className="row">
            <div className="animated col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center">
              <img
                src="/BBB1.jpg"
                alt="No_Img"
                className="w-full h-auto lg:p-5 border border-gray-900 rounded-md"
              />
            </div>
            <div className="animated col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10">
              <h3 className="text-[#000000] font-bold text-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl">
                Operational problem solving
              </h3>
              <p className="text-[#88969A] font-semibold pt-2 text-justify">
                Company X is an acquisition of a major private equity firm. ILS
                was leading operations restructuring at the facility and it
                quickly became clear that production scheduling was a major
                barrier to success for its large aftermarket division. The
                problems included:
              </p>
              <ul className="mt-3">
                <li className="mt-3">
                  Parts were high variety with complex routings. Much time was
                  spent changing over certain processes that capacity needs
                  could only be met through overtime.
                </li>
                <li>
                  There were excessive numbers of hot jobs that disrupted
                  production and precluded effective planning. Because of needs
                  for special setups and inefficient labor deployment, these
                  jobs were run at low margins
                </li>
              </ul>
              <div className=" ">
                {/* <button className="text-center text-white bg-[#788488] p-2 rounded-lg mt-3.5 mb-5 hover:bg-[#6c7a7e] hover:shadow-lg transition duration-300">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </button> */}
              </div>
            </div>
          </div>
          {/* Help your bussiness code end */}
        </div>
      </div>

      <div>
        <div className="mx-auto md:px-8 flex flex-wrap justify-center">
          <div className="lg:flex md:w-1/2">
            {/* First Card */}
            <div className="animated animated animated animated max-w-[300px] rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={Manufacturing_4} alt="Image 1" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Special problem-solving
                </div>
                <p className="text-gray-700 text-base">
                  Address quality, scheduling, and other issues as needed
                  throughout restructuring.
                </p>
              </div>
            </div>
            {/* Second Card */}
            <div className="animated animated animated max-w-[300px] rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={Manufacturing_8} alt="Image 3" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Progress reporting</div>
                <p className="text-gray-700 text-base">
                  Weekly reports with audits to track project success and the
                  financial goals.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex md:w-1/2">
            {/* Third Card */}
            <div className="animated animated max-w-[300px] rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src="/EE1.jpg" alt="Image 2" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Daily management system
                </div>
                <p className="text-gray-700 text-base">
                  Strengthen this system, especially standardized work, to
                  improve efficiency.
                </p>
              </div>
            </div>
            {/* Fourth Card */}
            <div className="animated max-w-[300px] rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={Manufacturing_9} alt="Image 4" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Restructuring timeline
                </div>
                <p className="text-gray-700 text-base">
                  This includes building internal skills for continuous
                  improvement and identifying further opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        {/* Help your bussiness code start */}
        <div className="container lg:px-20 xl:px-20 md:p-14 p-8 ">
          <div className="row">
            <div className="animated col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10">
              <h3 className="text-[#000000] font-bold text-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl">
                Enhanced scheduling process improves performance
              </h3>
              <p className="text-[#88969A] font-semibold pt-2 text-justify">
                The implementation of an enhanced scheduling process has
                significantly bolstered performance within our firm. By
                streamlining and optimizing our scheduling procedures, we've
                effectively mitigated many performance issues
              </p>
              <ul>
                <li className="animated  mt-3">
                  Implemented controls for rarely ordered parts to minimize
                  production disruptions while maintaining good service levels
                </li>
                <li className="animated ">
                  Established a new policy for export sales that balanced
                  customer service with smooth operations.
                </li>
                <li className="animated ">
                  Created a new production system that reduced setup times,
                  lowered inventory, and improved workload distribution.
                </li>
                <li className="animated ">
                  Developed a more precise inventory management approach using
                  special service part models, leading to better service and
                  reduced stockouts.
                </li>
              </ul>
              <div className="animated  ">
                {/* <button className="text-center text-white bg-[#788488] p-2 rounded-lg mt-3.5 mb-5 hover:bg-[#6c7a7e] hover:shadow-lg transition duration-300">
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </button> */}
              </div>
            </div>
            <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center">
              <img
                src="/publicequity.jpg"
                alt="No_Img"
                className="animated w-full h-auto lg:p-5 border border-gray-900 rounded-md"
              />
            </div>
          </div>
          {/* Help your bussiness code end */}
        </div>
      </div>
    </div>
  );
};

export default PublicEquity;