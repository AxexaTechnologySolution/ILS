import { BsBook } from "react-icons/bs";
import { MdOutlineSupport } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import CloudArrowUpIcon from "@heroicons/react/24/outline/CloudArrowUpIcon";
import FingerPrintIcon from "@heroicons/react/24/outline/FingerPrintIcon";
import LockClosedIcon from "@heroicons/react/24/outline/LockClosedIcon";
import AboutTopImage from "/BBB5.jpg"; // Replace with the correct path to your image
import "bootstrap/dist/css/bootstrap.min.css";
import tl7 from "/tl7.jpg"
import tl8 from "/tl8.jpg"
import tl9 from "/tl9.jpg"
import tl10 from "/tl10.jpg"
import Work from "/client-our-work.jpg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Improved responsiveness",
    description:
      "Respond quickly to customer demand (e.g., seasonal clothing) through rapid supply chain and manufacturing. Reduce obsolescence by minimizing inventory based on forecasts",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Enhanced efficiency",
    description:
      "Efficiently manage customer stock with real-time data for smoother production and logistics. Reduce demand variation on plants, while building stronger customer relationships to deter competitors.",
    icon: LockClosedIcon,
  },
  {
    name: "Optimized lead time",
    description:
      "Optimize supply chain for swift delivery of custom products like HVAC systems. Collaborate with partners to cut costs, enhance stability, and improve product design.",
    icon: ArrowPathIcon,
  },
  {
    name: "Increased adaptability",
    description:
      "Boosted adaptability enables swift adjustments to changing circumstances, ensuring resilience and agility in response to dynamic market conditions.",
    icon: FingerPrintIcon,
  },
];
const lean = [
  {
    name: "Move away from batch systems",
    description: "These require complex equipment and create extra handling.",
  },
  {
    name: "Use order-driven flows",
    description:
      " Release orders strategically to level workload and use pull mechanisms for real-time synchronization ",
  },
  {
    name: "Minimize non-value-added activities",
    description:
      "Eliminate unnecessary steps in put-away, picking, and replenishment.",
  },
  {
    name: "Design IT for efficiency",
    description:
      "Use technology to support low-waste processes with quality control.",
  },
  {
    name: "Reduce motion waste",
    description:
      "Implement slotting strategies and sorting methods to minimize worker movement.",
  },
  {
    name: "Use pull-based replenishment",
    description:
      " Replenish stock based on actual demand, reducing stock-outs and workload.",
  },
];

export default function SupplyChainAndDistribution() {

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
      {/* Main */}
      <div className="container-fluid lg:px-20 xl:px-20 md:p-14 p-8">
        <div className="row">
          <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center rounded-md">
            <img
              src={AboutTopImage}
              alt="No_Img"
              className="w-full h-auto lg:p-10 border-none my-3"
            />
          </div>
          <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10 flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-black font-bold my-4 text-2xl  sm:text-3xl">
                SUPPLY CHAIN & DISTRIBUTION
              </h3>
              <p className="text-black text-semibold pt-2 text-justify text-md  md:text-sm lg:text-lg">
                Competition today occurs at the extended enterprise level, where
                the structure, capabilities, and performance of your company's
                supply chain and distribution system is often a greater
                determinant of business success than internal operations. ILS
                has helped many clients to design and improve these systems to
                eliminate waste, reduce costs, and enhance their ability to
                deliver value to their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Extended Enterprise */}
      <div className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="animated mx-auto max-w-2xl lg:text-center">
            <h2 className=" text-3xl font-bold tracking-tight text-[#007dbd] sm:text-4xl text-center">
              What we do
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Extended enterprise value stream design
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              An extended enterprise value stream integrates your entire supply
              chain, internal operations, and distribution for better customer
              value. Here's what it offers
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-32 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative  ">
                  <dt className="animated text-base font-bold leading-7 text-gray-900 ">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#007dbd]">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ms-14">{feature.name}</div>
                  </dt>
                  <dd className="animated mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Lean distribution */}
      <div className="animated bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className=" text-3xl font-bold tracking-tight text-[#007dbd] sm:text-4xl text-center">
              Lean Distribution{" "}
            </h2>
            <p className="mt-4 text-gray-500 text-lg text-center">
              Lean principles can significantly improve warehousing and
              distribution. Here's the key:
            </p>

            <dl className="animated mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {lean.map((lean) => (
                <div key={lean.name} className="border-l border-gray-200 pl-4">
                  <dt className="font-medium text-gray-900">{lean.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {lean.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8  item-center">
            <img
              src={tl7}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
            />
            <img
              src={tl8}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
            />
            <img
              src={tl9}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
            />
            <img
              src={tl10}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="animated rounded-lg bg-gray-100 md:mt-5 lg:mt-5"
            />
          </div>
        </div>
      </div>
      {/* Our Approuchs */}
      <div className="bg-white px-4 pb-4">
        <div className="animated mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#007dbd] sm:text-4xl text-center">
            Our Approach
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center font-bold">
            We work with our clients through a structured approach that we call
            ILS System™.
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
          <div className="animated m-4 p-6 bg-white  rounded-lg shadow-md">
            <div className="flex justify-between flex-col">
              <div className="text-5xl text-gray-700 flex justify-center">
              <BsBook />
              </div>
              <h1 className="text-xl my-3 font-bold mt-4 xl:text-2xl text-center">
                Assessment
              </h1>
              <p className="text-md text-center">
                They analyze your current operations to identify waste and
                improvement opportunities.
              </p>
            </div>
          </div>
          <div className="animated m-4 p-6 bg-white  rounded-lg shadow-md">
            <div className="flex justify-between flex-col">
              <div className="text-5xl text-gray-700 flex justify-center">
              <MdOutlineSupport />
              </div>
              <h1 className="text-xl my-3 font-bold mt-4 xl:text-2xl text-center">
                Long-Term Support
              </h1>
              <p className="text-md text-center">
                They may develop special tools for your operations and help you
                implement a daily management system.
              </p>
            </div>
          </div>
          <div className="animated m-4 p-6 bg-white  rounded-lg shadow-md">
            <div className="flex justify-between flex-col ">
              <div className="text-5xl text-gray-700 flex justify-center">
              <BsFillCalendarCheckFill />
              </div>
              <h1 className="text-xl my-3 font-bold mt-4 xl:text-2xl text-center">
                Implementation
              </h1>
              <p className="text-md text-center">
                They assign a leader who works with your team to prioritize
                improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our work */}
      <div className="relative bg-gray-100 p-8">
        <div
          className="animated container-lg container-fluid bg-cover bg-center h-64 md:h-88 rounded-lg shadow-md overflow-hidden relative"
          style={{
            backgroundImage: `url(${Work})`, // Setting background image dynamically using the value of the `work` variable
        }}
        
        >
          <div className="absolute inset-0 flex justify-center items-center  ">
            <div className="bg-[#161F2A] bg-opacity-90 p-6  md:max-w-md rounded-md text-center">
              <h2 className="text-md md:text-md font-semibold mb-4 text-white sm:mt-4">
                OUR WORK
              </h2>
              <p className="text-white text-sm md:text-md">
                The distribution center had top-notch technology, including a
                sophisticated WMS and hardware like flow rack systems, voice
                pick, pick-to-light, conveyance systems, and sort lanes. Wave
                picking was utilized to boost efficiency by batching picks from
                common locations across orders.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}