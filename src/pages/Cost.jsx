// import { IoIosTimer, IoIosAnalytics } from "react-icons/io";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { MdOutlineSupport,MdDataSaverOff  } from "react-icons/md"
import { PiMonitorFill } from "react-icons/pi";
import { GrChatOption } from "react-icons/gr";
import { GoReport } from "react-icons/go";;
import costImg from "/Cost_Processs.jpeg";
import { RiHandCoinFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";
import { BsFileText } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import { BsCollection } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { BsGearFill } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { FaTruck, FaLaptop, FaTools, FaCreditCard ,FaDatabase } from "react-icons/fa";
import { FaIndustry, FaDollarSign, FaChartPie, FaLightbulb, FaWarehouse, FaBoxes, FaPenNib, FaUsers } from 'react-icons/fa';
import { SlEnvolopeLetter } from "react-icons/sl";


import { IoIosWater, IoIosHammer } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

import {
  IoIosCar,
  IoIosDesktop,
  IoIosPaper,
  IoIosPeople,
} from "react-icons/io";

import "react-vertical-timeline-component/style.min.css";
// const WorkIcon = () => <></>;

const Cost = () => {
  const features = [];

  const features1 = [
    {
      name: "Direct Materials",
      icon: MdOutlineSupport,
    },
    {
      name: "MRO/Factory Consumables",
      icon: RiHandCoinFill,
    },
    {
      name: "Insurance",
      icon: IoSpeedometer,
    },
    {
      name: "Freight (LTL, TL, International)/ Logistics",
      icon: FaSuitcase,
    },
    {
      name: "Packaging",
      icon: FaArrowUpShortWide,
    },
    {
      name: "Waste Management",
      icon: FaArrowRight,
    },
    {
      name: "Fleet Management",
      icon: FaTruck,
    },
    {
      name: "IT & Telecom",
      icon: FaLaptop,
    },
    {
      name: "Equipment Maintenance & Leasing",
      icon: FaTools,
    },
    {
      name: "Merchant Card Services",
      icon: FaCreditCard,
    },
  ];
  

  const [activeStep, setActiveStep] = useState(1);

  console.log(setActiveStep);
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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Animation for each div
    gsap.utils.toArray(".anime").forEach((element) => {
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
            end: "top 10%",
            scrub: 1,
          },
        }
      );
    });
  }, []);
  const Card = ({ number, text }) => (
    <div className="bg-[#1E2634] border border-gray-300 rounded-lg text-center w-64 h-64 p-4 mx-4 md:w-64 md:h-64 flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-8 bg-[#007dbd] w-12 h-12 rounded-full text-white flex items-center justify-center">
        {number}
      </div>
      <div className="text-lg leading-tight text-white">{text}</div>
    </div>
  );

  Card.propTypes = {
    number: PropTypes.number.isRequired, // Define the number prop as a required number
    text: PropTypes.string.isRequired, // Define the text prop as a required string
  };
  return (
    <div className="md:py-20 py-20">
      <div>
        {/* Main */}
        <div className="container-fluid lg:px-20 xl:px-20 md:p-14 p-8">
          <div className="row">
            <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center rounded-md">
              <img
                src="/Cost_Containment_Img.jpg"
                alt="No_Img"
                className="w-full h-auto lg:p-10 border-none my-3"
              />
            </div>
            <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10 flex justify-center items-center">
              <div className="text-center">
                <h3 className="text-black font-bold my-lg-4 my-2 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
                  Cost Containment
                </h3>
                <p className="text-black text-semibold text-justify text-md md:text-lg  xl:text-lg xxl:text-2xl lg:text-lg">
                  In todays competitive business landscape, effective cost
                  containment is crucial for maintaining profitability and
                  sustainable growth. At ILS, we understand the importance of
                  optimizing resources while maintaining the highest standards
                  of quality and service. To ensure our continued success, we
                  employ a range of cost containment strategies tailored to our
                  unique business needs.
                </p>
                {/* <div className="md:flex-row flex-col md:justify-content-around py-3 text-black text-semibold text-justify text-md md:text-lg  xl:text-lg xxl:text-2xl lg:text-lg">
        <div className="flex md:flex md:justify-content-around py-3 text-black text-semibold text-justify text-md md:text-lg  xl:text-lg xxl:text-2xl lg:text-lg">
          <p
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
            }}
            className="px-3"
          >
            <IoIosTimer style={{ marginRight: "5px" }} />{" "}
            <span>Lean Management</span>
          </p>
          <p style={{ display: "flex", alignItems: "center" }} className="px-3">
            <IoIosAnalytics style={{ marginRight: "5px" }} />{" "}
            Activity-Based Costing (ABC)
          </p>
        </div>
      </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Cards Layout Start */}
        <div className="bg-[#1E2634] md:my-10 lg:my-10 my-5">
          <div className="container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-10 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
            <h3 className="text-white text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
              Historical Average Savings(%)
            </h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPaper className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Office Supplies</p>
                  <p className="text-md text-center">19%</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosDesktop className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Telecommunications</p>
                  <p>18%</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <FaSuitcase className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0"> Freight</p>
                  <p>16%</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosHammer className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Factory Consumables</p>
                  <p>18%</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosCar className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Fleet Management</p>
                  <p>10%</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosWater className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Packaging</p>
                  <p>17%</p>
                </div>
              </div>

              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPaper className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Insurance</p>
                  <p>15%</p>
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPeople className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Payroll Services</p>
                  <p>17%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards Layout End */}
        {/* Timeline Content Start */}
        <div className="pb-10">
          <div>
            <h3 className="text-black  text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl ">
              ILS cost containment Focus areas
            </h3>
          </div>
          <div className="flex items-center justify-center md:mt-5"></div>
          <div className="ml-4">
            {activeStep === 1 && (
              <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-14 lg:max-w-6xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-32 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features1.map((feature) => (
                    <div
                      key={feature.name}
                      className="relative pl-16 text-left "
                    >
                      <dt className=" text-base font-bold leading-7 text-gray-900 ">
                        <div className=" absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#007dbd]">
                          <feature.icon
                            className="animated h-6 w-6 text-white "
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="animated mt-2  text-sm leading-7 text-gray-600">
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
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#007dbd]">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2  text-sm leading-7 text-gray-600">
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
       {/* <div className="anime">
          <h3 className=" text-center text-black font-bold my-lg-6   my-5 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl ">
            ILS Cost Containment Process Flow
          </h3>
          <div className="animated container flex items-center justify-center">
              <img src={flow} alt="" className="lg:w-10/12" />
              </div>  
          <div className="mx-10 md:mx-auto md:px-40">
            <h1 className="text-3xl font-bold mb-8">Marquee with 6 Cards</h1>  
            <Marquee gradient={false}>
              <Card
                number={1}
                text="Introduce ILS Cost Containment and Preliminary Assessment"
              />
              <Card
                number={2}
                text="Present Preliminary Savings Report and execute Client Engagement Letter"
              />
              <Card
                number={3}
                text="Data Collection (Require LoA if data gathered from supplier)"
              />
              <Card number={4} text="Stakeholder Meeting" />
              <Card number={5} text="Data Analysis" />
              <Card number={6} text="Baseline Report" />
              <Card number={7} text="RFP (except for cell phones)" />
              <Card number={8} text="Recommendation / Options Report" />
              <Card number={9} text="Implementation and Monitoring" />
            </Marquee>
          </div>
  
        </div>*/}
        {/* caurosel content alternate start */}
      <div className="bg-slate-50 md:my-10 lg:my-10 my-5">
          <div className="container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-10 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
            <h3 className="text-black text-center font-bold my-4 text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl">
            ILS Cost Containment Process Flow
            </h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPaper className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Introduce ILS Cost Containment and Preliminary Assessment</p>
                  {/* <p className="text-md text-center">19%</p> */}
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <SlEnvolopeLetter  className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Present Preliminary Savings Report and execute Client Engagement Letter</p>
                  {/* <p>18%</p> */}
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <FaDatabase  className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0"> Data Collection (Require LoA if data gathered from supplier)</p>
                  {/* <p>16%</p> */}
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosPeople className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Stakeholder Meeting</p>
                  {/* <p>18%</p> */}
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <MdDataSaverOff  className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Data Analysis</p>
                  {/* <p>10%</p> */}
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <IoIosWater className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Baseline Report</p>
                  {/* <p>17%</p> */}
                </div>
              </div>

              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <GoReport  className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">RFP (except for cell phones)</p>
                  {/* <p>15%</p> */}
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <GrChatOption  className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Recommendation / Options Report</p>
                  {/* <p>17%</p> */}
                </div>
              </div>
              <div className="animated col py-3">
                <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                  <PiMonitorFill  className="w-16 h-16 mb-2 text-[#007dbd]" />
                  <p className="text-md mb-0">Implementation and Monitoring</p>
                  {/* <p>17%</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* caurosel content alternate End */}

      </div>
      <div className="bg-[#1E2634] md:my-10 lg:my-10 my-5 lg:px-20 xl:px-20 md:py-16 px-4 py-5">
        <div className="text-[#48baf4] text-center md:mx-10 lg:mx-60 ">
          No cost to customers unless savings is demonstrated. Robust savings
          monitoring is performed over 24-month period. Customer pays ILS fees
          from the savings generated.
        </div>
        <div className="row md:mx-10">
          <div className="col col-sm-12 col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 lg:p-10 ">
            <h3 className="text-[#88969A] font-bold text-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl">
              Optimizing Supplier Spend: Unleashing Potential Savings
            </h3>
            <p className="text-white text-semibold pt-2 text-justify">
              80% of a company’s spend is with 20% of suppliers – Managed (Cost
              of Goods, Capital Expenditures, Occupancy)
              <br />
              20% of a company’s spend is with 80% of suppliers – “Tail Spend”:
              1,000’s of SKU’s of supplies and services
              <br />
              Many suppliers, diluting buying power; too many relationships to
              effectively manage <br />
              Potential of 10-30% savings by more effectively managing the “tail
              spend”
            </p>
          </div>
          <div className="col col-sm-12 col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center rounded-md">
            <img
              src={costImg}
              alt="No_Img"
              className="w-full h-auto lg:p-10 border-none md:my-10 my-10"
            />
          </div>
        </div>
        {/* Help your bussiness code end */}
      </div>
      <div className="">
        <h3 className=" text-center text-black font-bold  text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl ">
          ILS Cost Containment Process Steps
        </h3>
      </div>
      <div className="md:mx-20  p-4 md:my-5 my-10">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              {" "}
              <BsFileText className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">
              Preliminary Assessment
            </p>
            <content className="px-4 text-gray-500">
              Initial marketing call
              <br />
              Customer provides 12 months G/L data
              <br />
              ILS analyzes the data and prepares preliminary savings estimate
              range
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              {" "}
              <BsFileEarmarkText className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">
              Preliminary Savings Report and execute CEL
            </p>
            <content className="px-4 text-gray-500">
              ILS presents the preliminary estimated savings report Customer
              signs the Client Engagement Letter (CEL)
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              <BsCollection className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">
              Data Collection
            </p>
            <content className="px-4 text-gray-500">
              Detailed data is gathered through supplier invoices provided
              either by the customer or the supplier directly. For the latter,
              we require Letter of Authorization (LOA) from customer.
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              <BsPeople className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">
              Stakeholder Meeting
            </p>
            <content className="px-4 text-gray-500">
              ILS meets with all project stakeholders to validate the data,
              collect details around service needs and current status of
              supplier relationships
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              <BsGraphUp className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">
              Data Analysis
            </p>
            <content className="px-4 text-gray-500">
              ILS will analyze the data gathered from G/L, supplier invoices and
              in some cases data from suppliers. Data is analyzed for
              establishing accurate baseline numbers by category and by
              location.
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              <BsClipboardData className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">
              Baseline Report{" "}
            </p>
            <content className="px-4 text-gray-500">
              Detailed Baseline Report is generated and presented to the
              customer. Customer signs off on the baseline numbers and savings
              measurement methodology
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              <BsCardList className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">Go to Market</p>
            <content className="px-4 text-gray-500">
              Requests for Proposals (RFP) are sent to incumbent suppliers and
              ILS approved suppliers. Responses from suppliers are analyzed and
              options are created for the customer to choose.
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl  my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              <BsCheckCircle className="h-6 w-6 text-white" />
            </div>
            <p className="text-darken mb-3 text-xl font-medium lg:px-14">
              Options Report{" "}
            </p>
            <content className="px-4 text-gray-500">
              Options Report is presented to the customer. If customer wishes to
              keep the incumbent, efforts are made by ILS to work with the
              incumbent to match the ‘best value’ option provided in the report.
              If the customer chooses an option with a new supplier, ILS leads
              the transition.
            </content>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-xl my-4">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#007dbd] shadow-lg shadow-teal-500/40">
              <BsGearFill className="h-6 w-6 text-white" />
            </div>
            <p className="text- mb-3 text-xl font-medium lg:px-14">
              Implementation & Monitoring{" "}
            </p>
            <content className="px-4 text-gray-500">
              ILS implements the option chosen by the customer. Monitoring of
              savings is provided monthly for 24 months.Savings reports are
              validated by the customer before the fee invoice is generated by
              ILS.
            </content>
          </div>
        </div>
      </div>
      {/* Table Content Start */}

      <h3 className=" text-center text-black font-bold  text-xl  md:text-xl lg:text-xl xl:text-3xl xxl:text-3xl ">
        ILS Cost Containment Process Timeline
      </h3>

      <div className="overflow-x-auto ">
        <table className=" border rounded min-w-96 mx-auto my-10 divide-y scrollbar-thin scrollbar-track-gray-100 divide-gray-200">
          <thead className="">
            <tr className="bg-[#007dbd]">
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-50 uppercase tracking-wider">
                Stage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-50   uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  text-slate-50  uppercase tracking-wider">
                Activity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-50   uppercase tracking-wider">
                Deliverable
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 ">
            <tr className="">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Data Collection
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Deadline by Customer
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Customer provides data
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                G/L reports, Invoices
              </td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Assessment
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                30 days
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Analyze Data, meet stakeholders
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Baseline Report
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Go to Market
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                30-45 days
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Issue RFP and evaluate results
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Options Report
              </td>
            </tr>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Implementation
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                30-60 days
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Select suppliers and implement recommendations
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Implementation
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Monitoring
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                through next 24 months
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Monitor for quality and price
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Savings reports
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table Content End */}

            {/* Cards Layout Start */}
            <div className="bg-slate-50">
        <div className="animated container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-20 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
          <h3 className=" text-xl md:text-2xl lg:text-3xl sm:text-2xl font-bold text-center pt-10 py-8">
            CASE STUDY
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaIndustry className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Industry: Wood Processing</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaDollarSign className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Baseline Spend: $35.3 MM/yr.</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaChartPie className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Annual Savings: $4.8MM</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaLightbulb className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Utilities: 8.9%</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaTruck className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Freight: 9.6%</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaWarehouse className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Factory Cons.: 23.0%</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaBoxes className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Packaging: 19.4%</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaPenNib className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Office Supplies: 20.2%</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <FaUsers className="w-12 h-16 mb-2 text-[#007dbd]" />
                <p className="text-sm mb-0">Temp Labor: 5.1%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cards Layout End */}

    </div>
  );
};

export default Cost;
