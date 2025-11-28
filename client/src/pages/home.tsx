import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Cpu, 
  Code, 
  Cloud, 
  Workflow, 
  Globe, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight,
  CheckCircle2,
  Zap,
  Server,
  Database,
  Terminal
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import logoUrl from "@assets/logo_1764317748065.png";
import heroImgUrl from "@assets/generated_images/futuristic_ai_and_automation_abstract_concept_with_neon_green_accents.png";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'How We Work', href: '#process' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img src={logoUrl} alt="iAtom Logo" className="h-[3.12rem] w-auto group-hover:drop-shadow-[0_0_10px_rgba(0,255,136,0.5)] transition-all" />
          <span className="text-xl font-bold font-heading tracking-tight">iAtom</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_-5px_rgba(0,255,136,0.4)]">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-primary text-primary-foreground mt-4">
            Book Consultation
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={heroImgUrl} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
           <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
            animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/50 backdrop-blur-sm neon-glow pt-[8px] pb-[8px] mt-[40px] mb-[40px] pl-[20px] pr-[20px]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">AI-Powered Innovation</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 tracking-tight">
            Unlock Growth with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 text-glow">
              AI
            </span> Tailored to Your Business
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            We build SaaS products, automation workflows, websites, and secure cloud systems so you can focus on scaling your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.div 
              className="relative w-fit"
              whileHover="hover"
            >
              {/* Exploding particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: -4,
                    marginTop: -4,
                  }}
                  variants={{
                    hover: {
                      x: Math.cos((i / 8) * Math.PI * 2) * 60,
                      y: Math.sin((i / 8) * Math.PI * 2) * 60,
                      opacity: [1, 0],
                      transition: { duration: 0.6, ease: "easeOut" }
                    }
                  }}
                />
              ))}
              
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-16 shadow-[0_0_30px_-5px_rgba(0,255,136,0.6)] rounded-full relative z-10 w-full flex items-center justify-center"
                asChild
              >
                <motion.button
                  variants={{
                    hover: {
                      scale: 1.1,
                    }
                  }}
                >
                  Book Free Consultation
                </motion.button>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-8 text-sm text-muted-foreground/80"
          >
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                <span>Workflow Automated</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> 
                <span>Efficiency Increased</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "AI & Automation Workflows",
      desc: "End-to-end automation using AI, custom APIs, and workflow tools to eliminate manual tasks."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Custom SaaS & Web Apps",
      desc: "From idea to launch—SaaS platforms, dashboards, and internal tools built for your business."
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: "DevOps & Cloud Infrastructure",
      desc: "CI/CD pipelines, Docker containers, load balancing, monitoring, and scalable cloud systems."
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      title: "Integration for Any Domain",
      desc: "GST validation APIs, ERP integrations, CRM automations, schedule systems, or any custom workflow."
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      title: "Websites & Landing Pages",
      desc: "High-conversion, modern websites for branding, marketing, or launching your SaaS."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
      title: "Hosting, SSL & Maintenance",
      desc: "Deployment, hosting, SSL certificates, monitoring, updates, and long-term support."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive technical solutions designed to modernize and automate your business operations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl glass-card hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-primary/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    "Education & Schools", "Hospitals & Healthcare", "Logistics",
    "Restaurants & Real Estate", "Manufacturing", "E-Commerce & Retail", "SaaS & Startups", "Custom Solutions"
  ];

  return (
    <section id="industries" className="py-24 bg-secondary/30 relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">Built for Your Industry</h2>
          <p className="text-muted-foreground max-w-2xl">We automate workflows for any domain. Here are a few where we excel.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-xl bg-background border border-white/5 flex items-center justify-center text-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_-5px_rgba(0,255,136,0.3)] transition-all cursor-default group"
            >
              <span className="font-medium group-hover:scale-105 transition-transform">{ind}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Discover", desc: "We understand your process, pain points, and goals." },
    { title: "Design", desc: "We architect automation flows, app features, or integrations." },
    { title: "Build", desc: "We develop, test, and optimize your solution with clean code." },
    { title: "Launch & Support", desc: "Deployment, SSL security, monitoring, and long-term improvements." }
  ];

  return (
    <section id="process" className="py-16 md:py-24 container mx-auto px-4 md:px-6">
       <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">How We Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pt-4"
            >
              <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xl font-bold text-primary mx-auto mb-6 relative z-10 shadow-[0_0_10px_rgba(0,255,136,0.4)]">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-center text-sm px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    "AI & LLMs", "n8n Automation", "REST APIs", "Azure Cloud", "AWS", "Docker", 
    "PostgreSQL", "React", "Node.js", "Python", "CI/CD Pipelines"
  ];

  return (
    <section id="tech" className="py-20 bg-secondary/20 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold font-heading mb-12">Tech We Love</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 rounded-full bg-background border border-white/10 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold font-heading mb-6 leading-tight">Let’s Automate <br/> Your Work</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to streamline your business? Tell us about your project, and let's build something extraordinary together.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">Remote</div>
                <div className="text-muted-foreground">Serving clients worldwide</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">Email Us</div>
                <div className="text-muted-foreground">hello@iatom.in</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl border border-white/10"
        >
          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              <Button 
                variant="outline" 
                className="mt-6" 
                onClick={() => setFormState('idle')}
              >
                Send Another
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input required placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary transition-colors h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Acme Inc." className="bg-background/50 border-white/10 focus:border-primary transition-colors h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input required type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus:border-primary transition-colors h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea required placeholder="What do you want to build or automate?" className="bg-background/50 border-white/10 focus:border-primary transition-colors min-h-[120px]" />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src={logoUrl} alt="iAtom Logo" className="h-[3.12rem] w-auto opacity-80" />
          <span className="text-xl font-bold font-heading">iAtom</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} iAtom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Process />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}
