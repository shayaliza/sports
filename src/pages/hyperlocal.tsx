import { BentoDemo } from "@/comp/hyperlocal/bentoGrid";
import Buisness from "@/comp/hyperlocal/buisness";
import First from "@/comp/hyperlocal/first";
import Header from "@/comp/hyperlocal/header";

function Hyperlocal() {
  return (
    <div className="pb-32">
      <Header />
      <First />
      <section className="bg-white text-gray-900 mt-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-gray-800">
              How does the program work ?
            </h3>
          </div>
        </div>
      </section>
      <BentoDemo />
      <section className="bg-white text-gray-900 mt-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-gray-800">
              Things we would take care of for your business
            </h3>
          </div>
        </div>
      </section>
      <Buisness />
      <section className="bg-white text-gray-900 mt-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-gray-800">
              Your Benefits
            </h3>
          </div>
        </div>
      </section>
      <Buisness />
      <section className="bg-white text-gray-900 mt-6 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-gray-800">
              Our Money Earning Model
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hyperlocal;
