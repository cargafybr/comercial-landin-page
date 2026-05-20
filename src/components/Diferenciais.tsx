import ScrollReveal from './ScrollReveal'

const comparisons = [
  {
    feature: 'Emissão de CTe',
    cargafy: true,
    competitor: true,
  },
  {
    feature: 'Emissão de MDFe',
    cargafy: true,
    competitor: true,
  },
  {
    feature: 'Geração de CIOT',
    cargafy: true,
    competitor: true,
  },
  {
    feature: 'Interface moderna e intuitiva',
    cargafy: true,
    competitor: false,
  },
  {
    feature: 'Suporte humanizado e dedicado',
    cargafy: true,
    competitor: false,
  },
  {
    feature: 'Onboarding com consultor',
    cargafy: true,
    competitor: false,
  },
  {
    feature: 'Sem burocracia para começar',
    cargafy: true,
    competitor: false,
  },
  {
    feature: 'Preço justo e transparente',
    cargafy: true,
    competitor: false,
  },
  {
    feature: 'Velocidade na emissão',
    cargafy: true,
    competitor: false,
  },
]

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Velocidade real',
    desc: 'Emissão em segundos, não minutos. Interface pensada para quem trabalha com volume e precisa de agilidade.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Suporte de verdade',
    desc: 'Nada de chatbot. Nosso time de consultores entende de transporte e resolve com você em tempo real.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
    border: 'border-brand-400/20',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    title: 'Sem complexidade',
    desc: 'Sistemas legados são pesados e confusos. A Cargafy é simples desde o primeiro clique — sem treinamentos longos.',
    color: 'text-accent-green',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
]

export default function Diferenciais() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-surface-dark-secondary">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
            Comparativo
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Por que escolher a Cargafy?
          </h2>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-[580px] mx-auto leading-relaxed">
            Veja como nos comparamos com soluções tradicionais do mercado como MuitCTe e similares.
          </p>
        </div>

        {/* Comparison Table */}
        <ScrollReveal>
          <div className="bg-white dark:bg-surface-card-dark rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-16">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-0 border-b border-slate-200 dark:border-slate-700/60">
              <div className="p-5 text-[13px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Funcionalidade
              </div>
              <div className="p-5 text-center">
                <span className="font-heading text-sm font-bold text-brand-600 dark:text-brand-400">Cargafy</span>
              </div>
              <div className="p-5 text-center">
                <span className="font-heading text-sm font-bold text-slate-400 dark:text-slate-500">Concorrentes</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-0 border-b last:border-b-0 border-slate-100 dark:border-slate-800/60 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30 ${
                  i % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-800/10' : ''
                }`}
              >
                <div className="p-4 px-5 text-[14px] text-slate-700 dark:text-slate-300 font-medium flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.cargafy ? (
                    <div className="w-7 h-7 rounded-full bg-accent-green/10 dark:bg-emerald-400/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
                  {row.competitor ? (
                    <div className="w-7 h-7 rounded-full bg-accent-green/10 dark:bg-emerald-400/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 100}>
              <div className={`group relative bg-white dark:bg-surface-card-dark rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-brand-900/20 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}>
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-accent-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-350`} />

                <div className={`w-11 h-11 ${h.bg} rounded-xl flex items-center justify-center mb-5 border ${h.border}`}>
                  <span className={h.color}>{h.icon}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">{h.title}</h3>
                <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed">{h.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
