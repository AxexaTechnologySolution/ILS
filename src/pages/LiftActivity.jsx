import { useState } from "react";
import { GrDocumentVerified } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";
import { BsBarChartFill } from "react-icons/bs";
import { MdSlideshow } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Lift = () => {
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
  const [cards] = useState([
    {
      title: "The Lean Operational Model",
      description:
        "Ensures a systematic workshop experience, Implementing standardized processes streamlines operations and enhances productivity.",
      icon: <GrDocumentVerified />,
    },
    {
      title: "Deep Dive",
      description:
        "Team walks the value stream and gathers information from all levels of personnel that provides organizational strengths and weaknesses.",
      icon: <FaGlobe />,
    },
    {
      title: "Structured Problem-Solving",
      description:
        "A formal process is followed to develop solutions with ongoing learning, Systematic problem-solving fosters innovation and continuous improvement.",
      icon: <RiSettings3Line />,
    },
    {
      title: "Actionable Plan",
      description:
        "Includes implementation details and performance metrics for future adjustments, Well-defined plans enable effective execution and measurable results.",
      icon: <BsBarChartFill />,
    },
    {
      title: "Senior Management Presentation",
      description:
        "Teams showcase their work and future plans, Effective communication with senior management ensures alignment and support.",
      icon: <MdSlideshow />,
    },
    {
      title: "Ongoing Support",
      description:
        "LIFT provides follow-up coaching and motivation to sustain improvement efforts and this empowers teams to  achieve success.",
      icon: <FaHandsHelping />,
    },
  ]);

  return (
    <div className="py-20">
      <div className="bg-[#161F2A]">
        <div className="container-fluid container-md">
          <div className="row flex justify-center items-center md:py-10 py-5">
            <div className="col-12  col-lg-6 col-xl-6 col-xxl-6 py-sm-5 py-3">
              <h1 className="text-[#9b7722] font-bold text-4xl">LIFT</h1>
              <h4 className="text-[#88969A] font-semibold py-md-3 py-1.5">
                Collaboration is key, as LIFT works with cross-functional teams
              </h4>
              <p className="text-white font-bold lg:text-lg md:text-lg sm:text-md xl:text-lg text-md">
                LIFT offers a unique take on rapid improvement workshops,
                condensing lean principles and practical application into a
                focused 2-4 day event. This program prioritizes developing your
                team's skills in continuous improvement. It achieves faster and
                more sustainable results by combining formal lean education with
                hands-on activities. Collaboration is key, as LIFT works with
                cross-functional teams to identify a specific area for
                improvement within your organization.
              </p>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 py-sm-5 py-3 flex items-center">
              <img
                src="/publication_img.jpg"
                alt="No Image"
                className="max-w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second Content Start */}
      {/* Cards Layout Start */}
      <div className="animated bg-[#D1DCE5]">
        <div className="container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-20 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
          <h3 className="text-xl md:text-2xl font-bold text-center pt-10 py-8">
            Driving Continuous Improvement: The Structured Approach of LIFT
          </h3>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="animated p-4 bg-white rounded-md shadow text-center flex flex-col items-center"
                >
                  <div className="text-4xl mb-4 text-[#007dbd]">{card.icon}</div>
                  <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                  <p className="text-sm text-gray-600 text-left">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Cards Layout End */}
      {/* Second Content End */}

      {/* Third Content Start */}
      <div className="animated container-md container-fluid md:py-20  py-10">
        <h2 className="text-center font-bold md:text-3xl text-2xl lg:text-3xl xl:text-3xl xxl:text-3xl mb-8">
          Key Components of Lift Initiative
        </h2>
        <div className="md:py-10 py-6">
          <div className="row">
            <div className="animated col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6">
              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <h3 className="text-xl font-bold">Lift Goal</h3>
              </div>
              <p className="text-md pt-3">
                The essence of Lift Goal lies in setting clear, ambitious
                objectives that propel organizational progress. It's about
                defining a compelling vision that inspires and motivates every
                member of the team. Lift Goal embodies the pursuit of
                excellence, driving teams to exceed expectations.
              </p>
            </div>
            <div className="animated col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6 ">
              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <h3 className="text-xl font-bold">Lift Transformation</h3>
              </div>
              <p className="text-md  pt-3">
                Embarking on a journey of Lift Transformation signifies a
                commitment to organizational evolution. It's a profound
                undertaking that reshapes not just processes, but also culture
                and mindset. At its core, Lift Transformation is about fostering
                agility, resilience, and innovation.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="animated col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6">
              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <h3 className="text-xl font-bold">Cross Functional</h3>
              </div>
              <p className="text-md pt-3">
                Cross-functional collaboration breaks down silos within
                organizations, fostering synergy and innovation across diverse
                departments and teams. It enables the pooling of expertise,
                resources, and perspectives from various functional areas to
                tackle complex challenges and drive collective success.
              </p>
            </div>
            <div className="animated col-12 col-md-6 col-lg-6 col-xl-6 xl-xxl-6 ">
              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  4
                </div>
                <h3 className="text-xl font-bold">Cross Hierarchical</h3>
              </div>
              <p className="text-md pt-3">
                Cross-hierarchical collaboration transcends traditional
                organizational hierarchies, encouraging engagement and
                cooperation among individuals at different levels of authority.
                It emphasizes the value of diverse viewpoints and promotes a
                culture of inclusivity and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Content End */}
    </div>
  );
};

export default Lift;