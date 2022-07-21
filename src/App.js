import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Divisions from './Divisions.js';
import Islanders from './Islanders.js';
import Hurricanes from './Hurricanes.js';
import BlueJackets from './BlueJackets.js';
import Devils from './Devils.js';
import Rangers from './Rangers.js';
import Flyers from './Flyers.js';
import Penguins from './Penguins.js';
import Capitals from './Capitals.js';
import Ducks from './Ducks.js';
import Flames from './Flames.js';
import Oilers from './Oilers.js';
import Kings from './Kings.js';
import Sharks from './Sharks.js';
import Kraken from './Kraken.js';
import Canucks from './Canucks.js';
import GoldenKnights from './GoldenKnights.js';
import Bruins from './Bruins.js';
import Sabres from './Sabres.js';
import RedWings from './RedWings.js';
import Panthers from './Panthers.js';
import Canadiens from './Canadiens.js';
import Senators from './Senators.js';
import Lightning from './Lightning.js';
import MapleLeafs from './MapleLeafs.js';
import Coyotes from './Coyotes.js';
import BlackHawks from './BlackHawks.js';
import Avalanche from './Avalanche.js';
import Stars from './Stars.js';
import Wild from './Wild.js';
import Predators from './Predators.js';
import Blues from './Blues.js';
import Jets from './Jets.js';
import Graphs from './Graphs.js';
import Offers from './Offers.js';
import GraphTwo from './GraphTwo.js';
import GraphThree from './GraphThree.js';
import GraphFour from './GraphFour.js';
import GraphFive from './GraphFive.js';
import FrenchHome from './FrenchHome.js';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/statsHOCKEY" element={<Home />} />
          <Route path="/Divisions" element={<Divisions />} />
          <Route path="/Graphs" element={<Graphs />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/GraphTwo" element={<GraphTwo />} />
          <Route path="/GraphThree" element={<GraphThree />} />
          <Route path="/GraphFour" element={<GraphFour />} />
          <Route path="/GraphFive" element={<GraphFive />} />
          <Route path="/FrenchHome" element={<FrenchHome />} />
          <Route path="/Islanders" element={<Islanders />} />
          <Route path="/Hurricanes" element={<Hurricanes />} />
          <Route path="/BlueJackets" element={<BlueJackets />} />
          <Route path="/Devils" element={<Devils />} />
          <Route path="/Rangers" element={<Rangers />} />
          <Route path="/Flyers" element={<Flyers />} />
          <Route path="/Penguins" element={<Penguins />} />
          <Route path="/Capitals" element={<Capitals />} />
          <Route path="/Ducks" element={<Ducks />} />
          <Route path="/Flames" element={<Flames />} />
          <Route path="/Oilers" element={<Oilers />} />
          <Route path="/Kings" element={<Kings />} />
          <Route path="/Sharks" element={<Sharks />} />
          <Route path="/Kraken" element={<Kraken />} />
          <Route path="/Canucks" element={<Canucks />} />
          <Route path="/GoldenKnights" element={<GoldenKnights />} />
          <Route path="/Bruins" element={<Bruins />} />
          <Route path="/Sabres" element={<Sabres />} />
          <Route path="/RedWings" element={<RedWings />} />
          <Route path="/Panthers" element={<Panthers />} />
          <Route path="/Canadiens" element={<Canadiens />} />
          <Route path="/Senators" element={<Senators />} />
          <Route path="/Lightning" element={<Lightning />} />
          <Route path="/MapleLeafs" element={<MapleLeafs />} />
          <Route path="/Coyotes" element={<Coyotes />} />
          <Route path="/BlackHawks" element={<BlackHawks />} />
          <Route path="/Avalanche" element={<Avalanche />} />
          <Route path="/Stars" element={<Stars />} />
          <Route path="/Wild" element={<Wild />} />
          <Route path="/Predators" element={<Predators />} />
          <Route path="/Blues" element={<Blues />} />
          <Route path="/Jets" element={<Jets />} />
        </Routes>
    </Router>
  );
}

export default App;
