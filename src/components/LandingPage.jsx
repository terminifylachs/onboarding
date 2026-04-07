import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ExternalLink, Play } from 'lucide-react'
import logo from '../../infos/logo.png'

const LandingPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } })
      
      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-headline', { y: 30, opacity: 0 }, '-=0.4')
        .from('.video-container', { scale: 0.95, opacity: 0, duration: 1.2 }, '-=0.6')
        .from('.cta-button', { y: 20, opacity: 0, duration: 0.6 }, '-=0.8')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-void-navy overflow-hidden flex flex-col">
      {/* Radial Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-highlight-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-signal-blue/5 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Terminify Logo" className="h-8 w-auto object-contain" />
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-12 pb-24 max-w-5xl mx-auto text-center flex-grow">
        <div className="hero-badge mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-void-depth border border-highlight-blue/20 backdrop-blur-sm">
          <span className="text-highlight-blue text-xs uppercase tracking-[0.2em] font-medium">✦ Onboarding</span>
        </div>

        <h1 className="hero-headline text-4xl md:text-6xl lg:text-7xl font-black mb-12 leading-[1.1] tracking-[-0.02em]">
          Dein nächster Schritt: <br />
          <span className="text-highlight-blue">Klicke das Video.</span>
        </h1>

        {/* Video Frame */}
        <div className="video-container relative w-full aspect-video max-w-4xl mx-auto mb-16 rounded-md border border-white/10 bg-void-depth shadow-2xl overflow-hidden">
          {/* macOS Traffic Lights */}
          <div className="absolute top-0 left-0 w-full h-10 bg-[#1A1C23] flex items-center px-4 border-b border-white/5 z-20">
            <div className="flex gap-2 mr-6">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-void-navy/50 rounded-xs h-6 flex items-center px-3 border border-white/5">
              <span className="text-[10px] text-muted-text font-mono truncate">terminify.io/onboarding-strategy-video</span>
            </div>
          </div>

          {/* Video Player Mockup */}
          <div className="w-full h-full pt-10 relative group">
            <div className="absolute inset-0 bg-void-navy/40 group-hover:bg-transparent transition-colors duration-500 z-10 flex items-center justify-center">
               <button className="w-20 h-20 rounded-full bg-[#E53935] text-white flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                 <Play className="w-8 h-8 fill-current ml-1" />
               </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
              alt="Strategy Video" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="cta-button">
          <Link
            to="/questionnaire"
            className="group relative inline-flex items-center gap-3 bg-signal-blue hover:bg-highlight-blue text-white px-10 py-5 rounded-xs font-bold text-lg transition-all duration-300 shadow-xl shadow-signal-blue/20 hover:shadow-highlight-blue/30"
          >
            Fragebogen starten
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-auto bg-void-depth/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-sm font-bold opacity-80 uppercase tracking-widest">Terminify Onboarding</span>
            <span className="text-xs text-muted-text">© 2026 Alle Rechte vorbehalten.</span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.15em] font-mono text-muted-text">
            <a href="#" className="hover:text-highlight-blue transition-colors">Impressum</a>
            <a href="#" className="hover:text-highlight-blue transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-highlight-blue transition-colors">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
