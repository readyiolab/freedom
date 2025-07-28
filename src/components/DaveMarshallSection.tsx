import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Heart, Award, Users, TrendingUp } from "lucide-react";

const DaveMarshallSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Cornell University Graduate",
      description: "Former President of Cornell Alumni Association"
    },
    {
      icon: Building2,
      title: "35+ Years Experience",
      description: "Led multi-million-dollar equity placements and venture-backed IPOs"
    },
    {
      icon: Heart,
      title: "Impact Advocate",
      description: "Raised millions for financial and charitable initiatives"
    },
    {
      icon: Award,
      title: "Trusted Advisor",
      description: "Guided countless founders through transformative transitions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" />
                Founder | Visionary | Builder of Legacies
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                About{' '}
                <span className="text-gradient-primary">Dave Marshall</span>
              </h2>
              
              <p className="text-xl text-foreground-soft leading-relaxed">
                Dave Marshall isn't just the founder of Freedom Mergers & Acquisitions—he's the heartbeat 
                behind its mission, the architect of its values, and the guiding force behind every client's 
                journey to defining their version of freedom.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground-soft leading-relaxed">
                With over 35 years of experience, Dave has become a trusted name among founders, entrepreneurs, 
                and leaders navigating the most important transition of their lives: what comes after building 
                something great. His work has never been about just closing deals—it's about opening doors.
              </p>
              
              <p className="text-lg text-foreground-soft leading-relaxed">
                Dave's professional track record is distinguished and rare. Over the decades, he's led 
                multi-million-dollar equity placements, advised on venture-backed IPOs, and guided countless 
                individuals and enterprises through transformative asset strategies.
              </p>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <blockquote className="text-lg font-medium text-foreground italic mb-4">
                "At his core, Dave Marshall believes that success is only real when it leads to freedom. 
                Not just financial freedom—but freedom of time, purpose, and legacy."
              </blockquote>
              <cite className="text-foreground-soft font-medium">— The Foundation of Freedom M&A</cite>
            </div>

            <Button variant="premium" size="lg" className="group">
              Connect with Dave
              <TrendingUp className="w-5 h-5" />
            </Button>
          </div>

          {/* Image and Achievements */}
          <div className="space-y-8 fade-in-up stagger-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/48a55599-f860-4944-bc38-a6071c36dd1e.png"
                alt="Dave Marshall - Founder of Freedom M&A"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-[var(--shadow-elegant)] hover-lift"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-black  text-white rounded-2xl p-6 shadow-[var(--shadow-card)] hover-scale">
                <div className="text-3xl font-bold ">35+</div>
                <div className="text-sm  font-medium">Years Building Legacies</div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`card-elegant p-6 hover-lift fade-in-up stagger-${index + 2}`}>
                  <achievement.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm">{achievement.title}</h4>
                  <p className="text-xs text-foreground-soft">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gray-100 rounded-3xl p-12 fade-in-up stagger-3">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Dave's Philosophy</h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-gray-900" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Guided, Not Rushed</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Every client deserves thoughtful guidance without pressure</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-gray-900" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Challenged, Not Sold</h4>
            <p className="text-gray-600 text-sm leading-relaxed">We challenge thinking to ensure the best outcomes</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-gray-900" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Freedom on Your Terms</h4>
            <p className="text-gray-600 text-sm leading-relaxed">You deserve more than just an exit—you deserve a new beginning</p>
          </div>
        </div>
        
        <blockquote className="text-2xl font-medium text-gray-900 italic bg-white rounded-xl p-8 shadow-md">
          "This is the legacy Dave Marshall is building—one founder, one story, one freedom at a time."
        </blockquote>
      </div>
    </div>
      </div>
    </section>
  );
};

export default DaveMarshallSection;