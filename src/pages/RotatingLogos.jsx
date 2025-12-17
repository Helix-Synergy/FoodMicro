import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Importing the images
import Microbial from "../assets/tracks/Microbial.jpg";
import Microbiome from "../assets/tracks/Microbime-Engineering.jpg"
import HostMicrobe  from "../assets/tracks/Host–Microbe.jpg";
import Metabolites from "../assets/tracks/Metabo.jpg"
import FoodSecurity from "../assets/tracks/Foodbrone Microbial.jpg";
import FoodSpoil from "../assets/tracks/Food Spoilage.jpg"
import Bio from "../assets/tracks/Biopreservation-Microbes.jpg";
import Ecology from "../assets/tracks/Ecology.jpg"
import GutFood from "../assets/tracks/Gut.jpg";
import Personal from "../assets/tracks/Personalized Nutrition.jpg"
import Soil from "../assets/tracks/Soil & Plant Microbiomes.jpg";
import Sustainable from "../assets/tracks/Susbistanle.jpg"
import Processing from "../assets/tracks/Proceesig-Technologies.webp";
import Circular from "../assets/tracks/Circular Bioeconomy.jpg"
import Foodborne from "../assets/tracks/Foodbrone Microbial.jpg";
import Prebiotics from "../assets/tracks/Prebiotics.jpg"
import Fermented from "../assets/tracks/Feremented.jpg"
import Ethical from "../assets/tracks/Ethical.webp";
import MicrobiomeEng from "../assets/tracks/Microbime-Engineering.jpg"
import Quorum from "../assets/tracks/Quorum.avif"

// export const tracks = [
//   {
//     image: Ai,
//     title: "Microbial Ecology of Food Systems",
//     description:
//       "By speeding up research, improving data processing, and spurring innovation in disciplines like biology, chemistry, physics, and medicine, artificial intelligence is revolutionizing science. It analyzes intricate data, finds patterns, and makes predictions that are difficult for people to do. AI enhances medication development, diagnostics, and customized therapies in medicine, and it helps with climate prediction and resource management in environmental science. AI increases research efficiency and creates new opportunities for discovery by automating chores and generating deeper insights. This has enormous potential to address global issues and advance human knowledge.",
//   },
//   {
//     image: communication,
//     title: "Microbiome Sequencing & Metagenomics for Food Research",
//     description:
//       "In science and technology, sharing research with specialists and the general public, promoting collaboration, and expanding knowledge all depend on effective communication. It entails releasing research, converting difficult ideas into understandable language, and utilizing resources like webinars and digital media. Clear communication is essential in disciplines like environmental science, engineering, and medicine where it impacts sustainability, healthcare, and policy.",
//   },
//   {
//     image: Chemical,
//     title: "Host–Microbe Interactions Influenced by Diet",
//     description:
//       "To design and optimize processes that transform raw materials into valuable products, chemical engineers mix concepts from chemistry, physics, mathematics, biology, and economics. It focuses on enhancing industrial methods, energy production, and sustainability and is crucial to sectors like chemicals, petrochemicals, medicines, food, and environmental protection.",
//   },
//   {
//     image: blockchain,
//     title: "Metabolites, Enzymes & Nutrient Transformations",
//     description:
//       "Blockchain is a decentralized digital ledger that ensures data security, transparency, and integrity by recording transactions across numerous computers. It was first developed for cryptocurrencies like Bitcoin but is now utilized in industries including digital identity verification, voting, healthcare, and supply chain management.",
//   },
//   {
//     image: industry,
//     title: "Microbial Dynamics in Food Safety",
//     description:
//       "Optimizing systems and procedures to improve productivity, quality, and efficiency in the manufacturing, operations, and service sectors is the main goal of industrial engineering. Industrial engineers develop, analyze, and oversee systems involving people, materials, information, and equipment, striving for process improvement, waste reduction, cost reduction, and quality assurance.",
//   },
//   {
//     image: iot,
//     title: "Microbiome-Based Strategies for Food Spoilage Control",
//     description:
//       "Smarter systems are made possible by the Internet of Things (IoT), a network of connected devices that exchange information and communicate online. These devices gather and send data using sensors and software. IoT increases productivity, automates procedures, and facilitates real-time monitoring in industries like healthcare, transportation, agriculture, and smart cities.",
//   },
//   {
//     image: indu,
//     title: "Biopreservation-Microbes & Natural Antimicrobials",
//     description:
//       "The use of nuclear processes, particularly for energy production through nuclear reactions, is the main focus of nuclear engineering. It involves designing, operating, and maintaining nuclear reactors, as well as technology for power generation, radiation protection, and safe handling of radioactive materials.",
//   },
//   {
//     image: It,
//     title: "Microbial Ecology of Food Systems - From Farm to Fork",
//     description:
//       "Utilizing computer systems, software, and networks to store, process, and analyze data supports research in a variety of subjects. IT enables large dataset management, simulation, system modeling, and international collaboration. IT is essential in fields like physics, genetics, and climate science, transforming how scientists tackle complex problems.",
//   },
//   {
//     image: BigData,
//     title: "Gut–Food Axis",
//     description:
//       "Big data refers to enormous, intricate datasets produced by observations, experiments, and simulations that are too large for conventional techniques. In genomics, astronomy, climate science, and medicine, big data enables researchers to identify patterns and insights using AI, data mining, and machine learning, driving breakthroughs and discoveries.",
//   },
//   {
//     image: Robotics,
//     title: "Personalized Nutrition",
//     description:
//       "Robotics involves the design and application of robots to perform repetitive, hazardous, or complex tasks. Used in industry, space exploration, medical, and environmental monitoring, robotics enhances efficiency, safety, and precision. Developments in AI and machine learning make robots more adaptive and autonomous.",
//   },
//   {
//     image: Auto,
//     title: "Soil & Plant Microbiomes",
//     description:
//       "Automobile engineering focuses on the design, development, production, and testing of automobiles, trucks, and motorbikes. It integrates mechanics, thermodynamics, electronics, and materials science to create safe, efficient, and environmentally friendly vehicles, including electric drivetrains, autonomous systems, and infotainment technologies.",
//   },
//   {
//     image: marine,
//     title: "Sustainable Agriculture & Food Production",
//     description:
//       "Marine engineering focuses on designing, developing, and maintaining vessels and marine systems. Engineers work on engines, transmissions, navigation, and other ship components to ensure safety, efficiency, and sustainability in maritime operations.",
//   },
//   {
//     image: machine,
//     title: "Processing Technologies on Food Microbial Communities",
//     description:
//       "Machine learning (ML) uses statistical models and algorithms to enable computers to learn from data and predict outcomes without explicit programming. ML analyzes large datasets, finds patterns, and generates insights in disciplines like biology, chemistry, physics, and environmental research, aiding in drug discovery and genomics.",
//   },
//   {
//     image: Aero,
//     title: "Circular Bioeconomy & Waste Valorization",
//     description:
//       "Aerospace engineering includes aeronautical (aircraft) and astronautical (space) engineering, focusing on designing, developing, and operating air and space vehicles. Engineers develop propulsion systems, avionics, aerodynamics, and guidance systems to ensure performance, safety, and efficiency.",
//   },
//   {
//     image: Agric,
//     title: "Foodborne Microbial Risks",
//     description:
//       "Agricultural engineering applies engineering principles to improve farming methods, address agriculture-related issues, and increase food production. It includes designing tools and systems for planting, harvesting, irrigation, and agricultural processing to boost productivity, crop yields, and sustainability.",
//   },
//   {
//     image: nano,
//     title: "Prebiotics, Synbiotics & Postbiotics",
//     description:
//    "Functional properties of fermented foods. The track highlights mechanisms underlying health benefits, innovative fermentation technologies, and product development strategies, emphasizing their role in gut health, immunity, flavor enhancement, and the creation of novel, sustainable, and functional food products."
//   },
//   {
//     image: civil,
//     title: "Fermented Foods - Health Benefits & Innovation",
//     description:
//       "Civil engineering designs, builds, and maintains infrastructure like roads, bridges, buildings, water systems, and airports. It applies physics, mathematics, and materials science to ensure structures are safe, functional, and long-lasting, including environmental, geotechnical, and transportation engineering.",
//   },
//   {
//     image: mech,
//     title: "Mechanical Engineering",
//     description:
//       "Mechanical engineering is devoted to designing, analyzing, and producing mechanical systems. It integrates physics, thermodynamics, materials science, and mechanics to create machines and devices, from small components like gears to large systems like power plants and robotics.",
//   },
// ];
export const tracks = [
  {
    image: Microbial,
    title: "Microbial Ecology of Food Systems",
    description: (
      <>
        This explores the complex interactions between{" "}
        <Link
          to="/venue"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          microorganisms and food environments
        </Link>
        . It covers microbial diversity, fermentation processes, food safety,
        spoilage prevention, and functional microbes’ roles in nutrition and
        flavor. This track emphasizes innovative strategies to harness
        beneficial microbes for sustainable, safe, and high-quality food
        production.
      </>
    ),
  },

  {
    image:Microbiome,
    title: "Microbiome Sequencing & Metagenomics for Food Research",
    description: (
      <>
        The{" "}
        <Link
          to="/executive-panel-members/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Microbiome Sequencing & Metagenomics
        </Link>{" "}
        for Food Research track focuses on advanced techniques to analyze
        microbial communities in food systems. It covers high-throughput
        sequencing, metagenomic analysis, functional profiling, and microbial
        interactions, aiming to improve food safety, quality, fermentation
        processes, and the development of innovative, health-promoting food
        products.
      </>
    ),
  },

  {
    image: HostMicrobe,
    title: "Host–Microbe Interactions Influenced by Diet",
    description: (
      <>
        This track examines how dietary components shape the gut microbiome and
        influence host health. It explores mechanisms of microbial modulation{" "}
        <Link
          to="/Food-Micro-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          nutrient–microbe
        </Link>
        interactions, immune responses, and metabolic outcomes, aiming to
        uncover strategies for personalized nutrition, functional foods, and
        interventions that promote overall well-being.
      </>
    ),
  },

  {
    image:Metabolites,
    title: "Metabolites, Enzymes & Nutrient Transformations",
    description: (
      <>
        The{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Metabolites, Enzymes & Nutrient Transformations
        </Link>{" "}
        track explores the biochemical processes driving food quality, flavor,
        and nutrition. It covers microbial and enzymatic pathways, metabolite
        production, nutrient conversion, and their impact on food functionality
        and safety. This track highlights innovative approaches to enhance food
        systems through targeted metabolic and enzymatic interventions.
      </>
    ),
  },

  {
    image:  FoodSecurity ,
    title: "Microbial Dynamics in Food Safety",
    description: (
      <>
        The{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Microbial Dynamics in Food Safety
        </Link>{" "}
        track investigates how microorganisms influence food contamination,
        spoilage, and preservation. It covers pathogen behavior, microbial
        interactions, risk assessment, and control strategies, emphasizing
        predictive models and innovative interventions to ensure safe,
        high-quality food. This track bridges microbiology and practical food
        safety solutions.
      </>
    ),
  },

  {
    image: FoodSpoil,
    title: "Microbiome-Based Strategies for Food Spoilage Control",
    description: (
      <>
        Explores leveraging beneficial microbes to prevent spoilage and extend
        shelf life. It covers microbial ecology,{" "}
        <Link
          to="/Food-Micro-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          biopreservation,
        </Link>{" "}
        competitive exclusion, and functional starter cultures, highlighting
        innovative approaches that harness microbiomes to enhance food quality,
        safety, and sustainability in modern food systems.
      </>
    ),
  },

  {
    image:  Bio,
    title: "Biopreservation-Microbes & Natural Antimicrobials",
    description: (
      <>
        This track focuses on using beneficial microorganisms and natural
        compounds to enhance food safety and shelf life. It covers microbial
        antagonism, bacteriocins, plant-derived antimicrobials, and
        fermentation-based preservation strategies, highlighting sustainable,
        chemical-free approaches to maintain food quality, safety, and{" "}
        <Link
          to="/Food-Micro-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          functional properties.
        </Link>{" "}
      </>
    ),
  },

  {
    image:  Ecology,
    title: "Microbial Ecology of Food Systems - From Farm to Fork",
    description: (
      <>
        Examines{" "}
        <Link
          to="/executive-panel-members/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          microbial
        </Link>{" "}
        communities across the entire food production continuum. It emphasizes
        their roles in food safety, quality, fermentation, and sustainability,
        providing insights into strategies for harnessing beneficial microbes to
        optimize production processes, minimize contamination, and enhance
        nutritional value.
      </>
    ),
  },

  {
    image:GutFood,
    title: "Gut–Food Axis",
    description: (
      <>
        This track explores the dynamic interplay between diet, gut microbiota,
        and host health. It examines how food components influence microbial
        composition and functionality, shaping metabolism, immunity, and overall
        well-being. The track highlights emerging research on personalized
        nutrition, functional foods, and microbiome-targeted interventions for{" "}
        <Link
          to="/Food-Micro-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          optimal health
        </Link>{" "}
        outcomes.
      </>
    ),
  },

  {
    image: Personal,
    title: "Personalized Nutrition",
    description: (
      <>
        The Personalized Nutrition track focuses on tailoring dietary strategies
        to individual genetic, metabolic, and microbiome profiles. It explores
        nutrient–gene–microbe interactions, precision dietary interventions, and
        data-driven approaches to optimize health, prevent disease, and enhance
        wellness. The track emphasizes innovations in{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          nutrigenomics
        </Link>{" "}
        microbiome-informed diets, and evidence-based personalized nutrition
        solutions.
      </>
    ),
  },

  {
    image: Soil,
    title: "Soil & Plant Microbiomes",
    description: (
      <>
        {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Soil & Plant Microbiomes
        </Link> investigates microbial communities in soils and plants, highlighting their pivotal roles in nutrient cycling, plant growth, and crop resilience. The track examines microbiome-driven strategies for sustainable agriculture, biocontrol, and soil health management, emphasizing innovations that enhance productivity while minimizing environmental impact.
      </>
    ),
  },

  {
    image: Sustainable,
    title: "Sustainable Agriculture & Food Production",
    description: (
      <>
        This focuses on innovative strategies to enhance food security while minimizing environmental impact. It explores {" "}
        <Link
          to="/about-Food-Micro-conclave"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          eco-friendly farming
        </Link>{" "} practices, resource-efficient technologies, soil and water management, and microbiome-based interventions, highlighting approaches that promote productivity, resilience, and sustainability across the agricultural and food production continuum.
      
      </>
    ),
  },

  {
    image:Processing,
    title: "Processing Technologies on Food Microbial Communities",
    description: (
      <>
        Examines how processing impacts{" "}
        <Link
          to="/Food-Micro-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          microbial populations
        </Link> ,safety, and quality. The track covers thermal and non-thermal technologies, fermentation, preservation methods, and microbial dynamics, highlighting innovations that optimize beneficial microbes, control pathogens, and enhance the nutritional and sensory attributes of processed foods.
        
      </>
    ),
  },

  {
    image: Circular,
    title: "Circular Bioeconomy & Waste Valorization",
    description: (
      <>
        Explores sustainable strategies for transforming {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          food and agricultural waste
        </Link> into valuable products. The track covers bioconversion technologies, microbial and enzymatic interventions, resource recovery, and innovative circular approaches that reduce environmental impact, promote sustainability, and create economic opportunities within food systems and bio-based industries.
        
      </>
    ),
  },

  {
    image:Foodborne,
    title: "Foodborne Microbial Risks",
    description: (
      <>
        {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Foodborne Microbial 
        </Link>Microbial Risks examines the occurrence, behavior, and control of pathogenic microorganisms in food systems. The track addresses risk assessment, detection technologies, outbreak investigation, and mitigation strategies, emphasizing approaches to safeguard public health, ensure food safety, and develop evidence-based interventions across the food supply chain.
     
      </>
    ),
  },

  {
    image:Prebiotics,
    title: "Prebiotics, Synbiotics & Postbiotics",
    description: (
      <>
     Explores the roles of functional {" "}
        <Link
          to="/Food-Micro-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          food components
        </Link>
        components in modulating the gut microbiome and promoting host health. The track covers mechanisms of action, formulation strategies, clinical applications, and emerging research on microbiome-targeted interventions, highlighting innovations that enhance nutrition, immunity, and overall well-being through bioactive compounds.
      </>
    ),
  },

  {
    image:Fermented,
    title: "Fermented Foods - Health Benefits & Innovation",
    description: (
      <>
      {" "}
        <Link
          to="/Food-Micro-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Fermented Foods – Health Benefits & Innovation
        </Link> examines the microbiology, nutritional value, and functional properties of fermented foods. The track highlights mechanisms underlying health benefits, innovative fermentation technologies, and product development strategies, emphasizing their role in gut health, immunity, flavor enhancement, and the creation of novel, sustainable, and functional food products.
      </>
    ),
  },
// Ethical

  {
    image:Ethical,
    title: "Ethical & Commercial Considerations in Microbiome",
    description: (
      <>
    This explains the regulatory, ethical, and business aspects of   {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          microbiome research 
        </Link> and applications. The track addresses intellectual property, safety, consumer acceptance, commercialization strategies, and responsible innovation, highlighting frameworks that balance scientific advancement, market potential, and societal responsibility in the development of microbiome-based products and solutions.
      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image:MicrobiomeEng,
    title: "Microbiome Engineering",
    description: (
      <>
   This focuses on designing and manipulating microbial communities to enhance food quality, safety, and health outcomes. The track covers synthetic biology, microbial consortia, gene editing, and functional interventions, highlighting innovative strategies to optimize    {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         microbiomes
        </Link> microbiomes for fermentation, nutrient bioavailability, disease prevention, and sustainable applications across food and agricultural systems.
      </>
    ),
  },
  {
    image:Quorum,
    title: "Quorum Sensing",
    description: (
      <>
       {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Quorum Sensing
        </Link>{" "} explores microbial communication mechanisms that regulate collective behaviors in food systems, including biofilm formation, spoilage, and pathogenicity. The track covers signaling pathways, detection methods, and strategies to modulate quorum sensing, emphasizing applications in food safety, preservation, fermentation optimization, and the development of innovative microbiome-based interventions
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style>

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
