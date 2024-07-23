import React, { useEffect } from "react";
import { gsap } from "gsap";
import book_1 from '/book-1.jpg'
import book_2 from '/book-2.jpg'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Books = () => {
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

  // Event handler for clicking on the Amazon order button
  const handleAmazonOrder = () => {
    // Handle Amazon order logic here
    // For example, redirect the user to the Amazon page
    window.location.href = "https://www.amazon.com"; // Replace with the actual Amazon link
  };

  return (
    <div className="container mx-auto pt-10">
      {/* Book 1 */}
      <div className="animated book-card flex flex-col lg:flex-row justify-between items-center my-12">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img
            src={book_1}
            alt="Book 1"
            className="animated h-auto w-[40%] rounded-lg "
          />
        </div>
        <div className="animated w-full lg:w-1/2 px-4">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Creating and sustaining highly effective lean standardized work systems
          </h2>
          <p className="text-lg mb-4">
            – Parthi Damodaraswamy, Jon C. Yingling
          </p>
          <p className="text-lg mb-4">
            Lean standardized work is a comprehensive tool enabling safe and
            efficient production of high-quality products. As such, it is at
            the foundation of 21st-century operational problem solving and
            technology advancement.
          </p>
          <p className="text-lg mb-4">
            Real-life examples taken from standardized work development efforts
            at these firms help to illustrate the strengths of this methodology
            as well as the pitfalls that can occur when companies fail to
            address the components needed to implement an effective, sustainable
            system.
          </p>
          <p className="text-lg font-bold">$39.95</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={handleAmazonOrder} // Attach the event handler
          >
            Order Now on Amazon
          </button>
          <p className="mt-2">Call: +1-502-322-6567 for pricing on bulk orders</p>
        </div>
      </div>
<hr className="lg:hidden"/>
      {/* Book 2 */}
      <div className="animated book-card flex flex-col lg:flex-row justify-between items-center my-12">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1 flex justify-center">
          <img
            src={book_2}
            alt="Book 2"
            className="animated mt-10  h-auto w-[40%] rounded-lg"
          />
        </div>
        <div className="animated w-full lg:w-1/2 px-4 order-1 lg:order-2">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            The C4 process: Four vital steps to better work
          </h2>
          <p className="text-lg mb-4">– David Veech, Parthi Damodaraswamy</p>
          <p className="text-lg mb-4">
            The C4 process (Concern, Cause, Countermeasure, Confirm) offers a
            simplified approach to problem-solving in the workplace, modeled
            after established methods like PDCA. It helps identify and address
            issues effectively for overall improvement.
          </p>
          <p className="text-lg mb-4">
            Beyond solving problems, the C4 process fosters a culture of
            continuous improvement within the workforce. By focusing on employee
            development alongside problem-solving, organizations can achieve
            greater employee engagement, satisfaction, and confidence.
          </p>
          <p className="text-lg font-bold">$24.41</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            onClick={handleAmazonOrder} // Attach the event handler
          >
            Order Now on Amazon
          </button>
          <p className="mt-2">Call: +1-502-322-6567 for pricing on bulk orders</p>
        </div>
      </div>
    </div>
  );
};

export default Books;
