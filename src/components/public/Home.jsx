import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  Award,
  Phone,
  TrendingUp,
  Handshake,
  PieChart,
  GitMerge,
  CreditCard,
  DollarSign,
  LifeBuoy,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
} from "lucide-react";
import HeroSection from "./HeroSection";

const Home = () => {
  const sections = [
    {
      icon: Building,
      title: "About Freedom M&A",
      subtitle: "A Legacy of Helping Founders Define Their Freedom",
      description:
        "For over three decades, Freedom Mergers & Acquisitions has been a trusted advisor to founders across the United States, specializing in complex, high-stakes transitions with the singular goal of aligning the business journey with personal freedom.",
      highlights: [
        "35+ years of trusted advisory experience",
        "Exclusive focus on founder-owned businesses",
        "Companies generating $75M-$150M in annual revenue",
        "Transformational approach, not just transactional",
      ],
      stats: [
        { number: 30, label: "Years Experience" },
        { number: 150, label: "Max Revenue Focus (M)" },
        { number: 100, label: "Founder-Owned Focus (%)" },
      ],
      link: "/about",
      color: "from-[#e63950] to-[#be3144]",
    },
    {
      icon: Target,
      title: "Our Comprehensive Services",
      subtitle: "Full Spectrum M&A Solutions Tailored to Your Freedom",
      description:
        "We offer a complete range of merger and acquisition services, each designed to help you achieve your unique definition of freedom. From expert valuations to complex restructuring, we provide the expertise you need.",
      highlights: [
        "Expert business valuations and strategic options",
        "Majority enterprise sales for complete exits",
        "Minority recapitalizations for liquidity with control",
        "Distressed and turnaround opportunities",
      ],
      services: [
        { icon: TrendingUp, name: "Expert Valuations" },
        { icon: Handshake, name: "Enterprise Sales" },
        { icon: PieChart, name: "Recapitalizations" },
        { icon: GitMerge, name: "Synergistic Mergers" },
        { icon: CreditCard, name: "Debt Restructure" },
        { icon: DollarSign, name: "Finance Facilities" },
        { icon: LifeBuoy, name: "Turnaround Solutions" },
      ],
      link: "/services",
      color: "from-[#3a4750] to-[#303841]",
    },
    {
      icon: Award,
      title: "Meet Dave Marshall",
      subtitle: "Founder, Visionary & Builder of Legacies",
      description:
        "Dave Marshall brings over 35 years of experience as a trusted advisor to founders and entrepreneurs. A Cornell University graduate and former President of the Cornell Alumni Association, Dave's approach is rooted in deep relationships and transformational outcomes.",
      highlights: [
        "35+ years of M&A and advisory experience",
        "Led multi-million-dollar equity placements",
        "Cornell University graduate and Alumni Association President",
        "Passionate advocate for founder empowerment",
      ],
      achievements: [
        { icon: Award, text: "Multi-million dollar equity placements" },
        { icon: Star, text: "Venture-backed IPO advisory" },
        { icon: Users, text: "Millions raised for charitable initiatives" },
        { icon: CheckCircle, text: "Decades of boardroom experience" },
      ],
      link: "/dave",
      color: "from-[#be3144] to-[#e63950]",
    },
    {
      icon: Phone,
      title: "Ready to Start Your Journey?",
      subtitle: "Connect with Our Experienced Team Today",
      description:
        "Take the first step toward defining your freedom. Schedule a confidential consultation to explore your options and discover how we can help you achieve your business and personal goals with our proven approach.",
      highlights: [
        "Confidential initial consultation",
        "180-day exclusive contracts with 90-day renewals",
        "Success-based fee structure",
        "Complete transparency and accountability",
      ],
      process: [
        {
          step: "1",
          title: "Discovery",
          desc: "Define your freedom and assess options",
        },
        { step: "2", title: "Strategy", desc: "Co-create a tailored plan" },
        { step: "3", title: "Execution", desc: "Implement with confidence" },
      ],
      link: "/contact",
      color: "from-[#303841] to-[#3a4750]",
    },
  ];

  const countRefs = useRef([]);

  useEffect(() => {
    const observers = sections.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const stats = countRefs.current[index]?.querySelectorAll(".count");
            stats?.forEach((stat) => {
              const target = parseInt(stat.dataset.target);
              let start = 0;
              const duration = 2000;
              const increment = target / (duration / 16);
              const updateCount = () => {
                start += increment;
                if (start < target) {
                  stat.textContent = Math.ceil(start);
                  requestAnimationFrame(updateCount);
                } else {
                  stat.textContent = target;
                }
              };
              updateCount();
            });
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      if (countRefs.current[index]) {
        observer.observe(countRefs.current[index]);
      }
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div>
      <HeroSection
        title="Define Your Path to Ultimate Freedom"
        subtitle="For over three decades, we've guided visionary founders through transformative transitions, helping business owners align their journey with personal and financial freedom."
        ctaPrimary="Start Your Journey"
        ctaSecondary="Learn Our Process"
      />

      <section className="py-8 sm:py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Your Complete Guide to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e63950] to-[#be3144]">
                Freedom
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground-soft leading-relaxed max-w-2xl mx-auto">
              Explore every aspect of our comprehensive approach to helping
              founders achieve their unique vision of freedom.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {sections.map((section, index) => (
              <div
                key={index}
                ref={(el) => (countRefs.current[index] = el)}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-6 lg:gap-10 items-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 rounded-3xl p-4 sm:p-6 bg-white/50 backdrop-blur-sm`}
              >
                <div className="flex-1 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <section.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                        {section.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-base text-foreground-soft font-medium">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-foreground-soft leading-relaxed">
                    {section.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    {section.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#e63950] mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm lg:text-base text-foreground-soft">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link to={section.link} className="inline-block mt-4 sm:mt-6 lg:mt-8">
                    <Button
                      className={`group bg-gradient-to-r ${section.color} text-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg`}
                    >
                      Explore{" "}
                      {
                        section.title.split(" ")[
                          section.title.split(" ").length - 1
                        ]
                      }
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="flex-1 w-full">
                  <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl rounded-2xl">
                    {section.stats && (
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                        {section.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div
                              className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent count`}
                              data-target={stat.number}
                            >
                              0
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600 font-medium">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.services && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
                        {section.services.map((service, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center p-2 sm:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          >
                            <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#e63950] mb-1 sm:mb-2" />
                            <span className="text-xs sm:text-sm text-center text-gray-700 font-medium">
                              {service.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.achievements && (
                      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        {section.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg shadow-sm"
                          >
                            <achievement.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#e63950] flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">
                              {achievement.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.process && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {section.process.map((step, idx) => (
                          <div
                            key={idx}
                            className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm"
                          >
                            <div
                              className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center text-white font-bold`}
                            >
                              {step.step}
                            </div>
                            <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              {step.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-20 bg-[#be3144] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Define Your Freedom?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
              Join the founders who have successfully transitioned to their next
              chapter with our guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button className="group bg-white text-[#303841] hover:bg-gray-100 font-bold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="group bg-white text-[#303841] hover:bg-gray-100 font-bold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg"
              >
                Download Our Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
