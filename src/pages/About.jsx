import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  HeartPulse,
  SmilePlus,
  Dna,
  Video,
  Globe,
  Biohazard,
  Radiation,
  Star,
  User,
  BookOpen,
  Stethoscope,
  PackageSearch,
 Rocket 
} from "lucide-react";
import { banner_style } from "../Styles/styles";

const data = {
  event: {
    title: "About Us",
    date: "25th - 27th Nov 2025",
    organizer: "Helix Conferences",
    description: [
      <>
The <Link to="https://helixconferences.com/buy-a-ticket">World Summit on Food Microbiome Science,</Link> organized by Helix Conferences, is a leading international forum dedicated to advancing microbiome research, enhancing gut and food health, and empowering scientists, researchers, and industry professionals worldwide. The summit is committed to fostering meaningful dialogue, multidisciplinary collaboration, and evidence-based practices that drive innovation in nutrition, functional foods, and microbiome therapeutics. Through keynote presentations, interactive workshops, panel discussions, and research sessions, participants will gain critical insights into cutting-edge microbiome research, novel food applications, precision nutrition strategies, and emerging global health priorities.
      </>,
      <>
        {/* From cutting-edge AI to advanced robotics, from cybersecurity trends to sustainable engineering—we curate thought-provoking content and create immersive spaces where innovation thrives. Explore our sessions to engage with the future of technology, exchange ideas with global experts, and drive impactful solutions across industries.{" "} */}
        <Link
          to="/Food-Micro-conference-tracks/" 
          target="blank"
          rel="noopener noreferrer"
          className="text-accent font-bold"
        >
          
        </Link>{" "}
       
      </>,
    ],
  },



join: [
  {
    text: "Join us in shaping the future of",
    linkText: "Microbiome Science",
    link: "/",
    suffix:
      ", driving innovation, and strengthening the global community committed to excellence in food and gut health."
  }
]
,



highlights: [
  {
    title: "Keynote Speakers",
    description: "Hear from leading global experts in microbiome science.",
  },
  {
    title: "Workshops & Seminars",
    description: "Participate in hands-on training in microbiome research techniques and food applications.",
  },
  {
    title: "Exhibition",
    description: "Explore innovative probiotics, functional foods, and microbiome technologies.",
  },
  {
    title: "Networking",
    description: "Connect with scientists, nutritionists, and industry leaders",
  },
  {
    title: "Gut & Food Health Focus",
    description: "Learn about WHO-aligned standards and best practices for nutrition and microbiome wellness",
  },
{
  title: "Scientific Insights",
  description: "Discover the latest trends and breakthroughs in",
  linkText: "food microbiome research",
  link: "/Food-Micro-event-schedule",
},
  {
    title: "Collaboration Forums",
    description: "Build partnerships and research connections across academia and industry.",
  },
  {
    title: "Accredited Learning",
    description: "Earn professional development credits by attending.",
  },
],



  dates: {
    eventDate: "25th-27th Nov 2025",
    venue: "Novotel Valencia, Spain",
    registrationDeadline: "1st Nov 2025",
  },
};


const AboutPublicHealth = () => {
  
  
  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
     <div
  className={`${banner_style} w-full mx-auto about-banner`}
  style={{
    backgroundImage: "url('https://housing.com/news/wp-content/uploads/2023/11/networking-companies-f-compressed.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
        <h1 className="text-black-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
          {data.event.title}
        </h1>
      </div>

      <h1 className="text-4xl mt-2 font-bold text-one">
      Fostering Collaboration Advancing Global Impact
      </h1>
      <p className="text-center text-gray-600 text-3xl mb-6">
        <strong>
          23<sup>th</sup> - 24<sup>th</sup> April 2026
        </strong>
      </p>

      {data.event.description.map((desc, idx) => (
        <p
          key={idx}
          className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
        >
          {desc}
        </p>
      ))}

     

      {/* Join Section */}
      <section className="mb-10 text-center w-full min-w-4xl px-2 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-one mb-4 w-full">
          Join the Global Community at on Food Microbiome Science 2026
        </h2>
      {data.join.map((para, idx) => (
  <p
    key={idx}
    className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
  >
    {para.text}{" "}
    <Link to={para.link}>
      {para.linkText}
    </Link>
    {para.suffix}
  </p>
))}

      </section>

      {/* Themes Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl my-8 font-bold text-one">Who Can Attend...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <User className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
        	Microbiome Researchers & Scientists
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <BookOpen className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Nutritionists & Dietitians
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <Rocket className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
       	Food Scientists & Technologists
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <PackageSearch className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
          	Healthcare Professionals in Gastroenterology
            </h3>
          </div>
        
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl font-bold text-one mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-start">
          {data.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 text-md text-gray-800 text-left flex items-start shadow-sm "
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-3 mt-1" />
              <div className="flex flex-wrap items-start">
                <h3 className="font-semibold whitespace-nowrap mr-1">
                  {highlight.title} –
                </h3>
<p className="text-md text-gray-600 flex-1">
  {highlight.link ? (
    <>
      {highlight.description}{" "}
      <Link
        to={highlight.link}
        className
      >
        {highlight.linkText}
      </Link>
    </>
  ) : (
    highlight.description
  )}
</p>


              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dates Section */}
      {/* <section className="mb-16 text-center w-full md:px-12 px-4">
        <h2 className="text-4xl font-bold text-one mb-8">
          Important Dates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Calendar className="w-6 h-6 text-one mb-2" />
            <strong>Event Date</strong>
            <p>{data.dates.eventDate}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Globe className="w-6 h-6 text-one mb-2" />
            <strong>Proposed Venue</strong>
            <p>{data.dates.venue}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <BadgeCheck className="w-6 h-6 text-one mb-2" />
            <strong>Registration Deadline</strong>
            <p>{data.dates.registrationDeadline}</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPublicHealth;

