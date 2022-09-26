import Header from "../layouts/header";
import Footer from "../layouts/footer";

function ApparelSectorTraining(){
    return(
        <>
            <div className=" w-screen md:h-screen flex flex-col gap-y-5 justify-between content-center bg-gray-900" style={{fontFamily:'Rockwell'}}>
                <Header/>
                <div className="pl-10 pr-10 md:pl-48 md:pr-48" style={{color:'#ffa200'}}>
                    <span className=" font-bold text-3xl">Apparel Sector Training Services</span>
                    <br/>
                    <br/>
                    <span>Our Training Services include:</span>
                    
                    <ul className=" text-lg list-outside" >
                        <li>Fashion products, by definition, have short life cycles. Fashion supply chain is hugely fragmented and traditional methods of fashion product development take a lot of time.</li>
                        <li>Fashion  CAD enables shortening of product development time cycles, collaborative working between team members spread across geographies, enhance creativity and productivity, and reduce fabric consumption</li>
                        <li>As the REACH Authorized Sutions Partner in Rwanda,  Amani K Fashion Creations Ltd.  offers consulting and implementation services on REACH CAD</li>
                        <li>REACH CAD enables digital apparel pattern design, grading and marker planning</li>
                    </ul>
                    <br/>
                    <span>For more details on REACH CAD, please click the link here</span>
                    <br/>
                    <span>To download REACH CAD brochures, please click here</span>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default ApparelSectorTraining;