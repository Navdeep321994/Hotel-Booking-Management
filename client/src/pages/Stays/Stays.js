import Footer1 from "../../components/footer/Footer";
import Staysbnner from "../../components/Homebanner/Staysbnner";
import Aboutsections from "../../components/Homestay-components/Aboutsections";
import Sliderproperties from "../../components/Homestay-components/Sliderproperties";
import Stayssections from "../../components/Homestay-components/Stayssections";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";
import Navbar from "../../components/navbar/Navbar";



const Stays = () => {
  return (
    <div>
    <TransparentNavbar />
    {/* <Homeheader /> */}
  {/* <Navbar /> */}
<Staysbnner />
<Stayssections />
<Sliderproperties />
<Footer1 />
 </div>

  );
};

export default Stays;
