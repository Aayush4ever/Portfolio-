import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "GitHub", href: "#github" }, // ✅ Added GitHub section
  { name: "Contact", href: "#contact" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1NF_EIcJBM6GtoxLp8oGme48BEI2VAJJi/view?usp=sharing",
    isExternal: true,
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleResumeClick = (e, href, isExternal) => {
    if (isExternal) {
      e.preventDefault();
      window.open(href, "_blank", "noopener,noreferrer");

      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/uc?export=download&id=1NF_EIcJBM6GtoxLp8oGme48BEI2VAJJi";
      link.download = "Aayush-Kumar-Resume.pdf";
      link.click();
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Aayush</span> Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              onClick={
                item.isExternal
                  ? (e) => handleResumeClick(e, item.href, item.isExternal)
                  : undefined
              }
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile nav toggle button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center text-xl transition-all duration-300 md:hidden",
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
        >
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => {
                  if (item.isExternal)
                    handleResumeClick(event, item.href, item.isExternal);
                  setIsMenuOpen(false);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-2xl"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
