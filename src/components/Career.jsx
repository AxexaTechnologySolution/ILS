import { FaAssistiveListeningSystems, FaBookReader } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineSpeakerPhone } from "react-icons/md";
import { SiQuicklook } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, name: "Manufacturing", value: <MdOutlinePrecisionManufacturing /> },
  { id: 2, name: "Distribution", value:<ImBooks />},
  { id: 3, name: "Healthcare", value: <MdHealthAndSafety  /> },
  { id: 4, name: "Communication", value: <MdOutlineSpeakerPhone  /> },
  { id: 5, name: "Quick Learinng", value:<SiQuicklook  />},
  { id: 6, name: "Teamwork", value: <FaPeopleGroup  /> },
];
export default function Example() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
    <div className="pt-14">
      <div className="  px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-10 pb-5 sm:pt-10  lg:pt-16 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our client services.{" "}
              <a href="#" className="font-semibold text-[#007dbd]">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ILS Represents the Future of Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every day, we revise, iterate, and investigate ways to improve
              work for everyone. Join us in shaping a more connected, inclusive,
              and flexible future of work:{" "}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
      </div>
      {/* our value start */}
      <div className="bg-white p-8">
        <div className="animated md:grid grid-cols-3 gap-4">
          <div className="m-4 p-6 bg-white  rounded-lg shadow-md ">
            <div className="flex justify-between flex-col text-center">
              <div className="flex self-center text-5xl text-[#007dbd]">
                <FaBookReader />
              </div>
              <h1 className="text-2xl my-3 text-center font-bold">Connected</h1>
              <p className="text-md">
                We come together wherever we are – across time zones, regions,
                offices and screens.
              </p>
            </div>
          </div>

          <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
            <div className="flex justify-between flex-col  text-center">
              <div className="text-5xl flex self-center text-[#007dbd]">
                <SiLevelsdotfyi />
              </div>
              <h1 className="text-2xl my-3 text-center font-bold">Inclusive</h1>
              <p className="text-md">
                We come together wherever we are – across time zones, regions,
                offices and screens.
              </p>
            </div>
          </div>

          <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
            <div className="flex justify-between flex-col text-center">
              <div className="flex self-center text-5xl text-[#007dbd] text-center">
                <FaAssistiveListeningSystems />
              </div>
              <h1 className="text-2xl my-3 text-center  font-bold">Flexible</h1>
              <p className="text-md">
                We believe in your freedom to work when and how you work best,
                to help us all thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* purpose */}
      <div className="relative bg-gray-100 p-8">
        <div
          className="animated bg-cover bg-center h-64 md:h-96 rounded-lg shadow-md overflow-hidden relative"
          style={{
            backgroundImage:
              "url(https://tms-outsource.com/blog/wp-content/uploads/2021/03/software-heder.jpg)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center text-center ">
            <div className="bg-white bg-opacity-80 p-6 max-w-full md:max-w-md rounded-sm">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Careers
              </h2>
              <p className="text-gray-800">
                Are you passionate about problem-solving, creative thinking, and
                Lean systems? Join our team and help us build better businesses!
                We also help clients hire top talent in various industries. Send
                your resume and cover letter to employment@theleanway.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="animated mb-8 flex justify-around">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            ILC Methadology to  {" "}
            <a href="#" className="font-semibold text-[#007dbd]">
              <span className="absolute inset-0" aria-hidden="true" />
              Help Clients    <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            ILC Value  {" "}
            <a href="#" className="font-semibold text-[#007dbd]">
              <span className="absolute inset-0" aria-hidden="true" />
             Excellent<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
          <dl className="animated grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className=" mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-xl leading-5 text-gray-600 justify-center flex">
                  {stat.name}
                </dt>
                <dd className="self-center order-first text-7xl font-semibold tracking-tight text-[#007dbd] ">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}