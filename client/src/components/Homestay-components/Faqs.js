import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
  return (
    <div>
    <section className='allfaqs'>
        <div className='container'>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12'>
                    <div className='faq-outer'>
                        <h2>FAQ,s</h2>
                        <p>Here are the answers to the most frequently asked questions</p>
                    </div>
                </div>
                <div className='myfaq'>
                <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> How can I find a luxury holiday home according to my preferences? </Accordion.Header>
        <Accordion.Body>
        You can explore our lavish villas and their amenities on our website, or you can simply reach out to us by calling the numbers provided, and we’ll guide you through every detail to find your perfect match. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do you provide complimentary breakfast for the guests?</Accordion.Header>
        <Accordion.Body>
        Yes. Our packages include complimentary breakfast for all our guests. So, you don’t have to pay any extra charges for breakfast when you book your stay with us.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What type of services are included in your properties?</Accordion.Header>
        <Accordion.Body>
        Daily housekeeping and laundry services are included in our properties. Also, you'll have a caretaker who will clean the properties and help you buy groceries. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Are your villas well maintained and have proper hygiene?</Accordion.Header>
        <Accordion.Body>
        Yes. Our properties go through regular maintenance and quality control to provide an exceptional and comfortable stay experience to our guests. Also, we maintain appropriate hygiene levels across all our properties. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Is there a Wi-Fi facility in your luxury villas and homestays? </Accordion.Header>
        <Accordion.Body>
        Yes. We have high-speed Wi-Fi in all our properties. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header> Are your properties pet-friendly?</Accordion.Header>
        <Accordion.Body>
        Few of our properties welcome your furry companions with open arms. You can browse our website or contact us to learn about our pet-friendly properties.  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header> Do you accommodate extra guests?</Accordion.Header>
        <Accordion.Body>
        We can accommodate additional guests at extra cost. You can get in touch to know the charges. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
            </div>
        </div>
    </section>

 </div>

  );
};

export default Faqs;
