import React, { useState } from "react";

const faqLinks = {
  tracks:"/Food-Micro-conference-tracks/",
  abstractSubmission: "/abstract-submission",
  schedule: "/Food-Micro-event-schedule" ,
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is FOODMICRO 2026?",
    answer:
      "Techmatics 2026, officially known as the “Global Technology & Innovation Conference” (Techmatics-2026), is a major international technology event organized by Helix Conferences. It brings together Tech Professionals, Innovators, Researchers, and Industry Leaders to discuss breakthroughs across modern technologies.",
  },
  {
    question: "When and where will Techmatics 2026 take place?",
    answer: "The conference will be held virtually on Sep 24-25, 2026.",
  },
  {
    question: "What are the highlights of Techmatics 2026?",
    answer:
      "Keynote sessions, innovation showcases, expert-led workshops, live tech demos, and networking with global industry specialists.",
  },
  {
    question: "What conference tracks are featured at Techmatics 2026?",
    answer: (
      <>
        You can explore the full list of tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          FOODMICRO 2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I showcase my products or explore sponsorship options?",
    answer: (
      <>
        To exhibit your products or discuss sponsorship packages, contact our team at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract for Techmatics 2026?",
    answer: (
      <>
        You can submit your abstract{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be emailed to the address provided during registration. Please check your inbox and spam folder.",
  },
  {
    question: "What materials will I receive during the event?",
    answer:
      "Attendees will receive a digital conference kit containing the schedule, speaker list, and session details.",
  },
  {
    question: "How long can I present my topic?",
    answer:
      "Presentation durations typically range from 15–20 minutes. Final timings will be shared after abstract review.",
  },
  {
    question: "Who will be attending Techmatics 2026?",
    answer:
      "Tech professionals, researchers, scientists, founders, engineers, innovators, and industry executives from around the world.",
  },
  {
    question: "How many people usually attend the conference?",
    answer:
      "We expect 100+ international attendees, including speakers, delegates, and exhibitors.",
  },
  {
    question: "Can I register for multiple speaking sessions?",
    answer:
      "Yes, you can participate in multiple sessions as long as each topic is unique. Submit separate abstracts accordingly.",
  },
  {
    question: "Are keynote speaking opportunities available?",
    answer:
      "Yes, a limited number of keynote slots are available. Express your interest in the abstract submission form.",
  },
  {
    question: "What is expected of speakers?",
    answer:
      "Speakers are expected to deliver informative sessions, share insights, and engage the audience. Detailed guidelines will be provided upon selection.",
  },
  {
    question: "Is there a fee to participate as a speaker or attendee?",
    answer:
      "Yes, registration fees apply to all participants. Visit the “Buy A Ticket” section on the website for pricing details.",
  },
  {
    question: "How can I view the event schedule?",
    answer: (
      <>
        The complete schedule will be available soon. View or download it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I preview the session list before the event?",
    answer:
      "Yes, the full agenda including speaker details and session topics will be published prior to the event.",
  },
  {
    question: "Can I purchase tickets before the event day?",
    answer:
      "Yes, we encourage early registration. Limited last-minute tickets may be available.",
  },
  {
    question: "How can I get assistance with accommodation?",
    answer: (
      <>
        For accommodation assistance, please email us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
