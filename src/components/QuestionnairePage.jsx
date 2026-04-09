import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { CheckCircle2, Save, Send, ChevronLeft, Upload, AlertCircle, X, Image as ImageIcon, Users, Settings, Database, MessageSquare } from 'lucide-react'
import logo from '../../infos/logo.png'

// Custom hook for localStorage persistence
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

const Input = ({ label, placeholder, name, value, onChange, type = "text", error }) => (
  <div className="flex flex-col gap-2.5 w-full">
    <label className="text-xs uppercase tracking-[0.1em] text-body-text font-bold flex justify-between">
      <span>{label} <span className="text-reject-red">*</span></span>
      {error && <span className="text-reject-red text-[10px] normal-case font-medium">{error}</span>}
    </label>
    <input 
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-card-surface border ${error ? 'border-reject-red/50' : 'border-white/10'} rounded-xs px-4 py-4 text-base focus:border-signal-blue focus:outline-none transition-all placeholder:text-muted-text/60 text-white`}
    />
  </div>
)

const Textarea = ({ label, placeholder, name, value, onChange, error }) => (
  <div className="flex flex-col gap-2.5 w-full">
    <label className="text-xs uppercase tracking-[0.1em] text-body-text font-bold flex justify-between">
      <span>{label} <span className="text-reject-red">*</span></span>
      {error && <span className="text-reject-red text-[10px] normal-case font-medium">{error}</span>}
    </label>
    <textarea 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className={`bg-card-surface border ${error ? 'border-reject-red/50' : 'border-white/10'} rounded-xs px-4 py-4 text-base focus:border-signal-blue focus:outline-none transition-all placeholder:text-muted-text/60 text-white resize-none`}
    />
  </div>
)

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-4 mb-8 pt-12 first:pt-0">
    <div className="w-10 h-10 rounded-xs bg-signal-blue/10 border border-signal-blue/20 flex items-center justify-center text-signal-blue">
      <Icon className="w-5 h-5" />
    </div>
    <h2 className="text-2xl font-black tracking-tight">{title}</h2>
  </div>
)

const QuestionnairePage = () => {
  const [formData, setFormData] = useLocalStorage('terminify-onboarding-data', {
    fullName: '', email: '', instagram: '',
    firma: '', brand: '', seitWann: '', ausbildungen: '',
    angebotWas: '', angebotName: '', angebotFuerWen: '',
    hauptproblem: '', transformation: '', dauer: '', format: '',
    inhalt: '', methode: '', unterschied: '',
    kundenAnzahl: '', bewertungen: '', referenzen: '',
    gespraechName: '', gespraechDauer: '', gespraechArt: '', gespraechInhalt: '', gespraechWer: '',
    disqualifikation: '', followUp: '', setterStatus: '', mitarbeiterEmails: '',
    crm: '', manyChat: '', besonderheiten: '', sonstiges: ''
  })

  const [errors, setErrors] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  const containerRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const fillTestData = () => {
    setFormData({
      fullName: 'Max Mustermann',
      email: 'max@mustermann-consulting.de',
      instagram: '@max_power_coaching',
      firma: 'Mustermann Consulting GmbH',
      brand: 'Max Power Coaching',
      seitWann: 'Seit Januar 2020',
      ausbildungen: 'Zertifizierter Business Coach, Master in Psychologie, 10 Jahre Vertriebserfahrung',
      angebotWas: '1:1 Mentoring für Agenturinhaber zur Skalierung auf 50k Monatsumsatz',
      angebotName: 'Agency Accelerator Platinum',
      angebotFuerWen: 'Agenturinhaber zwischen 10k und 25k Monatsumsatz',
      hauptproblem: 'Zu viel Zeit im Tagesgeschäft gefangen, keine systematische Kundengewinnung',
      transformation: 'Vom Selbstständigen zum Unternehmer, 40h Arbeitswoche bei doppeltem Umsatz',
      dauer: '6 Monate',
      format: 'Hybrid (Online-Plattform + wöchentliche Live-Calls)',
      inhalt: 'Vollständige Sales-Skripte, CRM-Setup, Mitarbeiter-Onboarding-Prozess, WhatsApp-Support',
      methode: 'Die "Terminify-Pipeline" für automatisierte Qualifizierung',
      unterschied: 'Keine graue Theorie, sondern praxiserprobte Systeme aus über 100 eigenen Projekten',
      kundenAnzahl: 'Über 150 erfolgreiche Absolventen',
      bewertungen: '4.9 Sterne auf Trustpilot, zahlreiche Video-Testimonials auf der Website',
      referenzen: 'Bekannt aus dem Handelsblatt, Gast im "Scale Up" Podcast',
      gespraechName: 'Potenzial-Analyse',
      gespraechDauer: '45 Minuten',
      gespraechArt: 'Zoom Video-Call',
      gespraechInhalt: 'Ist-Zustand Analyse, Engpass-Identifikation, Fahrplan-Erstellung',
      gespraechWer: 'Ich selbst oder mein Senior Strategie-Berater',
      disqualifikation: 'Unter 5k Umsatz, keine Investitionsbereitschaft, "Lern-Resistenz"',
      followUp: 'Ja, per WhatsApp mit personalisierter Video-Botschaft',
      setterStatus: '2 festangestellte DM-Setter',
      mitarbeiterEmails: 'vertrieb@mustermann.de, support@mustermann.de',
      crm: 'GoHighLevel',
      manyChat: 'Ja, für die Lead-Qualifizierung in DMs',
      besonderheiten: 'Wir arbeiten nur mit Agenturen aus dem DACH-Raum zusammen',
      sonstiges: 'Freuen uns auf die Zusammenarbeit und die Automatisierung!'
    })
    setErrors({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files)
    handleFiles(files)
  }

  const handleFiles = (files) => {
    const validImageTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    const validFiles = files.filter(file => validImageTypes.includes(file.type))
    setUploadedFiles(prev => [...prev, ...validFiles])
  }

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.form-section', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.form-section',
          start: 'top 85%'
        }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const validate = () => {
    const newErrors = {}
    
    // Check all fields in formData
    Object.keys(formData).forEach(key => {
      const value = formData[key]
      if (typeof value === 'string' && !value.trim()) {
        newErrors[key] = "Pflichtfeld"
      }
    })

    // Special check for email format
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ungültiges Format"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e?.preventDefault()
    
    if (!validate()) {
      const firstError = document.querySelector('.text-reject-red')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    setIsSubmitting(true)
    
    try {
      // Helper function to convert file to base64
    const fileToBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Teilt den String beim Komma und nimmt den zweiten Teil (den Content)
        const base64Content = reader.result.split(',')[1];
        resolve(base64Content);
      };
      reader.onerror = error => reject(error);
    });

      const base64Files = await Promise.all(uploadedFiles.map(async (file) => {
        const base64Data = await fileToBase64(file);
        return {
          name: file.name,
          size: file.size,
          type: file.type,
          data: base64Data // This will be the data URL (e.g., data:image/png;base64,...)
        };
      }));

      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        files: base64Files
      }

      const response = await fetch('https://hook.eu1.make.com/9l7oc03miojln1ehfuq3beuvlf6inxdc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) throw new Error('Webhook submission failed')

      setIsSubmitting(false)
      setSubmitted(true)
      localStorage.removeItem('terminify-onboarding-data')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      alert('Es gab ein Problem beim Absenden. Bitte prüfe deine Internetverbindung oder versuche es später erneut.')
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div className="max-w-md flex flex-col items-center">
          <div className="w-20 h-20 bg-close-green/10 text-close-green rounded-full flex items-center justify-center mb-8">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black mb-4">Erfolgreich übermittelt!</h1>
          <p className="text-body-text mb-8">Vielen Dank für deine Zeit. Wir schauen uns deine Antworten an und melden uns zeitnah bei dir.</p>
          <button 
            onClick={() => window.close()}
            className="bg-signal-blue px-8 py-3 rounded-xs font-bold"
          >
            Fenster schließen
          </button>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-void-navy pb-32 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-void-navy/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="w-32" /> {/* Spacer */}
          <img src={logo} alt="Terminify Logo" className="h-6 w-auto object-contain" />
          <button 
            onClick={fillTestData}
            className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-xs border border-white/10 hover:bg-white/5 transition-colors text-muted-text hover:text-white"
          >
            Test-Daten laden
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-4 tracking-tight">Dein Chatbot</h1>
          <p className="text-body-text">Fülle diesen Fragebogen bitte so detailliert wie möglich aus. Plane ca. 10–15 Minuten ein. Dein Fortschritt wird automatisch gespeichert.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Section 1: Basis-Informationen */}
          <section className="form-section">
            <SectionHeader title="Basis-Informationen" icon={CheckCircle2} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input label="Voller Name" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="z.B. Max Mustermann" error={errors.fullName} />
              <Input label="E-Mail-Adresse" name="email" value={formData.email} onChange={handleChange} placeholder="z.B. max@beispiel.de" type="email" error={errors.email} />
              <div className="md:col-span-2">
                <Input label="Instagram-Seite" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="z.B. @maxmustermann" error={errors.instagram} />
              </div>
            </div>
          </section>

          {/* Section 2: Dein Business */}
          <section className="form-section">
            <SectionHeader title="Dein Business" icon={Database} />
            <div className="space-y-8">
              <Input label="Wie heißt deine Firma, falls vorhanden?" name="firma" value={formData.firma} onChange={handleChange} placeholder="z.B. Muster Consulting GmbH" error={errors.firma} />
              <Input label="Brand oder Markenname, falls anders als Firmenname?" name="brand" value={formData.brand} onChange={handleChange} placeholder="z.B. Max Fitness Coaching" error={errors.brand} />
              <Input label="Seit wann machst du das Coaching?" name="seitWann" value={formData.seitWann} onChange={handleChange} placeholder="z.B. seit 2021 oder seit 5 Jahren" error={errors.seitWann} />
              <Textarea label="Hast du relevante Ausbildungen oder Zertifikate?" name="ausbildungen" value={formData.ausbildungen} onChange={handleChange} placeholder="z.B. Ernährungsberater, Personal Trainer A-Lizenz oder Physiotherapeut" error={errors.ausbildungen} />
            </div>
          </section>

          {/* Section 3: Dein Angebot */}
          <section className="form-section">
            <SectionHeader title="Dein Angebot" icon={CheckCircle2} />
            <div className="space-y-8">
              <Textarea label="Was genau bietest du an?" name="angebotWas" value={formData.angebotWas} onChange={handleChange} placeholder="z.B. Online-Fitnesscoaching für berufstätige Männer" error={errors.angebotWas} />
              <Input label="Wie heißt dein Angebot oder Programm?" name="angebotName" value={formData.angebotName} onChange={handleChange} placeholder="z.B. 12-Wochen-Coaching" error={errors.angebotName} />
              <Input label="Für wen ist dein Angebot gedacht?" name="angebotFuerWen" value={formData.angebotFuerWen} onChange={handleChange} placeholder="z.B. Frauen ab 40, Selbstständige oder Anfänger im Fitnessbereich" error={errors.angebotFuerWen} />
              <Textarea label="Was ist das Hauptproblem, das du für deine Kunden löst?" name="hauptproblem" value={formData.hauptproblem} onChange={handleChange} placeholder="z.B. abnehmen trotz wenig Zeit oder schmerzfrei im Alltag werden" error={errors.hauptproblem} />
              <Textarea label="Welche Ergebnisse oder Transformation können Kunden erwarten?" name="transformation" value={formData.transformation} onChange={handleChange} placeholder="z.B. 8-12kg abnehmen, mehr Energie oder weniger Rückenschmerzen" error={errors.transformation} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Wie lange dauert das Programm?" name="dauer" value={formData.dauer} onChange={handleChange} placeholder="z.B. 8 Wochen, 12 Wochen oder 6 Monate" error={errors.dauer} />
                <Input label="Welches Format hat das Programm?" name="format" value={formData.format} onChange={handleChange} placeholder="z.B. online, vor Ort oder hybrid" error={errors.format} />
              </div>
              <Textarea label="Was ist alles in deinem Angebot enthalten?" name="inhalt" value={formData.inhalt} onChange={handleChange} placeholder="z.B. 1:1 Calls, Trainingsplan, Ernährungsplan oder WhatsApp-Support" error={errors.inhalt} />
              <Textarea label="Hast du eine eigene Methode oder einen eigenen Ansatz?" name="methode" value={formData.methode} onChange={handleChange} placeholder="z.B. Stoffwechsel-Fokus, alltagstaugliche Ernährung oder Training ohne Verzicht" error={errors.methode} />
              <Textarea label="Was unterscheidet dich von anderen Anbietern?" name="unterschied" value={formData.unterschied} onChange={handleChange} placeholder="z.B. persönliche Betreuung, Spezialisierung auf Frauen ab 40 oder ganzheitlicher Ansatz" error={errors.unterschied} />
            </div>
          </section>

          {/* Section 4: Beweise & Referenzen */}
          <section className="form-section">
            <SectionHeader title="Beweise & Referenzen" icon={CheckCircle2} />
            <div className="space-y-8">
              <Input label="Wie viele Kunden hast du bisher betreut?" name="kundenAnzahl" value={formData.kundenAnzahl} onChange={handleChange} placeholder="z.B. 50, 200 oder über 500" error={errors.kundenAnzahl} />
              <Textarea label="Gibt es Bewertungen oder Rezensionen, die man einsehen kann?" name="bewertungen" value={formData.bewertungen} onChange={handleChange} placeholder="z.B. Trustpilot, Google-Bewertungen oder Instagram-Story-Highlights" error={errors.bewertungen} />
              <Textarea label="Gibt es bekannte Referenzen oder Medienauftritte?" name="referenzen" value={formData.referenzen} onChange={handleChange} placeholder="z.B. Podcasts, Zeitungsartikel, TV, größere Kunden oder Partner" error={errors.referenzen} />
            </div>
          </section>

          {/* Section 5: Das Erstgespräch */}
          <section className="form-section">
            <SectionHeader title="Das Erstgespräch" icon={MessageSquare} />
            <div className="space-y-8">
              <Input label="Wie heißt das Gespräch, das du anbietest?" name="gespraechName" value={formData.gespraechName} onChange={handleChange} placeholder="z.B. Strategiegespräch, Analysegespräch oder Erstgespräch" error={errors.gespraechName} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input label="Wie lange dauert das Gespräch?" name="gespraechDauer" value={formData.gespraechDauer} onChange={handleChange} placeholder="z.B. 15min, 30min oder 45min" error={errors.gespraechDauer} />
                <Input label="Art des Erstgesprächs" name="gespraechArt" value={formData.gespraechArt} onChange={handleChange} placeholder="z.B. Telefon oder Video" error={errors.gespraechArt} />
              </div>
              <Textarea label="Was passiert in dem Gespräch?" name="gespraechInhalt" value={formData.gespraechInhalt} onChange={handleChange} placeholder="z.B. Ist-Analyse, Zielbesprechung und Vorstellung des Angebots" error={errors.gespraechInhalt} />
              <Input label="Wer führt das Gespräch?" name="gespraechWer" value={formData.gespraechWer} onChange={handleChange} placeholder="z.B. ich selbst, mein Vertriebsteam oder mein Setter..." error={errors.gespraechWer} />
            </div>
          </section>

          {/* Section 6: Setting & Sales-Prozess */}
          <section className="form-section">
            <SectionHeader title="Setting & Sales-Prozess" icon={Users} />
            <div className="space-y-8">
              <Textarea label="Was disqualifiziert ihr im Setting-Prozess?" name="disqualifikation" value={formData.disqualifikation} onChange={handleChange} placeholder="z.B. unter 23, über 60 oder keine Kaufbereitschaft" error={errors.disqualifikation} />
              <Input label="Schickt ihr aktuell eine standardisierte Follow-up-Nachricht?" name="followUp" value={formData.followUp} onChange={handleChange} placeholder="z.B. ja, per Instagram-DM oder WhatsApp, oder nein" error={errors.followUp} />
              <Input label="Hast du aktuell einen oder mehrere DM-Setter?" name="setterStatus" value={formData.setterStatus} onChange={handleChange} placeholder="z.B. 1 Setter, 2 Setter oder aktuell keinen" error={errors.setterStatus} />
              <Textarea label="Mitarbeiter-E-Mail-Adressen" name="mitarbeiterEmails" value={formData.mitarbeiterEmails} onChange={handleChange} placeholder="z.B. max@firma.de für den Closer und anna@firma.de für den Setter" error={errors.mitarbeiterEmails} />
            </div>
          </section>

          {/* Section 7: Infrastruktur & Sonstiges */}
          <section className="form-section">
            <SectionHeader title="Infrastruktur & Sonstiges" icon={Settings} />
            <div className="space-y-8">
              <Input label="Nutzt du bereits ein CRM-System und wenn ja, welches?" name="crm" value={formData.crm} onChange={handleChange} placeholder="z.B. GoHighLevel, HubSpot, Close oder aktuell keines" error={errors.crm} />
              <Input label="Nutzt du bereits ManyChat?" name="manyChat" value={formData.manyChat} onChange={handleChange} placeholder="z.B. ja oder nein" error={errors.manyChat} />
              <Textarea label="Gibt es Besonderheiten, die wir berücksichtigen müssen?" name="besonderheiten" value={formData.besonderheiten} onChange={handleChange} placeholder="z.B. bestimmte Abläufe, Ausnahmen oder interne Vorgaben" error={errors.besonderheiten} />
              <Textarea label="Was sollten wir sonst noch wissen?" name="sonstiges" value={formData.sonstiges} onChange={handleChange} placeholder="z.B. besondere Infos für den Chatbot, die Werbeanzeigen oder die Zusammenarbeit..." error={errors.sonstiges} />
            </div>
          </section>

          {/* Section 8: Dateiuploads */}
          <section className="form-section">
            <SectionHeader title="Dateiuploads" icon={Upload} />
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`p-12 border-2 border-dashed rounded-xs flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                isDragging ? 'border-signal-blue bg-signal-blue/10' : 'border-white/10 hover:border-signal-blue/30 bg-card-surface'
              }`}
            >
              <Upload className={`w-12 h-12 mb-4 transition-colors ${isDragging ? 'text-signal-blue' : 'text-muted-text'}`} />
              <span className="text-base font-bold mb-2">5-10 Beispiel-Chats hochladen</span>
              <span className="text-sm text-muted-text">Ziehe Dateien hierher oder klicke zum Auswählen</span>
              <span className="text-[10px] uppercase tracking-widest mt-4 text-muted-text/50">PNG, JPG, WEBP • Max. 5MB</span>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden" 
                multiple 
                accept="image/*"
              />
            </div>

            {/* File List Preview */}
            {uploadedFiles.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="bg-card-surface border border-white/10 p-4 rounded-xs flex items-center justify-between group">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 bg-signal-blue/10 rounded-xs flex items-center justify-center text-signal-blue flex-shrink-0">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-medium truncate">{file.name}</span>
                        <span className="text-[10px] text-muted-text">{(file.size / 1024).toFixed(1)} KB</span>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                      className="p-2 text-muted-text hover:text-reject-red transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Submit Button */}
          <div className="pt-12">
            <div className="bg-signal-blue/5 border border-signal-blue/20 p-6 rounded-xs mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-signal-blue/10 flex items-center justify-center text-signal-blue flex-shrink-0">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1">Letzter Check</h3>
                  <p className="text-sm text-body-text">Bitte prüfe deine Angaben noch einmal sorgfältig, bevor du abschickst. Nur mit korrekten Daten können wir den besten Chatbot für dich bauen.</p>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-signal-blue hover:bg-highlight-blue text-white py-5 rounded-xs font-bold text-xl transition-all shadow-xl shadow-signal-blue/20 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>Ein Moment...</>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  Fragebogen absenden
                </>
              )}
            </button>
            <p className="text-center mt-6 text-xs text-muted-text">
              Mit dem Absenden bestätigst du, dass alle Angaben korrekt sind.
            </p>
          </div>
        </form>
      </main>
    </div>
  )
}

export default QuestionnairePage
