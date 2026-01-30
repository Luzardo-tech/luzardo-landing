import { Scale, AlertTriangle, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: Scale,
    title: "Inaccurate Traditional Scales",
    description: "Conventional weighing methods often produce inconsistent results and require expensive equipment maintenance."
  },
  {
    icon: AlertTriangle,
    title: "Stress on Livestock",
    description: "Moving cattle through chutes and onto scales causes stress, affecting animal health and weight accuracy."
  },
  {
    icon: TrendingDown,
    title: "Lost Revenue",
    description: "Inaccurate weights lead to poor pricing decisions, costing ranchers thousands in potential revenue."
  },
  {
    icon: Clock,
    title: "Time-Consuming Process",
    description: "Traditional weighing requires significant labor and time, reducing operational efficiency."
  }
];

const Problem = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            The Challenge with Traditional Weighing
          </h2>
          <p className="text-muted-foreground text-lg">
            Cattle ranchers face significant hurdles when it comes to accurately tracking livestock weight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-background shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <problem.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
