import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  User, Code, Briefcase, Mail, Home, FileText, Github, Linkedin,
  ExternalLink, ChevronRight, BrainCircuit, Server, ShieldCheck,
  Lock, Globe, Shield, GraduationCap,ArrowUp,Instagram,
  Dumbbell, Utensils, BookOpen, Gamepad2
} from 'lucide-react';

/* ==========================================================================
   1. CUSTOM BRAND ICONS (SVG)
   ========================================================================== */

const SpotifyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-.96 15.72 1.62.54.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const LetterboxdIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
  </svg>
);

/* ==========================================================================
   2. TYPEWRITER COMPONENT (Fixed Layout & Cursor)
   ========================================================================== */

const TypewriterText = () => {
  const phrases = ["a Software Developer", "an Aspiring AI Security Engineer"];
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => { setHasStarted(true); }, 500);
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() =>
      if (!hasStarted) return;
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      setCurrentText(isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1));
      let typeSpeed = isDeleting ? 30 : 70;
      if (!isDeleting && currentText === fullText) { typeSpeed = 2000; setIsDeleting(true); }
      else if (isDeleting && currentText === '') { setIsDeleting(false); setLoopNum(loopNum + 1); typeSpeed = 500; }
      setTypingSpeed(typeSpeed);
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, phrases, typingSpeed, hasStarted]);

  return (
    <div className={`transition-opacity duration-500 flex items-center justify-center ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
      <span className="text-cyan-300 font-mono font-bold text-base sm:text-2xl md:text-3xl whitespace-nowrap">
        I am {currentText}
      </span>
      <span className="w-[3px] h-6 sm:h-8 bg-cyan-400 ml-1 animate-[blink-caret_0.75s_step-end_infinite]"></span>
    </div>
  );
};

/* ==========================================================================
   3. MAIN APP COMPONENT
   ========================================================================== */

export default function App() {

  const [data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [status, setStatus] = useState('idle');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  // Tracks which project is currently active in the Command Center (Default to index 0)
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const form = useRef();
  const wideContainerStyle = { width: '90%', maxWidth: '1600px', margin: '0 auto', padding: '0 20px' };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

// --- ORBIT DATA ---
  const orbitItems = [
    {
      id: 'spotify',
      icon: SpotifyIcon,
      color: 'bg-[#1DB954]',
      border: 'border-[#1DB954]',
      glow: 'group-hover:shadow-[0_0_30px_#1DB954]',
      text: 'text-[#1DB954]',
      link: 'https://open.spotify.com/user/31... (PASTE YOUR FULL URL HERE)', // <--- Updated with your link
      label: 'SPOTIFY'
    },
    {
      id: 'letterboxd',
      icon: LetterboxdIcon,
      color: 'bg-[#ff8000]',
      border: 'border-[#ff8000]',
      glow: 'group-hover:shadow-[0_0_30px_#ff8000]',
      text: 'text-[#ff8000]',
      link: 'https://boxd.it/d3ICd',
      label: 'LETTERBOXD'
    },
    // --- NEW INSTAGRAM TOGGLE ---
    {
      id: 'instagram',
      icon: Instagram,
      // Using a gradient background to match Instagram's brand
      color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
      border: 'border-pink-500',
      glow: 'group-hover:shadow-[0_0_30px_#ec4899]', // Pink glow
      text: 'text-white', // White icon stands out on the gradient
      link: 'https://www.instagram.com/hariramakrishna29/', // <--- PASTE YOUR LINK HERE
      label: 'INSTAGRAM'
    },
    {
      id: 'sports',
      icon: Dumbbell,
      color: 'bg-cyan-500',
      border: 'border-cyan-500',
      glow: 'group-hover:shadow-[0_0_30px_cyan]',
      text: 'text-cyan-400',
      link: 'https://www.google.com/search?q=cricket+pickleball+badminton&tbm=isch',
      label: 'SPORTS'
    },
    {
      id: 'games',
      icon: Gamepad2,
      color: 'bg-purple-500',
      border: 'border-purple-500',
      glow: 'group-hover:shadow-[0_0_30px_purple]',
      text: 'text-purple-400',
      link: 'https://www.google.com/search?q=chess+carroms+board+games&tbm=isch',
      label: 'GAMES'
    },
    {
      id: 'food',
      icon: Utensils,
      color: 'bg-yellow-500',
      border: 'border-yellow-500',
      glow: 'group-hover:shadow-[0_0_30px_yellow]',
      text: 'text-yellow-400',
      link: 'https://www.google.com/search?q=indian+cooking+foodie&tbm=isch',
      label: 'COOKING'
    },
    {
      id: 'lit',
      icon: BookOpen,
      color: 'bg-blue-500',
      border: 'border-blue-500',
      glow: 'group-hover:shadow-[0_0_30px_blue]',
      text: 'text-blue-400',
      link: 'https://en.wikipedia.org/wiki/Sirivennela_Seetharama_Sastry',
      label: 'LITERATURE'
    },
  ];

  useEffect(() => {
    fetch('http://localhost:8080/api/portfolio')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Backend Offline", err));
  }, []);

  // --- SCROLL SPY LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          if (entry.target.id !== 'home') entry.target.classList.add('active');
        }
      });
    }, { rootMargin: "-40% 0px -60% 0px" });

    document.querySelectorAll('section').forEach(section => {
      if (section.id !== 'home') section.classList.add('reveal');
      observer.observe(section);
    });

    const handleScroll = () => { if (window.scrollY < 100) setActiveSection('home'); };
    window.addEventListener('scroll', handleScroll);
    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, [data]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => { setStatus('success'); e.target.reset(); })
      .catch(() => setStatus('error'));
  };

const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    let src = "";

    // JAVA & FRAMEWORKS
    if (name.includes("java") && !name.includes("script")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
    else if (name.includes("spring")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg";
    else if (name.includes("kafka")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg";

    // DEVOPS & TOOLS (Added CI/CD Logic here)
    else if (name.includes("aws")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
    else if (name.includes("docker")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg";
    else if (name.includes("kubernetes")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg";
    else if (name.includes("linux")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg";
    // Mapped "pipelines" and "ci/cd" to Jenkins icon
    else if (name.includes("jenkins") || name.includes("ci/cd") || name.includes("pipelines")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg";

    // DATABASES (Fixed Cassandra path)
    else if (name.includes("mysql")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
    else if (name.includes("postgres")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
    else if (name.includes("mongo")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
    else if (name.includes("redis")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg";
    else if (name.includes("cassandra")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg"; // <--- FIXED PATH

    // DATA SCIENCE & FRONTEND
    else if (name.includes("pandas")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg";
    else if (name.includes("tensorflow")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg";
    else if (name.includes("pytorch")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg";
    else if (name.includes("scikit")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg";
    else if (name.includes("react")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
    else if (name.includes("next")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
    else if (name.includes("html")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
    else if (name.includes("css")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
    else if (name.includes("javascript")) src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";

    if (src) {
      const isDarkLogo = name.includes("next") || name.includes("express");
      return <img src={src} alt={skillName} className={`w-12 h-12 object-contain drop-shadow-md ${isDarkLogo ? 'invert' : ''}`} />;
    }
    if (name.includes("security") || name.includes("adversarial")) return <Shield size={50} className="text-cyan-400" />;
    if (name.includes("ai") || name.includes("ml") || name.includes("safety")) return <BrainCircuit size={50} className="text-pink-400" />;
    if (name.includes("microservices")) return <Server size={50} className="text-cyan-400" />;
    return <Code size={50} className="text-slate-400" />;
  };

  if (!data) return <div className="flex h-screen items-center justify-center text-2xl text-slate-400 animate-pulse">Loading Portfolio...</div>;

  // --- BLUR CLASS (Used on everything EXCEPT the Logo) ---
  const blurClass = showEasterEgg ? 'opacity-20 blur-sm pointer-events-none transition-all duration-700' : 'opacity-100 transition-all duration-700';

  return (
    <div className="flex flex-col min-h-screen bg-transparent relative">

      {/* --- NAVIGATION (Gets Blurred) --- */}
      <nav className={`glass-nav justify-center relative z-30 ${blurClass}`}>
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`nav-pill-link ${activeSection === item.id ? 'active' : ''}`}>
              <item.icon size={18} />
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </div>
        <div className="flex gap-3 pl-4 border-l border-white/10">
                  {/* HARDCODED LINKEDIN LINK BELOW */}
                  <a href="https://www.linkedin.com/in/hari-ramakrishna-chanamolu-4b86311a0" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition transform hover:scale-110"><Linkedin size={20}/></a>
                  <a href={data.profile?.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition transform hover:scale-110"><Github size={20}/></a>
                </div>
      </nav>

      <main className="w-full flex flex-col gap-40">

        {/* --- HERO SECTION --- */}
        <section id="home" className="hero relative">

          {/* THE OVERLAY (FIXED HERE, SIBLING TO LOGO) */}
          <div
            className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-all duration-700 ease-in-out ${showEasterEgg ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setShowEasterEgg(false)} /* Click background to close */
          ></div>

          <div className="px-4 pt-28 flex flex-col items-center text-center w-full max-w-4xl mx-auto relative">

            {/* LOGO & ORBIT SYSTEM (Z-50 - ABOVE OVERLAY) */}
            <div className="relative w-80 h-80 sm:w-[500px] sm:h-[500px] -mb-10 sm:-mb-16 flex justify-center items-center z-50">

              {/* ORBITING BUTTONS */}
              {orbitItems.map((item, index) => {
                const total = orbitItems.length;
                const radius = window.innerWidth < 640 ? 140 : 260;
                const angle = (index / total) * 2 * Math.PI - (Math.PI / 2);
                const x = Math.round(radius * Math.cos(angle));
                const y = Math.round(radius * Math.sin(angle));

                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`absolute z-[60] flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 bg-slate-900/90 transition-all duration-300 ease-out group
                    ${item.border}
                    ${item.glow}
                    hover:scale-125 hover:brightness-125
                    ${showEasterEgg ? 'pointer-events-auto opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-0'}`}
                    style={{
                      transform: showEasterEgg ? `translate(${x}px, ${y}px)` : 'translate(0px, 0px)'
                    }}
                  >
                    <item.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${item.text} drop-shadow-md transition-transform duration-300 group-hover:scale-110`} />

                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <span className={`bg-slate-900/95 backdrop-blur-md border ${item.border} ${item.text} text-[10px] sm:text-xs font-bold font-mono px-3 py-1.5 rounded shadow-[0_0_15px_rgba(0,0,0,0.8)] whitespace-nowrap tracking-widest uppercase`}>
                        {item.label}
                      </span>
                    </div>
                  </a>
                );
              })}

{/* MAIN EMBLEM (STATIC ARC TEXT) */}
              <div
                className="relative w-full h-full cursor-pointer group z-50 flex items-center justify-center"
                onClick={() => setShowEasterEgg(!showEasterEgg)}
              >
                <img
                  src="/mylogo2.png"
                  alt="HRK Logo"
                  className="w-full h-full object-contain animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_0_35px_rgba(0,243,255,0.7)] brightness-110 relative z-10"
                />
                <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${showEasterEgg ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
                   <svg className="w-full h-full" viewBox="0 0 200 200">
                     {/* Updated Path: Changed radius from 60 to 50 to bring text closer.
                       M 50,100 A 50,50 0 1,1 150,100
                     */}
                     <path id="topCurve" d="M 50,100 A 50,50 0 1,1 150,100" fill="transparent" />

                     {/* Updated Text Class: Replaced 'fill-cyan-400' with a new custom class 'emblem-text-gradient'.
                       Updated Text Content: Changed to "CLICK ME TO KNOW ME".
                     */}
                     <text className="emblem-text-gradient font-mono text-[11px] font-bold tracking-[0.15em] uppercase" style={{ textShadow: '0 0 5px rgba(0, 243, 255, 0.8)' }}>
                       <textPath href="#topCurve" startOffset="50%" textAnchor="middle">CLICK ME TO KNOW ME</textPath>
                     </text>
                   </svg>
                </div>
              </div>
              </div>

            {/* TEXT (Blurred) */}
            <div className={`sync-reveal relative z-10 w-full min-h-[150px] ${blurClass}`}>
               <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-shimmer pb-4 whitespace-normal md:whitespace-nowrap overflow-visible">
                 {data.profile?.name}
               </h1>
               <div className="h-16 sm:h-20 flex justify-center items-start">
                 <TypewriterText />
               </div>
            </div>

            {/* CTA BUTTONS (Blurred) */}
            <div className={`final-reveal mt-8 flex justify-center gap-8 relative z-10 ${blurClass}`}>
              <a href="#projects" className="btn-neon px-10 py-4 text-lg">View Work</a>
              <a href="#contact" className="btn-neon px-10 py-4 text-lg">Contact Me</a>
            </div>
          </div>
        </section>

        {/* --- REST OF PAGE (Blurred) --- */}
        <div className={blurClass}>

          {/* ABOUT */}
          <section id="about" className="section bg-transparent">
            <div style={wideContainerStyle}>
              <h2 className="text-5xl font-bold text-slate-100 mb-12 border-l-8 border-cyan-400 pl-6">About Me</h2>
              <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-xl flex flex-col md:flex-row gap-12 items-start">
                <div className="relative shrink-0 mx-auto md:mx-0">
                  <div className="w-64 h-80 rounded-xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.3)] relative z-10">
                    <img src="/Profilepic.png" alt="Hari Ramakrishna" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{data.profile?.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed font-light">{data.profile?.summary}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                    <div className="flex items-center gap-2"><ChevronRight size={16} className="text-cyan-400" /><span className="text-white font-bold w-24">Website:</span><span className="text-slate-300">{data.profile?.website}</span></div>
                    <div className="flex items-center gap-2"><ChevronRight size={16} className="text-cyan-400" /><span className="text-white font-bold w-24">Degree:</span><span className="text-slate-300">{data.profile?.degree}</span></div>
                    <div className="flex items-center gap-2"><ChevronRight size={16} className="text-cyan-400" /><span className="text-white font-bold w-24">Phone:</span><span className="text-slate-300">{data.profile?.phone}</span></div>
                    <div className="flex items-center gap-2"><ChevronRight size={16} className="text-cyan-400" /><span className="text-white font-bold w-24">Email:</span><span className="text-slate-300 truncate">{data.profile?.email}</span></div>
                    <div className="flex items-center gap-2"><ChevronRight size={16} className="text-cyan-400" /><span className="text-white font-bold w-24">City:</span><span className="text-slate-300">{data.profile?.location}</span></div>
                    <div className="flex items-center gap-2"><ChevronRight size={16} className="text-cyan-400" /><span className="text-white font-bold w-24">Freelance:</span><span className="text-green-400 font-bold">{data.profile?.freelance}</span></div>
                    <div className="flex items-center gap-2"><ChevronRight size={16} className="text-cyan-400" /><span className="text-white font-bold w-24">Age:</span><span className="text-slate-300">{data.profile?.age}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="section bg-transparent">
            <div style={wideContainerStyle}>
              <div className="text-center mb-10">
                <h2 className="text-5xl font-bold text-slate-100 mb-4 inline-block border-b-4 border-cyan-400 pb-2">Technical Arsenal</h2>

              </div>
              <div className="holo-stage">
                <div className="floating-skills-grid">
                  {(() => {
                    const allSkillsList = [];
                    if (data.skills) {
                      Object.values(data.skills).forEach(list => {
                        if (Array.isArray(list)) allSkillsList.push(...list);
                      });
                    }
                    return allSkillsList.map((skill, i) => (
                      <div key={i} className="float-icon" style={{ animationDelay: `${Math.random() * 5}s` }}>
                        {getSkillIcon(skill)}
                        <span>{skill}</span>
                      </div>
                    ));
                  })()}
                </div>
                <div className="holo-beam"></div>
                <div className="holo-platform">
                  <div className="holo-platform-top"></div>
                  <div className="holo-platform-side"></div>
                </div>
              </div>
            </div>
          </section>



{/* --- PROJECTS: THE COMMAND CENTER (NEON GLOW EDITION) --- */}
        <section id="projects" className={`section bg-transparent ${blurClass}`}>
          <div style={wideContainerStyle}>

            {/* SECTION HEADER */}
            <div className="flex items-center gap-4 mb-16">
               <h2 className="text-5xl font-bold text-slate-100 border-l-8 border-cyan-400 pl-6 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">Mission Archives</h2>
               <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent shadow-[0_0_10px_#06b6d4]"></div>
               <span className="hidden md:inline text-cyan-400 font-mono tracking-widest text-sm animate-pulse drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]">SYSTEM_READY</span>
            </div>

            {/* THE COMMAND CENTER INTERFACE */}
            <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[600px]">

              {/* LEFT COLUMN: FILE DIRECTORY */}
              <div className="w-full lg:w-1/3 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">

                {data.projects?.map((project, index) => {
                  const isActive = activeProjectIndex === index;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveProjectIndex(index)}
                      className={`group relative text-left p-5 transition-all duration-300 w-full overflow-hidden
                        ${isActive
                          ? 'bg-gradient-to-r from-cyan-900/30 to-pink-900/20 pl-6 border-r border-cyan-500/30'
                          : 'bg-slate-800/30 hover:bg-slate-800/60 hover:pl-6 border border-transparent'
                        }`}
                    >
                      {/* THE GLOWING STRIP (High Intensity) */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300
                        ${isActive
                           ? 'bg-gradient-to-b from-cyan-400 to-pink-500 shadow-[0_0_25px_rgba(0,243,255,1)]' // <--- HEAVY GLOW ADDED HERE
                           : 'bg-slate-700 group-hover:bg-slate-500'
                        }`}>
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        {/* ID TEXT (Glowing) */}
                        <span className={`font-mono text-[10px] uppercase tracking-widest transition-all duration-300
                          ${isActive
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'
                            : 'text-slate-500 group-hover:text-slate-300'
                          }`}>
                          MSG_ID_00{index + 1}
                        </span>

                        {/* STATUS DOT (Glowing) */}
                        {isActive && (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-pink-500"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_10px_#ec4899]"></span>
                          </span>
                        )}
                      </div>

                      <h3 className={`text-lg font-bold leading-tight transition-colors duration-300
                        ${isActive ? 'text-white drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]' : 'text-slate-400 group-hover:text-slate-200'}`}>
                        {project.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* RIGHT COLUMN: THE MAIN MONITOR (Outer Glow) */}
              {/* Added shadow-[0_0_40px...] to make the whole box radiate light */}
              <div className="flex-1 relative bg-slate-900/80 rounded-xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.25)] flex flex-col p-[1px]">

                {/* GRADIENT BORDER (Brightened) */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-80 blur-sm"></div>

                {/* INNER CONTENT BG */}
                <div className="relative flex-1 bg-slate-950/90 rounded-xl overflow-hidden flex flex-col h-full">

                  {/* 1. MONITOR HEADER */}
                  <div className="h-10 bg-slate-900/50 border-b border-white/5 flex items-center px-4 justify-between select-none">
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.6)]"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                     </div>
                     <div className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                       STATUS: {data.projects?.[activeProjectIndex].category.includes("Enterprise") ? "RESTRICTED_ACCESS" : "PUBLIC_DECRYPTED"}
                     </div>
                  </div>

                  {/* 2. MONITOR CONTENT */}
                  {data.projects && (
                    <div className="flex-1 p-8 md:p-12 flex flex-col relative group">

                      {/* Background Tech Visuals */}
                      <div className="absolute top-0 right-0 p-12 opacity-15 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 mix-blend-screen">
                         {data.projects[activeProjectIndex].category.includes("Research")
                            ? <BrainCircuit size={400} className="text-cyan-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"/>
                            : <Server size={400} className="text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]"/>
                         }
                      </div>

                      {/* Content Layer */}
                      <div className="relative z-10 flex flex-col h-full">

                      {/* Gradient Badge (FIXED: Bright Icon, Gradient Text) */}
                                              <div className="mb-6">
                                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold tracking-widest uppercase border border-white/10 bg-gradient-to-r from-cyan-900/40 to-pink-900/40 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                                                  {/* 1. The Icon (Solid, Bright Color with Glow) */}
                                                  {data.projects[activeProjectIndex].category.includes("Research")
                                                     ? <FileText size={14} className="text-cyan-400 drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]"/>
                                                     : <ShieldCheck size={14} className="text-pink-400 drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]"/>
                                                  }
                                                  {/* 2. The Text (Gradient Effect isolated here) */}
                                                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">
                                                      {data.projects[activeProjectIndex].category}
                                                  </span>
                                                </span>
                                              </div>

                        {/* Title (Drop Shadow) */}
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                          {data.projects[activeProjectIndex].title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-slate-300 leading-relaxed font-light max-w-2xl drop-shadow-md">
                          {data.projects[activeProjectIndex].description}
                        </p>

                        {/* Action Area (Bottom) */}
                        <div className="mt-auto pt-10 flex items-center gap-6">
                           {data.projects[activeProjectIndex].category.includes("Enterprise") ? (
                              <div className="flex items-center gap-3 text-slate-400 bg-slate-800/50 px-6 py-3 rounded-lg border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
                                 <Lock size={20} className="text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]"/>
                                 <span className="font-mono text-sm tracking-wide">PROPRIETARY SOURCE • LOCKED</span>
                              </div>
                           ) : (
                              <a
                                href={data.projects[activeProjectIndex].projectUrl || data.projects[activeProjectIndex].url || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="relative px-8 py-3 flex items-center gap-3 group overflow-hidden rounded-full bg-slate-900 border border-cyan-500/60 hover:border-pink-500/80 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Globe size={20} className="text-cyan-400 group-hover:text-pink-400 transition-colors group-hover:rotate-12"/>
                                <span className="relative z-10 font-bold tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-pink-300">
                                  ACCESS RESEARCH PAPER
                                </span>
                                <ExternalLink size={16} className="text-pink-400 opacity-50 group-hover:opacity-100 transition-opacity"/>
                              </a>
                           )}
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div> {/* END OF COMMAND CENTER INTERFACE */}

          </div> {/* END OF WIDE CONTAINER */}
        </section>

          {/* RESUME */}
          <section id="resume" className="section bg-transparent">
            <div style={wideContainerStyle}>
              <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-16 border-b border-white/10 pb-8 gap-6">
                <div>
                  <h2 className="text-5xl font-bold text-slate-100 border-l-8 border-cyan-400 pl-6 mb-2">My Journey</h2>
                  <p className="text-slate-400 pl-8 font-mono text-sm">PROFESSIONAL & ACADEMIC ARCHIVES</p>
                </div>
                <a href="/resume.pdf" download="Hari_Chanamolu_Resume.pdf" className="btn-neon px-8 py-3 flex items-center gap-3 text-sm uppercase tracking-wider group">
                  <FileText size={20} className="group-hover:text-cyan-300 transition-colors"/>
                  Download Resume
                </a>
              </div>
              <div className="resume-grid">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-3 uppercase tracking-widest">
                    <Briefcase size={24} /> Professional Experience
                  </h3>
                  {data.experience?.map((exp, i) => (
                    <div key={i} className="resume-card exp-card group">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{exp.title}</h4>
                          <p className="text-cyan-500 font-mono text-sm mt-1">@ {exp.subtitle}</p>
                        </div>
                        <span className="px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded text-xs text-cyan-300 font-mono">
                          {exp.date}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed font-light text-base border-t border-white/5 pt-4">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-500 mb-8 flex items-center gap-3 uppercase tracking-widest">
                    <GraduationCap size={24} /> Education History
                  </h3>
                  {data.education?.map((edu, i) => {
                    const uniImage = edu.subtitle.toLowerCase().includes("trine") ? "trine.jpg" : "Vrsec.jpg";
                    return (
                      <div key={i} className="resume-card edu-card group">
                        <div className="edu-image-container">
                          <img src={uniImage} alt={edu.subtitle} />
                          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-pink-500/30 text-pink-300 font-mono text-xs">
                            {edu.date}
                          </div>
                        </div>
                        <div className="edu-content">
                          <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">{edu.title}</h4>
                          <p className="text-pink-500 font-mono text-sm mb-4">@ {edu.subtitle}</p>
                          <p className="text-slate-300 leading-relaxed font-light text-sm">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section bg-transparent">
            <div style={wideContainerStyle}>
              <h2 className="text-5xl font-bold text-slate-100 mb-12 border-l-8 border-cyan-400 pl-6">Let's Connect</h2>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8 text-slate-300">
                  <p className="text-xl leading-relaxed font-light">I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                  <div className="flex items-center gap-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-cyan-400 transition cursor-default group shadow-sm hover:shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform"><Mail size={32}/></div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-1">Email Me</div>
                    <div className="text-cyan-400 font-bold text-lg sm:text-xl break-all">{data.profile?.email}</div>
                    </div>
                  </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 bg-transparent p-2">
                  <input type="text" name="from_name" placeholder="Your Name" required className="w-full p-5 border border-slate-600 rounded-2xl focus:outline-none focus:border-cyan-400 text-white transition-all text-lg" />
                  <input type="email" name="from_email" placeholder="Your Email" required className="w-full p-5 border border-slate-600 rounded-2xl focus:outline-none focus:border-cyan-400 text-white transition-all text-lg" />
                  <textarea name="message" rows="5" placeholder="Your Message..." required className="w-full p-5 border border-slate-600 rounded-2xl focus:outline-none focus:border-cyan-400 text-white transition-all text-lg resize-none"></textarea>
                  <button type="submit" disabled={status === 'sending'} className="bg-cyan-600 text-white py-5 px-10 rounded-2xl font-bold hover:bg-cyan-500 transition-all shadow-xl hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 text-lg tracking-wide">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </section>

        </div>

        {/* BACK TO TOP ARROW */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-10 right-10 z-50 p-4 rounded-full bg-cyan-600/20 hover:bg-cyan-500 border border-cyan-500/50 text-cyan-400 hover:text-white shadow-[0_0_20px_rgba(0,243,255,0.3)] backdrop-blur-md transition-all hover:scale-110 group"
                title="Back to Top"
              >
                <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300"/>
              </button>



      </main>
    </div>
  );
}