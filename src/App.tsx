import { useEffect, useState, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

type FeatureCard = {
  title: string
  description: string
}

type Stat = {
  label: string
  value: string
}

const navigation = [
  { label: 'Propuesta', href: '#propuesta' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Marketplace', href: '#marketplace' },
]

const stats: Stat[] = [
  { label: 'Diseños modulares', value: '100%' },
  { label: 'Enfoque sostenible', value: 'Triple impacto' },
  { label: 'Tecnología base', value: 'React + Node.js' },
]

const features: FeatureCard[] = [
  {
    title: 'Vivienda accesible',
    description:
      'Propuestas pensadas para familias que necesitan una solución habitacional posible de construir y ampliar.',
  },
  {
    title: 'Menor costo de obra',
    description:
      'Estimaciones orientadas a reducir materiales innecesarios y aprovechar mejor el presupuesto disponible.',
  },
  {
    title: 'Diseño para crecer',
    description:
      'Opciones modulares que permiten arrancar con lo esencial y ampliar la vivienda en el futuro.',
  },
]

const impacts: FeatureCard[] = [
  {
    title: 'Impacto social',
    description:
      'Acerca una vivienda digna y funcional a familias que hoy necesitan construir con presupuestos ajustados.',
  },
  {
    title: 'Impacto ambiental',
    description:
      'Promueve materiales y estrategias que ayudan a ahorrar energía y reducir desperdicios.',
  },
  {
    title: 'Impacto económico',
    description:
      'Ayuda a tomar decisiones más claras para construir con menos errores y menos gasto innecesario.',
  },
]

function FadeIn({ children, delay = 0, duration = 1000, className = '' }: FadeInProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), delay)
    return () => window.clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} ${className}`.trim()}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}

type AnimatedHeadingProps = {
  text: string
  delay?: number
  charDelay?: number
  duration?: number
  className?: string
}

type AnimatedTextProps = {
  text: string
  delay?: number
  charDelay?: number
  duration?: number
  className?: string
}

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

function AnimatedHeading({
  text,
  delay = 200,
  charDelay = 30,
  duration = 500,
  className = '',
}: AnimatedHeadingProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), delay)
    return () => window.clearTimeout(timer)
  }, [delay])

  const lines = text.split('\n')

  return (
    <h1
      className={`text-4xl font-normal leading-none text-white md:text-5xl lg:text-6xl xl:text-7xl ${className}`.trim()}
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => {
        const lineLength = line.length
        return (
          <span key={`${line}-${lineIndex}`} className="block">
            {line.split('').map((char, charIndex) => {
              const transitionDelay = lineIndex * lineLength * charDelay + charIndex * charDelay
              return (
                <span
                  key={`${char}-${lineIndex}-${charIndex}`}
                  className="inline-block"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: `${duration}ms`,
                    transitionDelay: `${transitionDelay}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    whiteSpace: 'pre',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}

function AnimatedText({
  text,
  delay = 800,
  charDelay = 12,
  duration = 450,
  className = '',
}: AnimatedTextProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), delay)
    return () => window.clearTimeout(timer)
  }, [delay])

  const lines = text.split('\n')

  return (
    <div className={className}>
      {lines.map((line, lineIndex) => {
        const words = line.split(' ')
        let charOffset = 0

        return (
          <span key={`${line}-${lineIndex}`} className="block">
            {words.map((word, wordIndex) => {
              const wordNode = (
                <span key={`${word}-${lineIndex}-${wordIndex}`} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, charIndex) => {
                    const transitionDelay = (charOffset + charIndex) * charDelay + lineIndex * line.length * charDelay
                    return (
                      <span
                        key={`${char}-${lineIndex}-${wordIndex}-${charIndex}`}
                        className="inline-block"
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible ? 'translateX(0)' : 'translateX(-16px)',
                          transitionProperty: 'opacity, transform',
                          transitionDuration: `${duration}ms`,
                          transitionDelay: `${transitionDelay}ms`,
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                          whiteSpace: 'pre',
                        }}
                      >
                        {char}
                      </span>
                    )
                  })}
                </span>
              )

              charOffset += word.length + 1

              return (
                <span key={`group-${lineIndex}-${wordIndex}`}>
                  {wordNode}
                  {wordIndex < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
                </span>
              )
            })}
          </span>
        )
      })}
    </div>
  )
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-heading-block">
        <div className="section-eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      <p className="section-description">{description}</p>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="relative min-h-screen overflow-hidden px-6 pt-6 md:px-12 lg:px-16">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/habitatia-background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 min-h-screen">
          <header>
            <div className="liquid-glass flex items-center justify-between rounded-xl px-5 py-3 text-white md:px-6">
              <div className="text-3xl font-semibold tracking-tight">HabitatIA</div>

            <nav className="hidden items-center gap-8 text-base text-white/90 md:flex">
              {navigation.map((item) => (
                <a key={item.href} className="transition-colors hover:text-gray-300" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#propuesta"
              className="rounded-lg bg-white px-7 py-2.5 text-base font-medium text-black transition-colors hover:bg-gray-100"
            >
              Empezar ahora
            </a>
          </div>
        </header>

        <section className="flex h-[calc(100vh-6rem)] flex-1 pb-52 pt-2 lg:pb-56 lg:pt-10">
          <div className="flex h-full w-full flex-col justify-end">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              <div className="max-w-2xl">
                <FadeIn delay={100} duration={800}>
                  <div className="hero-eyebrow mb-5 md:mb-6">
                    Planificación inteligente para vivienda accesible
                  </div>
                </FadeIn>

                <AnimatedHeading
                  text={'Diseñamos\nviviendas posibles\ncon IA.'}
                  className="hero-heading mb-7 lg:mb-8"
                />

                <AnimatedText
                  delay={800}
                  text={'HabitatIA te ayuda a planificar viviendas simples, funcionales y sostenibles, priorizando el costo, el aprovechamiento de materiales y la posibilidad de crecer por etapas.'}
                  className="hero-copy text-[0.95rem] md:text-[1.05rem] lg:text-[1.15rem] leading-snug mb-9 lg:mb-11"
                />

                <FadeIn delay={1200} duration={900}>
                  <div className="flex flex-wrap gap-3 mb-10 lg:mb-14">
                    <a href="#propuesta" className="hero-btn-primary">Empezar ahora</a>
                    <a href="#propuesta" className="hero-btn-outlined">Ver propuesta</a>
                  </div>
                </FadeIn>

                <FadeIn delay={1500} duration={900}>
                  <div>
                    <div className="hero-stats-divider" />
                    <div className="hero-stats-row">
                      <div className="hero-stat-item">
                        <div className="hero-stat-icon-wrap">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                          </svg>
                        </div>
                        <div>
                          <div className="hero-stat-value text-[1.9rem] md:text-[2.35rem] lg:text-[2.8rem]">+120</div>
                          <div className="hero-stat-label text-sm md:text-base lg:text-lg">viviendas planificadas</div>
                        </div>
                      </div>
                      <div className="hero-stat-sep" />
                      <div className="hero-stat-item">
                        <div className="hero-stat-icon-wrap">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 8C8 10 5.9 16.17 3.82 19.34c-.11.16.04.34.2.26C7.38 17.9 13 15.57 17 8z"/>
                            <path d="M3.82 19.34C8 15 11 13 17 8"/>
                          </svg>
                        </div>
                        <div>
                          <div className="hero-stat-value text-[1.9rem] md:text-[2.35rem] lg:text-[2.8rem]">30%</div>
                          <div className="hero-stat-label text-sm md:text-base lg:text-lg">menos desperdicio de materiales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="mt-10 flex items-end justify-start lg:mt-0 lg:justify-end">
                <div className="hero-chip rounded-xl px-7 py-4 md:px-8">
                  <AnimatedText
                    delay={1400}
                    charDelay={18}
                    text={'Vivienda accesible. Modular. Sostenible.'}
                    className="text-lg font-light text-white md:text-[1.4rem] lg:text-[1.8rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </section>

      <div className="content-shell px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div className="content-container">
          <section className="section" id="propuesta">
            <FadeIn delay={180} duration={900}>
              <div className="highlights-grid">
                {stats.map((stat) => (
                  <div key={stat.label} className="highlight-card">
                    <div className="highlight-value">{stat.value}</div>
                    <div className="highlight-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={240} duration={900}>
              <SectionHeader
                eyebrow="Propuesta"
                title="Una plataforma pensada para ordenar decisiones, costos y crecimiento de una vivienda real."
                description="HabitatIA organiza la información con una estructura más clara para que una familia pueda entender mejor qué construir, cómo priorizar y cómo proyectar una ampliación futura."
              />
            </FadeIn>

            <div className="split-layout proposal-layout">
              <FadeIn delay={320} duration={900}>
                <article className="feature-card feature-card-primary">
                  <h3 className="feature-title">Una herramienta pensada para viviendas posibles y reales.</h3>
                  <p className="feature-description">
                    Combinamos planificación simple, criterios de ahorro y diseño modular para acercar soluciones
                    habitacionales a familias que necesitan construir con recursos limitados.
                  </p>
                </article>
              </FadeIn>

              <FadeIn delay={420} duration={900}>
                <article className="feature-card feature-card-secondary">
                  <div className="card-eyebrow">Objetivo del MVP</div>
                  <p className="feature-description">
                    Construir una primera versión capaz de orientar a una familia sobre qué vivienda conviene, cuánto
                    podría costar y cómo se podría construir de forma progresiva.
                  </p>
                </article>
              </FadeIn>
            </div>
          </section>

          <section className="section" id="impacto">
            <FadeIn delay={260} duration={900}>
              <SectionHeader
                eyebrow="Triple impacto"
                title="Tecnología aplicada a una vivienda digna, accesible y eficiente."
                description="HabitatIA busca que más familias puedan proyectar una casa posible de construir hoy y preparada para crecer mejor con el tiempo."
              />
            </FadeIn>

            <div className="cards-grid cards-grid-3">
              {impacts.map((impact, index) => (
                <FadeIn key={impact.title} delay={360 + index * 110} duration={900}>
                  <article className={`feature-card feature-card-equal ${index === 0 ? 'impact-social' : index === 1 ? 'impact-environmental' : 'impact-economic'}`}>
                    <h3 className="feature-title">{impact.title}</h3>
                    <p className="feature-description">{impact.description}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>

          <section className="section" id="tecnologia">
            <FadeIn delay={280} duration={900}>
              <SectionHeader
                eyebrow="Tecnología Base"
                title="Una base técnica clara para orientar mejor antes de construir."
                description="La experiencia combina información ordenada, un lenguaje simple y una base tecnológica flexible para evolucionar hacia recomendaciones más inteligentes."
              />
            </FadeIn>

            <div className="split-layout tech-layout">
              <FadeIn delay={360} duration={900}>
                <article className="feature-card feature-card-primary tech-main-card">
                  <h3 className="feature-title">Orientación clara para decidir mejor antes de construir.</h3>
                  <p className="feature-description">
                    La plataforma fue pensada para dar una primera orientación clara sobre qué vivienda conviene,
                    cuánto podría costar y cómo se podría construir de forma progresiva.
                  </p>
                  <div className="tech-pills">
                    {['React', 'Bootstrap', 'Node.js', 'API REST', 'Cloud Computing', 'IA Generativa'].map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeIn>

              <div className="stacked-cards">
                {features.map((feature, index) => (
                  <FadeIn key={feature.title} delay={440 + index * 110} duration={900}>
                    <article className="feature-card">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-final" id="marketplace">
            <FadeIn delay={300} duration={900}>
              <SectionHeader
                eyebrow="Marketplace"
                title="Materiales, compras y decisiones básicas para gastar mejor."
                description="La capa comercial de HabitatIA ordena alternativas y ayuda a comparar compras dentro de un presupuesto real, sin perder claridad ni foco."
              />
            </FadeIn>

            <FadeIn delay={400} duration={900}>
              <article className="feature-card marketplace-card">
                <div className="marketplace-layout">
                  <div>
                    <h3 className="feature-title">Comprar con criterio, comparar opciones y construir por etapas.</h3>
                    <p className="feature-description">
                      La propuesta de HabitatIA también contempla una capa de marketplace para orientar compras,
                      comparar alternativas y optimizar materiales dentro de un presupuesto real.
                    </p>
                  </div>

                  <div className="marketplace-bullets">
                    <div className="marketplace-bullet">pensar una vivienda posible según el dinero disponible</div>
                    <div className="marketplace-bullet">construir por etapas y crecer más adelante</div>
                    <div className="marketplace-bullet">tomar decisiones más claras con menos desperdicio</div>
                  </div>
                </div>
              </article>
            </FadeIn>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
