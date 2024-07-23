
import React from "react";
import { FaBoxOpen, FaCubes, FaTruckLoading } from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Card component for each assessment example
const AssessmentCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 transform hover:scale-105 transition duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-2">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Assessment = () => {
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
      {/* Introduction */}
      <div className="mb-8">
        <h1 className="lg:text-4xl md:text-2xl text-2xl font-bold mb-4 text-center">Assessments</h1>
        <p className="text-gray-700 text-center lg:text-lg text-md">
          ILS offers a deep dive into your operations, uncovering inefficiencies and opportunities for cost reduction. We focus on key processes, identifying better methods and empowering your workforce for peak performance. Our insightful analysis leads to practical solutions valued by our clients.
        </p>
      </div>

      {/* Timeline Section (for lg screens) */}
     
      {/* Examples Section */}
      <div className="animated grid grid-cols-1 md:grid-cols-3 gap-12 my-20">
        {/* Example 1: Order Picking and Packing Process */}
        <AssessmentCard
          icon={<FaTruckLoading className="text-4xl text-blue-500" />}
          title="Order Picking and Packing Process"
          description="Inefficient warehouse picking with excessive paperwork and travel was improved by zone-picking with electric tuggers and optimized routes, resulting in a 75% productivity increase."
        />

        {/* Example 2: Packaging Operations */}
        <AssessmentCard
          icon={<FaBoxOpen className="text-4xl text-green-500" />}
          title="Packaging Operations"
          description="Packaging for high SKU, short-run operations was optimized by 20% through part family definition, balanced lines, and improved cell structures."
        />

        {/* Example 3: Plastics Manufacturing */}
        <AssessmentCard
          icon={<FaCubes className="text-4xl text-red-500" />}
          title="Plastics Manufacturing"
          description="Plastics manufacturing saw dramatic efficiency gains with smaller batches, dedicated work cells, and rapid changeover processes."
        />
      </div>
      
      {/* Call to Action Section */}
      <div className="animated bg-gray-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to optimize your operations?</h2>
        <p className="text-gray-700 mb-4">Contact us today for a consultation and take the first step towards maximizing your efficiency and profitability.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">Contact Us</button>
      </div>
    </div>
  );
};

export default Assessment;
