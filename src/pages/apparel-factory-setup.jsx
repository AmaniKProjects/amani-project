import Header from "../layouts/header";
import Footer from "../layouts/footer";

function ApparelFactorySetup(){
    return(
        <>
            <div className=" w-screen h-auto flex flex-col gap-y-5 justify-between content-center bg-gray-900" style={{fontFamily:'Rockwell'}}>
                <Header/>
                <div className=" pl-10 pr-10 md:pl-48 md:pr-48" style={{color:'#ffa200'}}>
                    <span className=" font-bold text-3xl">Apparel Factory Setup Consulting and Implementation Services</span>
                    <br/>
                    <br/>
                    <span>Our range of services include:</span>
                    <br/>
                    <span>For Enterprises:</span>
                    <br/>
                    <ul className=" text-lg list-outside" >
                        <li>Business Plan Creation</li>
                        <li>Plant Setup Planning</li>
                        <li>Work Methods Engineering</li>
                        <li>Processes and Systems Definition</li>
                        <li>Supervisor and Operator Recruitment and Training</li>
                        <li>Performance Improvement Programs</li>
                        <li>Vendor Analysis and Development</li>
                        <li>Factory Audit and Certification</li>
                        <li>e learning solutions</li>
                        <li>Knowledge Management Solutions</li>
                        <li>Market Linkages</li>
                    </ul>
                    <br/>
                    <span>For Government / Non Profit Organizations:</span>
                    <br/>
                    <ul className=" text-lg list-outside" >
                        <li>Setting up Networks of Apparel Micro Enterprises (AME s) providing Self and Wage Employment in Rural Areas</li>
                        <li>Common Facility Centres ( CFC s)</li>
                        <li>Market Linkages</li>
                    </ul>
                    <br/>
                    <span>For Academia:</span>
                    <br/>
                    <ul className=" text-lg list-outside" >
                        <li>Employability Training Programmes</li>
                        <li>Internship Outsourcing</li>
                        <li>Job Placement Outsourcing</li>
                        <li>Training of Trainers</li>
                    </ul>
                    <br/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default ApparelFactorySetup;