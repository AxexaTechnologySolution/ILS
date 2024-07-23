import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LeadershipCoaching = () => {
  const [showMoreContent, setShowMoreContent] = useState(true);
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
    <div className="pt-20">
      {/* Header */}
      <header className="bg-[#161F2A] text-white py-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">ILS Coaching Services</h1>
          <p className="mt-2">Unlocking Leadership Potential</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container-md container-fluid py-20">
        <div className="row">
          {/* First Column - Our Coaching Services */}
          <div className="col-md-12 col-lg-6 col-xl-6 xol-xxl-6 col-12">
            <section className="mb-8">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Our Coaching Services</h2>
                <p>
                  ILS offers personal coaching for leaders in companies
                  contemplating or in the midst of organizational change. We focus
                  on performance improvement and will help you develop tools for
                  planning and policy deployment, for leadership development and
                  succession planning.
                </p>
                <button
                  className="text-blue-500 font-semibold mt-2 focus:outline-none"
                  onClick={() => setShowMoreContent(!showMoreContent)}
                >
                  {showMoreContent ? "Show Less" : "Show More"}
                </button>
              </div>
              {/* Additional content toggled by the button */}
              {showMoreContent && (
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Additional Services
                  </h3>
                  <ul className="list-disc ml-6">
                    <li>
                      Develop self-assessment skills and create action plans that
                      address weaknesses but focus on enhancing strengths
                    </li>
                    <li>
                      Develop strategic plans for your change initiative and
                      create a tracking system that links broad organizational
                      goals to specific activities in your workplace
                    </li>
                    <li>
                      Design a workplace that people identify with, where they
                      thrive through challenging and interesting work, where they
                      seek improvement opportunities, and where learning and
                      skills development are embraced
                    </li>
                    <li>
                      Develop skills needed to sustain organizational improvements
                    </li>
                  </ul>
                </div>
              )}
            </section>
          </div>

          {/* Second Column - Image */}
          <div className="col-md-12 col-lg-6 col-xl-6 xol-xxl-6 col-12 flex justify-center items-center px-5">
            <img src="/EE2.jpg" alt="Dummy Image 1" className="img-fluid h-auto rounded" />
          </div>
        </div>

        {/* Testimonials */}

      </div>
      <div className=" animated bg-[#D1DCE5] ">
        <section className="md:py-10 py-5">
          <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
          <div className="flex flex-wrap justify-center gap-4 md:px-5 px-3">
            <div className="animated bg-white p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
              <p className="mb-4">
                "ILS coaching services have been instrumental in transforming our
                leadership team. Their personalized approach and strategic insights
                have helped us navigate complex organizational challenges with
                confidence."
              </p>
              <p className="text-gray-600">- CEO of Boat Manufacturing Company</p>
            </div>
            <div className="animated bg-white p-4 rounded-md shadow-md w-full md:w-1/2 lg:w-1/3">
              <p className="mb-4">
                "The coaching sessions provided by ILS have been invaluable in
                enhancing our team's performance. Their expertise in leadership
                development has significantly contributed to our success."
              </p>
              <p className="text-gray-600">- HR Manager of Wood Processing Company</p>
            </div>
          </div>
        </section>
        </div>

    </div>
  );
};

export default LeadershipCoaching;
