import React from "react";

const Downlaod: React.FC = () => {
    const resumerUrl = '../../public/doc/Resume.pdf'
    const resumeName = 'Resume.pdf'


  return (
    <div className="relative md:px-6 px-5 py-2 w-fit bg-white overflow-hidden rounded-lg text-black border border-black group hover:text-white ">
      <a href={resumerUrl} download={resumeName} className="relative flex items-center text-xs md:text-base gap-2 font-bold z-50">
        Download CV
      </a>
      <div className="absolute inset-0 bg-purple-500 transition-transform transform translate-x-full group-hover:translate-x-0 duration-500"></div>
      {/* <span className="absolute inset-0 z-20 text-black transition-colors duration-500 group-hover:text-white"></span> */}
    </div>
  );
};

export default Downlaod;
