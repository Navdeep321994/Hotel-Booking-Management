import Footer1 from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Offerbnner from "../../components/Homebanner/Offerbnner";
import Offerpagesection from "../../components/Homestay-components/Offerpagesection";
import Faqs from "../../components/Homestay-components/Faqs";
import Aboutcenter from "../../components/Homestay-components/Aboutcenter";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";



const Home = () => {
  return (
    <div>
    <TransparentNavbar />
    {/* <Homeheader /> */}
  {/* <Navbar /> */}
<Offerbnner />
<Offerpagesection />
<Faqs />
<Footer1 />
 </div>

  );
};

export default Home;
