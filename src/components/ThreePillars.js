import React from 'react';
import './css/ThreePillars.css';


export default function ThreePillars() {
  return (
    <div className="container">
      <div className="header">
        <h3 className="sub-title">three pillars</h3>
        <h1 className="main-title">ELEVATE YOUR LIVING</h1>
      </div>
      <div className="grid">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar">
            <img src="/placeholder.svg" alt={pillar.alt} className="image" />
            <h2 className="pillar-title">{pillar.title}</h2>
            <p className="description">{pillar.description}</p>
            <a href="#" className="link">
              <span>Discover More</span>
              <ArrowRightIcon className="icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const pillars = [
  {
    alt: "Hospitality",
    title: "HOSPITALITY",
    description:
      "Le Sutra pioneers art-based hospitality by seamlessly blending art, culture, and luxury to create an unforgettable guest experience.",
  },
  {
    alt: "Real-Estate",
    title: "REAL-ESTATE",
    description:
      "Our luxury apartments and villas are not just places to live; they are immersive art havens that transcend the ordinary.",
  },
  {
    alt: "Dining",
    title: "DINING",
    description:
      "Indulge in an unparalleled culinary adventure where our curated dining establishments orchestrate a symphony of flavors.",
  },
];

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
