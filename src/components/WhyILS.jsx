import { FaAssistiveListeningSystems, FaBookReader } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdWifiProtectedSetup } from "react-icons/md";
import { IoThumbsUpOutline } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";
import AboutTopImage from "/About_Top_Image.jpg";
import AboutCard1 from "/About_Img1.png";
import AboutCard2 from "/About_Img2.png";
import AboutCard3 from "/About_Img3.png";
import AboutCard4 from "/About_Img4.png";
import AboutCard5 from "/About_Img5.png";
import AboutCard6 from "/About_Img6.png";
import AboutCard7 from "/About_Img7.png";
import AboutCard8 from "/About_Img8.png";
import AboutBussiness from "/About_Bussiness.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const WhyILS = () => {
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
      <div className="w-full">
        <div className="bg-white overflow-x-hidden">
          <div className="container lg:px-20 xl:px-20 md:p-14 p-8">
            <div className="row">
              <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10 text-center">
                <h3 className="text-[#88969A] font-bold text-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl">
                  ILS : Pioneers in Lean Philosophy
                </h3>
                <p className="text-black text-semibold pt-2 text-justify">
                  ILS has been studying, experimenting, learning, and practicing
                  lean philosophy for businesses since 1994, allowing us to
                  reach every part of the organization to make improvements
                  permanent. This sets us apart from other providers and
                  consultants who work within a hidden system. ILS doesn't just
                  stop at theoretical knowledge; we actively engage customers in
                  hands-on experimentation. This entails implementing lean
                  principles and techniques in real-world business settings,
                  experimenting with different approaches, and refining their
                  methodologies based on practical insights and outcomes.
                </p>
              </div>
              <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center rounded-md">
                <img
                  src={AboutTopImage}
                  alt="No_Img"
                  className="w-full h-auto lg:p-10 border-none my-3"
                />
              </div>
            </div>
            {/* Help your bussiness code end */}
          </div>
          <div className="bg-[#1E2634]" id="carouselItem1">
            <div className="row animated text-center lg:p-20 sm:py-10 py-20">
              <h3 className="text-[#88969A] font-bold text-2xl">
                The ILS System
              </h3>
              <p className="text-[#88969A] lg:px-56 md:px-36 mt-2 sm:px-20 px-10">
                We have developed a structured engagement process, the ILS
                System, and enhanced lean concepts to fit the unique needs of
                diverse operations. Our clients say these attributes have made
                the biggest difference in their operations. Our research has
                evolved into the aggressive practice of coaching organizations.
              </p>
            </div>
          </div>
          {/* Cards Layout Start */}
          <div className="bg-[#dee1e5]">
            <div className="animated container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-20 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
              <h3 className="text-2xl font-bold text-center pt-10 py-8">
                ASSETS & OUTCOMES
              </h3>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard1}
                      alt="Industry Experience 1"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">In-depth knowledge</p>
                  </div>
                </div>
                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard2}
                      alt="Industry Experience 2"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">Sustainable results</p>
                  </div>
                </div>
                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard3}
                      alt="Industry Experience 3"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">High-level Returns</p>
                  </div>
                </div>
                {/* Add placeholders for IE4, IE5, IE6, IE7, and IE8 */}
                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard4}
                      alt="Industry Experience 4"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">Workforce Engagement</p>
                  </div>
                </div>
                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard5}
                      alt="Industry Experience 5"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">Strong focus on lean</p>
                  </div>
                </div>
                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard6}
                      alt="Industry Experience 6"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">Systems Thinking</p>
                  </div>
                </div>

                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard8}
                      alt="Industry Experience 8"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">Proven Track Record</p>
                  </div>
                </div>
                <div className="col py-3">
                  <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={AboutCard7}
                      alt="Industry Experience 7"
                      className="w-16 h-16 mb-2"
                    />
                    <p className="text-sm mb-0">
                      Wide range of industry experience
                    </p>
                  </div>
                </div>
                {/* End placeholders for IE4, IE5, IE6, IE7, and IE8 */}
              </div>
            </div>
          </div>
          {/* Cards Layout End */}

          <div className="bg-white">
            {/* Help your bussiness code start */}
            <div className="animated container lg:px-20 xl:px-20 md:p-14 p-8">
              <div className="row">
                <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center">
                  <img
                    src={AboutBussiness}
                    alt="No_Img"
                    className="w-full h-auto lg:p-5 border border-gray-900 rounded-md"
                  />
                </div>
                <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10">
                  <h3 className="text-[#000000] font-bold text-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl">
                    How Can We Help Your <br /> Business?
                  </h3>
                  <p className="text-black pt-2 text-justify">
                    Our seasoned lean experts are dedicated to fostering a
                    culture of continuous improvement within organizations,
                    driving sustainable growth and success. With a focus on
                    practical solutions, we empower teams to streamline
                    processes, optimize efficiency, and achieve measurable
                    results. Trust us to guide your journey towards operational
                    excellence and lasting transformation.
                  </p>
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
          <div className="bg-gray-100 pt-5"></div>
        </div>
      </div>
      {/* // kesaven end */}

      <div className="bg-gray-100 pt-5">
        <div className="animated md:grid grid-cols-3 gap-4">
          <div className="m-4 p-6 bg-transparent flex rounded-lg  text-center  items-center ">
            <p className="text-gray-800 font-bold text-2xl">
              We believe that a truly lean organization is built on these five
              foundational elements
            </p>
          </div>
          <div className="m-4 p-6 bg-white rounded-lg shadow-md cursor-pointer hover-effect-1">
            <p className="text-gray-800">
              Servant leadership: showing true respect for people Leaders are
              deliberately selected, trained, and mentored to serve the needs of
              their workforce, challenging people to higher performance levels,
              enforcing the new rules for behavior and work, and constantly
              teaching.
            </p>
          </div>
          <div className="m-4 p-6 bg-white rounded-lg shadow-md cursor-pointer hover-effect-1">
            <p className="text-gray-800">
              Waste-free, demand driven work: carefully designed for
              satisfaction and productivity. Workflows from the needs of
              customers and nothing else. We develop systems that respond
              immediately to the pull of an engaged customer and consider the
              needs of our workforce in designing, balancing, and improving the
              work they do.
            </p>
          </div>

          <div className="m-4 p-6 bg-white rounded-lg shadow-md cursor-pointer hover-effect-1">
            <p className="text-gray-800">
              Problem solving: is completed thoroughly by the people closest to
              the problem. The emphasis is on teaching, coaching, and empowering
              people to take action for any out-of-standard condition. We build
              cognitive skills and competence in our workforce this way.
            </p>
          </div>
          <div className="m-4 p-6 bg-white rounded-lg shadow-md cursor-pointer hover-effect-1">
            <p className="text-gray-800">
              Teams: purpose-built, results-oriented, for all work in the
              organization. Teams are the perfect learning unit. Work is the
              perfect learning vessel. Together, they lead to a powerful
              combination of mastery and identity, creating a workplace where
              people love to work and improve.
            </p>
          </div>
          <div className="m-4 p-6 bg-white rounded-lg shadow-md cursor-pointer hover-effect-1">
            <p className="text-gray-800">
              Value, then profit, for long term sustainability: While the
              business must generate profit to survive, it does so by creating
              and enhancing value at every step in the extended enterprise
              supply chain. Emphasis on value fosters internal collaboration
              instead of internal competition, leading to mutually beneficial
              solutions to problems instead of blame and fear.
            </p>
          </div>
        </div>

        {/* Our Vission Mission */}

        <div className="bg-white p-8 ">
          <div className="animated md:grid grid-cols-2 gap-8 items-center">
            <div className=" flex items-center">
              <img
                className="w-full h-full rounded-lg shadow-md mb-10"
                src="https://images.pexels.com/photos/6238186/pexels-photo-6238186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Vision and Mission"
              />
            </div>

            <div className="vission-mission flex flex-col gap-5">
              <div className="">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">
                  Vission
                </h1>
                <p>
                  Our vision is to cultivate a business landscape where
                  responsibility towards communities is paramount, leading to
                  their prosperity and well-being.
                </p>
              </div>
              <div className="">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">
                  Mission
                </h1>
                <p>
                  We are dedicated to sourcing, nurturing, and retaining
                  exceptional talent, empowering our clients to achieve their
                  goals through innovation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose */}

        <div className="relative bg-gray-100 p-8">
          <div
            className="animated bg-cover bg-center h-64 md:h-96 rounded-lg shadow-md overflow-hidden relative"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/5463075/pexels-photo-5463075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="absolute inset-0 flex justify-center items-center text-center ">
              <div className="bg-white bg-opacity-80 p-6 max-w-full md:max-w-md rounded-sm">
                <h2 className="text-2xl md:text-2xl font-bold mb-4">Purpose</h2>
                <p className="text-gray-800">
                  To work with our client partners to achieve breakthroughs in
                  performance, culture, and strategic position by developing
                  people, process, services, and products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}

        <div className="bg-white p-8">
          <div className="animated md:grid grid-cols-3 gap-4">
            <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
              <div className="flex justify-between flex-col">
                <div className="text-5xl text-[#007dbd]">
                  <FaBookReader />
                </div>
                <h1 className="text-2xl my-3 font-bold">Learning</h1>
                <p className="text-md">
                  Lean organizations focus on learning, solving problems,
                  sharing ideas, and growing.
                </p>
              </div>
            </div>

            <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
              <div className="flex justify-between flex-col">
                <div className="text-5xl text-[#007dbd]">
                  <SiLevelsdotfyi />
                </div>
                <h1 className="text-2xl my-3 font-bold">Improvement</h1>
                <p className="text-md">
                  We expect changes in behavior to result in improved processes
                  and management through teaching.
                </p>
              </div>
            </div>

            <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
              <div className="flex justify-between flex-col">
                <div className="text-5xl text-[#007dbd]">
                  <FaAssistiveListeningSystems />
                </div>
                <h1 className="text-2xl my-3 font-bold">Listening</h1>
                <p className="text-md">
                  We listen to our clients and participants, valuing their ideas
                  for solutions.
                </p>
              </div>
            </div>

            <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
              <div className="flex justify-between flex-col">
                <div className="text-5xl text-[#007dbd]">
                  <MdWifiProtectedSetup />
                </div>
                <h1 className="text-2xl my-3 font-bold"> Self-sufficiency</h1>
                <p className="text-md">
                  We want our clients to learn to self- sufficiency and transfer
                  transformation skills.
                </p>
              </div>
            </div>

            <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
              <div className="flex justify-between flex-col">
                <div className="text-5xl text-[#007dbd]">
                  <IoThumbsUpOutline />
                </div>
                <h1 className="text-2xl my-3 font-bold">Simplicity</h1>
                <p className="text-md">
                  A lean solution is an elegant and simple solution, which is
                  the ultimate pursuit of perfection.
                </p>
              </div>
            </div>

            <div className="m-4 p-6 bg-white  rounded-lg shadow-md">
              <div className="flex justify-between flex-col">
                <div className="text-5xl text-[#007dbd]">
                  <FaHandshakeSimple />
                </div>
                <h1 className="text-2xl my-3 font-bold">Partnership</h1>
                <p className="text-md">
                  We value our long-term partnerships and strive to learn and
                  innovate together to create strategic advantages for our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default WhyILS;
