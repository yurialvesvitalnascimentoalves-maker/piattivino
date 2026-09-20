"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, CalendarDays, Instagram, MapPin, Menu, Wine, X } from "lucide-react";
import { useEffect, useState } from "react";

const MENU_URL = "https://deliverypiattivino.pededigital.com.br/";
const RESERVATION_URL = "https://api.whatsapp.com/message/SSAP74CFF6T4A1?autoload=1&app_absent=0";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: MENU_URL },
  { label: "Sobre", href: "#sobre" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Contacto", href: "#contacto" },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/images/piatti-vino-logo.png"
      alt="Piatti & Vino"
      width={1774}
      height={887}
      priority
      className={compact ? "brand brand--compact" : "brand"}
      sizes={compact ? "150px" : "(max-width: 767px) 140px, 188px"}
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header" aria-label="Navegação principal">
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
      <nav className="nav-shell">
        <div className="nav-group nav-group--left">
          {navItems.slice(0, 3).map((item, index) => (
            <a className={index === 0 ? "nav-link is-active" : "nav-link"} href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>
        <a className="nav-brand" href="#inicio" aria-label="Piatti & Vino — início"><Brand compact /></a>
        <div className="nav-group nav-group--right">
          {navItems.slice(3).map((item) => <a className="nav-link" href={item.href} key={item.href}>{item.label}</a>)}
          <a className="nav-reserve" href={RESERVATION_URL}><CalendarDays size={15} aria-hidden="true" /> Reservar mesa</a>
        </div>
        <button className="menu-button" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu size={24} aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu__top"><Brand compact /><button type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}><X /></button></div>
            <div className="mobile-menu__links">
              {navItems.map((item, index) => (
                <a href={item.href} key={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>
              ))}
            </div>
            <a className="primary-cta" href={RESERVATION_URL} onClick={() => setOpen(false)}>Reservar mesa <CalendarDays size={18} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function PhotoCrop({
  position,
  className = "",
  src = "/images/piatti-vino-hero.png",
  alt = "Ambiente e gastronomia do Piatti & Vino",
}: {
  position: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div className={`photo-crop ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectPosition: position }} />
    </div>
  );
}

export function LandingPage() {
  const reduceMotion = useReducedMotion();
  const enter = reduceMotion ? {} : { initial: false as const, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.7 } };

  return (
    <>
      <Header />
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image className="hero__image" src="/images/piatti-vino-hero.png" alt="Mesa posta em um restaurante intimista, com prato contemporâneo e uma taça de vinho tinto" fill priority sizes="100vw" />
          <div className="hero__veil" />
          <motion.div className="hero__content" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.12 }}>
            <h1 id="hero-title">Sabores que<br /><span>ficam na memória.</span></h1>
            <p>Especialista em gastronomia contemporânea oferecendo sabores requintados com toques únicos e inesquecíveis. <span aria-hidden="true">🥂</span></p>
            <div className="hero__actions">
              <a className="primary-cta" href={MENU_URL}>Ver cardápio <ArrowRight size={19} aria-hidden="true" /></a>
              <a className="text-cta" href={RESERVATION_URL}>Reservar mesa</a>
            </div>
          </motion.div>
          <a className="discover" href="#sobre"><ArrowDown aria-hidden="true" /><span>Descubra<small>uma nova experiência</small></span></a>
        </section>

        <section className="section about" id="sobre">
          <div className="section-grid">
            <motion.div {...enter} className="section-copy">
              <Eyebrow>Sobre o Piatti & Vino</Eyebrow>
              <h2>O encontro entre cozinha, tempo e sensibilidade.</h2>
              <p>Piatti & Vino nasce da vontade de transformar uma refeição em memória. Uma experiência contemporânea, conduzida por técnica, ingredientes e a harmonia entre cada prato e cada taça.</p>
              <a className="inline-link" href="#gastronomia">Conheça nossa essência <ArrowRight size={16} /></a>
            </motion.div>
            <motion.div {...enter} className="about-visual">
              <div className="about-video-shell">
                <video
                  className="about-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/piatti-vino-hero.png"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <source src="/videos/piatti-vino-about.mp4" type="video/mp4" />
                </video>
              </div>
              <p><span>PIATTI</span><span>&amp;</span><span>VINO</span></p>
            </motion.div>
          </div>
        </section>

        <section className="section gastronomy" id="gastronomia">
          <motion.div {...enter} className="section-heading">
            <Eyebrow>Nossa gastronomia</Eyebrow>
            <h2>Pratos que falam<br />antes da primeira garfada.</h2>
          </motion.div>
          <div className="editorial-gallery">
            <motion.div {...enter} className="gallery-card gallery-card--wide"><PhotoCrop src="/images/gastronomia-prato-01.png" alt="Risoto cremoso com salmão e taça de vinho branco" position="50% 72%" /><span>Detalhe</span><p>Texturas, contrastes e precisão.</p></motion.div>
            <motion.div {...enter} className="gallery-card gallery-card--tall"><PhotoCrop src="/images/gastronomia-prato-02.png" alt="Massa fresca com molho cremoso" position="58% 53%" /><span>Harmonização</span><p>A taça certa muda o ritmo da mesa.</p></motion.div>
            <motion.div {...enter} className="gallery-note"><Wine aria-hidden="true" /><p>Uma cozinha pensada para ser descoberta sem pressa.</p></motion.div>
          </div>
        </section>

        <section className="wine-section" id="vinhos">
          <PhotoCrop position="94% 38%" className="wine-photo" />
          <motion.div {...enter} className="wine-copy">
            <Eyebrow>Nossa carta de vinhos</Eyebrow>
            <h2>Cada prato encontra sua melhor companhia.</h2>
            <p>Uma seleção pensada para conduzir a experiência da primeira à última taça, respeitando preferências, momentos e descobertas.</p>
            <a className="text-cta" href={RESERVATION_URL}>Viver esta experiência</a>
          </motion.div>
        </section>

        <section className="section ambience" id="ambiente">
          <motion.div {...enter} className="section-heading"><Eyebrow>Nosso ambiente</Eyebrow><h2>Luz baixa.<br />Conversas longas.</h2></motion.div>
          <div className="ambience-grid">
            <PhotoCrop position="48% 42%" className="ambience-grid__main" />
            <PhotoCrop position="16% 44%" className="ambience-grid__side" />
            <p>Um cenário intimista, criado para encontros que merecem durar um pouco mais.</p>
          </div>
        </section>

        <section className="reservation" id="reservas">
          <Image src="/images/piatti-vino-hero.png" alt="" fill sizes="100vw" className="reservation__image" />
          <div className="reservation__veil" />
          <motion.div {...enter} className="reservation__content">
            <Eyebrow>Uma experiência inesquecível</Eyebrow>
            <h2>Sua mesa está<br />quase pronta.</h2>
            <p>Reserve pelo nosso canal oficial e prepare-se para viver uma noite memorável.</p>
            <a className="primary-cta" href={RESERVATION_URL}>Reservar mesa <CalendarDays size={18} /></a>
          </motion.div>
        </section>

        <section className="section contact" id="contacto">
          <div className="contact-heading"><Eyebrow>Localização e contacto</Eyebrow><h2>Onde a experiência começa.</h2></div>
          <div className="contact-grid">
            <div><MapPin aria-hidden="true" /><h3>Endereço</h3><p>A confirmar</p></div>
            <div><Wine aria-hidden="true" /><h3>Horários</h3><p>A confirmar</p></div>
            <div><Instagram aria-hidden="true" /><h3>Redes sociais</h3><p>Perfis oficiais a confirmar</p></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><Brand /><p>Gastronomia contemporânea para momentos que ficam.</p></div>
        <div className="footer-nav">{navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
        <p className="footer-legal">© {new Date().getFullYear()} Piatti &amp; Vino. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
