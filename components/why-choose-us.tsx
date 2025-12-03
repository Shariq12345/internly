import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Briefcase, TrendingUp } from "lucide-react";

const reasons = [
    {
        title: "Expert Mentorship",
        icon: Users,
        description:
            "Get guidance from industry professionals who have worked at top tech companies. Learn best practices and industry standards.",
    },
    {
        title: "Flexible Learning",
        icon: Calendar,
        description:
            "Learn at your own pace with our flexible schedule. Balance your internship with your studies or other commitments.",
    },
    {
        title: "Real-world Projects",
        icon: Briefcase,
        description:
            "Work on real-world projects that solve actual problems. Build a portfolio that demonstrates your skills to potential employers.",
    },
    {
        title: "Career Support",
        icon: TrendingUp,
        description:
            "Receive personalized career support, including resume building, interview preparation, and job search strategies.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container relative mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Badge
                        variant="outline"
                        className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary rounded-full"
                    >
                        Why Choose Us
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                        Elevate Your Career Journey
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We provide the tools, mentorship, and opportunities you need to
                        succeed in the tech industry.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <Card
                                key={index}
                                className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border/40 bg-white/40 dark:bg-card/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 p-6"
                            >
                                <div className=" p-3 w-fit rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 group-hover:bg-primary/20">
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3
                                    className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary"
                                >
                                    {reason.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {reason.description}
                                </p>

                                {/* Subtle glowing gradient line */}
                                <div
                                    className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
