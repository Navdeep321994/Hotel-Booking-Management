import Homesection2 from "../../components/Homesection2/Homesection2";
import Homesection1 from "../../components/Homestay-components/Homesection1";


import Footer1 from "../../components/footer/Footer";
import Header from "../../components/Homebanner/Homebanner";
import Navbar from "../../components/navbar/Navbar";
import Homebanner from "../../components/Homebanner/Homebanner";

import Videobnr from "../../components/Homestay-components/Videobnr/Videobnr";
import Newbnner from "../../components/Homebanner/Newbnner";
import Homeheader from "../../components/navbar/Homeheader";
import Bannerslider from "../../components/Homebanner/Bannerslider";
import TransparentNavbar from "../../components/navbar/Navbar";



const Home = () => {
  return (
    <div>
    <TransparentNavbar />
 {/* <Homeheader /> */}
 <Bannerslider />
  {/* <Videobnr /> */}
  
  {/* <section className="myhome-bnr">
  <Newbnner />
  </section> */}

{/* <Homebanner /> */}

<Homesection1 />
<Homesection2 />


<Footer1 />
 </div>

  );
};

export default Home;
