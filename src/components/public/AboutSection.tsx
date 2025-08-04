import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Corrected import for Button
import { CheckCircle, Target, Heart, Shield, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We align every transaction with your personal definition of freedom",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Complete transparency and accountability in every engagement",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "We understand that transitions are deeply personal decisions",
    },
    {
      icon: CheckCircle,
      title: "Results Focused",
      description: "Success-based fees ensure we're aligned with your outcomes",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#d3d6db]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#303841] mb-4 sm:mb-6 lg:mb-8">
            A Legacy of Helping Founders Define Their{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e63950] to-[#be3144]">
              Freedom
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#3a4750] leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
            For over three decades, Freedom Mergers & Acquisitions has been a trusted advisor to
            founders across the United States, specializing in complex, high-stakes transitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-24">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 fade-in-up">
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#303841]">
                How do you define Freedom?
              </h3>
              <p className="text-sm sm:text-base lg:text-xl text-[#3a4750] leading-relaxed">
                Our work begins with a deep understanding that every founder is different. Freedom means
                something unique to each of us. For some, it's about stepping away completely after a
                lifetime of dedication. For others, it's about staying involved, but on their own terms.
              </p>
              <p className="text-sm sm:text-base lg:text-xl text-[#3a4750] leading-relaxed">
                At Freedom M&A, our approach is not transactional—it is transformational. We believe that
                meaningful transitions begin not with spreadsheets or deal structures, but with conversations
                around vision, values, and family.
              </p>
            </div>

            <div className="bg-[#d3d6db]/20 border-l-4 border-[#e63950] p-6 sm:p-8 lg:p-10 rounded-r-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#303841] italic mb-6 sm:mb-8">
                "We co-create a plan rooted in your definition of freedom, exploring all viable options
                based on what fits your life, your business, and your future."
              </blockquote>
            </div>
          </div>

          <div className="relative fade-in-up stagger-1">
            <img
              src="/about.jpg"
              alt="Freedom Mergers & Acquisitions Logo"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 fade-in-up stagger-2">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-[#d3d6db]/20 p-6 sm:p-8 text-center hover-lift group border border-[#3a4750]/20 hover:border-[#e63950] transition-all shadow-xl hover:shadow-2xl rounded-2xl"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#be3144]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-[#e63950]/20 transition-colors">
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#e63950]" />
              </div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-[#303841] mb-2 sm:mb-3">
                {value.title}
              </h4>
              <p className="text-sm sm:text-base text-[#3a4750]">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 bg-[#be3144] rounded-3xl p-8 sm:p-10 lg:p-12 text-center fade-in-up stagger-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#d3d6db] mb-1 sm:mb-2">
                $75M - $150M
              </div>
              <div className="text-[#d3d6db]/80 text-sm sm:text-base lg:text-lg">
                Annual Revenue Range
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#d3d6db] mb-1 sm:mb-2">
                180 Days
              </div>
              <div className="text-[#d3d6db]/80 text-sm sm:text-base lg:text-lg">
                Exclusive Contract Terms
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#d3d6db] mb-1 sm:mb-2">
                Success Based
              </div>
              <div className="text-[#d3d6db]/80 text-sm sm:text-base lg:text-lg">
                Fee Structure
              </div>
            </div>
          </div>
        </div>

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
    </section>
  );
};

export default AboutSection;