import PreviousMap from "postcss/lib/previous-map";
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar(prop){
    return(
        <>
            <div style={{width:prop.width,fontFamily:'Rockwell',display:prop.display}} className=" hidden flex-col gap-y-1 content-center md:flex md:flex-row justify-evenly rounded-b-lg md:rounded-none text-pink-700 bg-black md:h-10 md:mt-2 border-gray-600 border-2 md:border-none">
                <Link className=" text-center p-1" to="/">About</Link>
                <Link className=" text-center p-1" to="/services" >Services</Link>
                <Link className=" text-center p-1" to="/gallery">Gallery</Link>
                <Link className=" text-center p-1" to="/contact">Contact</Link>
            </div>
            
        </>
    )
}
export default Navbar;