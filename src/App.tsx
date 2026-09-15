import { AboutCatalog } from "./components/AboutCatalog";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSticky } from "./components/HeroSticky";

export function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSticky />
        <AboutCatalog />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
