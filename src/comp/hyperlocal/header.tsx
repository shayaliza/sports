import WordPullUp from "@/components/magicui/word-pull-up";
import { Boxes } from "@/components/ui/background-boxes";

function Header() {
  return (
    <div>
      <div className="w-full flex flex-row h-screen">
        <div className="w-1/2 h-screen">
          <div className="h-screen relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
            <Boxes />

            <h1 className="text-3xl md:text-5xl font-bold mb-2">HyperLocal</h1>

            <div className="text-lg md:text-2xl font-light text-black">
              <WordPullUp words="A Plug In and Plug Out Franchise Model" />
            </div>
          </div>
        </div>
        <div className="w-1/2 h-screen ">
          <div className="h-screen justify-center items-center flex">
            <img src="https://dummyimage.com/800x400/000/fff" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
