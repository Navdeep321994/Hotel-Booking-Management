import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer1 from "../components/footer/Footer";
import Homeheader from "../components/navbar/Homeheader";
import TransparentNavbar from "../components/navbar/Navbar";
import Navbar from "../components/navbar/Navbar";





const Privacypolicy = () => {
    const backgroundImg = '/assets/img//bg/inrbnr.webp'; 
    const pageTitle = 'Privacy Policy'; 
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
                <h2>Privacy Policy</h2>
                    <div className="out-box-content">
                        <p>So Many Mornings values and is dedicated to safeguarding your privacy and the information you share with us. We follow strict privacy procedures to protect the confidentiality, security and integrity of the information stored on our systems. This Privacy Policy outlines what information we collect when you visit our website, how we use the information and what measures we take to protect your information.  </p>
                        <h3>Information We Collect </h3>
                        <p>We may collect personal information, including but not limited to your name, phone number, email and address. This information is necessary if you want to book anything through our website. Additionally, when you use our website, we may collect and process non-identifiable information about the location of your device. We collect and use your information to administer, support, improve and obtain feedback on our services and to detect and prevent faults and breaches. </p>
                        <h3>How we use your information </h3>
                        <p>We use your personal information for the following purposes.</p>
                        <ul>
                          <li>To process reservations made through the website.</li>
                          <li>To deliver better services.</li>
                          <li>To get in touch with you by phone and email when necessary.</li>
                          <li>To help you, and, if necessary, to share it with reputable third parties. </li>
                          <li>To get in touch with you regarding your reservation and/or to tell you of other services that are advertised on this website. </li>
                          <li>To enforce the Terms and Conditions of Use, resolve disputes, troubleshoot issues, and gauge consumer interest in the services we offer.</li>
                          <li>To notify you of offers and discounts on bookings. </li>
                          <li>To personalise your experiences.</li>
                          <li>To detect and protect us against errors, fraud, and other criminal activity.</li>
                          <li>To enhance our promotional and marketing initiatives, analyse website usage, and enhance and personalize the website's services and content. </li>
                        </ul>
                        <h3>With whom we share your personal information </h3>
                        <p>We may disclose information to trusted third parties only to the degree necessary for them to execute that specific service. These parties will only use your data for the purpose of carrying out the work as indicated and will be required to keep the information confidential We may also disclose your personal information to: </p>
                        <ul>
                          <li>Comply with court orders, laws, or legal processes, including responding to government or regulatory requests.</li>
                          <li>Enforce or apply our Terms & Conditions and other agreements or 
                          If we believe disclosure is necessary or appropriate to protect our or others’ rights, property, or safety.
                        </li>
                        </ul>
                        <p>We may also disclose your personal information to a buyer or other transferee in the event of a merger, divestiture, restructuring, reorganization, dissolution, sale, or other transfer of some or all of our assets. If any sale, merger, or transfer occurs, we will use reasonable efforts to direct the transferee to use your personal information in a manner that is consistent with our Privacy Policy.</p>
                        <h3>How we secure your data </h3>
                        <p>We promise to safeguard your personal information from threats and fraud. To safeguard the information you share with us, we have implemented several administrative, technological, physical, and other security measures. However, no transmission of data over the Internet is 100% secure. So, we cannot guarantee the security of information transmitted over the Internet. </p>
                        <h3>Cookies</h3>
                        <p>When you visit the Site, we may also collect certain information through the use of cookies. A “cookie” is a text file placed on a visitor’s computer or other Internet-connected device to uniquely identify the visitor’s browser or to store information or settings in the browser. We also may use third-party website analytics tools such as Google Analytics, that collect information about user traffic on the Site. You have the option to accept or reject cookies. If you reject cookies, you won’t be able to enjoy the full functionalities of our website. </p>
                        <h3>Links to third parties </h3>
                        <p>Our Website may contain links to other websites. However, we do not endorse or validate the content of the linked website. We are not responsible for the privacy practices, nor do we accept any liability in connection with the content of such websites. You’re advised to read the privacy policies of linked websites before agreeing. </p>
                        <h3>Your Choices</h3>
                        <p>We or our associates may also use your email address to notify you about new services or special promotional programs or send you offers or information if you have opted in. Individuals who have agreed to receive our emails, including newsletters, can choose to opt-out at any time by clicking on the "Unsubscribe" link at the bottom of each email.</p>
                        <h3>Changes to our Privacy Notice</h3>
                        <p>From time to time, we may update this Privacy Notice. We will post the policy changes on our website. You’re advised to check this page regularly, for any updates or changes.</p>
                        <h3>Contact us </h3>
                        <p>If you have any questions about this Privacy Policy, reach out to us via email at <a href="mailto:booking@somanymornings.com">booking@somanymornings.com</a></p>

                    </div>
                </div>
            </div>
        </section>
<Footer1 />
 </div>

  );
};

export default Privacypolicy;
