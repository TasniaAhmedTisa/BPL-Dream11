import AvailablePlayers from "./Components/AvailablePlayers";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import News from "./Components/News";

const App = () => {
  return (
    <div className="m-10">
      <Header></Header>
      <Banner></Banner>
      <AvailablePlayers></AvailablePlayers>
      <News></News>
      <Footer></Footer>
    </div>
  );
};

export default App;