import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AssetBanner from "@/components/AssetBanner";
import CoreVisual from "@/components/CoreVisual";
import ServicesSection from "@/components/ServicesSection";
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
      <CoreVisual />
      <ServicesSection />
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
