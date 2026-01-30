import { Zap, Heart, DollarSign, LineChart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Non-Invasive",
    description: "No need to move cattle through stressful chutes. Weights are captured as animals move naturally."
  },
  {
    icon: Heart,
    title: "Animal Welfare",
    description: "Reduce stress on your livestock, leading to healthier animals and better weight gain."
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Eliminate expensive scale maintenance and reduce labor costs associated with traditional weighing."
  },
  {
    icon: LineChart,
    title: "Real-Time Data",
    description: "Track weight trends over time with instant access to analytics and reports."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Why Choose Luzardo?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Our computer vision technology brings modern precision to livestock management, 
              helping ranchers make better decisions with accurate, stress-free weight data.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-primary-foreground/10 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <span className="text-6xl">🐄</span>
                </div>
                <p className="text-primary-foreground/80 text-lg font-medium">
                  Precision weighing for modern ranching
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
