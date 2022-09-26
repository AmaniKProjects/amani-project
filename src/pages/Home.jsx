import Header from "../layouts/header"
import Container from "../layouts/container"
import Footer from "../layouts/footer"

function Home(){
    return(
        <>
            <div className=" h-screen md:h-auto flex flex-col gap-y-5 justify-between content-center bg-gray-900" style={{padding:'0px 0 0px 0',fontFamily:'Rockwell'}}>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        </>
    )
}
export default Home;