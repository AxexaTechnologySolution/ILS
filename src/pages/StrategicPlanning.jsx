  import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedContent = ({ children }) => {
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const element = contentRef.current;

//     gsap.fromTo(
//       element,
//       {
//         x: -200, // Slide in from left
//         opacity: 0,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: element,
//           start: "top 100%", 
//           scrub: true,
//         },
//       }
//     );
//   }, []);

//   return <div ref={contentRef}>{children}</div>;
// };


const StrategicPlanning = () => {
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
    <div className="container mx-auto px-4 my-10 py-8 pt-14">
      {/* Strategic Planning Sub Page 3 */}
      {/* <AnimatedContent delay={0.5}> */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Strategic Planning</h1>
          <p className="text-gray-700">
            ILS helps companies develop strategic plans using Hoshin Kanri, a
            cyclical method from Japan.
          </p>
        </div>
      {/* </AnimatedContent> */}

      {/* Section 1: Strategic Planning - Timeline Layout */}
      {/* <AnimatedContent delay={0.7}> */}
        <div className="animated bg-gray-100 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Strategic Planning </h2>
          <div className="flex flex-col space-y-4">
            <div className="animated flex items-center">
              <div className="w-20 h-16 md:w-16 lg:w-16 xl:w-16 sm:w-16 bg-blue-500 rounded-full flex justify-center items-center">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Set Long-Term Goals</h3>
                <p className="text-gray-700">
                  Define key objectives for major performance improvement.
                </p>
              </div>
            </div>
            <div className="animated flex items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex justify-center items-center">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  Monitor Daily Management
                </h3>
                <p className="text-gray-700">
                  Implement continuous improvement practices.
                </p>
              </div>
            </div>
            <div className="animated flex items-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex justify-center items-center">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  Yearly Review and Planning
                </h3>
                <p className="text-gray-700">
                  Evaluate progress and plan for the next cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </AnimatedContent> */}

      {/* Section 2: Strengths of Hoshin Kanri - Grid Layout */}
      {/* <AnimatedContent delay={0.9}> */}
        <div className="animated bg-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Strengths of Hoshin Kanri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="animated p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Focus</h3>
              <p className="text-gray-700">
                Prioritizes vital few goals for breakthrough improvements.
              </p>
            </div>
            <div className="animated p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Alignment</h3>
              <p className="text-gray-700">
                Creates a shared vision through participation and involvement.
              </p>
            </div>
            <div className="animated p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-700">
                Encourages cross-functional teamwork to achieve goals.
              </p>
            </div>
            <div className="animated p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Monitoring & Improvement
              </h3>
              <p className="text-gray-700">
                Tracks progress, takes corrective actions, and continuously
                refines the planning process based on past learnings.
              </p>
            </div>
          </div>
        </div>
      {/* </AnimatedContent> */}

      {/* Section 3: Requirements for Hoshin Kanri - Waterfall Layout */}
      {/* <AnimatedContent delay={1.1}> */}
        <div className="animated bg-gray-100 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Requirements for Hoshin Kanri
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="animated rounded-full bg-blue-200 flex items-center justify-center w-auto h-auto p-4 overflow-hidden">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Discipline & Commitment
                </h3>
                <p className="text-gray-700">
                  Requires a long-term commitment from senior management for
                  successful implementation.
                </p>
              </div>
            </div>
            <div className="animated rounded-full bg-green-200 flex items-center justify-center w-auto h-auto p-4 overflow-hidden">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Stability</h3>
                <p className="text-gray-700">
                  Breakthrough Objectives should remain stable for a five-year
                  period.
                </p>
              </div>
            </div>
            <div className="animated rounded-full bg-yellow-200 flex items-center justify-center w-auto h-auto p-4 overflow-hidden">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Alignment & Measurement
                </h3>
                <p className="text-gray-700">
                  Ensures all employees understand the long-term vision and
                  their role in achieving it through a linked plan with process
                  measurement and monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </AnimatedContent> */}

      <div className="relative">
        {/* Background Gradient */}
        <div className="animated absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg"></div>

        {/* Content */}
          <div className="animated relative z-10 bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Program Inclusions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="animated bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Hoshin Kanri understanding and application training
                </h3>
                <p className="text-gray-700">
                  Gain insights into Hoshin Kanri methodology and its practical
                  applications.
                </p>
              </div>
              {/* Card 2 */}
              <div className="animated bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Guided review of vision, mission, values, and performance
                </h3>
                <p className="text-gray-700">
                  Evaluate and refine organizational vision, mission, and values
                  for alignment with strategic objectives.
                </p>
              </div>
              {/* Card 3 */}
              <div className="animated bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Real-world application through case studies and
                  problem-solving
                </h3>
                <p className="text-gray-700">
                  Apply Hoshin Kanri principles to real-world scenarios through
                  case studies and problem-solving exercises.
                </p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default StrategicPlanning;
