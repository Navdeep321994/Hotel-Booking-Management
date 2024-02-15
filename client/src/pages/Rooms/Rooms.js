import Footer1 from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Offerbnner from "../../components/Homebanner/Offerbnner";
import Offerpagesection from "../../components/Homestay-components/Offerpagesection";
import Faqs from "../../components/Homestay-components/Faqs";
import Aboutcenter from "../../components/Homestay-components/Aboutcenter";
import Roomsbnner from "../../components/Homebanner/Roomsbnner";
import Roomspgsections from "../../components/Homestay-components/Roomspgsections";
import Testimonials from "../../components/Homestay-components/Testimonials";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";



const Rooms = () => {
  return (
    <div>
    <TransparentNavbar />
    {/* <Homeheader /> */}
  {/* <Navbar /> */}
  <Roomsbnner />
  <Roomspgsections />
{/* <Aboutcenter /> */}
<Testimonials />
<Footer1 />
 </div>

  );
};

export default Rooms;
