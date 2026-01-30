import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    
    if (!trimmedName || !trimmedEmail) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    const { error } = await supabase
      .from("early_access_signups")
      .insert({ name: trimmedName, email: trimmedEmail });

    if (error) {
      setIsLoading(false);
      if (error.code === "23505") {
        toast({
          title: "Already signed up!",
          description: "This email is already on our waitlist.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
      return;
    }
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    toast({
      title: "Success!",
      description: "Thanks for signing up. We'll be in touch soon."
    });
  };

  return (
    <section id="signup" className="py-24 subtle-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Get Early Access
            </h2>
            <p className="text-muted-foreground text-lg">
              Be among the first to experience the future of livestock weighing. 
              Join our waitlist and we'll keep you updated on our progress.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-card rounded-2xl p-8 text-center shadow-elevated">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                You're on the list!
              </h3>
              <p className="text-muted-foreground">
                Thanks for your interest in Luzardo. We'll be in touch soon with updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elevated">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@ranch.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    disabled={isLoading}
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Signing up..."
                  ) : (
                    <>
                      Join the Waitlist
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
