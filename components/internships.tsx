import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Brain,
  Palette,
  Shield,
  Server,
  ArrowRight,
  BarChart3,
  Globe,
  Laptop,
  Clock,
} from "lucide-react";
import Link from "next/link";

const internships = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Code2,
    description:
      "Build responsive, interactive user interfaces using React, Next.js, and modern CSS frameworks.",
    skills: ["React", "TypeScript", "Tailwind"],
    category: "Engineering",
    duration: "3 Months",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    description:
      "Design scalable APIs and server-side applications with Node.js, Express, and database management.",
    skills: ["Node.js", "REST API", "SQL"],
    category: "Engineering",
    duration: "3 Months",
  },
  {
    id: 3,
    title: "Python Development",
    icon: Database,
    description:
      "Master Python for automation, scripting, and building robust applications with Django or Flask.",
    skills: ["Python", "Django", "Flask"],
    category: "Engineering",
    duration: "2 Months",
  },
  {
    id: 4,
    title: "AI/ML Engineering",
    icon: Brain,
    description:
      "Develop intelligent systems using machine learning algorithms, neural networks, and AI frameworks.",
    skills: ["TensorFlow", "PyTorch", "ML Ops"],
    category: "Data Science",
    duration: "4 Months",
  },
  {
    id: 5,
    title: "Data Science",
    icon: BarChart3,
    description:
      "Analyze complex datasets, build predictive models, and transform data into actionable insights.",
    skills: ["Pandas", "NumPy", "Visualization"],
    category: "Data Science",
    duration: "3 Months",
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Create stunning user experiences with Figma, prototyping, and user-centered design principles.",
    skills: ["Figma", "Prototyping", "User Research"],
    category: "Design",
    duration: "2 Months",
  },
  {
    id: 7,
    title: "Cybersecurity",
    icon: Shield,
    description:
      "Learn security best practices, ethical hacking, and protect systems from vulnerabilities.",
    skills: ["Security", "Penetration Testing", "OWASP"],
    category: "Security",
    duration: "3 Months",
  },
];

export function Internships() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Future-Ready Virtual Internships
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gain real-world experience from anywhere. Join our global community of learners and build a portfolio that stands out
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {internships.map((internship) => {
            const Icon = internship.icon;
            return (
              <Card
                key={internship.id}
                className="group relative flex flex-col h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 py-3"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/50 text-xs font-normal">
                      {internship.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="mb-6 grow">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {internship.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {internship.description}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <div className="flex items-center gap-1.5">
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{internship.duration}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground/80"
                      >
                        {skill}s
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <Link href={`https://docs.google.com/forms/d/e/1FAIpQLSeBwYZXLw9huUEUDDH1hn0am9Idq4reUNSMMiXNnKgZHnefYw/viewform?usp=pp_url&entry.1155229774=${encodeURIComponent(internship.title)}`} target="_blank">
                    <Button
                      className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      variant="outline"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
