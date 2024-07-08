import React from 'react';
import './css/Section.css';

const Section = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="heading">BOOK YOUR STAY</h2>
          <p className="sub-heading">At Le Sutra’s Art & Craft based Hotels / Luxury Dinky hotels / Rental Art Homes</p>
          <div className="locations">
            <a className="link" href="https://staahmax.staah.net/be/indexpackdetail?propertyId=NTgyNA==&individual=true" target="_blank" rel="noopener">Mumbai</a>
            <span className="separator"> | </span>
            <a className="link" href="https://lesutra.in/book-le-sutra-great-escapes/" rel="noopener">Lonavala</a>
            <span className="separator"> | </span>
            <a className="link" href="https://reservations.palmbeachhotel.in/rooms" target="_blank" rel="noopener">Vishakapatnam</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
