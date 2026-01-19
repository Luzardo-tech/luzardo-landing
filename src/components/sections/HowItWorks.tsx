import { Camera, Cpu, BarChart3, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Capture",
    description: "Our cameras capture images of cattle as they move naturally through your operation."
  },
  {
    icon: Cpu,
    step: "02",
    title: "Analyze",
    description: "Advanced AI analyzes body dimensions and conditions using computer vision algorithms."
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Calculate",
    description: "Precise weight estimates are calculated in real-time based on visual data points."
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Report",
    description: "Receive instant weight data and trends directly to your dashboard or mobile device."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 subtle-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Luzardo Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A seamless, stress-free approach to livestock weighing using cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl hero-gradient shadow-glow flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-accent">{step.step}</span>
                <h3 className="font-serif text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
