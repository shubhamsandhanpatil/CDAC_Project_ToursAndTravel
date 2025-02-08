import './App.css';
import Header from './components/Header';
import RegSupplier from './components/RegSupplier';
import NavBar from './components/NavBar';
import RegCustomer from './components/RegCustomer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminProfile from './components/AdminProfile';
import AllCustomers from './components/AllCustomers';
import AllGuides from './components/AllGuides';
import GuideLogin from './components/GuideLogin';
import CustomerLogin from './components/CustomerLogin';
import GuideProfile from './components/GuideProfile';
import AddEvent from './components/AddEvent';
import MyEvents from './components/MyEvents';
import AllEvents from './components/AllEvents';
import EditEvent from './components/EditEvent';
import CustomerProfile from './components/CustomerProfile';
import MyOrders from './components/MyOrders';
import Bookings from './components/Bookings';
import ViewCart from './components/ViewCart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllEvents />} />
          <Route path="/cats" element={<AllEvents />} />
          <Route path="/regsupplier" element={<RegSupplier />} />
          <Route path="/register" element={<RegCustomer />} />          
          <Route path="/alogin" element={<AdminLogin />} />          
          <Route path="/slogin" element={<GuideLogin />} />          
          <Route path="/clogin" element={<CustomerLogin />} />          
          <Route path="/aprofile" element={<AdminProfile />} />          
          <Route path="/sprofile" element={<GuideProfile />} />          
          <Route path="/cprofile" element={<CustomerProfile />} />          
          <Route path="/customers" element={<AllCustomers />} />          
          <Route path="/guides" element={<AllGuides />} />                  
          <Route path="/add-product" element={<AddEvent />} />          
          <Route path="/edit/:prodid" element={<EditEvent />} />          
          <Route path="/myproducts" element={<MyEvents />} />          
          <Route path="/myorders" element={<MyOrders />} />          
          <Route path="/bookings" element={<Bookings />} />          
          <Route path="/cart" element={<ViewCart />} /> 
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
