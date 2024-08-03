import { useEffect } from "react";
// import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import homePartnerImage1 from "/home_partner1.jpg";
import homePartnerImage2 from "/home_partner2.jpg";
// import homePartnerImage3 from "/home_partner3.jpg";
import homePartnerImage4 from "/home_partner4.jpg";
import homePartnerImage5 from "/home_partner5.jpg";
import homeBussiness from "/HelpBussiness.jpg";
import IE1 from "/IE1.png";
import IE2 from "/IE2.png";
import IE3 from "/IE3.png";
import IE4 from "/IE4.png";
import IE5 from "/IE5.png";
import IE6 from "/IE6.png";
import IE7 from "/IE7.png";
import IE8 from "/IE8.png";
import home_1 from "/home-1.jpg";
import home_3 from "/home-3.jpg";
import home_5 from "/home-5.jpg";
import home_6 from "/home-6.jpg";
import home_7 from "/home-7.jpg";
import home_9 from "/home-9.png";
import home_box_1 from "/home_box_1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    new window.bootstrap.Carousel(carousel, {
      interval: 5000,
      keyboard: true,
      ride: "carousel",
    });
  }, []);

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
      {/* <Navbar /> */}
      <div className=" ">
        {/* <div className="pt-20 md:px-24">
          <h2 className="text-[#007FBF] text-xl md:text-3xl lg:text-5xl sm:text-2xl font-semibold letter font-sans tracking-wide md:px-16 xxl:px-16 lg:px-16 sm:px-1">
            The Key to Success in Todays <br />
            Competitive Market
          </h2>
          <h2 className="py-3 text-[#8594A0] text-xl md:text-2xl lg:text-2xl sm:text-lg font-semibold  md:px-16 xxl:px-16 lg:px-16 sm:px-1">
            Lean Manufacturing Solutions
          </h2>
        </div> */}

        {/* Courosel Content Start */}
        <div className="">
          <div
            id="carouselExampleCaptions"
            className="carousel slide "
            data-bs-ride="carousel "
          >
            <div className="carousel-indicators">
              {[...Array(6)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner w-full">
              {[
                { image: home_1, caption: "Learning" },
                { image: home_7, caption: "Partnership" },
                { image: home_3, caption: "Listening" },
                { image: home_9, caption: "Self-sufficiency" },
                { image: home_5, caption: "Simplicity" },
                { image: home_6, caption: "Improvement" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item  ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={item.image}
                    className="d-block w-100 object-cover hover-effect-2"
                    alt={`Slide ${index + 1}`}
                    style={{ height: "100vh" }}
                  />
                  <div className="carousel-caption bg-gray-800 shadow-lg text-white p-10 md:p-10 lg:p-16 xl:p-8 xxl:p-16 rounded-lg m">
                    <h5 className="fs-5  font-bold py-2">{item.caption}</h5>
                    <p className="fs-6">
                      {item.caption === "Learning"
                        ? "Lean organizations continuously learn, solve problems, and share ideas to improve as a whole."
                        : item.caption === "Partnership"
                        ? "We value long-term partnerships with clients, working together to improve their operations and gain a competitive edge."
                        : item.caption === "Listening"
                        ? "We listen carefully to our clients and value their ideas for all solutions."
                        : item.caption === "Self-sufficiency"
                        ? "Our goal is to empower clients to achieve continuous improvement on their own."
                        : item.caption === "Simplicity"
                        ? "Lean solutions aim for simplicity and elegance, striving for continual improvement."
                        : "Learning by doing is key. Our training leads to measurable improvements."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enterprice PI code */}
      <div className="bg-[#DCE0E5]">
        <div className="animated container-lg container-fluid">
          <div className="row bg-designs lg:px-20">
            <div className="col-md-6 col-12 flex justify-center items-center md:pt-10 lg:pt-10">
              <div className="">
                <h3 className="text-black font-bold  mt-4 text-xl md:text-2xl lg:text-2xl sm:text-xl px-2 md:px-40 lg:px-9 xl:px-9 xxl:px-9 mb-3">
                  Enterprise Performance <br /> Improvement (EPI)
                </h3>
                <p className="py-1 text-[#88969A] md:px-1 text-justify ">
                  <p className="text-gray-700 text-md font-semibold mb-3">
                    EPI is a comprehensive value enhancement program for
                    organizations seeking rapid and yet sustainable improvement.
                    EPI enhances value of an enterprise by reducing cost in the
                    areas of labor, safety, energy, direct and indirect
                    material, warranty, capital and general operating expenses,
                    and by increasing worth via hiring, retaining and developing
                    people, enhancing management systems, developing better
                    products, reducing time to market, improving quality and
                    creating a unified, customer-focused organizational culture,
                    all of which results in increasing brand value.
                  </p>
                  <p className="text-gray-800  text-md font-semibold">
                    The EPI process fosters competitive advantage through
                    data-driven decision-making, promoting collaboration across
                    departments for improved products and services. The process
                    utilizes data analytics and collaboration to enhance
                    products/services, fostering a competitive edge through
                    evidence-based decision-making and teamwork across
                    departments.
                  </p>
                </p>
                <div className="flex justify-center md:justify-center items-center">
                  <a href="/ILS_EPI_Brochure2020V4.pdf" download>
                    <button className="text-center text-white bg-[#88969A] p-2.5 rounded-lg mt-3.5 mb-5 hover:bg-[#6c7a7e] hover:shadow-lg transition duration-300">
                      Download Brochure{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 px-5 md:py-10 lg:py-10 flex justify-center items-center">
              <img
                src={home_box_1}
                alt="no_image"
                className="h-auto rounded-md  w-full max-w-full md:max-w-full enterpriseImg mb-3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Enterprice PI code end */}

      {/* Build Better Before start */}
      <section className="overflow-hidden px-5 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#111928] dark:bg-dark">
        <div className="animated container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hidden items-center -mx-3 sm:-mx-4 sm:flex md:flex lg:flex">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 px-3">
                <h2 className="mb-5  text-3xl font-bold text-[#9b7722] sm:text-[40px]/[48px]">
                  Building Better Businesses
                </h2>
                <p className="mb-4 text-base lg:text-lg text-white dark:text-dark-6">
                  ILS cultivates adaptability in organizations, vital for
                  survival in today's competitive market by fostering innovation
                  and agility among employees.
                </p>
                <p className="mb-4 text-base lg:text-lg text-white dark:text-dark-6">
                  It aligns internal systems with strategic objectives, ensuring
                  every aspect of the business contributes effectively towards
                  its goals and mission.
                </p>
                <p className="mb-4 text-base lg:text-lg text-white dark:text-dark-6">
                  ILS streamlines operations amidst complexity, facilitating
                  efficient processes, and equipping businesses with the
                  necessary skills to navigate and thrive in challenging
                  environments.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Build Better Before end */}

      {/* Cards Layout Start */}
      <div className="bg-[#DCE0E5]">
        <div className="animated container-lg container-fluid md:px-20 lg:px-30 xl-px-30 py-20 xxl:pb-20  xxl:pt-5 md:pb-20  md:pt-5  lg:pb-20  lg:pt-5  xl:pb-20  xl:pt-5">
          <h3 className=" text-xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-center pt-10 py-8">
            INDUSTRY EXPERIENCE
          </h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE2}
                  alt="Industry Experience 2"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Private Equity</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE3}
                  alt="Industry Experience 3"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Manufacturing</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE5}
                  alt="Industry Experience 1"
                  className="w-16 h-16 mb-2 "
                />
                <p className="text-sm mb-0">Distribution and Warehousing</p>
              </div>
            </div>

            {/* Add placeholders for IE4, IE5, IE6, IE7, and IE8 */}

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE1}
                  alt="Industry Experience 5"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Foundry</p>
              </div>
            </div>
            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE6}
                  alt="Industry Experience 6"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Aluminium Casting</p>
              </div>
            </div>
            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE7}
                  alt="Industry Experience 7"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Plastic Products</p>
              </div>
            </div>
            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE4}
                  alt="Industry Experience 4"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-sm mb-0">Insurance & Business Services</p>
              </div>
            </div>

            <div className="col py-3">
              <div className="bg-white rounded-md shadow p-4 text-center square-card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={IE8}
                  alt="Industry Experience 8"
                  className="w-16 h-16 mb-2 "
                />
                <p className="text-sm mb-0">And More</p>
              </div>
            </div>
            {/* End placeholders for IE4, IE5, IE6, IE7, and IE8 */}
          </div>
        </div>
      </div>
      {/* Cards Layout End */}

      {/* Help your bussiness code start */}
      <div className="animated container lg:px-20 xl:px-20 md:p-14 p-8">
        <div className="row  ">
          <div className=" col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex justify-center items-center">
            <img
              src={homeBussiness}
              alt="No_Img"
              className="w-full h-auto lg:p-10 border border-gray-900 rounded-md"
            />
          </div>

          <div className="col col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 lg:p-10 ">
            <h3 className="text-black font-bold  mt-4 text-xl md:text-2xl lg:text-2xl sm:text-xl xxl:text-3xl">
              How can we help your <br /> business?
            </h3>
            <p className="text-gray-500  py-4 text-justify">
              Our seasoned lean experts are dedicated to fostering a culture of
              continuous improvement within organizations, driving sustainable
              growth and success. With a focus on practical solutions, we
              empower teams to streamline processes, optimize efficiency, and
              achieve measurable results. Trust us to guide your journey towards
              operational excellence and lasting transformation.
            </p>
          </div>
        </div>
        {/* Help your bussiness code end */}

        {/* Trusted leaders start */}
        <div className="animated md:pt-10 lg:pt-20">
          <div>
            <h3 className="py-1 md:py-10 mb-3 text-black  text-xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-center">
              TRUSTED BY LEADERS
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-16 pt-6 sm:gap-2 sm:justify-center">
            {[
              homePartnerImage1,
              homePartnerImage2,
              homePartnerImage4,
              homePartnerImage5,
            ].map((partnerImage, index) => (
              <div
                key={index}
                className="partner-1 bg-black p-2 flex items-center justify-center"
              >
                <img
                  src={partnerImage}
                  alt={`Partner ${index + 1}`}
                  className="w-40"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Trusted leaders end */}
      </div>
    </div>
  );
};

export default App;
