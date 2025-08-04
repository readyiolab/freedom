import { Card } from "@/components/ui/card"; // Updated import to include Button
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Handshake,
  PieChart,
  GitMerge,
  CreditCard,
  DollarSign,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Expert Valuations",
      description:
        "We assess the true market value of your business and provide strategic options—whether it's a full sale, minority recapitalization, senior debt refinancing, or short-term subordinate debt.",
      features: ["Market Analysis", "Strategic Options", "Valuation Reports"],
    },
    {
      icon: Handshake,
      title: "Majority Enterprise Sales",
      description:
        "For founders ready to fully exit, we manage the entire process with professionalism and confidentiality.",
      features: ["Full Exit Strategy", "Confidential Process", "Maximum Value"],
    },
    {
      icon: PieChart,
      title: "Minority Recapitalizations",
      description:
        "Ideal for those looking to unlock liquidity while maintaining operational control or equity upside.",
      features: ["Liquidity Access", "Retained Control", "Equity Upside"],
    },
    {
      icon: GitMerge,
      title: "Synergistic Mergers",
      description:
        "We create win-win partnerships between aligned companies with complementary strengths.",
      features: ["Strategic Partnerships", "Complementary Fit", "Win-Win Structure"],
    },
    {
      icon: CreditCard,
      title: "Senior Debt Restructure",
      description:
        "We work with you to rework debt structures for financial flexibility and strategic movement.",
      features: ["Debt Optimization", "Financial Flexibility", "Strategic Freedom"],
    },
    {
      icon: DollarSign,
      title: "Short-Term Finance Facilities",
      description:
        "When urgent capital is required, we help source bridge solutions to support continuity and transformation.",
      features: ["Bridge Financing", "Quick Capital", "Continuity Support"],
    },
    {
      icon: LifeBuoy,
      title: "Distressed & Turnaround",
      description:
        "For companies facing disruption or hardship, we bring stability, strategy, and structure to engineer recovery and new direction.",
      features: ["Crisis Management", "Recovery Strategy", "Stabilization"],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8">
            Comprehensive M&A{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e63950] to-[#be3144]">
              Solutions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-soft leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
            We offer a full spectrum of merger and acquisition services, each tailored to your unique
            situation and definition of freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`card-premium p-6 sm:p-8 lg:p-10 hover-lift group fade-in-up stagger-${
                index % 4 + 1
              } flex flex-col h-full bg-white/95 border border-[#3a4750]/20 hover:border-[#e63950] transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e63950]/10 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[#e63950]/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#e63950]" />
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-foreground-soft mb-6 sm:mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="space-y-2 sm:space-y-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base text-foreground-soft"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#e63950] rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Uncomment if you want to add Learn More buttons for each service */}
              {/* <Button
                variant="ghost"
                className="mt-6 sm:mt-8 w-full bg-[#e63950] text-white hover:bg-[#be3144] transition-colors duration-300 text-base sm:text-lg py-4 sm:py-6 rounded-xl"
              >
                Learn More{' '}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </Card>
          ))}
        </div>

        <div className="bg-gray-100/80 rounded-3xl p-8 sm:p-12 lg:p-20 fade-in-up stagger-3 shadow-lg">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
              Our Process
            </h3>
            <p className="text-base sm:text-lg lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              Our process is hands-on from day one. We work with you to position your company,
              refine the narrative, and prepare your business to be presented in the most attractive,
              credible, and strategic manner possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col items-center space-y-6 sm:space-y-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e63950]/10 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl sm:text-3xl group-hover:bg-[#e63950]/20 transition-colors">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 text-xl sm:text-2xl">Discovery</h4>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  Define your freedom and assess your options
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col items-center space-y-6 sm:space-y-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e63950]/10 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl sm:text-3xl group-hover:bg-[#e63950]/20 transition-colors">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 text-xl sm:text-2xl">Strategy</h4>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  Co-create a plan tailored to your goals
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col items-center space-y-6 sm:space-y-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e63950]/10 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl sm:text-3xl group-hover:bg-[#e63950]/20 transition-colors">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 text-xl sm:text-2xl">Execution</h4>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                  Implement with clarity, confidence, and commitment
                </p>
              </div>
            </div>

           
          </div>
        </div>

        {/* Added CTA Section */}
        <section className="mt-12 sm:mt-16 lg:mt-20 py-8 sm:py-12 lg:py-16 bg-[#be3144] rounded-3xl fade-in-up stagger-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Define Your Freedom?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed">
                Partner with Freedom M&A to transform your business journey into a path toward personal and financial freedom. Schedule a consultation or download our guide to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  className="group bg-white text-[#303841] hover:bg-gray-100 font-bold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg"
                >
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
    </section>
  );
};

export default ServicesSection;