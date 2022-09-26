import BgImage from "../assets/AKF-image-1.jpg"
import Img1 from '../assets/akf-gal-1.jpeg'
import Img2 from '../assets/akf-gal-2.jpeg'
import Img3 from '../assets/akf-gal-3.jpeg'
import { Link } from "react-router-dom"


function Image(props){
    return(
        <>
            <div>
                <img className=" w-auto md:h-full h-30 rounded-lg " src={props.url} alt={props.alt}/>
            </div>
        </>
    )
}

function ImageContainer(){
    return(
        <>
            <div className=" hidden md:flex flex-col md:flex-row justify-around gap-y-2 md:gap-x-2 pl-10 pr-10 md:pl-48 md:pr-48 h-52">
                <Image url={Img1} alt="AKF Model"/>
                <Image url={Img2} alt="AKF Model"/>
                <Image url={Img3} alt="AKF Model"/>
            </div>
        </>
    )

}



function Container(){
    return(
        <>
            <div className=" flex flex-col gap-y-4 pl-10 pr-10 md:pl-48 md:pr-48 justify-between">
                <div className="flex flex-col-reverse md:flex-row justify-between content-center gap-y-3" style={{color:'#ffa200'}}>
                    <div id="hero-text" className=" flex flex-col justify-center gap-y-2">
                        <span className=" font-bold text-2xl text-center">Amani K Fashion Creations</span>
                        <span className=" text-center">Authorized Solutions Partner of ISHA Learning in Rwanda</span>
                    </div>
                    <img alt="Background-image" className=" self-center rounded-lg" src={BgImage}></img>
                </div>
                <hr className="hidden md:block w-full self-center border-yellow-200" />
                <ImageContainer/>
                <div className=" md:flex justify-end hidden " style={{color:'#ffa200'}}>
                    <Link className="align-center" to="/gallery">See More</Link>
                </div>
            </div>
        </>
    )
}
export default Container;