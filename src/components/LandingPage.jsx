import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import confetti from 'canvas-confetti'
import { ExternalLink, Volume2, VolumeX, Rocket } from 'lucide-react'
import logo from '../../infos/logo.png'
import logoHead from '../../infos/logo-robot-head-part.png'
import logoText from '../../infos/logo-text-part-terminify.png'
import cinematicSound from '../../infos/sound-2.wav'

const LandingPage = () => {
  const containerRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  // Using local cinematic sound
  const audioRef = useRef(new Audio(cinematicSound))

  const startExperience = () => {
    setHasStarted(true)
    // Unlock audio context for modern browsers
    audioRef.current.play().then(() => {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
    }).catch(e => console.log("Audio unlock failed", e))
  }

  useEffect(() => {
    if (!hasStarted) return

    audioRef.current.volume = 0.6

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
      
      // 1. Loading Dots Loop
      gsap.fromTo('.loading-dot', 
        { opacity: 0.1, scale: 0.4 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          stagger: {
            each: 0.15,
            repeat: -1,
            yoyo: true
          },
          ease: "sine.inOut"
        }
      )

      // 2. Welcome Intro Sequence
      tl.add(() => {
          // Play cinematic sound at the very beginning to capture the full buildup
          if (!isMuted) {
            audioRef.current.play().catch(e => console.log("Audio play failed", e))
          }
        }, 0.1)
        .to('.welcome-title', { 
          opacity: 1, 
          y: 0, 
          duration: 1.4,
          ease: "expo.out"
        })
        .fromTo('.logo-part-head', 
          { x: -80, opacity: 0, scale: 0.7, filter: 'blur(10px)' },
          { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.8, ease: "expo.out" },
          "-=0.6"
        )
        .fromTo('.logo-part-text', 
          { x: 80, opacity: 0, scale: 0.7, filter: 'blur(10px)' },
          { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.8, ease: "expo.out" },
          "-=1.8"
        )
        .add(() => {
          // Trigger confetti at the peak of the sound impact
          setTimeout(() => {
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 },
              colors: ['#4A6CF7', '#5B8AF5', '#FFFFFF'],
              disableForReducedMotion: true
            });
          }, 200);
        }, "-=1.0")
        .to('.welcome-screen', { 
          opacity: 0, 
          duration: 1.5, 
          ease: "power4.inOut",
          delay: 1.5,
          onComplete: () => {
            gsap.set('.welcome-screen', { display: 'none' })
          }
        })
      
      // 3. Hero Content Fade-in
      tl.from('.hero-headline', { y: 30, opacity: 0 }, '-=0.5')
        .from('.video-container', { scale: 0.98, opacity: 0, duration: 1.5 }, '-=0.8')
        .from('.cta-button', { y: 20, opacity: 0, duration: 0.8 }, '-=1')
    }, containerRef)

    return () => {
      ctx.revert()
      audioRef.current.pause()
    }
  }, [hasStarted])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-void-navy overflow-hidden flex flex-col font-sans">
      {/* Welcome Cinematic Overlay */}
      <div className="welcome-screen fixed inset-0 z-[100] bg-void-navy flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-highlight-blue/10 via-transparent to-transparent opacity-50" />
        
        {!hasStarted ? (
          <button 
            onClick={startExperience}
            className="group relative flex flex-col items-center gap-6"
          >
            <div className="w-24 h-24 rounded-full border border-highlight-blue/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-highlight-blue group-hover:bg-highlight-blue/5 shadow-[0_0_50px_rgba(91,138,245,0.1)]">
                <Rocket className="w-8 h-8 text-highlight-blue animate-pulse" />
            </div>
            <span className="text-white/60 uppercase tracking-[0.4em] text-xs font-bold group-hover:text-white transition-colors">
                Onboarding starten
            </span>
            <div className="absolute -inset-20 bg-highlight-blue/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </button>
        ) : (
          <>
            {/* Audio Toggle */}
            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-8 right-8 z-[110] p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            <div className="relative flex flex-col items-center text-center">
              <h2 className="welcome-title opacity-0 translate-y-4 text-body-text uppercase tracking-[0.3em] font-medium text-xs md:text-sm mb-12">
                Willkommen bei
              </h2>
              
              <div className="flex items-center gap-6 md:gap-8 h-12 md:h-24 px-12">
                <img 
                  src={logoHead} 
                  alt="" 
                  className="logo-part-head h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(91,138,245,0.5)]" 
                />
                <img 
                  src={logoText} 
                  alt="Terminify" 
                  className="logo-part-text h-[70%] md:h-[85%] w-auto object-contain" 
                />
              </div>

              <div className="mt-16 flex gap-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="loading-dot w-1.5 h-1.5 rounded-full bg-highlight-blue shadow-[0_0_10px_rgba(91,138,245,0.8)]" 
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Radial Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-highlight-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-signal-blue/5 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-void-navy/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-center">
          <img src={logo} alt="Terminify Logo" className="h-6 w-auto object-contain" />
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-24 max-w-[1800px] mx-auto text-center flex-grow">
        <h1 className="hero-headline text-2xl md:text-3xl lg:text-4xl font-black mb-12 leading-[1.1] tracking-[-0.02em]">
          <span className="text-highlight-blue">Schritt 1:</span> Schau dir das Video an.
        </h1>

        {/* Video Frame */}
        <div className="video-container relative w-full max-w-[1800px] mx-auto mb-16 rounded-md border border-white/10 bg-void-depth shadow-2xl overflow-hidden">
          {/* macOS Traffic Lights */}
          <div className="w-full h-10 bg-[#1A1C23] flex items-center px-4 border-b border-white/5">
            <div className="flex gap-2 mr-6">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 bg-void-navy/50 rounded-xs h-6 flex items-center px-3 border border-white/5">
              <span className="text-[10px] text-muted-text font-mono truncate">🚀 Terminify Onboarding-Video</span>
            </div>
          </div>

          {/* Wistia Responsive Video Embed */}
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://fast.wistia.net/embed/iframe/t8l8uaniys?seo=true&videoFoam=true&qualityMin=1080&qualityMax=2160"
              title="Terminify Onboarding-Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>

        {/* Step 2 Heading */}
        <h2 className="hero-headline text-2xl md:text-3xl lg:text-4xl font-black mb-12 leading-[1.1] tracking-[-0.02em]">
          <span className="text-highlight-blue">Schritt 2:</span> Fülle den Fragebogen aus.
        </h2>

        {/* CTA */}
        <div className="cta-button">
          <Link
            to="/fragebogen"
            target="_blank"
            rel="noopener noreferrer"
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
            <span className="text-xs text-muted-text">Terminify © 2026 Alle Rechte vorbehalten.</span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.15em] font-mono text-muted-text">
            <a href="https://vsl.terminify.ai/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight-blue transition-colors">Impressum</a>
            <a href="https://vsl.terminify.ai/datenschutz/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight-blue transition-colors">Datenschutz</a>
            <a href="https://vsl.terminify.ai/agb/" target="_blank" rel="noopener noreferrer" className="hover:text-highlight-blue transition-colors">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
