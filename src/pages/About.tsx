import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamMember from "@/components/sections/TeamMember";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Team photos
import alejandroPhoto from "@/assets/team/alejandro.jpeg";
import shrikanthPhoto from "@/assets/team/shrikanth.jpg";
import jorgePhoto from "@/assets/team/jorge.jpg";
import tannerPhoto from "@/assets/team/tanner.jpeg";
import skPhoto from "@/assets/team/sk.jpeg";
import mitchPhoto from "@/assets/team/mitch.jpg";
import nicolasPhoto from "@/assets/team/nicolas.png";

// Team data with visibility flags
const allTeamMembers = [
  { name: "Alejandro Ortiz Lopez", role: "CEO & Founder", bio: "", imageUrl: alejandroPhoto, visible: true },
  { name: "Shrikanth Karthik", role: "Co-Founder, Head of Product", bio: "", imageUrl: shrikanthPhoto, visible: true },
  { name: "Jorge Moros", role: "ML/AI", bio: "", imageUrl: jorgePhoto, visible: false }, // Set to true to show
  { name: "Victor Ding", role: "Software Development", bio: "", visible: true },
  { name: "Nicolas La Russa", role: "GTM", bio: "", imageUrl: nicolasPhoto, imagePosition: "center 20%", visible: true },
  { name: "Tanner Balluff", role: "Software Development", bio: "", imageUrl: tannerPhoto, visible: true },
  { name: "SK Singh", role: "GTM", bio: "", imageUrl: skPhoto, visible: true },
  { name: "Mitch Larson", role: "GTM", bio: "", imageUrl: mitchPhoto, visible: true },
];

// Filter to only visible members
const visibleTeamMembers = allTeamMembers.filter(member => member.visible);

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 subtle-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                About Luzardo
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're on a mission to revolutionize livestock management through 
                the power of computer vision and artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Luzardo was born from a simple observation: traditional livestock weighing 
                  methods are stressful for animals, time-consuming for ranchers, and often 
                  inaccurate. We knew there had to be a better way.
                </p>
                <p>
                  Our team brings together expertise in computer vision, machine learning, 
                  and agricultural technology. We're developing innovative solutions that 
                  allow ranchers to accurately weigh their cattle using cameras instead of 
                  scales—a non-invasive approach that's better for animals and more efficient 
                  for operations.
                </p>
                <p>
                  Starting with cattle, we're building the foundation for a new era of 
                  precision agriculture that combines cutting-edge technology with practical, 
                  real-world applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                To empower ranchers with accurate, stress-free livestock data through 
                innovative computer vision technology, improving animal welfare while 
                maximizing operational efficiency and profitability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-semibold mb-2">Precision</h3>
                  <p className="text-primary-foreground/70 text-sm">Accurate weight data you can trust</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🐄</div>
                  <h3 className="font-semibold mb-2">Welfare</h3>
                  <p className="text-primary-foreground/70 text-sm">Animal-friendly weighing methods</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📈</div>
                  <h3 className="font-semibold mb-2">Efficiency</h3>
                  <p className="text-primary-foreground/70 text-sm">Save time and reduce costs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 subtle-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A passionate group of innovators combining expertise in technology, 
                agriculture, and business to build the future of livestock management.
              </p>
            </div>

            {/* Team members grid - auto-layouts based on count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto justify-items-center">
              {visibleTeamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageUrl={member.imageUrl}
                  imagePosition={member.imagePosition}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Join Us on This Journey
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Interested in being part of the future of livestock management? 
                Get in touch to learn more about Luzardo.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="/#signup">
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
