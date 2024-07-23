import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillDevelopment = () => {
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
     

      {/* Section - 4 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              Facilitation Skills for Building Teams
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                The document emphasizes strong teams as essential for success in
                today's global business environment. Team-based structures with
                high-performing teams drive innovation and speed. Teams offer
                several advantages: employee engagement, risk mitigation through
                collaboration, enhanced learning from teammates, and
                relationship building. But effective teams require careful
                building, not just grouping people together.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center">
            <img
              src="/S4.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-1 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <span class="text-black">
                <ul className="text-black">
                  <li>
                    This program improves your facilitation skills to lead
                    effective teams.{" "}
                  </li>
                  <li>
                    Learn the value of facilitation, planning, and team-building
                    activities.{" "}
                  </li>
                  <li>
                    Explore new facilitation tools for problem-solving,
                    decision-making, and presentations.{" "}
                  </li>
                  <li>
                    Gain the ability to teach facilitation skills to others.
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              {" "}
              This program is appropriate for trainers, team leaders or
              department managers.
            </p>
          </div>
        </div>
      </div>

      {/* Section - 5 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              5S & Visual Control
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                This course teaches 5S and visual control techniques, which
                improve organization and efficiency in any workplace. It goes
                beyond just cleaning and includes practical applications for
                different industries.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <img
              src="/S5.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
                <p>
                  This course is designed for any audience, including front line
                  personnel, office staff, operations leaders and professional
                  work teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              {" "}
              This program is appropriate for trainers, team leaders or
              department managers.
            </p>
          </div>
        </div>
      </div>

      {/* Courosel Content Start */}
      <div className="flex justify-center md:pt-0 pt-4 ">
        <div className="w-full  md:w-[600px]">
          <div
            id="carouselExampleRide"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="Courosel1.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel2.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel3.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel4.jpg"
                  className="d-block w-100"
                  alt="Slide 4"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel5.jpg"
                  className="d-block w-100"
                  alt="Slide 5"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
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
              data-bs-target="#carouselExampleRide"
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
      {/* Courosel Content End */}

      {/* Section - 6 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              Standardized Work and Source Quality{" "}
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                This program covers standardized work, a key lean principle. It
                ensures everyone follows best practices for safety, quality, and
                efficiency. You'll learn to design, document, and implement
                standardized work for continuous improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center">
            <img
              src="/S6.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-1 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
                <ul>
                  <li>
                    Understand the benefits of lean standardized work and how it
                    differs from traditional approaches.
                  </li>
                  <li>
                    Explore strategies like kitting and minomi to streamline
                    workflows.
                  </li>
                  <li>
                    Capture best practices and "knack points" for new team
                    members to learn quickly.
                  </li>
                  <li>
                    Learn practical line balancing techniques for mixed-model
                    production.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              {" "}
              This course is designed for any audience, including front line
              personnel, office staff, operations leaders and professional work
              teams.
            </p>
          </div>
        </div>
      </div>

      {/* Courosel Content Start */}
      <div className="flex justify-center md:py-10 py-4">
        <div className="w-full md:w-[600px]  md:py-3">
          <div
            id="carouselExampleRide1"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="Courosel1.1.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel1.2.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel1.3.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel1.4.jpg"
                  className="d-block w-100"
                  alt="Slide 4"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel1.5.jpg"
                  className="d-block w-100"
                  alt="Slide 5"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel1.6.jpg"
                  className="d-block w-100"
                  alt="Slide 6"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel1.7.jpg"
                  className="d-block w-100"
                  alt="Slide 7"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel1.8.jpg"
                  className="d-block w-100"
                  alt="Slide 8"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide1"
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
              data-bs-target="#carouselExampleRide1"
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
      {/* Courosel Content End */}

      {/* Section - 7 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              Quick Changeovers / Set-up Reduction
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                This program teaches how to improve workflow through fast
                equipment setups using a "pit crew" approach. You'll learn
                practical methods to implement this in your workplace.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <img
              src="/S7.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
                <p>
                  This program teaches "setup reduction" to improve workflow by
                  minimizing equipment setup time. You'll learn to prioritize
                  what to tackle for the biggest impact, analyze your current
                  setup process, and develop standardized procedures for faster,
                  more consistent setups.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              {" "}
              This course is designed for any audience, including front line
              personnel, office staff, operations leaders and professional work
              teams.
            </p>
          </div>
        </div>
      </div>

      {/* Courosel Content Start */}
      <div className="flex justify-center md:pt-0 py-4 bg-white">
        <div className="w-full  md:w-[600px]">
          <div
            id="cr1"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="Courosel1.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel2.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel3.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel4.jpg"
                  className="d-block w-100"
                  alt="Slide 4"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="Courosel5.jpg"
                  className="d-block w-100"
                  alt="Slide 5"
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#cr1"
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
              data-bs-target="#cr1"
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

      {/* Section - 8 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              Pull Systems
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                This program teaches pull systems for lean manufacturing. You'll
                learn how they increase workflow speed, reduce inventory, and
                improve visibility. The course covers pull/MRP integration,
                design, and operational practices. It includes simulations and
                case studies, and optionally a follow-on session to implement a
                pull system in your workplace.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center">
            <img
              src="/S8.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-1 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
                <p>
                  Pull systems respond to demand, halting overproduction. They
                  use blocking, dispatching, and synchronization to maintain
                  workflow. Basic implementations include one-card, two-card,
                  kanban, and electronic kanban systems. CONWIP systems reduce
                  inventory and lead times, requiring careful buffer sizing and
                  logistics. Visual scheduling aids decision-making with
                  real-time insights.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              The basic 2-day workshop is for leaders and managers designing and
              implementing lean systems in the organization. An abbreviated
              version of this course is available for front line personnel.
            </p>
          </div>
        </div>
      </div>


      {/* Section - 9 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
            Problem Solving (C4)
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
              This workshop tackles real-world workplace problems using the C4
                Problem Solving Method (based on Deming's PDCA cycle) and
                incorporating elements from Six Sigma and TRIZ. It's most
                effective as a 2-4 day on-site program where you collect data,
                involve your team, and test solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <img
              src="/S9.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
              <p>
                  This program teaches the C4 Problem Solving Method, which
                  helps you solve real-world workplace problems using a
                  structured approach (like PDCA) with elements from Six Sigma
                  and TRIZ. You'll learn to brainstorm, identify root causes,
                  develop solutions, and track their effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
            The workshop is designed for supervisors, department managers and
              support staff who will serve as problem solving trainers and
              coaches in the organization.
            </p>
          </div>
        </div>
      </div>


         {/* Section - 10 */}
         <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
            Daily Management Systems{" "}
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
              This 3-day workshop helps you design a lean communication system
                for your entire organization. You'll learn to define key
                performance indicators (KPIs), create visual information boards,
                and conduct effective meetings to keep everyone informed and
                engaged.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center">
            <img
              src="/S10.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-1 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
              <ul className="text-black">
                  <li>
                    Define Key Performance Indicators (KPI) & develop efficient
                    data collection system.
                  </li>
                  <li>
                    Develop information boards for various levels of the
                    organization.
                  </li>
                  <li>
                    Distinguish between status meetings, planning meetings and
                    problem resolution meetings.
                  </li>
                  <li>Discuss meeting management for a lean system.</li>
                  <li>Gather and post KPI data for visual impact.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
            This workshop is well suited for operational and supporting
              leaders. We conduct the workshop onsite for companies and
              implement the systems as a part of the curriculum.{" "}
            </p>
          </div>
        </div>
      </div>

   {/* Section - 11 */}
   <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
            Lean Work Cells and Lines{" "}
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
              This workshop teaches how to design and run lean work cells and
                lines for improved workflow. You'll learn through simulations
                and explore how to support these cells with logistics and daily
                management practices.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <img
              src="/S11.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
              <ul className="text-black">
                  <li>
                    Analyze production flow: identify product families in
                    complex situations.
                  </li>
                  <li>
                    Design workstations: consider motion, ergonomics, and
                    satisfaction.
                  </li>
                  <li>Layout work cells: optimize flow within the cell.</li>
                  <li>Balance work for efficiency: maximize labor output.</li>
                  <li>
                    Design internal controls: manage production within the line.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
            This workshop is designed for operations leaders with a strong
            background in lean fundamentals.
            </p>
          </div>
        </div>
      </div>
 {/* Section - 1 */}
 <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              Advanced Lean Systems Design
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                This program builds your lean team's skills to assess, design,
                implement, and lead lean improvements.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <img
              src="/S1.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Logistics
              </h3>
              <span class="text-black">
                This Change Agent workshop is delivered on-site only and ideally
                suited for groups of companies. It's often combined with LIFT
                events for accelerated learning. A standard meeting room is
                sufficient (around 30ft x 30ft).
              </span>
              <div class="text-black">
                <div>
                  <p class="my-2">- The Lean Operational Model</p>
                </div>
                <div>
                  <p class="my-2">- Survey of Basic Lean Tools</p>
                </div>
                <div>
                  <p class="my-2">- Pull Production Control Systems</p>
                </div>
                <div>
                  <p class="my-2">- Value Stream Mapping</p>
                </div>
                <div>
                  <p class="my-2">- Extended Enterprise-level Restructuring</p>
                </div>
                <div>
                  <p class="my-2">- Production flow Analysis</p>
                </div>
                <div>
                  <p class="my-2">
                    - Detailed Design of lines, Work Cells and Support Systems
                  </p>
                </div>
                <div>
                  <p class="my-2">- Waste and Factory Physics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              {" "}
              This program is designed for teams of experienced lean
              specialists. This is appropriate for your corporate lean team, six
              sigma black belts, or specialized tiger teams assigned to the most
              pressing problems an organization faces.
            </p>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              Value Stream Mapping Workshop
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                This Value Stream Mapping workshop helps design a future state
                for your operations by eliminating waste and improving
                efficiency. It goes beyond basic mapping, offering a systematic
                approach for various industries (manufacturing, healthcare,
                etc.). A real-world case study with hands-on exercises helps you
                develop a future state plan and implementation strategy. The
                workshop can be customized to your organization's needs.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-2 d-flex justify-content-center align-items-center">
            <img
              src="/S2.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-1 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <span class="text-black">
                <div className="">
                  <span className="font-semibold text-[#acacac]">
                    Master Pull Systems:
                  </span>{" "}
                  Learn about pull systems and how to design them for your
                  specific needs.
                </div>
                <div className="">
                  <span className="font-semibold text-[#acacac]">
                    Lead Expert VSM Workshops:
                  </span>{" "}
                  Gain practical skills for facilitating value stream mapping
                  workshops.
                </div>
                <div className="">
                  <span className="font-semibold text-[#acacac]">
                    Design High-Performance Future State:
                  </span>{" "}
                  Develop a future state plan considering value delivery,
                  customer needs, and operational support.
                </div>
                <div className="">
                  <span className="font-semibold text-[#acacac]">
                    Navigate Complexity:
                  </span>{" "}
                  Analyze flow structures and manage complexities for improved
                  system performance.
                </div>
                <div className="">
                  <span className="font-semibold text-[#acacac]">
                    Address High Variety Production:
                  </span>{" "}
                  Implement strategies for managing high variety production
                  effectively.
                </div>
                <div className="">
                  <span className="font-semibold text-[#acacac]">
                    Optimize Capacity and Layout:
                  </span>{" "}
                  Design an optimized layout and capacity analysis to minimize
                  waste.
                </div>
              </span>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              {" "}
              This course is designed for a team of individuals charged with
              developing transformation plans for the organization. It should
              include a broad mix of skills from a variety of functions in the
              company.
            </p>
          </div>
        </div>
      </div>

      {/* Section - 3 */}
      <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
              Design of Experiments
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
                Design of experiments (DOE) is an important practical tool for
                understanding processes and improving their performance and
                control. This class is designed to promote deep understanding to
                develop practical skills that can be applied on the job. If
                necessary, we can provide basic training on statistics, as well
                as Statistical Process Control (SPC) and measurement system
                analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <img
              src="/S3.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <span class="text-black">
                <div className="">
                  <span className="font-semibold text-[#767272]">
                    Master DOE:
                  </span>{" "}
                  Understand DOE as a method to model processes, including
                  identifying key variables (inputs) and their impact on
                  outputs.
                </div>
                <div className="">
                  <span className="font-semibold text-[#767272]">
                    Lead Expert VSM Workshops:
                  </span>{" "}
                  Learn the steps to conduct a DOE study, analyze results using
                  ANOVA, and ensure data integrity.
                </div>
                <div className="">
                  <span className="font-semibold text-[#767272]">
                    Run DOE Studies:
                  </span>{" "}
                  Explore different experimental designs (full factorial,
                  fractional factorial, etc.) and how to choose the best one for
                  your situation.
                </div>
                <div className="">
                  <span className="font-semibold text-[#767272]">
                    Choose the Right Design:
                  </span>{" "}
                  Use DOE models to gain general process understanding, optimize
                  processes, and improve robustness (ability to handle
                  variations).
                </div>
                <div className="">
                  <span className="font-semibold text-[#767272]">
                    Apply Models in Industry:
                  </span>{" "}
                  Implement strategies for managing high variety production
                  effectively.
                </div>
                <div className="">
                  <span className="font-semibold text-[#767272]">
                    Boost Process Capability:
                  </span>{" "}
                  Learn Taguchi's robust design approach to enhance process
                  capability and reduce defects.
                </div>
              </span>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
              {" "}
              This program is designed for experienced specialists with a
              background in mathematics and statistics.
            </p>
          </div>
        </div>
      </div>

   {/* Section - 12 */}
   <div class="container">
        {/* Centered Heading  */}
        <div class="row">
          <div class="col-12 text-center mt-5">
            <h3 className="text-black  font-bold text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
            Lean Work Cells and Lines{" "}
            </h3>
          </div>
        </div>

        {/* Full-width Title and Description */}
        <div class="row">
          <div class="col-12 my-4 text-center">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
                Description
              </h3>
              <p>
              This 2-day workshop will focus on improving your company's
                suggestion system. We'll discuss how to make it more effective
                and beneficial for both employees and the organization.
              </p>
            </div>
          </div>
        </div>

        {/* Image on Left, Content on Right */}
        <div class="row align-items-center">
          <div class="col-12 col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center">
            <img
              src="/S12.jpg"
              alt="No_Img"
              class="w-100 h-auto p-3 rounded-md"
            />
          </div>
          <div class="col-12 col-md-6 order-1 order-md-2 px-5">
            <div class="mt-3">
              <h3 class="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3">
                Outcomes & Objectives
              </h3>
              <div className="text-black">
              <ul className="text-black">
                  <li>
                    Design a system to promote problem solving skills in the
                    workplace
                  </li>
                  <li>
                    Describe the three stages in the evolution of suggestion
                    systems and how the purpose changes with each
                  </li>
                  <li>
                    Describe how key features of the suggestion system can
                    enhance both self-efficacy and satisfaction levels of team
                    members.
                  </li>
                  <li>
                    Use the C4 card to solve a problem or improve a process.
                  </li>
                  <li>Create a visual system for managing suggestions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Title and Content  */}
        <div class="row text-center m-4">
          <div class="col-12 my-4 ">
            <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold text-[#007FBF] mb-3 ">
              Target Audience
            </h3>
            <p>
            This workshop is for suggestion system coordinators, human
              resources and training managers, peer coaches at a variety of
              levels in the organization.

            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default SkillDevelopment;