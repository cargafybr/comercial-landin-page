import ScrollReveal from './ScrollReveal'

const valores = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Simplicidade',
    desc: 'Tecnologia complexa, experiência simples. Acreditamos que o melhor software é aquele que você não precisa de manual para usar.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Confiabilidade',
    desc: 'Cada documento emitido é uma responsabilidade fiscal. Garantimos segurança, validação e rastreabilidade em toda operação.',
    color: 'text-brand-400',
    bg: 'bg-brand-400/10',
    border: 'border-brand-400/20',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Proximidade',
    desc: 'Não somos uma empresa distante. Nossos consultores conhecem você pelo nome e entendem a realidade da sua operação.',
    color: 'text-accent-green',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Inovação',
    desc: 'Construímos com as tecnologias mais modernas do mercado. API-first, cloud-native e pensado para escalar junto com você.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
]

export default function MissaoValores() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-surface-dark-secondary">
      <div className="max-w-[1200px] mx-auto">
        {/* Mission */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
              Nossa missão
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Simplificar a emissão fiscal<br className="hidden sm:block" /> do transporte no Brasil
            </h2>
            <div className="max-w-[720px] mx-auto">
              <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                A CargaFy nasceu da frustração de dois engenheiros com sistemas de emissão fiscal desatualizados, lentos e complexos. Nossa missão é oferecer tecnologia de ponta acessível para transportadoras de qualquer porte.
              </p>
              <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Acreditamos que emitir um CTe, MDFe ou gerar um CIOT deveria ser tão simples quanto enviar uma mensagem. É isso que estamos construindo — um sistema rápido, moderno e humanizado.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Nossos valores
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="group relative bg-white dark:bg-surface-card-dark rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-brand-900/20 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-accent-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-350" />

                <div className={`w-11 h-11 ${v.bg} rounded-xl flex items-center justify-center mb-5 border ${v.border}`}>
                  <span className={v.color}>{v.icon}</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">{v.title}</h4>
                <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
