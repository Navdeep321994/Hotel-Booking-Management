import Footer1 from "../../components/footer/Footer";
import Aboutbanner from "../../components/Homebanner/Aboutbanner";
import Aboutsections from "../../components/Homestay-components/Aboutsections";
import Testimonials from "../../components/Homestay-components/Testimonials";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";
import Navbar from "../../components/navbar/Navbar";



const About = () => {
  return (
    <div>
    <TransparentNavbar />
    {/* <Homeheader /> */}
  {/* <Navbar /> */}
<Aboutbanner />
<Aboutsections />
<Footer1 />
 </div>

  );
};

export default About;
