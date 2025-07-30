import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We align every transaction with your personal definition of freedom"
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Complete transparency and accountability in every engagement"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "We understand that transitions are deeply personal decisions"
    },
    {
      icon: CheckCircle,
      title: "Results Focused",
      description: "Success-based fees ensure we're aligned with your outcomes"
    }
  ];

  return (
    <section className="py-20 bg-background-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Legacy of Helping Founders Define Their{' '}
            <span className="text-gradient-primary">Freedom</span>
          </h2>
          <p className="text-xl text-foreground-soft leading-relaxed">
            For over three decades, Freedom Mergers & Acquisitions has been a trusted advisor to 
            founders across the United States, specializing in complex, high-stakes transitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                How do you define Freedom?
              </h3>
              <p className="text-lg text-foreground-soft leading-relaxed">
                Our work begins with a deep understanding that every founder is different. Freedom means 
                something unique to each of us. For some, it's about stepping away completely after a 
                lifetime of dedication. For others, it's about staying involved, but on their own terms.
              </p>
              <p className="text-lg text-foreground-soft leading-relaxed">
                At Freedom M&A, our approach is not transactional—it is transformational. We believe that 
                meaningful transitions begin not with spreadsheets or deal structures, but with conversations 
                around vision, values, and family.
              </p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <blockquote className="text-lg font-medium text-foreground italic">
                "We co-create a plan rooted in your definition of freedom, exploring all viable options 
                based on what fits your life, your business, and your future."
              </blockquote>
            </div>
          </div>

          <div className="relative fade-in-up stagger-1">
            <img 
             src="/lovable-uploads/a788d54f-9dd7-463b-8d6f-3d1ad45a6ade.webp"
              alt="Freedom Mergers & Acquisitions Logo"
              className="w-full max-w-md mx-auto hover-scale"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in-up stagger-2">
          {values.map((value, index) => (
            <Card key={index} className="card-elegant p-8 text-center hover-lift group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
              <p className="text-foreground-soft">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-20 bg-primary rounded-3xl p-12 text-center fade-in-up stagger-3">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">$75M - $150M</div>
              <div className="text-white/80">Annual Revenue Range</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">180 Days</div>
              <div className="text-white/80">Exclusive Contract Terms</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">Success Based</div>
              <div className="text-white/80">Fee Structure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;