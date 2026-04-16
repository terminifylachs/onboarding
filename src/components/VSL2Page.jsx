import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  XCircle,
  Star,
  Sparkles,
  Zap,
  Target,
  Bot,
  LineChart,
  ShieldCheck,
  Users,
  Rocket,
  Phone,
  Clock,
  TrendingUp,
  PlayCircle,
  Quote,
} from 'lucide-react'
import logo from '../../infos/logo.png'

const Pill = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-highlight-blue/30 bg-highlight-blue/5 backdrop-blur-sm">
    <Sparkles className="w-3.5 h-3.5 text-highlight-blue" />
    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-highlight-blue">
      {children}
    </span>
  </div>
)

const SectionLabel = ({ children }) => (
  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight-blue mb-4">
    — {children}
  </div>
)

const CTAButton = ({ children, secondary }) => (
  <a
    href="https://vsl.terminify.ai/termin"
    className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xs font-bold text-sm tracking-wide transition-all duration-300 ${
      secondary
        ? 'border border-white/15 text-white hover:border-highlight-blue hover:bg-highlight-blue/5'
        : 'bg-signal-blue text-white hover:bg-highlight-blue shadow-xl shadow-signal-blue/20 hover:shadow-highlight-blue/30'
    }`}
  >
    <Calendar className="w-4 h-4" />
    {children}
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>
)

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-proof-amber text-proof-amber" />
    ))}
  </div>
)

const VSL2Page = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-void-navy text-white font-sans overflow-hidden">
      {/* Global radial glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-highlight-blue/[0.07] blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-signal-blue/[0.08] blur-[140px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 sticky top-0 bg-void-navy/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <img src={logo} alt="Terminify" className="h-6 w-auto object-contain" />
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold text-body-text">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#cases" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#about" className="hover:text-white transition-colors">Über uns</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </nav>
          <a
            href="https://vsl.terminify.ai/termin"
            className="inline-flex items-center gap-2 bg-signal-blue hover:bg-highlight-blue text-white px-5 py-2.5 rounded-xs font-bold text-xs uppercase tracking-[0.15em] transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            Termin buchen
          </a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="relative z-10 pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="reveal mb-8 flex justify-center">
            <Pill>✦ Die neue Generation an KI-Terminbuchung</Pill>
          </div>

          <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-[-0.02em] mb-8">
            Wir transformieren Coaches & Agenturen in{' '}
            <span className="text-highlight-blue">vollautomatisierte Termin-Maschinen.</span>
          </h1>

          <p className="reveal max-w-3xl mx-auto text-base md:text-lg text-body-text leading-[1.7] mb-12">
            → Der unsichtbare KI-Agent hinter Deutschlands termin-stärksten Coaches, Agenturen
            und Sales-Teams. Schluss mit zähen Lead-Listen, kalten DMs und No-Shows. Terminify
            qualifiziert, bucht und reminded – während du schläfst. Damit dein Kalender
            kontinuierlich mit kaufbereiten Leads gefüllt ist.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <CTAButton>Strategie-Call buchen</CTAButton>
            <CTAButton secondary>Case Studies ansehen</CTAButton>
          </div>

          {/* Video Frame */}
          <div className="reveal video-container relative w-full max-w-[1100px] mx-auto rounded-[14px] border border-white/10 bg-void-depth shadow-2xl overflow-hidden">
            <div className="w-full h-10 bg-[#1A1C23] flex items-center px-4 border-b border-white/5">
              <div className="flex gap-2 mr-6">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 bg-void-navy/50 rounded-xs h-6 flex items-center px-3 border border-white/5">
                <span className="text-[10px] text-muted-text font-mono truncate">
                  🔒 vsl.terminify.ai — Strategie-Video
                </span>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-void-depth via-card-surface to-void-navy flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-highlight-blue/60 hover:text-highlight-blue hover:scale-110 transition-all cursor-pointer" />
            </div>
          </div>

          {/* Social Proof Row */}
          <div className="reveal mt-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-highlight-blue" />
              <div className="text-left">
                <div className="text-xl font-black text-white">+320</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-text">
                  Coaches & Agenturen
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Stars />
              <div className="text-left">
                <div className="text-xl font-black text-white">Exzellent</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-text">
                  84+ Reviews
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-close-green" />
              <div className="text-left">
                <div className="text-xl font-black text-white">+45.000</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-text">
                  Termine automatisiert
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EXCLUSIVE BAND ============ */}
      <section className="relative z-10 py-20 border-y border-white/5 bg-void-depth/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>Exklusiv für Coaches & Agenturen ab 10k€/Monat</SectionLabel>
          <h2 className="reveal text-3xl md:text-5xl font-black leading-[1.1] tracking-[-0.02em] mb-6">
            Etablierte Coaches & Agenturen nutzen Terminify,{' '}
            <span className="text-highlight-blue">um ihren Kalender zu dominieren.</span>
          </h2>
          <p className="reveal text-body-text text-base md:text-lg mb-10 max-w-3xl mx-auto leading-[1.7]">
            → Skaliere auf 100+ qualifizierte Strategie-Termine pro Monat – ohne Sales-Agent,
            ohne Setter, ohne manuelle Lead-Qualifikation.
          </p>
          <div className="reveal flex justify-center mb-10">
            <CTAButton>Strategie-Call buchen</CTAButton>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-text">
            320+ Coaches, Agenturen & D2C Brands vertrauen bereits auf Terminify
          </p>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel>Features</SectionLabel>
            <h2 className="reveal text-3xl md:text-5xl font-black leading-[1.1] tracking-[-0.02em] max-w-4xl mx-auto">
              Wir installieren unsere <span className="text-highlight-blue">Termin-Maschine</span>{' '}
              direkt in dein Business.
            </h2>
            <p className="reveal mt-6 text-body-text max-w-2xl mx-auto leading-[1.7]">
              Die meisten Coaches und Agenturen verlieren 70% ihrer Leads in kalten
              DM-Chats und Follow-Up-Ping-Pong. Terminify übernimmt den Prozess komplett –
              vom Erstkontakt bis zum bestätigten Termin im Kalender.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Zap,
                title: 'Schneller als jedes Sales-Setter-Team.',
                body:
                  'Terminify reagiert in unter 60 Sekunden auf jeden neuen Lead – 24/7, in perfektem Ton, kontextsensitiv. Während die Konkurrenz noch schläft, ist der Termin schon im Kalender.',
              },
              {
                icon: Bot,
                title: 'KI-Qualifikation auf Senior-Sales-Niveau.',
                body:
                  'Unser Agent stellt die richtigen Fragen, erkennt Budget, Bedarf und Timing – und disqualifiziert tire-kicker automatisch. Nur hot leads kommen in deinen Kalender.',
              },
              {
                icon: ShieldCheck,
                title: 'No-Show-Rate unter 12%.',
                body:
                  'Multi-Channel-Reminder über WhatsApp, SMS und E-Mail. Automatische Re-Scheduling-Flows bei Absagen. Deine Show-Up-Rate steigt nachweislich um 40–65%.',
              },
              {
                icon: LineChart,
                title: 'Ein Dashboard für deinen gesamten Funnel.',
                body:
                  'Lead-Quelle, Qualifikations-Rate, Show-Ups, Close-Rate, Revenue – alles in einem Dashboard. Echtzeit, ohne Zapier-Spaghetti. Endlich weißt du, wo du stehst.',
              },
            ].map((f, i) => {
              const Icon = f.icon
              return (
                <div
                  key={i}
                  className="reveal group p-8 rounded-md bg-card-surface/40 border border-white/5 hover:border-highlight-blue/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xs bg-highlight-blue/10 border border-highlight-blue/30 flex items-center justify-center mb-6 group-hover:bg-highlight-blue/20 transition-colors">
                    <Icon className="w-5 h-5 text-highlight-blue" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight">{f.title}</h3>
                  <p className="text-body-text text-sm leading-[1.7]">{f.body}</p>
                </div>
              )
            })}
          </div>

          {/* Benefit Tags */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {[
              'Hoher Cashflow',
              'Plug & Play Setup',
              'Für seriöse Coaches',
              'Kalender-Dominanz',
              'Mehr Umsatz pro Lead',
              'Automatisiert 24/7',
              'Native CRM-Integration',
              'DSGVO-konform',
            ].map((tag, i) => (
              <span
                key={i}
                className="reveal text-[11px] uppercase tracking-[0.15em] font-semibold text-body-text px-4 py-2 rounded-full border border-white/10 bg-card-surface/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GROWTH PHASES ============ */}
      <section className="relative z-10 py-28 bg-void-depth/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Der richtige Pfad für deine Phase</SectionLabel>
            <h2 className="reveal text-3xl md:text-5xl font-black leading-[1.1] tracking-[-0.02em] mb-6">
              In welcher Phase{' '}
              <span className="text-highlight-blue">steckst du aktuell?</span>
            </h2>
            <p className="reveal text-body-text max-w-2xl mx-auto leading-[1.7]">
              Wir haben in den letzten 3 Jahren mehr als 320 Coaches und Agenturen bei ihrem
              Termin-Wachstum begleitet. Je nachdem, wo du stehst, gibt es den passenden Pfad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal p-10 rounded-md bg-card-surface/60 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-highlight-blue/10 blur-[60px] rounded-full" />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight-blue mb-3">
                  Phase 1 — Launch
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                  Terminify Launchpad
                </h3>
                <p className="text-body-text text-sm leading-[1.7] mb-8">
                  Wir bringen dich auf deine ersten 20–40 qualifizierten Strategie-Termine pro
                  Monat. Für Coaches und Agenturen, die noch keine konstanten 5-stelligen
                  Monatsumsätze fahren und ein planbares System aufbauen wollen.
                </p>
                <a
                  href="https://vsl.terminify.ai/launchpad"
                  className="inline-flex items-center gap-2 text-highlight-blue font-bold text-sm hover:gap-3 transition-all"
                >
                  zu Terminify Launchpad <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="reveal p-10 rounded-md bg-card-surface/60 border border-highlight-blue/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-signal-blue/20 blur-[60px] rounded-full" />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight-blue mb-3">
                  Phase 2 — Skalierung
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                  Terminify Dominator
                </h3>
                <p className="text-body-text text-sm leading-[1.7] mb-8">
                  Wir transformieren dein Business in eine Termin-Maschine mit 100+ Strategie-
                  Calls pro Monat. Wenn du bereits 20k+/Monat fährst, kannst du dir einen Call
                  buchen und dich auf eine Zusammenarbeit bewerben.
                </p>
                <a
                  href="https://vsl.terminify.ai/termin"
                  className="inline-flex items-center gap-2 text-highlight-blue font-bold text-sm hover:gap-3 transition-all"
                >
                  Termin buchen <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SURVIVAL vs TERMIN-MACHINE ============ */}
      <section className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Survival Mode vs. Termin-Maschine</SectionLabel>
            <h2 className="reveal text-3xl md:text-5xl font-black leading-[1.1] tracking-[-0.02em] mb-6 max-w-4xl mx-auto">
              Du willst den Absprung{' '}
              <span className="text-highlight-blue">
                vom manuellen Sales-Chaos zur planbaren Termin-Maschine?
              </span>
            </h2>
            <p className="reveal text-body-text max-w-3xl mx-auto leading-[1.7]">
              Die meisten Coaches und Agenturen wissen nicht, warum es bei den Anderen läuft
              – und bei ihnen nicht. Die Antwort liegt für sie hinter verschlossenen Türen.
              Hier sind beide Welten nebeneinander.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Survival */}
            <div className="reveal p-10 rounded-md bg-card-surface/30 border border-reject-red/20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-reject-red/10 border border-reject-red/30 mb-6">
                <XCircle className="w-3.5 h-3.5 text-reject-red" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-reject-red">
                  Survival Mode
                </span>
              </div>
              <h3 className="text-2xl font-black mb-3">Das klassische Sales-Modell ist broke(n).</h3>
              <p className="text-body-text text-sm leading-[1.7] mb-8">
                Es herrscht Frust und Unsicherheit, weil klassische Setter-Teams,
                Ads-ohne-Plan und Copy-Paste-Funnels nicht mehr die Ergebnisse liefern.
              </p>
              <ul className="space-y-4">
                {[
                  'Einbrechende Ads-Performance, unvorhersehbare Lead-Kosten',
                  'Instabile Monatsumsätze, jeder Monat fühlt sich wie Roulette an',
                  'Manuelle Lead-Qualifikation frisst 4–6 Stunden pro Tag',
                  'No-Show-Rate von 40%+, verbrannte Kalender-Slots',
                  '70% der DM-Leads versanden ohne Follow-Up',
                  'Setter-Hopping: jeder neue Sales-Mitarbeiter startet bei Null',
                  'Extremer Stress, weil Sales am CEO hängt',
                  'Keine Datenbasis – Bauchgefühl statt KPIs',
                  'Vertrauen in Agenturen & Coaches verloren',
                  'Konstant das Gefühl, dass die anderen etwas wissen, was man selbst nicht weiß',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-body-text">
                    <XCircle className="w-4 h-4 text-reject-red flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Termin-Maschine */}
            <div className="reveal p-10 rounded-md bg-card-surface/30 border border-close-green/20">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-close-green/10 border border-close-green/30 mb-6">
                <CheckCircle2 className="w-3.5 h-3.5 text-close-green" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-close-green">
                  Termin-Maschine
                </span>
              </div>
              <h3 className="text-2xl font-black mb-3">Unser Marktführer-Modell.</h3>
              <p className="text-body-text text-sm leading-[1.7] mb-8">
                Unser Modell ist darauf ausgelegt, nachhaltig planbare Termine zu schaffen –
                nicht auf kurzfristigen Trick. Realer Cashflow statt Vanity Metrics.
              </p>
              <ul className="space-y-4">
                {[
                  'Konstante 80–150 qualifizierte Calls pro Monat, planbar',
                  'Lead-Response-Zeit unter 60 Sekunden, 24/7 automatisiert',
                  'No-Show-Rate unter 12% dank Multi-Channel-Reminder',
                  'KI qualifiziert auf Senior-Sales-Niveau – nur Hot Leads im Kalender',
                  'Ein Dashboard für Leads, Shows, Closes, Revenue',
                  'Markt­überdurchschnittliche Close-Rate von 25–40%',
                  'Dein CEO-Zeit zurück – kein manuelles DM-Geballer mehr',
                  'Sales-System, das auch ohne dich läuft',
                  'Planbares Wachstum + echter Vermögensaufbau',
                  'Deine Konkurrenz fragt sich, wie du das machst',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-body-text">
                    <CheckCircle2 className="w-4 h-4 text-close-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="reveal text-2xl md:text-4xl font-black max-w-4xl mx-auto leading-[1.15] tracking-[-0.02em] mb-10">
              Wir machen deinen Kalender zum{' '}
              <span className="text-highlight-blue">Umsatz-Albtraum deiner Konkurrenz.</span>
            </h3>
            <CTAButton>Strategie-Call buchen</CTAButton>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section id="cases" className="relative z-10 py-28 bg-void-depth/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="reveal text-3xl md:text-5xl font-black leading-[1.1] tracking-[-0.02em]">
              Was unsere Kunden{' '}
              <span className="text-highlight-blue">über Terminify sagen.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Kevin M.',
                role: 'Sales Coach',
                niche: 'High-Ticket Coaching',
                quote:
                  'Terminify nimmt mir die unternehmerische Angst vor dem nächsten Monat. Mein Kalender ist planbar – und ich weiß morgens, wie viele Calls ich habe. Das gab es vorher schlicht nicht.',
              },
              {
                name: 'Stephan K.',
                role: 'Agentur-Inhaber',
                niche: 'Performance-Marketing',
                quote:
                  'Endlich Planungssicherheit. Ich brauchte keinen Setter, der mir ein paar Leads bucht – ich brauchte ein System, das 24/7 qualifiziert. Genau das ist Terminify.',
              },
              {
                name: 'Erik B.',
                role: 'Fitness-Coach',
                niche: 'Online Coaching',
                quote:
                  'Ich schätze vor allem die Response-Zeit. Meine Leads werden in Sekunden angeschrieben – das merkt man direkt an der Show-Up-Rate. Vorher lag ich bei 55%, jetzt bei 88%.',
              },
              {
                name: 'Phil R.',
                role: 'Consultant',
                niche: 'B2B Beratung',
                quote:
                  'Ich würde Terminify jedem empfehlen, der nicht nur 3 Monate, sondern langfristig seinen Kalender planbar haben will. Der Unterschied zu klassischen CRMs ist krass.',
              },
              {
                name: 'Daniel S.',
                role: 'Agentur-Gründer',
                niche: 'Social Media Marketing',
                quote:
                  'Wir haben unsere Termine in 4 Monaten verfünffacht – ohne mehr Ad-Spend. Ich würde Terminify jedem Coach empfehlen, der seinen Sales-Funnel ernst nimmt.',
              },
              {
                name: 'Niklas & Stefan',
                role: 'Coaching-Duo',
                niche: 'Fitness & Lifestyle',
                quote:
                  'Wir haben unsere Termin-Ziele durch Terminify bereits im ersten Quartal deutlich übertroffen. Das Team ist jederzeit erreichbar und denkt mit.',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="reveal p-8 rounded-md bg-card-surface/50 border border-white/5 hover:border-highlight-blue/20 transition-all duration-300 flex flex-col"
              >
                <Quote className="w-6 h-6 text-highlight-blue/40 mb-4" />
                <p className="text-body-text text-sm leading-[1.7] mb-6 flex-grow">"{t.quote}"</p>
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-sm font-black text-white">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-muted-text">
                        {t.role}
                      </div>
                    </div>
                    <Stars />
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-highlight-blue font-semibold">
                    {t.niche}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNER QUOTES ============ */}
      <section className="relative z-10 py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Partner & Branchen-Stimmen</SectionLabel>
            <h2 className="reveal text-3xl md:text-4xl font-black leading-[1.15] tracking-[-0.02em] max-w-3xl mx-auto">
              Was Agentur-Partner & Branchen­experten{' '}
              <span className="text-highlight-blue">über unsere Arbeit sagen.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  'Wir arbeiten mit vielen Sales-Tools. Die Kombination aus KI-Qualifikation und echter Show-Up-Optimierung, die Terminify bietet, ist aktuell einzigartig am deutschen Markt.',
                name: 'Marcel P.',
                role: 'CEO, Lead-Gen Agentur',
              },
              {
                quote:
                  'Wir senden regelmäßig Kunden an Terminify – die Wachstumssprünge im Kalender sind jedes Mal beeindruckend. Planbarkeit ist eben alles.',
                name: 'Anna L.',
                role: 'Coach-Business-Strategin',
              },
              {
                quote:
                  'Ich habe viele Sales-Automations-Tools gesehen. Terminify sticht durch die Detailtiefe hervor – vom Prompt-Tuning bis zur WhatsApp-Integration.',
                name: 'Tim K.',
                role: 'Funnel-Strategist',
              },
              {
                quote:
                  'Als wir intern unsere Partner-Tools evaluiert haben, ist uns Terminify besonders positiv aufgefallen – sowohl in Sachen Implementation als auch Customer Success.',
                name: 'Lena H.',
                role: 'Partnership Manager, SaaS',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="reveal p-8 rounded-md bg-card-surface/30 border border-white/5"
              >
                <Quote className="w-5 h-5 text-highlight-blue/40 mb-4" />
                <p className="text-body-text text-sm leading-[1.7] mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-highlight-blue/10 border border-highlight-blue/30 flex items-center justify-center text-xs font-black text-highlight-blue">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-muted-text">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRESS / MEDIA ============ */}
      <section className="relative z-10 py-24 bg-void-depth/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>Bekannt aus Medien & Konferenzen</SectionLabel>
          <h3 className="reveal text-2xl md:text-4xl font-black leading-[1.15] tracking-[-0.02em] mb-14">
            Featured in den{' '}
            <span className="text-highlight-blue">relevanten Sales & Tech-Medien.</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'OMR Podcast',
              'Sales Excellence',
              'DACH SaaS Summit',
              'Founder Stories',
              'Gründerszene',
              'Product Hunt',
              't3n Magazin',
              'Digitale Leute',
            ].map((m, i) => (
              <div
                key={i}
                className="reveal h-20 rounded-md bg-card-surface/40 border border-white/5 flex items-center justify-center"
              >
                <span className="text-body-text font-bold text-sm tracking-wide">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES / TARGET ============ */}
      <section className="relative z-10 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Für wen Terminify funktioniert</SectionLabel>
            <h3 className="reveal text-3xl md:text-5xl font-black leading-[1.1] tracking-[-0.02em] mb-6 max-w-4xl mx-auto">
              Marktführer werden durch{' '}
              <span className="text-highlight-blue">unser Growth Operations System.</span>
            </h3>
            <p className="reveal text-body-text max-w-3xl mx-auto leading-[1.7]">
              Unser breites Portfolio an erfolgreichen Cases erlaubt uns branchenspezifische
              Playbooks. Kombiniert mit unserem Growth-Ops-Team erreichen wir in jeder Nische
              absolute Termin-Dominanz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'High-Ticket Coaches', d: 'Business, Mindset, Sales, Karriere, Crypto, Real Estate …' },
              { t: 'Performance-Agenturen', d: 'Meta, Google, TikTok, LinkedIn, Funnel-Build, SEO …' },
              { t: 'Fitness & Health', d: 'Online-Coaching, Personal Training, Nutrition, Rehab …' },
              { t: 'SaaS & B2B Tech', d: 'Demo-Booking, Enterprise Sales, Outbound, Inbound …' },
              { t: 'Consulting & Beratung', d: 'Strategie, Finance, M&A, Legal, HR, Tax …' },
              { t: 'Kreativ-Unternehmer', d: 'Fotografen, Videografen, Designer, UGC, Copywriter …' },
              { t: 'Immobilien-Makler', d: 'Off-Market, Leads, Besichtigungs-Termine, Investoren …' },
              { t: 'Education & Kurse', d: 'Online-Kurse, Cohort-based, Bootcamps, Zertifizierungen …' },
            ].map((c, i) => (
              <div
                key={i}
                className="reveal p-6 rounded-md bg-card-surface/40 border border-white/5 hover:border-highlight-blue/20 transition-colors"
              >
                <Target className="w-4 h-4 text-highlight-blue mb-4" />
                <div className="text-base font-black text-white mb-2">{c.t}</div>
                <div className="text-xs text-body-text leading-[1.6]">{c.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <CTAButton>Strategie-Call buchen</CTAButton>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="relative z-10 py-28 bg-void-depth/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Über Terminify</SectionLabel>
            <h2 className="reveal text-3xl md:text-5xl font-black leading-[1.1] tracking-[-0.02em] mb-6">
              Wir skalieren nicht nur deinen Kalender,{' '}
              <span className="text-highlight-blue">sondern auch deinen Kontostand.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { num: 'Seit 2023', label: 'am Markt' },
              { num: '15+', label: 'KI- & Sales-Experten' },
              { num: 'Berlin/München', label: 'Standorte' },
            ].map((s, i) => (
              <div
                key={i}
                className="reveal p-8 rounded-md bg-card-surface/40 border border-white/5 text-center"
              >
                <div className="text-2xl font-black text-highlight-blue mb-2">{s.num}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-text">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal grid md:grid-cols-2 gap-10 p-10 rounded-md bg-card-surface/40 border border-white/5">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight-blue mb-3">
                Founder & CEO
              </div>
              <h3 className="text-3xl font-black mb-4">Der Kopf hinter Terminify</h3>
              <p className="text-body-text text-sm leading-[1.7] mb-4">
                Seit 2018 in der Sales-Automation und KI-Welt unterwegs. Vor Terminify hat das
                Gründerteam eigene Coaching- und Agentur-Brands aufgebaut – und am eigenen Leib
                gemerkt, wie kaputt klassische Setter-Modelle und CRMs sind.
              </p>
              <p className="text-body-text text-sm leading-[1.7]">
                Aus diesem Schmerz heraus ist Terminify entstanden: ein System, das Coaches
                und Agenturen genau das gibt, was sie bisher nie hatten – einen vollautomatisch
                funktionierenden Sales-Kalender.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-text mb-3">
                Track Record
              </div>
              {[
                '2018: Erste Sales-Automation-Experimente mit GPT-2',
                '2020: Aufbau eigener Coaching-Brand (7-stellig)',
                '2022: Exit der Coaching-Brand, Fokus auf KI',
                '2023: Gründung von Terminify',
                '2024: 100+ aktive Coaches & Agenturen auf der Plattform',
                '2025: +45.000 automatisierte Termine, 320+ Kunden',
              ].map((line, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-highlight-blue mt-2 flex-shrink-0" />
                  <span className="text-body-text">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="kontakt" className="relative z-10 py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="reveal mb-8 flex justify-center">
            <Pill>✦ Letzter Schritt</Pill>
          </div>
          <h2 className="reveal text-4xl md:text-6xl font-black leading-[1.05] tracking-[-0.02em] mb-8">
            Bereit, deinen Kalender{' '}
            <span className="text-highlight-blue">zur Termin-Maschine zu machen?</span>
          </h2>
          <p className="reveal text-body-text text-base md:text-lg leading-[1.7] mb-12">
            Buche dir einen kostenfreien Strategie-Call. In 30 Minuten zeigen wir dir, wie
            dein Setup bei Terminify aussehen würde – inklusive konkreter Termin-Prognose und
            Bottleneck-Analyse deines aktuellen Sales-Prozesses.
          </p>
          <div className="reveal flex justify-center">
            <CTAButton>Strategie-Call buchen</CTAButton>
          </div>
          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-text">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              30 Min
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% kostenfrei
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              Unverbindlich
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative z-10 border-t border-white/5 bg-void-depth/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <img src={logo} alt="Terminify" className="h-6 w-auto object-contain mb-6" />
              <p className="text-body-text text-sm leading-[1.7] max-w-sm mb-6">
                Die KI-Termin-Maschine für Coaches, Agenturen und Sales-Teams, die ihren
                Kalender planbar machen wollen.
              </p>
              <div className="text-xs text-muted-text leading-[1.7]">
                Terminify GmbH<br />
                info@terminify.ai
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
                Produkt
              </div>
              <ul className="space-y-3 text-sm text-body-text">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="https://vsl.terminify.ai/termin" className="hover:text-white transition-colors">Termin buchen</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-4">
                Legal
              </div>
              <ul className="space-y-3 text-sm text-body-text">
                <li><a href="https://vsl.terminify.ai/impressum/" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="https://vsl.terminify.ai/datenschutz/" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="https://vsl.terminify.ai/agb/" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-muted-text leading-[1.7] max-w-3xl">
              *Haftungsausschluss: Die hier aufgeführten Ergebnisse sind in der Regel nur
              erreichbar, wenn du an einem kostenfreien Strategie-Call teilnimmst und unser
              System korrekt implementierst. Kein "schnell-reich-werden"-Programm. Die Angebote
              richten sich ausdrücklich an Gewerbetreibende und Unternehmer im Sinne des §14 BGB.
            </p>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-text whitespace-nowrap">
              © 2026 Terminify
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default VSL2Page
