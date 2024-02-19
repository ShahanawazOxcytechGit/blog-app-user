"use client";
import Hero from "@/components/home/Hero";
import TraficSources from "@/components/home/TraficSources";
import transactionImage from "../../../public/transaction.png";
import ExpectedFeatures from "@/components/home/ExpectedFeatures";
import Leads from "@/components/home/Leads";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Hero1 from "@/components/home/Hero";
import WhatWeDo1 from "@/components/home/WhatWeDo";
import Capabilities1 from "@/components/home/Capabilities";
import Showcase1 from "@/components/home/Showcase";
import WebAndMobile1 from "@/components/home/WebAndMobile";
import Clients1 from "@/components/common/Clients";
import Leads1 from "@/components/common/Leads";
import Testimonial1 from "@/components/home/Testimonial";
import MapAndAddress1 from "@/components/common/MapAndAddress";
import Careers1 from "@/components/home/Careers";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

import Awards1 from "@/components/about/Awards";
import Capabilities21 from "@/components/about/Capabilities2";
import Collaborate1 from "@/components/about/Collaborate";
import PlayVideo1 from "@/components/about/PlayVideo";
import Services1 from "@/components/about/Services";
import Breadcrumbs1 from "@/components/common/Breadcrumbs";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Capabilities from "@/components/home/Capabilities";
import Testimonials from "@/components/about/Testimonials";
import Clients from "@/components/common/Clients";
import Awards from "@/components/about/Awards";
import Collaborate from "@/components/about/Collaborate";

const leadsAbout1 = [
  {
    count: 28,
    icon: "bi-box-fill",
    title: "designers and developers",
    description: "ur clients describe us as a product team which creates amazing UI/UX, by crafting top-notch UX.",
  },
  {
    count: 345,
    icon: "bi-pentagon-half",
    title: "awards for digital innovation",
    description: "We’ve structured our workflow processes were from the funny the century rather.",
  },
];

const leadshome2 = [
  {
    count: 28,
    icon: "bi-box-fill",
    title: "designers and developers",
    description:
      "Using year-over-year approaches and the latest technologies, we will ensure that your new website will be visible, accessible, and treads lightly.",
  },
  {
    count: 35,
    icon: "bi-pentagon-half",
    title: "awards for digital innovation",
    description: "We’ve structured our workflow processes were from the funny the century rather, initial all the made, have spare to negatives.",
  },
];

export default function page() {
  const transactionTextContent = {
    mainHeading: "Insights & spam detection.",
    boldParaText: "Open stage API",
    remainingParaText:
      "Open stage API with a core feature of data occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings.",
  };

  return (
    <div style={{ overflowY: "scroll", scrollbarColor: "white white", scrollbarWidth: "thin", height: "100vh" }}>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <div className="bg-red-100">
          <TraficSources textContent={transactionTextContent} image={transactionImage} />
          <ExpectedFeatures />
          <Leads />
        </div>
        <div className="bg-indigo-900">
          <Pricing />
        </div>
        <div className="bg-indigo-950">
          <FAQ />
        </div>
      </main>
      <main>
        <Hero1 />
        <div className="bg-[#111013]">
          <WhatWeDo1 />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <Capabilities1 />
          <Showcase1 />
        </div>

        <WebAndMobile1 />
        <Leads data={leadshome2} />
        <Clients1 />
        <Testimonial1 />
        <MapAndAddress1 />
        <Careers1 />
      </main>
      <main>
        <Breadcrumbs />
        <Capabilities />
        <Leads data={leadsAbout1} />

        <div className="bg-[#1a191b]">
          <Testimonials />
        </div>
        <div className="bg-[#111013]">
          <Clients />
        </div>
        <Awards />
        <Collaborate />
      </main>
      <main>
        <Hero1 />
        <Breadcrumbs1 />
        <Services1 />
        <Capabilities1 />
        <Awards1 />
        <Testimonial1 />
        <Capabilities21 />
        <PlayVideo1 />
        <Collaborate1 />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
