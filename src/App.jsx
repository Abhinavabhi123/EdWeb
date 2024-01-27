import Banner from "./Components/Banner/Banner";
import Body from "./Components/Body/Body";
import HeaderMain from "./Components/Header/HeaderMain";

function App() {
  return (
    <div className="w-[100%] h-screen relative">
      <div className="w-full h-[7rem] ">
      <HeaderMain/>
      </div>
        <Banner />
      <Body />
    </div>
  );
}

export default App;
