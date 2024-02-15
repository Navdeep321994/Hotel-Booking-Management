import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer1 from "../components/footer/Footer";
import Homeheader from "../components/navbar/Homeheader";
import TransparentNavbar from "../components/navbar/Navbar";
import Navbar from "../components/navbar/Navbar";





const Cancellationpolicy = () => {
    const backgroundImg = '/assets/img//bg/inrbnr.webp'; 
    const pageTitle = 'Cancellation Policy '; 
    const pageSubheading = ' Discover what personal information we collect and how we use it. '; 

  return (
    <div>
    <TransparentNavbar />
{/* <Homeheader /> */}
  <Breadcrumb backgroundImg={backgroundImg}
       title={pageTitle} 
       subheading={pageSubheading}
        />
        <section className="privacypolicy">
            <div className="container">
                <div className="row">
                <h2>Cancellation Policy</h2>
                    <div className="out-box-content">
                          <p>Please note that cancellations are only allowed before check-in.
                        Our cancellation policy is as follows:
                        </p>
                    <ul>
                        <li>Guests are eligible for a 100% refund if they cancel their booking within 24 hours of booking as long as the stay is at least 60 days away.</li>
                        <li>Guests can receive a 50% refund if they cancel their booking at least 1 month or 4 weeks before the check-in date. </li>
                        <li>No refund will be given once the booking is confirmed. </li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
<Footer1 />
 </div>

  );
};

export default Cancellationpolicy;
