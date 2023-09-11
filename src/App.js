import logo from './logo.svg';
import './App.css';
import Header from './Views/Components/Header/header';
import HomePage from './Views/Components/Homepage/homepage';
import Customer from './Views/Components/customer/customer';
import Otherfacility from './Views/Components/Otherfacilities/other';
import Provider from './Views/Components/RoomProvider/provider';
import Footer from "./Views/Components/Footer/footer";
import DownloadApp from './Views/Components/GetApp/getApp';
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Customer />
      <Otherfacility />
      <Provider />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
