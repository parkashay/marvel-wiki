import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <div className=" relative h-screen md:h-[400px] px-3 gap-2 bg-primary/80 flex flex-col items-center justify-center text-center">
      <h1 className="md:text-4xl">EXPLORE THE MARVEL UNIVERSE</h1>
      <p>
        {" "}
        Know more about your favourite characters and discover some new ones
        with Marvel-Wiki.{" "}
      </p>
      <div className="md:hidden absolute bottom-6">
        <ArrowDown />
      </div>
    </div>
  );
}

export default HeroSection;
