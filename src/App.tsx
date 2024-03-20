import "./App.css";
import HeroSection from "./components/HeroSection";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const homepageSectionRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  const scrollToHeroSection = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBlogsSection = () => {
    if (homepageSectionRef.current) {
      const offset = homepageSectionRef.current.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    if (bottomSectionRef.current) {
      bottomSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        scrollToHeroSection={scrollToHeroSection}
        scrollToBlogsSection={scrollToBlogsSection}
        scrollToBottomSection={scrollToBottom}
      />
      <HeroSection scrollToBlogsSection={scrollToBlogsSection} />
      <div ref={homepageSectionRef} className="bg-gray-50">
        <Homepage />
      </div>
      <div ref={bottomSectionRef}></div>
      <Footer />
    </>
  );
}

export default App;
