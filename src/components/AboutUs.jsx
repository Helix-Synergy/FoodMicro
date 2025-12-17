import React from "react";
import about_img from "../assets/about_img.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[80vh] bg-pimary items-center justify-center p-4 md:px-12 md:py-4">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={about_img}
          alt="Dental Conference 2026"
          loading="lazy"
          className="h-[80%] md:max-h-[100%] w-auto md:w-[80vh] md:mx-16 rounded-2xl object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-xl md:text-3xl font-bold my-2">
          <span className="text-one">Advancing Global Excellence  </span>{" "}
         in Food Microbiome Science
        </h1>
        <p className="text-base my-2">
     Welcome to the global hub for <Link to="/Food-Micro-orators" >Food Microbiome  </Link> Conferences and Scientific Innovation. Discover the most influential Food Microbiome Summit events, bringing together microbiome researchers, food scientists, nutritionists, biotechnologists, clinicians, industry leaders, and policy experts.{" "}
          <Link
            className="text-accent font-bold"
            target="_blank"
            to="https://helixconferences.com/blog.php"
          ></Link>{" "}
        </p>
<p>“Transforming Food and Health Through Microbiome Science and Innovation”</p>
        <Link to="/about-Food-Micro-conclave">
          <button className="flex bg-one text-white px-6 md:px-8 py-2 my-4 rounded-full text-sm md:text-base">
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
