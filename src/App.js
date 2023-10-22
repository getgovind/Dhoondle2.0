import './App.css';
import Header from './Views/Components/Header/header';
import HomePage from './Views/Components/Homepage/homepage';
import Customer from './Views/Components/customer/customer';
import Otherfacility from './Views/Components/Otherfacilities/other';
import Provider from './Views/Components/RoomProvider/provider';
import Footer from "./Views/Components/Footer/footer";
import DownloadApp from './Views/Components/GetApp/getApp';
import Property from './Views/Components/Find Property/Property';
import RoomMate from './Views/Components/FindRoommate/rommate';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from './Views/Components/AboutUs/aboutus';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={[<HomePage />,<Customer />,<Provider />,<RoomMate />,<Property />,<Otherfacility />,<DownloadApp />]} />
      <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
