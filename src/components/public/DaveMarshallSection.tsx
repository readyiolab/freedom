import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Heart, Award, Users, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const DaveMarshallSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Cornell University Graduate",
      description: "Former President of Cornell Alumni Association",
    },
    {
      icon: Building2,
      title: "35+ Years Experience",
      description: "Led multi-million-dollar equity placements and venture-backed IPOs",
    },
    {
      icon: Heart,
      title: "Impact Advocate",
      description: "Raised millions for financial and charitable initiatives",
    },
    {
      icon: Award,
      title: "Trusted Advisor",
      description: "Guided countless founders through transformative transitions",
    },
  ];

  // State for the counting animation
  const [count, setCount] = useState(0); // Start at 0
  const [hasStarted, setHasStarted] = useState(false); // Track if animation has started
  const badgeRef = useRef(null); // Reference to the badge element

  // IntersectionObserver to detect when the badge is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // Prevent restarting the animation
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the badge is visible
      }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, [hasStarted]);

  // Counting animation logic
  useEffect(() => {
    if (!hasStarted) return; // Only start animation when hasStarted is true

    const target = 35;
    const duration = 2000; // Animation duration in milliseconds (2 seconds)
    const increment = target / (duration / 50); // Increment per 50ms

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return Math.min(prev + increment, target);
        }
        clearInterval(interval);
        return prev;
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, [hasStarted]);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#d3d6db]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 fade-in-up">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-[#e63950] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-md">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                Founder | Visionary | Builder of Legacies
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#303841]">
                About{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e63950] to-[#be3144]">
                  Dave Marshall
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#3a4750] leading-relaxed max-w-xl sm:max-w-2xl">
                Dave Marshall isn't just the founder of Freedom Mergers & Acquisitions—he's the heartbeat
                behind its mission, the architect of its values, and the guiding force behind every client's
                journey to defining their version of freedom.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm sm:text-base lg:text-xl text-[#3a4750] leading-relaxed">
                With over 35 years of experience, Dave has become a trusted name among founders, entrepreneurs,
                and leaders navigating the most important transition of their lives: what comes after building
                something great. His work has never been about just closing deals—it's about opening doors.
              </p>

              <p className="text-sm sm:text-base lg:text-xl text-[#3a4750] leading-relaxed">
                Dave's professional track record is distinguished and rare. Over the decades, he's led
                multi-million-dollar equity placements, advised on venture-backed IPOs, and guided countless
                individuals and enterprises through transformative asset strategies.
              </p>
            </div>

            <div className="bg-[#d3d6db]/20 border-l-4 border-[#e63950] p-6 sm:p-8 lg:p-10 rounded-r-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#303841] italic mb-6 sm:mb-8">
                "At his core, Dave Marshall believes that success is only real when it leads to freedom.
                Not just financial freedom—but freedom of time, purpose, and legacy."
              </blockquote>
              <cite className="text-[#3a4750] font-semibold text-base sm:text-lg lg:text-xl">
                — The Foundation of Freedom M&A
              </cite>
            </div>

            <Button
              variant="premium"
              size="lg"
              className="group bg-[#e63950] text-white hover:bg-[#be3144] transition-colors duration-300 text-base sm:text-lg lg:text-xl py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-md w-full sm:w-auto"
            >
              Connect with Dave
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Image and Achievements */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 fade-in-up stagger-1">
            <div className="relative">
              <img
                src="/lovable-uploads/48a55599-f860-4944-bc38-a6071c36dd1e.png"
                alt="Dave Marshall - Founder of Freedom M&A"
                className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />

              {/* Experience Badge with Counting Animation */}
              <div
                ref={badgeRef} // Attach ref to the badge
                className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 bg-[#303841] text-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl hover:scale-110 transition-transform duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {Math.floor(count)}+ {/* Display integer part of count */}
                </div>
                <div className="text-sm sm:text-base font-semibold">Years Building Legacies</div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`bg-[#d3d6db]/30 p-6 sm:p-8 hover-lift fade-in-up stagger-${index + 2} border border-[#3a4750]/30 hover:border-[#e63950] transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl`}
                >
                  <achievement.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#e63950] mb-3 sm:mb-4" />
                  <h4 className="font-semibold text-[#303841] mb-2 sm:mb-3 text-base sm:text-lg">
                    {achievement.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#3a4750]">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 bg-[#d3d6db]/50 rounded-3xl p-8 sm:p-12 lg:p-16 fade-in-up stagger-3 shadow-xl">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#303841] mb-6 sm:mb-8 lg:mb-10">
              Dave's Philosophy
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e63950]/10 rounded-full flex items-center justify-center group-hover:bg-[#e63950]/20 transition-colors">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#e63950]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#303841]">Guided, Not Rushed</h4>
                <p className="text-sm sm:text-lg text-[#3a4750] leading-relaxed">
                  Every client deserves thoughtful guidance without pressure
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e63950]/10 rounded-full flex items-center justify-center group-hover:bg-[#e63950]/20 transition-colors">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-[#e63950]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#303841]">Challenged, Not Sold</h4>
                <p className="text-sm sm:text-lg text-[#3a4750] leading-relaxed">
                  We challenge thinking to ensure the best outcomes
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center space-y-4 sm:space-y-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e63950]/10 rounded-full flex items-center justify-center group-hover:bg-[#e63950]/20 transition-colors">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#e63950]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-semibold text-[#303841]">Freedom on Your Terms</h4>
                <p className="text-sm sm:text-lg text-[#3a4750] leading-relaxed">
                  You deserve more than just an exit—you deserve a new beginning
                </p>
              </div>
            </div>

            <blockquote className="text-lg sm:text-xl lg:text-3xl font-semibold text-[#303841] italic bg-[#d3d6db]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              "This is the legacy Dave Marshall is building—one founder, one story, one freedom at a time."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaveMarshallSection;