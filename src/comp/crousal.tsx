import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Crousal() {
  return (
    <div className="w-10/12 m-auto">
      <Carousel className="w-full">
        <CarouselContent className="">
          <CarouselItem>
            <div className="justify-center flex">
              <img src="https://dummyimage.com/800x400/000/fff" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="justify-center flex">
              <img src="https://dummyimage.com/800x400/000/fff" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="justify-center flex">
              <img src="https://dummyimage.com/800x400/000/fff" alt="" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
