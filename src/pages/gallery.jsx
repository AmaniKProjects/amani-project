import Carousel from "../components/carousel";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function Gallery(){
    return(
        <>
            <div className=" h-screen flex flex-col gap-y-5 justify-between content-center bg-gray-900" style={{fontFamily:'Rockwell'}}>
                <Header/>
                <div className=" pl-5 pr-5 md:pl-48 md:pr-48" style={{color:'#ffa200'}}>
                    <Carousel/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Gallery;