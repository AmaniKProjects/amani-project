import Footer from "../layouts/footer";
import Header from "../layouts/header";


function Contact() {
  return (
    <>
      <div className=" w-screen h-screen flex flex-col gap-y-5 justify-between content-center bg-gray-900" style={{fontFamily:'Rockwell'}}>
        <Header/>
        <div className="pl-10 pr-10 md:pl-48 md:pr-48" style={{color:'#ffa200'}}>
          <span className=" font-bold text-2xl">Contact Us</span>
        </div>
        <Footer/>
      </div>
    </>
    
  );
}

export default Contact;
