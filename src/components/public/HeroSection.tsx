import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
     
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6 fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium backdrop-blur-sm">
               
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight hero-text-shadow">
                Define Your Path to{' '}
                <span className="text-gradient-gold block sm:inline">Freedom</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                For over three decades, we've guided founders through complex transitions, 
                helping business owners align their journey with personal freedom.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 fade-in-up stagger-1 justify-center lg:justify-start">
              <Button variant="gold" size="xl" className="group w-full sm:w-auto">
                Start Your Journey
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="elegant" size="xl" className="w-full sm:w-auto">
                Learn Our Process
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 fade-in-up stagger-2">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">35+</div>
                <div className="text-white/80 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="text-center lg:text-left ">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">$75M+</div>
                <div className="text-white/80 text-xs sm:text-sm">Deal Minimum</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">180</div>
                <div className="text-white/80 text-xs sm:text-sm">Day Process</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative fade-in-up stagger-1 order-first lg:order-last">
            <div className="relative mt-8 lg:mt-10">
              <img 
                src="/lovable-uploads/48a55599-f860-4944-bc38-a6071c36dd1e.png"
                alt="Dave Marshall - Founder of Freedom M&A"
                className="w-64 sm:w-80 lg:w-[400px] max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white/50 rounded-full mt-1.5 lg:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;