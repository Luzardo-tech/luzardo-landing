import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="font-serif text-xl font-bold">Luzardo</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Revolutionizing livestock management through computer vision technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                About Us
              </Link>
              <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-primary-foreground/70 text-sm">
              Interested in learning more about Luzardo?
            </p>
            <a 
              href="mailto:info@luzardo.tech" 
              className="text-accent hover:text-accent/80 transition-colors text-sm mt-2 inline-block"
            >
              info@luzardo.tech
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Luzardo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
