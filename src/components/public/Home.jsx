import { useEffect, useRef } from "react";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Handshake,
  PieChart,
  GitMerge,
  CreditCard,
  LifeBuoy,
  ArrowRight,
  CheckCircle,
  Building,
  Calendar,
  Download,
  Eye,
  Shield,
  Clock,
  Zap,
  Globe,
  Heart,
} from "lucide-react";
import HeroSection from "./HeroSection";

const stats = [
  { number: 35, label: "Years Experience", suffix: "+" },
  { number: 150, label: "Max Revenue Focus", suffix: "M" },
  { number: 100, label: "Success Rate", suffix: "%" },
  { number: 500, label: "Deals Completed", suffix: "+" },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Vision",
    description:
      "We start by understanding your unique definition of freedom and assessing all options.",
    icon: Eye,
    duration: "2-3 weeks",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Co-create a tailored plan that aligns with your business and personal goals.",
    icon: Target,
    duration: "3-4 weeks",
  },
  {
    step: "03",
    title: "Market Preparation",
    description:
      "Position your company and refine the narrative for maximum market appeal.",
    icon: Zap,
    duration: "4-6 weeks",
  },
  {
    step: "04",
    title: "Execution & Closing",
    description:
      "Implement the strategy with confidence, transparency, and commitment.",
    icon: CheckCircle,
    duration: "8-12 weeks",
  },
];

const Home = () => {
  const countRefs = useRef([]);

  useEffect(() => {
    const observers = stats.map((stat, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const statElement = countRefs.current[index];
            if (statElement) {
              const target = stat.number;
              let start = 0;
              const duration = 2000;
              const increment = target / (duration / 16);

              const updateCount = (startTime) => {
                const elapsed = performance.now() - startTime;
                start = Math.min(target, (elapsed / duration) * target);
                statElement.textContent = Math.ceil(start).toString();
                if (start < target) {
                  requestAnimationFrame((time) => updateCount(startTime));
                }
              };

              requestAnimationFrame((time) => updateCount(time));
            }
            observers[index].disconnect();
          }
        },
        { threshold: 0.5 }
      );
    });

    stats.forEach((_, index) => {
      if (countRefs.current[index]?.parentElement) {
        observers[index].observe(countRefs.current[index].parentElement);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <>
      <HeroSection
        title="Define Your Path to Ultimate Freedom"
        subtitle="For over three decades, we've guided visionary founders through transformative transitions, aligning their journey with personal and financial freedom."
        ctaPrimary="Start Your Journey"
        ctaSecondary="Learn Our Process"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <main className="min-h-screen bg-[#d3d6db]">
        {/* Summary Section */}
        <section className="py-16 md:py-24 bg-[#303841] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#be3144]/20 rounded-full text-[#be3144] font-medium text-sm mb-6">
                <Target className="w-4 h-4 mr-2" aria-hidden="true" />
                Why Freedom M&A?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Your Trusted Partner in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#be3144] to-[#e63950]">
                  Transformation
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                Freedom Mergers & Acquisitions specializes in guiding founders
                of $75M–$150M businesses through high-stakes transitions. Led by
                Dave Marshall, our 35+ years of experience, success-based fees,
                and nationwide reach ensure your journey to freedom is personal,
                transparent, and results-driven.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#3a4750]/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Handshake
                    className="w-10 h-10 text-[#be3144] mb-4 mx-auto"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold mb-2">Our Services</h3>
                  <p className="text-sm text-white/80">
                    From expert valuations and enterprise sales to synergistic
                    mergers and turnaround strategies, we offer tailored
                    solutions to meet your unique needs.
                  </p>
                </div>
                <div className="bg-[#3a4750]/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Award
                    className="w-10 h-10 text-[#be3144] mb-4 mx-auto"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
                  <p className="text-sm text-white/80">
                    With a 100% success rate and over 500 deals completed, our
                    180-day exclusive contracts and client-centric approach
                    deliver transformational outcomes.
                  </p>
                </div>
              </div>
              <p className="text-sm italic text-white/80">
                “Freedom M&A turned my vision into reality with unmatched
                expertise.” — Emily S., Founder
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-[#d3d6db]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-[#be3144]/10 rounded-full text-[#be3144] font-medium text-sm">
                    <Heart className="w-4 h-4 mr-2" aria-hidden="true" />
                    About Freedom M&A
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#303841]">
                    A Legacy of Helping Founders Define Their{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#be3144] to-[#e63950] ">
                      Freedom
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-[#3a4750] leading-relaxed">
                    For over three decades, Freedom M&A has been a beacon for
                    founders navigating complex transitions. Our approach is
                    rooted in understanding your vision, values, and family,
                    ensuring every step aligns with your personal definition of
                    freedom.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Users,
                        title: "Founder-Focused",
                        desc: "Exclusive focus on founder-owned businesses",
                      },
                      {
                        icon: Target,
                        title: "$75M-$150M",
                        desc: "Companies generating substantial revenue",
                      },
                      {
                        icon: Shield,
                        title: "Proven Results",
                        desc: "Three decades of successful transitions",
                      },
                      {
                        icon: Globe,
                        title: "National Reach",
                        desc: "Trusted advisors across the United States",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-[#3a4750]/10 transition-colors duration-300"
                        role="article"
                        aria-labelledby={`about-item-${index}`}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-[#be3144] to-[#e63950] rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon
                            className="w-5 h-5 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3
                            id={`about-item-${index}`}
                            className="font-semibold text-[#303841]"
                          >
                            {item.title}
                          </h3>
                          <p className="text-[#3a4750] text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="group bg-gradient-to-r from-[#be3144] to-[#e63950] text-white flex justify-center items-center hover:shadow-lg transition-all duration-300 py-3 px-6 rounded-lg font-medium transform hover:scale-105"
                    aria-label="Learn More About Freedom M&A"
                  >
                    Learn More
                    <ArrowRight
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Company Heritage"
                    className="w-full h-80 sm:h-96 rounded-2xl object-cover shadow-md hover:scale-105 transition-transform duration-500"
                    style={{ transform: "translateZ(0)" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#be3144]/30 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-[#3a4750]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-[#be3144]/20 rounded-full text-[#be3144] font-medium text-sm">
                  <Target className="w-4 h-4 mr-2" aria-hidden="true" />
                  Our Comprehensive Services
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
                  Tailored Solutions for Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#be3144] to-[#e63950] ">
                    Freedom
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto mt-4">
                  Our services are designed to empower founders of $75M–$150M
                  businesses, offering expert valuations, enterprise sales,
                  recapitalizations, mergers, debt restructuring, and turnaround
                  strategies.
                </p>
                
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group p-6 rounded-2xl bg-[#d3d6db]/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#be3144] to-[#e63950] rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    Our Mission & Approach
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Led by Dave Marshall, we prioritize your vision and values.
                    Our 180-day exclusive contracts and success-based fees
                    ensure transparency, while our focus on transformational
                    outcomes sets us apart.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Founder-focused for $75M–$150M businesses",
                      "Transformational, not transactional",
                      "Nationwide trusted advisors",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle
                          className="w-4 h-4 text-[#be3144] flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="group p-6 rounded-2xl bg-[#d3d6db]/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#be3144] to-[#e63950] rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Handshake
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    Our Services & Leadership
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Dave Marshall’s 35+ years of experience in equity placements
                    and IPOs drives our services, from confidential enterprise
                    sales to strategic turnarounds, ensuring your business is
                    positioned for success.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Expert valuations & strategic options",
                      "Confidential enterprise sales",
                      "Turnaround strategies for stability",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle
                          className="w-4 h-4 text-[#be3144] flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-[#d3d6db]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-[#be3144]/20 rounded-full text-[#be3144] font-medium text-sm">
                  <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                  Our Proven Process
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#303841] mt-4">
                  From Vision to{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#be3144] to-[#e63950] ">
                    Freedom
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-[#3a4750] max-w-3xl mx-auto mt-4 leading-relaxed">
                  Our hands-on process is meticulously designed to align every
                  step with your unique goals, delivering clarity, confidence,
                  and transformative results from discovery to closing.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-[#3a4750]/10 hover:border-[#be3144]/50 transition-all duration-300 transform hover:-translate-y-1 fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                    role="article"
                    aria-labelledby={`step-title-${index}`}
                  >
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#be3144] to-[#e63950] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <step.icon
                          className="w-8 h-8 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#d3d6db] border-2 border-[#be3144] rounded-full flex items-center justify-center text-xs font-semibold text-[#be3144]">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-3 flex-grow">
                      <h3
                        id={`step-title-${index}`}
                        className="text-base sm:text-lg font-semibold text-[#303841]"
                      >
                        {step.title}
                      </h3>
                      <p className="text-[#3a4750] text-sm leading-relaxed">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-[#3a4750]/10 rounded-full text-xs text-[#3a4750]">
                        <Clock className="w-3 h-3 mr-1" aria-hidden="true" />
                        {step.duration}
                      </div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-32 -right-12 w-12 h-0.5 bg-gradient-to-r from-[#be3144] to-[#e63950] "
                        aria-hidden="true"
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dave Marshall Section */}
        <section className="py-16 md:py-24 bg-[#3a4750]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <img
                    src="./dave.png"
                    alt="Portrait of Dave Marshall"
                    className="w-full h-auto  rounded-2xl object-cover shadow-md hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="inline-flex items-center px-4 py-2 bg-[#be3144]/20 rounded-full text-[#be3144] font-medium text-sm">
                    <Award className="w-4 h-4 mr-2" aria-hidden="true" />
                    Meet Dave Marshall
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                    Founder, Visionary & Builder of{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#be3144] to-[#e63950] ">
                      Legacies
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    Dave Marshall, a Cornell graduate with over 35 years of
                    experience, is the driving force behind Freedom M&A. His
                    expertise in equity placements and IPOs, combined with a
                    passion for empowering founders, ensures transformative
                    outcomes.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Award,
                        text: "Multi-million dollar equity placements",
                      },
                      { icon: Building, text: "Venture-backed IPO advisory" },
                      {
                        icon: Users,
                        text: "Millions raised for charitable initiatives",
                      },
                      {
                        icon: CheckCircle,
                        text: "Decades of boardroom experience",
                      },
                    ].map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-[#d3d6db]/20 rounded-lg shadow-sm"
                        role="article"
                        aria-labelledby={`achievement-${index}`}
                      >
                        <achievement.icon
                          className="w-4 h-4 text-[#be3144] flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span
                          id={`achievement-${index}`}
                          className="text-white/80 text-sm font-medium"
                        >
                          {achievement.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="group bg-gradient-to-r from-[#be3144] to-[#e63950] text-white hover:shadow-lg flex justify-center items-center transition-all duration-300 py-3 px-6 rounded-lg font-medium transform hover:scale-105"
                    aria-label="Learn About Dave's Journey"
                  >
                    Learn More
                    <ArrowRight
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-[#d3d6db]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-[#be3144]/20 rounded-full text-[#be3144] font-medium text-sm">
                  <Target className="w-4 h-4 mr-2" aria-hidden="true" />
                  Our Track Record
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#303841] mt-4">
                  Proven Success in{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#be3144] to-[#e63950] ">
                    Transforming Futures
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-[#3a4750] max-w-3xl mx-auto mt-4">
                  Our results speak for themselves, with a legacy of successful
                  transitions and satisfied clients across the nation.
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-[#3a4750]/10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    ref={(el) =>
                      (countRefs.current[index] = el?.querySelector("span"))
                    }
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-[#be3144]">
                      <span aria-live="polite">{0}</span>
                      {stat.suffix}
                    </div>
                    <p className="text-sm text-[#3a4750] mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#be3144] to-[#e63950] relative">
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
          ></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Define Your <span>Freedom</span>?
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
                Join over 500 founders who have transformed their futures with
                Freedom M&A. Take the first step toward personal and financial
                freedom today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="group bg-white text-[#303841] hover:bg-[#d3d6db] font-semibold text-base py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                  aria-label="Schedule Consultation"
                >
                  <Calendar
                    className="w-4 h-4 mr-2 inline"
                    aria-hidden="true"
                  />
                  Schedule Consultation
                  <ArrowRight
                    className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>
                <button
                  className="group border-2 border-white text-white hover:bg-white hover:text-[#303841] font-semibold text-base py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  aria-label="Download Our Guide"
                >
                  <Download
                    className="w-4 h-4 mr-2 inline"
                    aria-hidden="true"
                  />
                  Download Our Guide
                </button>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-white/80 text-sm">
                  180-day exclusive contracts • Success-based fee structure •
                  Complete transparency
                </p>
               
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
