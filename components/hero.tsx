import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Laptop, Code2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Elements (Decorative) */}
      <div className="absolute top-20 left-10 lg:left-20 animate-bounce duration-[3000ms] opacity-20 hidden md:block">
        <Code2 className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 lg:right-20 animate-bounce duration-[4000ms] opacity-20 hidden md:block">
        <Globe className="w-12 h-12 text-blue-500" />
      </div>
      <div className="absolute top-40 right-20 lg:right-32 animate-pulse duration-[5000ms] opacity-20 hidden md:block">
        <Laptop className="w-10 h-10 text-purple-500" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-8 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary rounded-full animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2 inline-block" />
            The Future of Work is Here
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both delay-100">
            Master Your Craft with <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_auto] animate-gradient">
              Virtual Internships
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-200">
            Join a global community of ambitious learners. Gain real-world experience, build a professional portfolio, and launch your tech career from anywhere in the world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16 animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both delay-300">
            <Button
              size="lg"
              className="h-12 px-8 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
            >
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-all hover:scale-105"
            >
              Explore Programs
            </Button>
          </div>

          {/* Stats or Social Proof (Optional - kept minimal) */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-12 duration-700 fill-mode-both delay-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>100% Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75" />
              <span>Global Access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150" />
              <span>Real Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
