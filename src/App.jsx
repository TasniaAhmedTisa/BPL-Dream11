
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import News from "./Components/News";
import Players from "./Components/Players/Players";

const App = () => {

  <ToastContainer position="top-right" autoClose={3000} />
  const [coins, setCoins] = useState(0);

    const addCoins = (amount) => {
        setCoins(prevCoins => prevCoins + amount); 
    };
  return (
    <div className="m-10">
       <ToastContainer />
      <Header coins={coins} />
      <Banner addCoins={addCoins} />
      <Players coins={coins} setCoins={setCoins} />
      <div className="relative z-10"> 
        <News />
      </div>
      <div className="relative z-0 -mt-20"> 
        <Footer />
      </div>
      </div>
      
  
  );
};

export default App;

