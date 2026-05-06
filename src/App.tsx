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

        <section className="flex min-h-[calc(100vh-6rem)] flex-1 pb-0 pt-12 lg:pb-0 lg:pt-20">
          <div className="flex h-full w-full flex-col justify-end">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              <div className="max-w-4xl">
                <AnimatedHeading text={'Diseñamos viviendas\nposibles con IA.'} className="hero-heading mb-10 lg:mb-14" />

                <FadeIn delay={800} duration={1000} className="mt-80 max-w-2xl lg:mt-[27rem] xl:mt-[30rem]">
                  <p className="hero-copy text-base md:text-[1.2rem] lg:text-[1.35rem] xl:text-[1.5rem] leading-tight">
                    HabitatIA ayuda a planificar una vivienda simple, funcional y sostenible, priorizando el costo,
                    el aprovechamiento de materiales y la posibilidad de crecer por etapas.
                  </p>
                </FadeIn>
              </div>

              <div className="mt-52 flex items-end justify-start lg:mt-0 lg:justify-end xl:mt-0">
                <FadeIn delay={1400} duration={1000} className="lg:mt-[27rem] xl:mt-[30rem]">
                  <div className="hero-chip rounded-xl px-7 py-4 md:px-8">
                    <p className="text-xl font-light text-white md:text-2xl lg:text-3xl">
                      Vivienda accesible. Modular. Sostenible.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        </div>
      </section>

      <div className="px-6 py-8 md:px-12 lg:px-16 lg:py-12">
        <section className="pb-8" id="propuesta">
          <FadeIn delay={200} duration={900}>
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="liquid-glass rounded-2xl border border-white/10 px-5 py-5">
                  <div className="text-2xl font-medium text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-6 pb-8 lg:grid-cols-[1.1fr_0.9fr]" id="story">
          <FadeIn delay={250} duration={900}>
            <div className="liquid-glass rounded-3xl border border-white/10 p-6 md:p-8">
              <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gray-300">Nuestra propuesta</div>
              <h2 className="max-w-3xl text-3xl font-normal tracking-[-0.04em] text-white md:text-4xl">
                Una herramienta pensada para viviendas posibles y reales.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
                Combinamos planificación simple, criterios de ahorro y diseño modular para acercar soluciones
                habitacionales a familias que necesitan construir con recursos limitados.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={350} duration={900}>
            <div className="liquid-glass rounded-3xl border border-white/10 p-6 md:p-8">
              <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gray-300">Objetivo del MVP</div>
              <p className="text-sm leading-6 text-gray-300 md:text-base">
                Construir una primera versión capaz de orientar a una familia sobre qué vivienda conviene, cuánto
                podría costar y cómo se podría construir de forma progresiva.
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="pb-8" id="impacto">
          <FadeIn delay={300} duration={900}>
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.22em] text-gray-300">Triple impacto</div>
                <h2 className="mt-2 text-3xl font-normal tracking-[-0.04em] text-white md:text-4xl">
                  Tecnología aplicada a una vivienda digna, accesible y eficiente.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-gray-300 md:text-base">
                HabitatIA busca que más familias puedan proyectar una casa posible de construir y mejorar con el tiempo.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            {impacts.map((impact, index) => (
              <FadeIn key={impact.title} delay={420 + index * 120} duration={900}>
                <div className="liquid-glass h-full rounded-3xl border border-white/10 p-6">
                  <h3 className="text-xl font-normal text-white">{impact.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base">{impact.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="pb-8" id="tecnologia">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <FadeIn delay={320} duration={900}>
              <div className="liquid-glass rounded-3xl border border-white/10 p-6 md:p-8">
                <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gray-300">Tecnología base</div>
                <h2 className="text-3xl font-normal tracking-[-0.04em] text-white md:text-4xl">
                  Orientación clara para decidir mejor antes de construir.
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-300 md:text-base">
                  La plataforma fue pensada para dar una primera orientación clara sobre qué vivienda conviene,
                  cuánto podría costar y cómo se podría construir de forma progresiva.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white">
                  {['React', 'Bootstrap', 'Node.js', 'API REST', 'Cloud Computing', 'IA Generativa'].map((tech) => (
                    <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <FadeIn key={feature.title} delay={420 + index * 120} duration={900}>
                  <div className="liquid-glass rounded-3xl border border-white/10 p-6">
                    <h3 className="text-xl font-normal text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-300 md:text-base">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12 lg:pb-16" id="marketplace">
          <FadeIn delay={360} duration={900}>
            <div className="liquid-glass rounded-3xl border border-white/10 p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gray-300">Marketplace</div>
                  <h2 className="text-3xl font-normal tracking-[-0.04em] text-white md:text-4xl">
                    Materiales, espacios y decisiones básicas para gastar mejor.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
                    La propuesta de HabitatIA también contempla una capa de marketplace para orientar compras,
                    comparar alternativas y optimizar materiales dentro de un presupuesto real.
                  </p>
                </div>

                <div className="flex items-start justify-start lg:justify-end">
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm leading-6 text-gray-300">
                    • pensar una vivienda posible según el dinero disponible
                    <br />• construir por etapas y crecer más adelante
                    <br />• tomar decisiones más claras con menos desperdicio
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  )
}

export default App
