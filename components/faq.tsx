"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can apply for these internships?",
    answer:
      "Our internships are open to students, recent graduates, and career switchers from all backgrounds. Whether you're a beginner or have some experience, we have programs tailored to your skill level",
  },
  {
    question: "Are the internships paid?",
    answer:
      "No, the internships are completely free of cost. You only pay for the physical certficate if you want to get one",
  },
  {
    question: "Do I get a certificate upon completion?",
    answer:
      "Yes! Upon successful completion of your internship, you will receive a verified certificate of completion and a letter of recommendation to boost your portfolio",
  },
  {
    question: "What is the duration of the programs?",
    answer:
      "Most of our internships range from 1 to 6 months. We offer flexible schedules, including part-time and full-time options, to accommodate your studies or other commitments",
  },
  {
    question: "Is it really 100% remote?",
    answer:
      "Absolutely. All our internships are fully remote, allowing you to work from anywhere in the world. We provide all the necessary digital tools and platforms for seamless collaboration",
  },
];

export function Faq() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
       {/* Subtle Grid Background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions? We're here to help. Check out the most common queries below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
