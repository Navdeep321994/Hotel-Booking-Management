import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact_us/Contact";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ResetPassword from "./pages/reset-password/ResetPassword";
import About from "./pages/About/About";
import Stays from "./pages/Stays/Stays";
import Offer from "./pages/offerpage/Offers";
import Hotelsearch  from "./pages/Hotelsearch/Hotelsearch";
import Images  from "./pages/images/images";
import MyBooking from "./components/MyBooking/my-booking";
import MyAccount from "./components/myaccounts/my-account";
import NotFoundPage from "./pages/404Page/Notfound";
import Rooms from "./pages/Rooms/Rooms";
import Privacypolicy from "./pages/Privacy-policy";
import Termsconditions from "./pages/Terms-conditions";
import Success from "./pages/success/success";
import Cancellationpolicy from "./pages/cancellation-policy";


function App() {
  return (
    <BrowserRouter>
      <Routes>   
      
      <Route path="/success" element={<Success/>}/>
      <Route path='/Cancellation-policy' element={<Cancellationpolicy/>} />     
      <Route path='/Terms-conditions' element={<Termsconditions/>} />     
      <Route path='/Privacy-policy' element={<Privacypolicy/>} />   
      <Route path='/Rooms' element={<Rooms/>} />
      <Route path='*' element={<NotFoundPage/>} />
      <Route path="/my-account" element={<MyAccount/>}/>
      <Route path="/my-booking" element={<MyBooking/> }/>
       <Route path="/Hotelsearch" element={<Hotelsearch/>}/>
        <Route path="/Offer" element={<Offer/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Stays" element={<Stays/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>

        {/* <Route path="/reset-password" element={<ForgotPassword />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password/:id/" element={<ResetPassword />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
