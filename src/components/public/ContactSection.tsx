import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, ArrowRight, Shield } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch to start your journey",
      value: "hello@freedomma.com",
      action: "mailto:hello@freedomma.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our offices nationwide",
      value: "Multiple US Locations",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here when you need us",
      value: "Mon-Fri 9AM-6PM EST",
      action: "#"
    }
  ];

  return (
    <section className="py-20 bg-background-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Define Your{' '}
            <span className="text-gradient-primary">Freedom?</span>
          </h2>
          <p className="text-xl text-foreground-soft leading-relaxed">
            Let us help you put your business—and your life—on a path to Freedom. 
            Schedule a confidential consultation to explore your options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <Card className="card-premium p-8 fade-in-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Start Your Journey</h3>
              <p className="text-foreground-soft">
                Complete this form for a confidential consultation. We'll discuss your goals 
                and explore how we can help you achieve your definition of freedom.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <Input placeholder="John" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <Input placeholder="Smith" className="w-full" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" className="w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                <Input placeholder="Your Company Name" className="w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Annual Revenue</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Select revenue range</option>
                  <option>$75M - $100M</option>
                  <option>$100M - $125M</option>
                  <option>$125M - $150M</option>
                  <option>$150M+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">How do you define Freedom?</label>
                <Textarea 
                  placeholder="Tell us about your goals, vision, and what freedom means to you..."
                  className="w-full h-32"
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-foreground-soft">
                  I agree to receive communications from Freedom M&A and understand that all 
                  information shared will be kept strictly confidential.
                </p>
              </div>

              <Button variant="premium" size="lg" className="w-full group">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-6 flex items-center gap-2 text-sm text-foreground-soft">
              <Shield className="w-4 h-4" />
              Your information is protected and confidential
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-up stagger-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
              <p className="text-foreground-soft leading-relaxed">
                We understand that reaching out about your business is a significant step. 
                Our team is ready to have a confidential conversation about your future.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elegant p-6 hover-lift group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-sm text-foreground-soft mb-2">{info.description}</p>
                      <p className="font-medium text-primary">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <Card className="card-elegant p-6">
              <h4 className="font-semibold text-foreground mb-4">Why Choose Freedom M&A</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground-soft">180-day focused engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground-soft">Success-based fee structure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground-soft">Complete confidentiality</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground-soft">35+ years of experience</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#be3144] rounded-3xl p-12 text-center fade-in-up stagger-2">
          <h3 className="text-3xl font-bold text-white mb-4">
            Your Journey to Freedom Starts Here
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the founders who've successfully transitioned to their next chapter. 
            Let's discuss how we can help you achieve your vision of freedom.
          </p>
          <Button
  
  size="xl"
  className="group bg-white text-black hover:bg-white ho"
>
  Book Your Consultation
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Button>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;