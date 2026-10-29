import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import ScroolTop from "./components/ScrollTop/ScroolTop";
import Faq from "./components/FAQ/FAQ";
import Cta from "./components/cta/cta";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30 min-h-screen">
      <Navbar />

      <Hero />

      <Features />

      <Testimonials />

      <Pricing />

      <Faq />

      <Cta />

      <Footer />

      <ScroolTop />
    </div>
  );
}

export default App;
