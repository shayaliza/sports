import Cards from "@/comp/cards";
import CategoryRow from "@/comp/categorys";
import Crousal from "@/comp/crousal";
import { MarqueeDemo } from "@/comp/marquee";
import Navbar from "@/comp/navbar";

function SportLayout() {
  return (
    <div>
      <Navbar />
      <Crousal />
      <MarqueeDemo />
      <Cards />
      <CategoryRow />
    </div>
  );
}
export default SportLayout;
