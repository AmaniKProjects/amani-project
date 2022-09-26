import { Routes,Route, BrowserRouter } from "react-router-dom";
import ApparelFactorySetup from "./apparel-factory-setup";
import ApparelSectorTraining from "./apparel-sector-training";
import Contact from "./contact";
import CustomizedFashionGarments from "./customized-fashion-garments";
import FashionCADConsulting from "./fashion-cad-consulting";
import Gallery from "./gallery";
import Home from "./Home";
import Services from "./services";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/services/fashion-cad-consulting" element={<FashionCADConsulting/>}/>
            <Route path="/services/apparel-sector-training" element={<ApparelSectorTraining/>}/>
            <Route path="/services/apparel-factory-setup" element={<ApparelFactorySetup/>}/>
            <Route path="/services/customized-fashion-garments" element={<CustomizedFashionGarments/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
