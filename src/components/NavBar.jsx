import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md"; 
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); 
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    
    <div className="fixed top-0 w-full z-50 navigation-bar">
      <nav className="flex items-center justify-between flex-wrap bg-white py-md-2 py-0 px-14">
        <div className="md:flex items-center flex-shrink-0 text-white mr-6 justify-center h-full text-center logo mt-2   ">
            <img className="h-16 w-auto bg-white" src="https://www.theleanway.com/wp-content/themes/ils/images/logo.png" alt="" />
            <div className="text-[#007FBF] font-semibold sm:ml-3 flex flex-col justify-start ">
              <span className="desc-1 text-[10px] sm:text-[15px]">Enterprise Performance Improvement</span>
              <span className="desc-2 text-[10px] sm:text-[15px] text-start text-gray-500">The Lean Way</span>
            </div>
        </div>
        <div className="block lg:hidden "> 
          <button
            onClick={toggleMenu}
            className="ml-[100%] toogle-button flex items-center px-3 py-2  rounded text-black border-black hover:text-gray-500 hover:border-gray-500"
          >
            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
        <div
          className={`w-full ${
            isMenuOpen ? "block" : "hidden"
          } lg:block  lg:items-center lg:w-auto menu-links`}
        >
          <div className="text-sm  nav-links lg:flex-grow lg:flex-none lg:flex-row flex flex-col lg:gap-3  mt-[-1%]">
            <a
              href="/"
              className=" l  menu-link block mt-4 lg:inline-block lg:mt-0   lg:ml-5  text-black hover:text-blue-800 font-bold text-md "
            >
              Home
            </a>
            <div className="lg:relative inline-block text-left">
              <button
                onClick={() => toggleDropdown(0)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 font-bold text-md  lg:ml-5"
              >
                About ILS
              </button>
              {activeDropdown === 0 && (
                <div className="z-50 origin-top-right lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="/why-ils"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Why ILS
                    </a>
                    <a
                      href="/people"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      People
                    </a>
                    <a
                      href="/career"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Career
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:relative inline-block text-left">
              <button
                onClick={() => toggleDropdown(1)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 font-bold text-md  lg:ml-5"
              >
                Client Services
              </button>

              {activeDropdown === 1 && (
                <div className="z-50 origin-top-right lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="/product-development"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Product Development
                    </a>
                    <a
                      href="/manufacturing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Manufacturing
                    </a>
                    <a
                      href="/suplychain-distribution"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Supply Chain & Distribution
                    </a>
                    <a
                      href="/healthcare"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Healthcare
                    </a>
                    <a
                      href="/education"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                    >
                      Education & Training
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:relative inline-block text-left">
              <a
               href="/private-equity"
                onClick={() => toggleDropdown(2)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 font-bold text-md  lg:ml-5"
              >
                Private Equity
              </a>
            </div>

            <div className="lg:relative inline-block text-left">
              <button
                onClick={() => toggleDropdown(3)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 font-bold text-md  lg:ml-5"
              >
                Education & Training
              </button>

              {activeDropdown === 3 && (
                <div className="z-50 origin-top-right lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="/executive-education"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Executive Education
                    </a>
                    <a
                      href="/lean-system-certification"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Lean Systems Certification
                    </a>
                    <a
                      href="/lean-leader-certification"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Lean Leader Certification
                    </a>
                  
                    <a
                      href="/skill-development-workshops"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Skills Development Workshops
                    </a>
                  </div>
                </div>
              )}
            </div>


            <div className="lg:relative inline-block text-left">
              <a
               href="/cost"
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 font-bold text-md  lg:ml-5"
              >
                Cost containment
              </a>
            </div>

            <div className="lg:relative inline-block text-left">
              <button
                onClick={() => toggleDropdown(4)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 font-bold text-md  lg:ml-5"
              >
                Our Publications
              </button>
              {activeDropdown === 4 && (
                <div className="z-50 origin-top-right lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                 
                    <a
                      href="/books"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Books
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:relative inline-block text-left">
              <button
                onClick={() => toggleDropdown(5)}
                className=" l menu-link block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 font-bold text-md  lg:ml-5"
              >
                Other Services
              </button>
              {activeDropdown === 5 && (
                <div className="z-50 origin-top-right lg:absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                
                    <a
                      href="/assessments"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Assessments
                    </a>
                    <a
                      href="strategicplanning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Strategic Planning
                    </a>
                    <a
                      href="/lift-activity"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      LIFT Activity
                    </a>
                    <a
                      href="/executive&leadership-coaching"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Executive & Leadership Coaching
                    </a>
                   
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;