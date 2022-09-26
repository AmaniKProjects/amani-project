import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { Link } from "react-router-dom";

function Services(){
    return(
        <>
            <div className=" w-screen h-screen flex flex-col gap-y-5 justify-between content-center bg-gray-900" style={{fontFamily:'Rockwell'}}>
                <Header/>
                <div className=" pl-10 pr-10 md:pl-48 md:pr-48" style={{color:'#ffa200'}}>
                    <span className=" font-bold text-2xl">Our Services</span>
                    <ul className=" text-lg">
                        <li><Link to="/services/customized-fashion-garments">Customized Fashion Garments</Link></li>
                        <li><Link to="/services/fashion-cad-consulting">Fashion CAD Consulting and Implementation Services</Link></li>
                        <li><Link to="/services/apparel-factory-setup">Apparel Factory Setup Consulting and Implementation Services</Link></li>
                        <li><Link to="/services/apparel-sector-training">Apparel Sector Training Services</Link></li>
                    </ul>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Services;