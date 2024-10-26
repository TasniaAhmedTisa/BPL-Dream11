
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
        setCoins(prevCoins => prevCoins + amount); // Add amount to current coins
    };
  return (
    <div className="m-10">
      <Header coins={coins} />
      <Banner addCoins={addCoins} />
      <Players coins={coins} setCoins={setCoins} />
      <News></News>
      <Footer></Footer>
      
    </div>
  );
};

export default App;

