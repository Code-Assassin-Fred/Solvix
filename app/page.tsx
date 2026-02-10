import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AssetBanner from "@/components/AssetBanner";
import About from "@/components/About";
import IndustryApps from "@/components/IndustryApps";
import ServicesDetail from "@/components/ServicesDetail";
import DashboardShowcase from "@/components/DashboardShowcase";
import Resources from "@/components/Resources";
import FutureRoadmap from "@/components/FutureRoadmap";
import CTAContact from "@/components/CTAContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <div className="h-20 bg-white w-full" />
      <AssetBanner />
      <div className="h-20 bg-white w-full" />
      <About />
      <IndustryApps />
      <ServicesDetail />
      <DashboardShowcase />
      <Resources />
      <FutureRoadmap />
      <CTAContact />
      <Footer />
    </main>
  );
}
