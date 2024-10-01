import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductsSection from "./components/ProductSection/ProductSection";
import FooterSection from "./components/FooterSection/FooterSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <FooterSection />
    </div>
  );
}
