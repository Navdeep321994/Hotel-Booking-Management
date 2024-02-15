import Footer1 from "../../components/footer/Footer";
import Aboutbanner from "../../components/Homebanner/Aboutbanner";
import Hotelsearchbnr from "../../components/Homebanner/Hotelsearchbnr";
import Aboutsections from "../../components/Homestay-components/Aboutsections";
import Hotelsearchsections from "../../components/Homestay-components/Hotelsearchsections";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";
import Navbar from "../../components/navbar/Navbar";



const Hotelsearch = () => {
  return (
    <div>
    <TransparentNavbar />
    {/* <Homeheader /> */}
  {/* <Navbar /> */}
<Hotelsearchbnr />
<Hotelsearchsections />
<Footer1 />
 </div>

  );
};

export default Hotelsearch;
