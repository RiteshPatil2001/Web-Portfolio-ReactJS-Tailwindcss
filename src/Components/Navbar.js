import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const location = useLocation();

  const handleExperienceClick = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {};

  const handleClickOutside = (event) => {
    if (!event.target.closest(".relative")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarBackgroundColor = () => {
    const isPhoneMode = window.innerWidth <= 1023;
    if (isPhoneMode && menuOpen) {
      return `linear-gradient(to right, rgba(232, 210, 236), rgba(200, 220, 255), rgba(180, 205, 255))`;
    }
    if (location.pathname === "/") {
      const viewportHeight = window.innerHeight;
      const maxScroll = viewportHeight * 0.2;
      const scrollFraction = Math.min(scrollPosition / maxScroll, 1);
      const alpha = scrollFraction;
      return `linear-gradient(to right, rgba(232, 210, 236, ${alpha}), rgba(200, 220, 255, ${alpha}), rgba(180, 205, 255, ${alpha}))`;
    } else {
      return `linear-gradient(to right, rgba(232, 210, 236), rgba(200, 220, 255), rgba(180, 205, 255))`;
    }
  };

  const getNavbarTextColor = () => {
    if (location.pathname === "/") {
      const viewportHeight = window.innerHeight;
      const maxScroll = viewportHeight * 0.2;
      const scrollFraction = Math.min(scrollPosition / maxScroll, 1);
      return scrollFraction > 0.5 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 1)";
    } else {
      return "rgba(0, 0, 0, 1)";
    }
  };

  return (
    <nav
      className="fixed top-0 w-full transition-colors duration-500 ease-in-out z-[1000] desktop:pt-3 desktop:pb-3 desktop:pl-4 laptop:pt-3 laptop:pb-3 laptop:pl-4 phone:pt-1"
      style={{
        background: getNavbarBackgroundColor(),
        color: getNavbarTextColor(),
      }}
    >
      <div className="px-6 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between flex-grow">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-widest uppercase">
                <Link
                  to="/"
                  className="no-underline"
                  style={{ color: getNavbarTextColor() }}
                >
                  Ritesh Patil
                </Link>
              </h1>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="flex flex-row items-center px-3 py-2 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                  style={{ color: getNavbarTextColor() }}
                >
                  <span className="ml-2">Home</span>
                </Link>
                <Link
                  to="/about"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                  style={{ color: getNavbarTextColor() }}
                >
                  <span className="ml-2">About Me</span>
                </Link>

                <div className="relative">
                  <button
                    onClick={handleDropdownToggle}
                    onMouseEnter={handleMouseEnter}
                    className="flex flex-row items-center px-3 py-2 ml-4 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                    style={{ color: getNavbarTextColor() }}
                  >
                    <span className="mx-2">Experience</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 mt-1 transform ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      } transition-transform duration-300 ease-in-out`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute -right-12 w-60 mt-2 origin-top-right rounded-md shadow-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1 bg-white rounded-md shadow-xs">
                        <Link
                          to="/experience"
                          className="flex flex-row items-center px-4 py-2 text-lg no-underline text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                          style={{ color: getNavbarTextColor() }}
                        >
                          Professional Experience
                        </Link>
                        <Link
                          to="/projects"
                          className="flex flex-row items-center px-4 py-2 text-lg no-underline text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                          style={{ color: getNavbarTextColor() }}
                        >
                          Personal Project
                        </Link>
                        <Link
                          to="/certificates"
                          className="flex flex-row items-center px-4 py-2 text-lg no-underline text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                          style={{ color: getNavbarTextColor() }}
                        >
                          Certifications
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/resume"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                  style={{ color: getNavbarTextColor() }}
                >
                  <span className="ml-2">Resume</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex -mr-2 lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              aria-label={menuOpen ? "Close main menu" : "Main menu"}
              aria-expanded={menuOpen}
            >
              <svg
                className="w-8 h-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 4 22 22"
              >
                <path
                  className={`${menuOpen ? "hidden" : "inline-flex"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${menuOpen ? "inline-flex" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="container px-2 mx-auto">
          <div className="pt-2 pb-3">
            <Link
              to="/"
              className="flex flex-row items-center px-3 py-2 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              style={{ color: getNavbarTextColor() }}
            >
              <span className="ml-2">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex flex-row items-center px-3 py-2 mt-1 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              style={{ color: getNavbarTextColor() }}
            >
              <span className="ml-2">About me</span>
            </Link>
            <div className="relative">
              <button
                onClick={handleExperienceClick}
                className="flex flex-row items-center w-full px-3 py-2 mt-1 text-lg no-underline font-medium text-left rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                style={{ color: getNavbarTextColor() }}
              >
                <span className="mx-2">Experience </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 mt-1 transform ${
                    mobileDropdownOpen ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300 ease-in-out`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {mobileDropdownOpen && (
                <div
                  className="px-2 py-2 mt-2 bg-white rounded-md shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                  onMouseLeave={() => setMobileDropdownOpen(false)}
                  onClick={handleExperienceClick}
                >
                  <Link
                    to="/experience"
                    className="flex flex-row items-center px-3 py-2 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                    style={{ color: getNavbarTextColor() }}
                    role="menuitem"
                  >
                    Professional Experience
                  </Link>
                  <Link
                    to="/projects"
                    className="flex flex-row items-center px-3 py-2 mt-1 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                    style={{ color: getNavbarTextColor() }}
                    role="menuitem"
                  >
                    Personal Project
                  </Link>
                  <Link
                    to="/certificates"
                    className="flex flex-row items-center px-3 py-2 mt-1 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                    style={{ color: getNavbarTextColor() }}
                    role="menuitem"
                  >
                    Certifications
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/resume"
              className="flex flex-row items-center px-3 py-2 mt-1 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              style={{ color: getNavbarTextColor() }}
            >
              <span className="ml-2">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
