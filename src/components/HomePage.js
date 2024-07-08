import React from "react";
import { Link } from "react-router-dom";
import "./css/HomePage.css";
import ThreePillars from "./ThreePillars";

const sampleRooms = [
  {
    title: "Art Veda - Luxury Rental Apartments in Mumbai",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="
  },
  {
    title: "Tribal Art Homes - Rental Apartments in Mumbai",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="

  },
  {
    title: "Hotel Le Sutra - The world's first Indian art hotel in Mumbai",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="

  },
  {
    title: "Out of the Blue - Restaurant in Mumbai",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="

  },
  {
    title: "Andhra Art & Craft Hotel - The world's first handicrafts hotel in Vishakapatnam",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="
  },
  {
    title: "Anglo Indian Cafe & Bistro - Restaurant in Lonavala",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="

  },
  {
    title: "Olive Bar & Kitchen - Restaurant in Mumbai",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="

  },
  {
    title: "Udaan - Luxury Villa in Lonavala",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="

  }
];

const featuredNews = [
  {
    title: "5 boutique hotels in Mumbai you had no idea about",
    date: "DECEMBER 31, 2023",
    by: "ADMIN",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0=",

    description: "Hotel Le Sutra featured in Conde Nast Traveller Le Sutra, Bandra: Dotted with beautiful paintings…"
  },
  {
    title: "Hotel Business Review: A Sutra of Indian Philosophy",
    date: "NOVEMBER 20, 2023",
    by: "ADMIN",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="
    ,
    description: "Hotel Le Sutra featured in Hotel Business Review"
  },
  {
    title: "Home Review: Fusing Art + Design",
    date: "NOVEMBER 20, 2023",
    by: "ADMIN",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="
    ,
    description: "Hotel Le Sutra featured in Home Review"
  },
  {
    title: "Architectural Digest: The art-themed holiday villa ‘Udaan’ is flight of fancy come to life",
    date: "SEPTEMBER 3, 2023",
    by: "ADMIN",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="
    ,
    description: "Set within the plush hills of Lonavala, a whimsical holiday villa invites you to escape…"
  },
  {
    title: "Conde Nast Traveller: This new art villa and restaurant in Lonavala are worth the drive from Mumbai",
    date: "SEPTEMBER 3, 2023",
    by: "ADMIN",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="
    ,
    description: "When the team at Le Sutra started work on their “art villa” they wanted to…"
  },
  {
    title: "Architectural Digest: A Lonavala villa that embraces both Vastu and Indian cosmology with Raza’s Bindu",
    date: "SEPTEMBER 3, 2023",
    by: "ADMIN",
    image: "https://media.istockphoto.com/id/1453462931/photo/maldives-hotel-beach-resort-on-tropical-island-with-aerial-drone-view.webp?b=1&s=170667a&w=0&k=20&c=u-zNzEvxClpUbq92jGiKxWDhF2KB30Sev8jMUG3SiG0="
    ,
    description: "The hill station of Lonavala is crowded with vacation villas. When the team at Le…"
  }
];

const HomePage = () => {
  return (
    <div className="home-container">
      <button className="book-now">Book Now</button>
      <ThreePillars></ThreePillars>
      <section className="intro">
        <div className="intro-text">
          <h1>Welcome to a Canvas of Creativity</h1>
          <p>
            Le Sutra pioneers art-based hospitality by seamlessly blending art,
            culture, and luxury to create an unforgettable guest experience.
          </p>
        </div>
        <div className="intro-images">
          
        </div>
      </section>
      
      <section className="poster">
        <h2>BOOK YOUR STAY AT LE SUTRA’S ART & CRAFT BASED HOTELS / LUXURY DINKY HOTELS / RENTAL ART HOMES</h2>
        <p>Mumbai   I   Lonavala   I   Vishakapatnam</p>
      </section>
      
      <section className="pillars">
        <div className="pillar">
          <img src="url/to/hospitality_image.jpg" alt="Hospitality" />
          <h3>HOSPITALITY</h3>
          <p>
            Le Sutra pioneers art-based hospitality by seamlessly blending art,
            culture, and luxury to create an unforgettable guest experience.
          </p>
          <Link to="/hospitality">Discover More</Link>
        </div>
        <div className="pillar">
          <img src="url/to/real_estate_image.jpg" alt="Real-Estate" />
          <h3>REAL-ESTATE</h3>
          <p>
            Our luxury apartments and villas are not just places to live; they
            are immersive art havens that transcend the ordinary.
          </p>
          <Link to="/real-estate">Discover More</Link>
        </div>
        <div className="pillar">
          <img src="url/to/dining_image.jpg" alt="Dining" />
          <h3>DINING</h3>
          <p>
            Indulge in an unparalleled culinary adventure where our curated
            dining establishments orchestrate a symphony of flavors.
          </p>
          <Link to="/dining">Discover More</Link>
        </div>
      </section>
      
      <section className="poster-art-homes">
        <h2>Elevate your living with LE SUTRA ART HOMES</h2>
      </section>
      
      <section className="sample-rooms">
        {sampleRooms.map((room, index) => (
          <div key={index} className="room">
            <img src={room.image} alt={room.title} />
            <h3>{room.title}</h3>
          </div>
        ))}
      </section>
      
      <section className="featured-in">
        <h2>FEATURED IN</h2>
        {featuredNews.map((news, index) => (
          <div key={index} className="news-item">
            <img src={news.image} alt={news.title} />
            <h3>{news.title}</h3>
            <p>{news.date} BY {news.by}</p>
            <p>{news.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
