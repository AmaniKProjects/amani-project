import Navbar from "../components/navbar";
import Logo from "../assets/logo.jpeg"
import { Link } from "react-router-dom";
import MenuIcon from "../assets/menuIcon.svg"
import { useState } from "react";

function Header(prop){
    const [menuDisplay,setMenuDisplay] = useState('none')
    const [toggle,setToggle] = useState(true)
    return(
        <>
            <div className=" flex flex-col">
                <div className="flex justify-between content-center p-3 bg-black">
                    <Link to="/"><img alt="Logo" className="h-14 w-14 rounded-full" src={Logo}></img></Link>
                    <Navbar width="400px"/>
                    <img alt="Menu-icon" className=" md:hidden w-8 h-8 mt-3" src={MenuIcon} onClick={
                        ()=>{
                            setToggle(!toggle)
                            if(toggle)
                                setMenuDisplay('flex')
                            else
                                setMenuDisplay('none')
                        }} ></img>
                </div>
                <Navbar width="150px" display={menuDisplay}/>
            </div>
        </>
    )
}
export default Header;