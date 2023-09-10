import logo from './logo.svg';
import './App.css';
import Header from './Views/Components/Header/header';
import HomePage from './Views/Components/Homepage/homepage';
import Customer from './Views/Components/customer/customer';
import Otherfacility from './Views/Components/Otherfacilities/other';
import Provider from './Views/Components/RoomProvider/provider';
function App() {
  return (
    <div className="App">
   <Header />
   <HomePage />
   <Customer />
   <Otherfacility />
   <Provider />
    </div>
  );
}

export default App;
