import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6 fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight hero-text-shadow">
                Define Your Path to{' '}
                <span className="text-gradient-gold">Freedom</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                For over three decades, we've guided founders through complex transitions, 
                helping business owners align their journey with personal freedom.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-1">
              <Button variant="gold" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="elegant" size="xl">
                Learn Our Process
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 fade-in-up stagger-2">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">35+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">$75M+</div>
                <div className="text-white/80 text-sm">Deal Minimum</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white">180</div>
                <div className="text-white/80 text-sm">Day Process</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative fade-in-up stagger-1">
            <div className="relative mt-10">
              <img 
                src="/lovable-uploads/48a55599-f860-4944-bc38-a6071c36dd1e.png"
                alt="Dave Marshall - Founder of Freedom M&A"
                className="w-[400px] max-w-md mx-auto rounded-2xl "
              />
              
             
              
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;