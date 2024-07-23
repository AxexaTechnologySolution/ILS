import React, { useEffect } from "react";
import Manufacturing2 from "/manufacturing-4.jpeg";
import Manufacturing1 from "/manufacturing-5.webp";
import AboutTopImage from "/BBB5.jpg";
import AboutCard1 from "/About_Img1.png";
import AboutCard3 from "/About_Img3.png";
import AboutCard4 from "/About_Img4.png";
import AboutCard5 from "/About_Img5.png";
import AboutCard6 from "/About_Img6.png";
import AboutCard8 from "/About_Img8.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ imageUrl, title, description, isImageRight }) => {
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
    <div className={`flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-4 ${isImageRight ? 'lg:flex-row-reverse' : ''}`}>
      <div className="animated lg:w-1/2">
        <img className="object-cover w-full" src={imageUrl} alt={title} />
      </div>
      <div className="animated lg:w-1/2 p-4 flex justify-center items-center">
        <div>
          <h2 className="text-[#007dbd] font-bold mb-3 text-center text-4xl">{title}</h2>
          <p className="text-gray-700 text-center text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Healthcare = () => {
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
    <div className="overflow-x-hidden mt-5 pt-14">
      <div className="bg-[#1E2634] ">
        <div className="row text-center lg:p-20 sm:py-10 py-20">
          <h3 className="text-[#88969A] font-bold text-4xl">HEALTHCARE</h3>
          <p className="text-[#88969A] lg:px-56 md:px-36 mt-2 sm:px-20 px-10">
            Lean principles can also be applied to the healthcare industry to
            improve patient care, enhance operational efficiency, and reduce
            healthcare costs. Healthcare providers face numerous challenges,
            including rising Here are some ways lean can be applied in
            healthcare
          </p>
        </div>
      </div>
      {/* 3 points */}
      <div className="animated container-fluid lg:px-10 xl:px-10 p-8">
        <Card
          imageUrl={Manufacturing2}
          title="Assessment"
          description="They analyze your current operations to identify areas for improvement and estimate potential savings."
          isImageRight={false}
        />
        <Card
          imageUrl={Manufacturing1}
          title="Implementation"
          description="They prioritize improvement activities and teach staff the principles behind the changes. Staff work in teams to implement the improvements."
          isImageRight={true}
        />
        <Card
          imageUrl={AboutTopImage}
          title="Long-Term Support"
          description="They coach staff, set new goals, and help refine the management system to ensure lasting improvement."
          isImageRight={false}
        />
      </div>

      {/* Cards Layout Start */}
      <div className="">
        <div className="container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-20 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
          <h3 className="text-3xl font-bold text-center pt-10 py-8">
            INDUSTRIES
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
            <div className="animated ol py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={AboutCard3}
                  alt="Industry Experience 1"
                  className="w-16 h-16 mb-2 "
                />
                <p className="text-sm mb-0">Hospitals</p>
              </div>
            </div>
            <div className="animated col py-3 ">
              <div className="rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center ">
                <img
                  src={AboutCard1}
                  alt="Industry Experience 2"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Urgent Care centers</p>
              </div>
            </div>
            <div className="animated col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={AboutCard8}
                  alt="Industry Experience 3"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Clinics</p>
              </div>
            </div>
            {/* Add placeholders for IE4, IE5, IE6, IE7, and IE8 */}
            <div className="animated col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={AboutCard4}
                  alt="Industry Experience 4"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Home health care services</p>
              </div>
            </div>
            <div className="animated col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={AboutCard5}
                  alt="Industry Experience 5"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Medical Device manufacturing and distribution</p>
              </div>
            </div>
            <div className="animated  col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={AboutCard6}
                  alt="Industry Experience 6"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Pharmaceutical manufacturing and distribution</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      {/* Cards Layout End */}
    </div>
  );
};

export default Healthcare;
