import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
// import WhoWeAre from "./components/Company/WhoWeAre";
// import FeaturedIn from "./components/Company/FeaturedIn";
// import HotelLeSutra from "./components/Hospitality/HotelLeSutra";
// import AndhraArtHotel from "./components/Hospitality/AndhraArtHotel";
// import Udaan from "./components/Hospitality/GreatEscapes/Udaan";
// import Geometrica from "./components/Hospitality/GreatEscapes/Geometrica";
// import ArtVeda from "./components/RealEstate/ArtHomes/ArtVeda";
// import TribalArtHomes from "./components/RealEstate/ArtHomes/TribalArtHomes";
// import OutOfTheBlue from "./components/Dining/OutOfTheBlue";
// import AngloIndian from "./components/Dining/AngloIndian";
// import OliveBar from "./components/Dining/OliveBar";
// import AngdaiDaySpa from "./components/AngdaiDaySpa";
// import Contact from "./components/Contact";
// import Mumbai from "./components/BookNow/Mumbai";
// import Lonavala from "./components/BookNow/Lonavala";
// import Vishakapatnam from "./components/BookNow/Vishakapatnam";
// import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/featured-in" component={FeaturedIn} />
          <Route path="/hotel-le-sutra" component={HotelLeSutra} />
          <Route path="/andhra-art-hotel" component={AndhraArtHotel} />
          <Route path="/udaan" component={Udaan} />
          <Route path="/geometrica" component={Geometrica} />
          <Route path="/art-veda" component={ArtVeda} />
          <Route path="/tribal-art-homes" component={TribalArtHomes} />
          <Route path="/out-of-the-blue" component={OutOfTheBlue} />
          <Route path="/anglo-indian" component={AngloIndian} />
          <Route path="/olive-bar" component={OliveBar} />
          <Route path="/angdai-day-spa" component={AngdaiDaySpa} />
          <Route path="/contact" component={Contact} />
          <Route path="/book-now/mumbai" component={Mumbai} />
          <Route path="/book-now/lonavala" component={Lonavala} />
          <Route path="/book-now/vishakapatnam" component={Vishakapatnam} />
          <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
