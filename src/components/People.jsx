import { useEffect } from "react";
import aboutPeopleImg from "/People_Img.jpg";
import Leaders1 from "/TeamLeadersImg1.jpg";
import Leaders2 from "/TeamLeadersImg2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutPeople = () => {
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
    <div>
      {/* bg-[#161F2A] */}
      <div className="bg-white ">
        <div className="container-md container-fluid px-md-2 py-5 py-lg-5 py-xl-5">
          <img
            src={aboutPeopleImg}
            className="d-block w-100"
            alt="People Image"
            style={{ height: "350px" }}
          />
        </div>
        <div>
          <p className="text-gray-700 font-semibold text-center px-4 pb-5 px-sm-3 px-md-5 pb-lg-5 pb-xl-5 md:px-20">
            We have developed a structured engagement process, the ILS System,
            and enhanced Lean concepts to fit the unique needs of diverse
            operations. Our clients say these attributes have made the biggest
            difference in their operations. Our research has evolved into the
            aggressive practice of coaching organizations.
          </p>
        </div>
      </div>

      {/* LeaderShip Content Start */}
      <div
        className="container-lg lg:px-20 xl:px-20 md:p-8"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        <div className="row">
          <div className="animated  col text-center font-bold text-xl md:text-3xl lg:text-3xl text-black py-4">
            OUR LEADERSHIP TEAM
          </div>
        </div>
        <div className="animated row">
          <div className="col-12 col-sm-12 col-md-6 flex justify-center items-center rounded-md">
            <img
              src={Leaders1}
              alt="Leader 1 Image"
              className="w-3/4 h-auto lg:p-4 border-none my-3"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 lg:p-4">
            <h3 className="text-blacktext-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl font-semibold">
              Parthi Damodaraswamy
            </h3>
            <p className="text-[#88969A] font-semibold">
              Chief Executive Officer
            </p>
            <p className="text-black pt-2 text-justify">
              Parthi Damodaraswamy is ILS's co-founder and CEO, responsible for
              providing direction and leadership to develop the company into a
              top partner. He has expertise in the health care, wood, glass,
              plastics, food processing, and distribution sectors, and has
              assisted private equity firms in building value. He is qualified
              as a manufacturing systems engineer with a B.S., M.S., and M.S. in
              biomedical engineering. Parthi's contributions extend beyond
              individual organizations; he has also played a key role in
              assisting private equity firms in enhancing the value of their
              investments. His insights and guidance have been instrumental in
              optimizing operational efficiencies, identifying growth
              opportunities, and maximizing returns for stakeholders.
            </p>
            <p className="md:px-2 lg:px-2 text-blue-500 font-semibold cursor-pointer text-md flex gap-3 py-3">
              <i className="fab fa-facebook"></i>{" "}
              <i className="fab fa-linkedin"></i>{" "}
              <i className="fab fa-twitter"></i>{" "}
            </p>
          </div>
        </div>
        <div className="animated row">
          <div className="col-12 col-sm-12 col-md-6 flex justify-center items-center rounded-md">
            <img
              src={Leaders2}
              alt="Leader 2 Image"
              className="w-3/4 h-auto lg:p-4 border-none my-3"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 lg:p-4">
            <h3 className="text-blacktext-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl font-semibold">
              Jon Yingling, PhD
            </h3>
            <p className="text-[#88969A] font-semibold">
              Chief Technology Officer
            </p>
            <p className="text-black pt-2 text-justify">
              Dr. Yingling is ILS’s co-founder and CTO. He leads key engagements
              and activities for ILS clients and spends much of his time in
              developing novel technologies and solutions for customers to help
              them resolve their most complex operational problems. He leads
              operational assessments and value stream design workshops where
              future state system designs, often very creative, are established
              that enable our clients to realize major gains in operational
              performance. He has strong capabilities in all lean and six sigma
              tools, as well as all types of manufacturing operations, lean
              product development, scheduling and production control, lean
              health care, warehousing and distribution centers, office and
              transactional systems, and supply chain development. Prior to
              founding ILS with his partners in 2006, Dr. Yingling was a
              Professor at the University of Kentucky, where he led development
              of one of the most extensive and acclaimed graduate-level academic
              programs in lean systems at any U.S. university and was a key
              leader in their highly acclaimed industrial education and
              extension program that served thousands of professionals from
              large and small companies around the globe. He holds a BS Degree
              in Mining Engineering and MS and PhD in Industrial Engineering.
            </p>
            <p className="md:px-2 lg:px-2 text-blue-500 font-semibold cursor-pointer text-md flex gap-3 py-3">
              <i className="fab fa-facebook"></i>{" "}
              <i className="fab fa-linkedin"></i>{" "}
              <i className="fab fa-twitter"></i>{" "}
            </p>
          </div>
        </div>
        {/* <div className="animated row">
          <div className="col-12 col-sm-12 col-md-6 flex justify-center items-center rounded-md">
            <img
              src={Leaders1}
              alt="Leader 1 Image"
              className="w-3/4 h-auto lg:p-4 border-none my-3"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 lg:p-4">
            <h3 className="text-blacktext-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl font-semibold">
              Ray Littlefield
            </h3>
            <p className="text-[#88969A] font-semibold">
              Managing Director, Australia & Asia
            </p>
            <p className="text-black pt-2 text-justify">
              Ray has been actively involved in Lean since 1997, beginning his
              career as a production engineering trainee at Toyota Motor
              Manufacturing Kentucky (TMMK). He has led several lean
              transformation programs in different industries, engaging at all
              levels from front line team members to CEOs. He holds
              certifications in Lean Systems, Human Systems for Lean (Toyota
              Culture), Lean Accounting, Toyota Production Systems and Toyota
              ProblemSolving. Ray's commitment to Lean principles is further
              underscored by his extensive certifications. He is certified in
              Lean Systems, which encompasses a comprehensive understanding of
              Lean methodologies and tools.
            </p>
            <p className="md:px-2 lg:px-2 text-blue-500 font-semibold cursor-pointer text-md flex gap-3 py-3">
              <i className="fab fa-facebook"></i>{" "}
              <i className="fab fa-linkedin"></i>{" "}
              <i className="fab fa-twitter"></i>{" "}
            </p>
          </div>
        </div>
        <div className="animated row">
          <div className="col-12 col-sm-12 col-md-6 flex justify-center items-center rounded-md">
            <img
              src={Leaders2}
              alt="Leader 2 Image"
              className="w-3/4 h-auto lg:p-4 border-none my-3"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 lg:p-4">
            <h3 className="text-blacktext-xl mt-4 md:text-2xl lg:text-2xl xl:text-2xl xxl:text-2xl font-semibold">
              Mahendran Naidu
            </h3>
            <p className="text-[#88969A] font-semibold">
              Chief Operating Officer
            </p>
            <p className="text-black pt-2 text-justify">
              Mahendran is responsible for ILS business operations and leads the
              ILS cost containment practice. He has over 35 years of industry
              experience in a wide range of functions including Global Supply
              Chain Logistics & Operations, Global Business Operations/ Business
              Strategy, Global Procurement Strategy, Project/ Program
              Management, Strategic Planning & Execution, and Value Creation
              using cost containment. His industry expertise includes defense, a
              variety of Manufacturing Operations including auto parts,
              electronics and computer Industry. He holds a bachelor’s degree in
              Computer Engineering, a master’s degree in Business Administration
              and a certification in Lean/ Six Sigma from the United States Air
              Force.
            </p>
            <p className="md:px-2 lg:px-2 text-blue-500 font-semibold cursor-pointer text-md flex gap-3 py-3">
              <i className="fab fa-facebook"></i>{" "}
              <i className="fab fa-linkedin"></i>{" "}
              <i className="fab fa-twitter"></i>{" "}
            </p>
          </div>
        </div> */}
        {/* Help your business code end */}
      </div>

      {/* LeaderShip Content End */}



      {/* sivabal code start */}
      <div className="relative bg-gray-100 p-8">
        <div
          className="animated container-lg container-fluid bg-cover bg-center h-64 md:h-88 rounded-lg shadow-md overflow-hidden relative"
          style={{
            backgroundImage: "url(/new-pixel.png)",
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center  ">
            <div className="bg-[#161F2A] bg-opacity-90 p-6  md:max-w-md rounded-md text-center">
              <h2 className="text-md md:text-md font-semibold mb-4 text-white">
                Reimagine Your Career
              </h2>
              <p className="text-white text-sm md:text-md">
                Career is about bringing your skills, curiosity and best self to
                work, creating positive, long-lasting value with the latest
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sivabal code end */}

      {/* Content Above Footer Start */}
      <div className="bg-[#161F2A] px-5 py-4">
        <div className="row flex flex-col md:flex-row justify-between">
          <div className="col-md-6 col-12">
            <p className="text-white text-center md:text-left p-2 p-md-2 font-semibold text-md md:text-xl mt-1 lg:text-xl xl:text-xl">
              Subscribe to our Newsletter
            </p>
          </div>
          <div className="col-md-6 col-12 mt-3 md:mt-0">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-end">
              <input
                type="text"
                placeholder="Enter your email..."
                className="border rounded-full px-md-4 px-sm-3 p-md-1.5 p-1 px-3 mb-3 mx-4"
              />
              <button className="text-center text-sm md:text-md text-white bg-[#88969A] rounded-full hover:bg-[#6c7a7e] p-1.5 p-md-1.5 px-md-3 px-2 md:p-2 md:px-4 mb-3 hover:shadow-lg transition duration-300">
                Submit <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPeople;
