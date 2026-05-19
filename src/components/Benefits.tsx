import ScrollReveal from './ScrollReveal'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brand-500">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.89 10.7 19.79 19.79 0 011.9 2.14 2 2 0 013.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
      </svg>
    ),
    title: 'Atendimento rápido',
    desc: 'Suporte humanizado com resposta ágil para sua operação não parar. Time especializado em logística fiscal pronto para te atender.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brand-500">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Emissão em segundos',
    desc: 'Emita CTe e MDFe com extrema velocidade e segurança. Integração direta com SEFAZ para autorização imediata sem filas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-brand-500">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Tudo automatizado',
    desc: 'Integrações inteligentes para reduzir digitação manual. Recepção de NF-e, averbação e emissão em lote com um clique.',
  },
]

export default function Benefits() {
  return (
    <section id="recursos" className="py-24 px-6 bg-slate-50 dark:bg-surface-dark-secondary">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
            Por que a CargaFy?
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Tudo que sua operação precisa
          </h2>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-[520px] mx-auto leading-relaxed">
            Do autônomo à grande transportadora, a CargaFy adapta-se ao seu ritmo e volume de emissão.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="group relative bg-white dark:bg-surface-card-dark rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-brand-900/20 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden card-glow-blue">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-brand-800 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-350" />

                <div className="w-13 h-13 bg-brand-100 dark:bg-brand-900/30 rounded-[14px] flex items-center justify-center mb-5">
                  {b.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2.5">{b.title}</h3>
                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
