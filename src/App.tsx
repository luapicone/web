import { useEffect, useState, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

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
    <main className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-6 md:px-12 lg:px-16">
        <header>
          <div className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2 text-white">
            <div className="text-2xl font-semibold tracking-tight">VEX</div>

            <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
              <a className="transition-colors hover:text-gray-300" href="#story">
                Story
              </a>
              <a className="transition-colors hover:text-gray-300" href="#investing">
                Investing
              </a>
              <a className="transition-colors hover:text-gray-300" href="#building">
                Building
              </a>
              <a className="transition-colors hover:text-gray-300" href="#advisory">
                Advisory
              </a>
            </nav>

            <button className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100">
              Start a Chat
            </button>
          </div>
        </header>

        <section className="flex-1 pb-12 lg:pb-16">
          <div className="flex h-full flex-col justify-end">
            <div className="lg:grid lg:grid-cols-2 lg:items-end">
              <div className="max-w-4xl">
                <AnimatedHeading text={'Shaping tomorrow\nwith vision and action.'} className="mb-4" />

                <FadeIn delay={800} duration={1000} className="mb-5 max-w-xl">
                  <p className="text-base text-gray-300 md:text-lg">
                    We back visionaries and craft ventures that define what comes next.
                  </p>
                </FadeIn>

                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <button className="rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100">
                      Start a Chat
                    </button>
                    <button className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
                      Explore Now
                    </button>
                  </div>
                </FadeIn>
              </div>

              <div className="mt-8 flex items-end justify-start lg:mt-0 lg:justify-end">
                <FadeIn delay={1400} duration={1000}>
                  <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
                    <p className="text-lg font-light text-white md:text-xl lg:text-2xl">
                      Investing. Building. Advisory.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
