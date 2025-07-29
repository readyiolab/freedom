import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Handshake,
  PieChart,
  GitMerge,
  CreditCard,
  DollarSign,
  LifeBuoy,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Expert Valuations",
      description: "We assess the true market value of your business and provide strategic options—whether it's a full sale, minority recapitalization, senior debt refinancing, or short-term subordinate debt.",
      features: ["Market Analysis", "Strategic Options", "Valuation Reports"]
    },
    {
      icon: Handshake,
      title: "Majority Enterprise Sales",
      description: "For founders ready to fully exit, we manage the entire process with professionalism and confidentiality.",
      features: ["Full Exit Strategy", "Confidential Process", "Maximum Value"]
    },
    {
      icon: PieChart,
      title: "Minority Recapitalizations",
      description: "Ideal for those looking to unlock liquidity while maintaining operational control or equity upside.",
      features: ["Liquidity Access", "Retained Control", "Equity Upside"]
    },
    {
      icon: GitMerge,
      title: "Synergistic Mergers",
      description: "We create win-win partnerships between aligned companies with complementary strengths.",
      features: ["Strategic Partnerships", "Complementary Fit", "Win-Win Structure"]
    },
    {
      icon: CreditCard,
      title: "Senior Debt Restructure",
      description: "We work with you to rework debt structures for financial flexibility and strategic movement.",
      features: ["Debt Optimization", "Financial Flexibility", "Strategic Freedom"]
    },
    {
      icon: DollarSign,
      title: "Short-Term Finance Facilities",
      description: "When urgent capital is required, we help source bridge solutions to support continuity and transformation.",
      features: ["Bridge Financing", "Quick Capital", "Continuity Support"]
    },
    {
      icon: LifeBuoy,
      title: "Distressed & Turnaround",
      description: "For companies facing disruption or hardship, we bring stability, strategy, and structure to engineer recovery and new direction.",
      features: ["Crisis Management", "Recovery Strategy", "Stabilization"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive M&A{' '}
            <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className="text-xl text-foreground-soft leading-relaxed">
            We offer a full spectrum of merger and acquisition services, each tailored to your unique
            situation and definition of freedom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`card-premium p-8 hover-lift group fade-in-up stagger-${index % 4 + 1} flex flex-col h-full`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>

              <p className="text-foreground-soft mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 flex-grow">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-foreground-soft">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="mt-5 w-full   bg-black  text-white transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-gray-100 rounded-3xl p-12 fade-in-up stagger-3">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our process is hands-on from day one. We work with you to position your company,
              refine the narrative, and prepare your business to be presented in the most attractive,
              credible, and strategic manner possible.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  1
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">Discovery</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Define your freedom and assess your options</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  2
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">Strategy</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Co-create a plan tailored to your goals</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">Execution</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Implement with clarity, confidence, and commitment</p>
              </div>
            </div>

            <Button
              variant="premium"
              size="lg"
              className="group bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;