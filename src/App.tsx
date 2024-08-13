import Navbar from "@/comp/navbar";
import Crousal from "./comp/crousal";
import { MarqueeDemo } from "./comp/marquee";
import Cards from "./comp/cards";
import CategoryRow from "./comp/categorys";
function App() {
  return (
    <>
      <Navbar />
      <Crousal />
      <MarqueeDemo />
      <Cards />
      <CategoryRow />
    </>
  );
}

export default App;
