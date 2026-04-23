/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Zap, 
  Waves, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  ShoppingBag, 
  Search, 
  User,
  ArrowRight,
  Play,
  CheckCircle2,
  Lock,
  Truck,
  RotateCcw
} from 'lucide-react';
import { BRAND_NAME, PRICING, FEATURES } from './constants';

// --- Announcement Bar ---
const AnnouncementBar = () => {
  const messages = [
    "✨ Free Express Shipping to US, Canada & UK",
    "🛡️ 90-Day Money-Back Sculpt Guarantee",
    "⭐ Join 12,847+ Women Transforming Their Bodies"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gold h-11 flex items-center justify-center overflow-hidden relative z-50">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-black font-accent text-[9px] font-bold uppercase tracking-[0.2em]"
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

// --- Header ---
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-11 left-0 right-0 z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-nav-bg/95 backdrop-blur-xl border-white/10 h-16' 
          : 'bg-transparent border-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-pearl">
            <Menu className="w-6 h-6" />
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-deep rounded-sm"></div>
          <a href="#" className="font-display italic text-xl sm:text-2xl tracking-[0.05em] text-pearl">
            SCULPT NOVA™
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {['Shop', 'How It Works', 'Results', 'Science', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-silver hover:text-gold text-[10px] uppercase tracking-[0.2em] font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Search className="w-4 h-4 text-pearl cursor-pointer hidden sm:block opacity-60 hover:opacity-100" />
          <User className="w-4 h-4 text-pearl cursor-pointer hidden sm:block opacity-60 hover:opacity-100" />
          <div className="relative cursor-pointer group">
            <ShoppingBag className="w-4 h-4 text-pearl opacity-80 group-hover:opacity-100" />
            <span className="absolute -top-2 -right-2 bg-gold text-black text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-sm font-bold">1</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-midnight z-50 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-2xl tracking-widest uppercase">Sculpt Nova</span>
              <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['Shop', 'How It Works', 'Results', 'Science', 'FAQ'].map((item) => (
                <a key={item} href="#" className="font-display text-4xl hover:text-lilac transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Hero Section ---
const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="min-h-screen relative overflow-hidden pt-40 pb-20 flex flex-col lg:flex-row items-center px-6 max-w-7xl mx-auto">
      {/* Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-gold-deep/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Content */}
      <div className="w-full lg:w-3/5 z-10 flex flex-col items-start text-left">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="badge-glow mb-10"
        >
          ✦ CLINICALLY-INSPIRED TECHNOLOGY
        </motion.div>

        <div className="mb-4">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display italic text-6xl md:text-8xl leading-[1.1] mb-2"
          >
            Professional <br />
            <span className="text-gradient underline underline-offset-8 decoration-gold/30">Body Sculpting.</span>
          </motion.h1>
          <div className="divider-gold mt-6 mb-8"></div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-silver text-lg md:text-xl max-w-lg mb-14 leading-relaxed font-serif"
        >
          Triple-technology EMS + Ultrasonic + Infrared device for visible body contouring results — at home.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-16 w-full sm:w-auto"
        >
          <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3">
            SHOP THE DEVICE — ${PRICING.pro}
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3">
            <Play className="w-4 h-4" />
            Watch It Work
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-lilac/10 pt-8 w-full"
        >
          {[
            { val: "12,847+", label: "Customers" },
            { val: "4.8/5", label: "Rating" },
            { val: "90-Day", label: "Guarantee" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-accent text-2xl font-bold text-pearl">{stat.val}</span>
              <span className="text-silver text-xs tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Product Image Area */}
      <div className="w-full lg:w-2/5 mt-20 lg:mt-0 flex justify-center relative">
        <div className="absolute inset-0 bg-violet/20 rounded-full blur-[150px] animate-[glowPulse_4s_infinite]" />
        <motion.div 
          className="relative z-10 animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Main Product Placeholder */}
          <div className="w-[300px] h-[500px] md:w-[400px] md:h-[600px] bg-gradient-to-b from-lilac/20 to-midnight rounded-full border border-lilac/30 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,47,190,0.2)_0%,transparent_70%)]" />
            <img 
              src="https://images.unsplash.com/photo-1590156221122-c29dd67a8344?q=80&w=2400&auto=format&fit=crop" 
              alt="Sculpt Nova Device" 
              className="w-full h-full object-cover mix-blend-screen opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Feature Pills */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-12 glass-card py-2 px-4 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              <span className="text-[10px] font-accent font-bold tracking-tighter">⚡ EMS ACTIVE</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/3 -right-12 glass-card py-2 px-4 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-lilac animate-pulse" />
              <span className="text-[10px] font-accent font-bold tracking-tighter">🔊 ULTRASONIC</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-lilac" />
        <span className="text-[10px] tracking-[0.2em] font-accent">SCROLL</span>
      </div>
    </section>
  );
};

// --- Before/After Slider ---
const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden cursor-ew-resize group shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image */}
      <img 
        src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=2400&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover"
        alt="After Results"
      />
      <div className="absolute top-4 right-4 badge-glow bg-gold/20 backdrop-blur-md">AFTER</div>
      
      {/* Before Image Overlay */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=2400&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.4]"
          alt="Before Results"
          style={{ width: `${100 / (sliderPos / 100)}%` }}
        />
        <div className="absolute top-4 left-4 badge-glow bg-white/10 backdrop-blur-md border-white/20 text-white">BEFORE</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-gold z-10 pointer-events-none group-hover:bg-gold/80 transition-colors"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-sm bg-gold flex items-center justify-center shadow-lg">
          <div className="flex gap-0.5">
            <ChevronRight className="w-3 h-3 rotate-180 text-black" />
            <ChevronRight className="w-3 h-3 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Timeline Section ---
const ResultsTimeline = () => {
  const steps = [
    { week: "1-2", phase: "Activation Phase", desc: "Feel increased circulation and muscle activation. Skin begins feeling slightly firmer.", icon: "🌱" },
    { week: "3-4", phase: "Measurement Phase", desc: "First measurable changes appear. Clothes start fitting differently. 73% of users notice changes.", icon: "📏" },
    { week: "5-6", phase: "Transformation Phase", desc: "Visible contouring becomes apparent. Others begin noticing. Confidence increases significantly.", icon: "✨" },
    { week: "7-8", phase: "Results Phase", desc: "Full transformation visible. Maintain with 3-4x/week sessions. Most dramatic before/after.", icon: "🏆" }
  ];

  return (
    <div className="mt-20 relative px-6">
      <div className="absolute top-1/2 left-10 right-10 h-[1px] bg-gold/10 hidden md:block" />
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card p-6 relative z-10"
          >
            <div className="text-2xl mb-4 grayscale opacity-60">{step.icon}</div>
            <div className="font-accent text-[9px] tracking-[0.2em] text-gold uppercase mb-2">WEEK {step.week}</div>
            <h4 className="font-display italic text-lg mb-3">{step.phase}</h4>
            <p className="text-silver/60 text-xs leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-gold selection:text-black overflow-x-hidden">
      {/* Global Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-gold z-[100] origin-left shadow-[0_0_10px_rgba(212,175,55,0.4)]" 
        style={{ scaleX }} 
      />

      <AnnouncementBar />
      <Header />
      
      <main>
        <Hero />
        
        {/* Social Proof Marquee */}
        <section className="bg-white/[0.02] border-y border-white/5 py-10 overflow-hidden">
          <div className="flex gap-16 animate-[scroll_30s_linear_infinite] whitespace-nowrap px-8">
            {["VOGUE", "WOMEN'S HEALTH", "ELLE", "COSMOPOLITAN", "REFINERY29", "THE SKINNY CONFIDENTIAL"].map((logo) => (
              <span key={logo} className="text-silver/30 font-display italic text-3xl font-light hover:text-gold transition-colors cursor-default">
                {logo}
              </span>
            ))}
            {/* Duplicate for infinite effect */}
            {["VOGUE", "WOMEN'S HEALTH", "ELLE", "COSMOPOLITAN", "REFINERY29", "THE SKINNY CONFIDENTIAL"].map((logo) => (
              <span key={logo} className="text-silver/30 font-display italic text-3xl font-light hover:text-gold transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </section>

        {/* Comparison Section (Problem/Solution) */}
        <section className="py-24 px-6 max-w-7xl mx-auto text-center" id="how-it-works">
          <div className="mb-24">
            <span className="badge-glow mb-6">THE SHIFT</span>
            <h2 className="font-display italic text-4xl md:text-6xl mb-6">There's A Better Way To Sculpt</h2>
            <div className="divider-gold max-w-xs mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-[1fr,80px,1fr] items-center gap-12">
            <div className="bg-white/2 border border-white/5 rounded-sm p-10 md:p-14">
              <h3 className="text-silver/40 tracking-[0.3em] font-accent text-[10px] mb-12 opacity-60 font-bold uppercase">THE OLD WAY</h3>
              <ul className="space-y-8 text-left">
                {[
                  "Expensive clinic visits ($3,000+)",
                  "Painful procedures & downtime",
                  "Book appointments weeks in advance",
                  "Inconvenient travel and scheduling",
                  "Temporary results needing maintenance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-silver/60 font-serif italic text-sm">
                    <X className="w-4 h-4 text-white/20 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex lg:flex-col items-center justify-center gap-6">
              <div className="lg:h-24 lg:w-[1px] w-12 h-[1px] bg-white/10" />
              <div className="w-10 h-10 rounded-sm border border-gold/30 flex items-center justify-center text-gold/60 font-accent font-bold text-[10px]">VS</div>
              <div className="lg:h-24 lg:w-[1px] w-12 h-[1px] bg-white/10" />
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-sm p-10 md:p-14 border-l-2 border-l-gold shadow-2xl">
              <h3 className="text-gold tracking-[0.3em] font-accent text-[10px] mb-12 font-bold uppercase">THE SCULPT NOVA WAY</h3>
              <ul className="space-y-8 text-left">
                {[
                  "Under $100, one-time investment",
                  "Soothing, relaxing sessions at home",
                  "Available 24/7 on your schedule",
                  "Zero downtime — use daily anywhere",
                  "Progressive lasting contouring results"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-pearl font-serif italic">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span className="font-medium underline decoration-white/10 underline-offset-4">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="results">
          <div className="text-center mb-24">
            <span className="badge-glow mb-6">REAL RESULTS</span>
            <h2 className="font-display italic text-4xl md:text-6xl mb-6">Evolved Confidence.</h2>
            <div className="divider-gold max-w-md mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <BeforeAfterSlider />
            <div className="flex flex-col gap-10">
              <div className="glass-card p-10">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}
                </div>
                <p className="font-display text-2xl italic mb-10 text-pearl leading-relaxed">"I deconstruct my goals into phases. Sculpt Nova became the clinical pillar of my daily ritual."</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-sm overflow-hidden p-1">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" alt="Sarah J" className="w-full h-full object-cover grayscale opacity-70" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest">Sarah J., 34</div>
                    <div className="text-[9px] text-gold/60 uppercase tracking-[0.2em] mt-1">Verified Buyer</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-8 border-l border-l-gold/40">
                  <div className="text-3xl font-bold font-accent mb-2 text-gold">94%</div>
                  <div className="text-[9px] text-silver/40 uppercase tracking-[0.2em]">Efficiency Rating</div>
                </div>
                <div className="glass-card p-8 border-l border-l-gold/40">
                  <div className="text-3xl font-bold font-accent mb-2 text-gold">87%</div>
                  <div className="text-[9px] text-silver/40 uppercase tracking-[0.2em]">Deployment Success</div>
                </div>
              </div>
            </div>
          </div>

          <ResultsTimeline />
        </section>

        {/* Interactive Features Area */}
        <section className="py-24 bg-white/[0.01]" id="science">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-24">
              <span className="badge-glow mb-6">THE SCIENCE</span>
              <h2 className="font-display italic text-4xl md:text-6xl mb-6">Triple-Action Deployment</h2>
              <div className="divider-gold max-w-sm mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {FEATURES.map((feature, i) => (
                <div key={feature.id} className="glass-card p-12 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white/[0.03] border border-white/10 rounded-sm flex items-center justify-center mb-10 group-hover:scale-105 transition-transform duration-500">
                    <Zap className="w-6 h-6 text-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display italic text-2xl mb-4 underline decoration-gold/10 underline-offset-8">{feature.title}</h3>
                  <p className="text-silver/60 leading-relaxed mb-10 font-serif italic text-sm">{feature.description}</p>
                  <div className="mt-auto pt-8 border-t border-white/5 w-full flex items-center justify-between text-[9px] tracking-[0.2em] font-accent text-gold/40 uppercase font-bold">
                    <span>Clinical Grade</span>
                    <span>Stable</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Chart Section */}
        <section className="py-24 px-6 max-w-5xl mx-auto overflow-x-auto">
          <div className="text-center mb-24">
            <h2 className="font-display italic text-4xl md:text-5xl mb-6">Competitive Analysis</h2>
            <div className="divider-gold max-w-xs mx-auto"></div>
          </div>
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-[9px] tracking-[0.25em] font-accent text-silver/40 uppercase font-bold">
                <th className="py-10 px-8">Analysis Parameter</th>
                <th className="py-10 px-8 text-gold font-bold bg-white/[0.03]">SCULPT NOVA™</th>
                <th className="py-10 px-8 opacity-20">Baseline Method</th>
              </tr>
            </thead>
            <tbody className="text-[11px]">
              {[
                { label: "Cost Per Cycle", nova: "$0.00", other: "$350+" },
                { label: "Complexity Level", nova: "Zero / Support", other: "High Maintenance" },
                { label: "Latency Factor", nova: "None / Optimized", other: "24-48 Hours" },
                { label: "Integration Ease", nova: "✓ Fully Deployed", other: "Manual Setup" },
                { label: "Coverage Ratio", nova: "✓ 5+ Multi-Zones", other: "Single Parameter" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                  <td className="py-10 px-8 font-medium italic font-serif text-silver/80">{row.label}</td>
                  <td className="py-10 px-8 text-gold font-bold bg-white/[0.03]">{row.nova}</td>
                  <td className="py-10 px-8 text-silver/30">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Bundle Pricing Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="shop">
          <div className="text-center mb-24">
            <span className="badge-glow mb-6">CHOOSE YOUR SESSION</span>
            <h2 className="font-display italic text-4xl md:text-6xl mb-6">Build Your Ritual</h2>
            <div className="divider-gold max-w-xs mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 items-end">
            {/* Pro Device */}
            <div className="glass-card p-12 flex flex-col items-center">
              <span className="text-[9px] tracking-[0.2em] font-accent mb-6 text-silver/40 uppercase font-bold">The Essential</span>
              <h3 className="font-display italic text-2xl mb-2 text-center uppercase tracking-wider">Pro Device</h3>
              <div className="h-px w-8 bg-gold/30 mb-10" />
              <div className="text-3xl font-bold font-accent mb-10 text-pearl italic">${PRICING.pro}</div>
              <ul className="mb-14 space-y-5 text-[11px] text-silver/60 w-full uppercase tracking-widest leading-loose">
                <li className="flex items-center gap-3 font-bold text-pearl">✦ Pro Device V4.2</li>
                <li className="flex items-center gap-3 italic opacity-60 font-serif">✦ USB-C Interface</li>
                <li className="flex items-center gap-3 italic opacity-60 font-serif">✦ Deployment Guide</li>
              </ul>
              <button className="btn-secondary w-full">INITIALIZE</button>
            </div>

            {/* Best Seller Bundle */}
            <div className="glass-card p-14 flex flex-col items-center border border-gold/40 shadow-2xl md:scale-105 relative bg-white/[0.04]">
              <div className="absolute -top-4 bg-gold px-8 py-2 rounded-sm font-accent text-[9px] font-bold tracking-[0.2em] text-black">RECOMMENDED</div>
              <span className="text-[9px] tracking-[0.2em] font-accent mb-6 text-gold uppercase font-bold">Optimized Bundle</span>
              <h3 className="font-display italic text-3xl mb-2 text-center uppercase tracking-wider">Device + Gel</h3>
              <div className="h-px w-10 bg-gold/50 mb-10" />
              <div className="text-5xl font-bold font-accent mb-2 text-gold italic">${PRICING.bundle}</div>
              <div className="text-[9px] text-pearl/40 font-bold mb-10 uppercase tracking-[0.3em]">Save 20% on Compute</div>
              <ul className="mb-14 space-y-5 text-xs text-pearl w-full font-serif italic leading-relaxed">
                <li className="flex items-center gap-3 font-bold underline decoration-gold/20 underline-offset-4">✦ Sculpt Nova Pro™ Device</li>
                <li className="flex items-center gap-3 font-bold underline decoration-gold/20 underline-offset-4">✦ 1x Contouring Gel (3-mo)</li>
                <li className="flex items-center gap-3 opacity-60">✦ Premium Maintenance Pouch</li>
                <li className="flex items-center gap-3 opacity-60">✦ 8-Week Expansion Program</li>
              </ul>
              <button className="btn-primary w-full shadow-[0_15px_40px_rgba(212,175,55,0.2)]">DEPLOY KIT</button>
            </div>

            {/* Ultimate Kit */}
            <div className="glass-card p-12 flex flex-col items-center">
              <span className="text-[9px] tracking-[0.2em] font-accent mb-6 text-silver/40 uppercase font-bold">The Complete Set</span>
              <h3 className="font-display italic text-2xl mb-2 text-center uppercase tracking-wider">Ultimate Kit</h3>
              <div className="h-px w-8 bg-gold/30 mb-10" />
              <div className="text-3xl font-bold font-accent mb-10 text-pearl italic">${PRICING.ultimate}</div>
              <ul className="mb-14 space-y-5 text-[11px] text-silver/60 w-full uppercase tracking-widest leading-loose">
                <li className="flex items-center gap-3">✦ Sculpt Nova Pro™ Device</li>
                <li className="flex items-center gap-3 text-gold/60">✦ 3x Analysis Gels</li>
                <li className="flex items-center gap-3 opacity-60 font-serif">✦ Precision Metric Set</li>
                <li className="flex items-center gap-3 opacity-60 font-serif italic text-gold/40">✦ Digital Masterclass</li>
              </ul>
              <button className="btn-secondary w-full">INITIALIZE</button>
            </div>
          </div>
        </section>

        {/* 90-Day Guarantee Section */}
        <section className="py-32 bg-white/[0.02] border-y border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mx-auto mb-10 rounded-sm">
              <ShieldCheck className="w-6 h-6 text-gold opacity-60" />
            </div>
            <h2 className="font-display italic text-4xl md:text-5xl mb-8 leading-tight">The 90-Day Logic Lock Guarantee™</h2>
            <p className="text-silver/60 text-lg md:text-xl leading-relaxed mb-12 font-serif italic">Analyze results for 90 cycles. If the logic fails to materialize, we offer a full de-deployment refund. Verified clinical protocols.</p>
            <div className="flex flex-wrap justify-center gap-10 text-[9px] font-accent font-bold tracking-[0.25em] text-gold/40 uppercase">
              <span className="flex items-center gap-2 border-b border-gold/10 pb-1"><Truck className="w-3 h-3" /> Express Deployment</span>
              <span className="flex items-center gap-2 border-b border-gold/10 pb-1"><Lock className="w-3 h-3" /> Secure Interface</span>
              <span className="flex items-center gap-2 border-b border-gold/10 pb-1"><RotateCcw className="w-3 h-3" /> Simple Rollback</span>
            </div>
          </div>
        </section>

        {/* Simple Newsletter/CTA */}
        <section className="py-32 px-6 max-w-5xl mx-auto">
          <div className="glass-card overflow-hidden relative border-l-4 border-l-gold">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
            <div className="p-12 md:p-24 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="max-w-md text-center md:text-left">
                <h3 className="font-display italic text-4xl md:text-5xl mb-6">Join The Laboratory</h3>
                <p className="text-silver/60 font-serif italic">Deconstruct your ritual. Receive technical analysis, maintenance guides, and priority deployment access.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="ARCHITECT_ID" 
                  className="bg-white/5 border border-white/10 rounded-sm px-6 py-4 outline-none focus:border-gold transition-all flex-grow font-accent text-[10px] tracking-widest text-pearl"
                />
                <button className="btn-primary px-10">INITIALIZE</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-nav-bg border-t border-white/5 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 bg-gold/40 rounded-sm"></div>
              <span className="font-display italic text-2xl tracking-[0.05em] text-pearl font-medium">SCULPT NOVA™</span>
            </div>
            <p className="text-silver/40 text-[11px] uppercase tracking-[0.15em] leading-relaxed mb-10 font-bold">Architects of logical body frameworks. Precise clinical deployment for the modern ritual.</p>
          </div>
          <div>
            <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-gold/60">Library</h4>
            <ul className="space-y-6 text-[10px] font-bold tracking-[0.2em] text-silver/60 uppercase">
              <li><a href="#" className="hover:text-gold transition-colors">Pro Engine</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Compute Gel</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Expansion Packs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-gold/60">Endpoints</h4>
            <ul className="space-y-6 text-[10px] font-bold tracking-[0.2em] text-silver/60 uppercase">
              <li><a href="#" className="hover:text-gold transition-colors">Onboarding</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Logistics</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Core Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-gold/60">Social</h4>
            <ul className="space-y-6 text-[10px] font-bold tracking-[0.2em] text-silver/60 uppercase">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] tracking-[0.3em] font-accent uppercase text-white/20 font-bold">
          <div>Build v4.2.0-stable // Registered Model</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-gold/40">Privacy Framework</a>
            <a href="#" className="hover:text-gold/40">User Agreement</a>
            <a href="#" className="hover:text-gold/40">Encryption</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
