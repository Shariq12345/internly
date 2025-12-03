"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Internships } from "@/components/internships";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <Internships />
        <WhyChooseUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
