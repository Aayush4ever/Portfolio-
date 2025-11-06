import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1NF_EIcJBM6GtoxLp8oGme48BEI2VAJJi";
    link.download = "Aayush-Kumar-Resume.pdf";
    link.click();
    window.open(
      "https://drive.google.com/file/d/1NF_EIcJBM6GtoxLp8oGme48BEI2VAJJi/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12"
    >
      {/* Left side: Image */}
      <div className="w-40 h-40 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-12 rounded-full overflow-hidden shadow-lg border-4 border-primary animate-fade-in-delay-1">
        <img
          src="./projects/profile.jpg"
          alt="Aayush Kumar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side: Text content */}
      <div className="text-center md:text-left space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Aayush
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            {" "}
            Kumar
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
          I create stellar web experiences with modern technologies. Specializing
          in front-end development, I build interfaces that are both beautiful
          and functional.
        </p>

        <div className="pt-4 flex justify-center md:justify-start gap-4 opacity-0 animate-fade-in-delay-4">
          {/* Download Resume Button */}
          <button
            onClick={handleDownload}
            className="cosmic-button px-6 py-3 text-lg font-medium"
          >
            Download CV
          </button>

          {/* Optional: Keep “View My Work” button */}
          {/* <a
            href="#projects"
            className="cosmic-button-outline px-6 py-3 text-lg font-medium"
          >
            View My Work
          </a> */}
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
