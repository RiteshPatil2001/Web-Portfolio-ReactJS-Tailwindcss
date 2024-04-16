import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faLaptopCode, faFileLines, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between laptop:items-center desktop:items-center phone:bg-[1b1a2ee8] tablet:bg-[1b1a2ee8] laptop:bg-[#1b1a2ea9] desktop:bg-[#1b1a2ea9] text-white sticky top-0 pt-[2%] pb-[1%] z-50">
      <Link to="/" className="navtitle laptop:text-4xl desktop:text-4xl phone:text-3xl phone:p-2 phone:ml-2 tablet:text-3xl tablet:p-2 font-bold tablet:ml-2 laptop:pb-2 laptop:pr-1 laptop:pl-1 desktop:pb-2 desktop:pr-1 desktop:pl-1 laptop:ml-3 desktop:ml-8  text-white no-underline	bg-gradient-to-r from-[gold] to-[gold] origin-[10%] bg-no-repeat">
        Ritesh Patil
      </Link>
      <div className="menu phone:flex tablet:flex laptop:hidden desktop:hidden absolute flex top-3 right-3 flex-col justify-between w-9 h-6 phone:mt-2 hover:cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="h-1 w-full bg-white rounded"></span>
        <span className="h-1 w-full bg-white rounded"></span>
        <span className="h-1 w-full bg-white rounded"></span>
      </div>
      <ul className={menuOpen ? "open flex" : ""}>
        <li className="p-0 list-none">
          <NavLink to="/home" className='block text-2xl px-3 py-2 no-underline rounded-lg hover:text-black hover:bg-[gold] phone:mt-2 tablet:mt-2'><FontAwesomeIcon icon={faHouse} /> Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='block text-2xl px-3 py-2 no-underline rounded-lg  hover:text-black hover:bg-[gold] phone:mt-1 tablet:mt-1'><FontAwesomeIcon icon={faUser} />  About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className='block text-2xl px-3 py-2 no-underline rounded-lg hover:text-black hover:bg-[gold]  phone:mt-1 tablet:mt-1'><FontAwesomeIcon icon={faLaptopCode} /> Projects</NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className='block text-2xl px-3 py-2 no-underline rounded-lg hover:text-black hover:bg-[gold]  phone:mt-1 tablet:mt-1'><FontAwesomeIcon icon={faTrophy} /> Certificates</NavLink>
        </li>
        <li>
          <NavLink to="/resume" className='block text-2xl px-3 py-2 no-underline rounded-lg hover:text-black hover:bg-[gold]  phone:mt-1 tablet:mt-1'><FontAwesomeIcon icon={faFileLines} /> Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar