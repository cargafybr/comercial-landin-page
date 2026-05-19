import ScrollReveal from './ScrollReveal'

const modules = [
  {
    id: 'cte',
    color: 'blue',
    accent: 'border-module-cte',
    accentBar: 'bg-module-cte',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-500',
    badgeBg: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200/60 dark:border-blue-700/30',
    glowClass: 'card-glow-blue',
    title: 'CT-e',
    subtitle: 'Conhecimento de Transporte Eletrônico',
    desc: 'Emissão completa de CT-e com validação automática, integração SEFAZ em tempo real e controle total dos documentos fiscais de transporte.',
    features: ['Emissão unitária e em lote', 'Cancelamento e inutilização', 'Carta de correção (CC-e)', 'Consulta por chave/número', 'DACTE automático (PDF)'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="7" width="14" height="11" rx="2" />
        <path d="M5 4h8l2 3H5z" />
        <path d="M16 13l4 0M18 11l2 2-2 2" />
      </svg>
    ),
  },
  {
    id: 'mdfe',
    color: 'amber',
    accent: 'border-module-mdfe',
    accentBar: 'bg-module-mdfe',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-500',
    badgeBg: 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-700/30',
    glowClass: 'card-glow-amber',
    title: 'MDF-e',
    subtitle: 'Manifesto Eletrônico de Documentos Fiscais',
    desc: 'Gestão completa do MDF-e para controle de cargas em trânsito. Abertura, encerramento e inclusão de documentos fiscais vinculados.',
    features: ['Abertura e encerramento', 'Inclusão de DF-e vinculados', 'Cancelamento', 'Consulta situação', 'DAMDFE automático (PDF)'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'ciot',
    color: 'green',
    accent: 'border-module-ciot',
    accentBar: 'bg-module-ciot',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-500',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-700/30',
    glowClass: 'card-glow-green',
    title: 'CIOT',
    subtitle: 'Código Identificador da Operação de Transporte',
    desc: 'Geração automática de CIOT integrada ao fluxo de emissão. Controle de pagamentos, consulta de status e encerramento simplificado.',
    features: ['Geração automática', 'Consulta de status', 'Cancelamento', 'Controle de pagamento', 'Encerramento integrado'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
]

export default function Modules() {
  return (
    <section id="modulos" className="py-24 px-6 bg-white dark:bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
            Módulos
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Cada módulo resolve<br className="hidden sm:block" /> um problema real.
          </h2>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-[580px] mx-auto leading-relaxed">
            Módulos independentes disponibilizados via API. Acesse o que precisar para a sua operação de transporte.
          </p>
        </div>

        {/* Module Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <ScrollReveal key={m.id} delay={i * 120}>
              <div className={`group relative bg-white dark:bg-surface-card-dark rounded-2xl p-8 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${m.glowClass}`}>
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${m.accentBar} rounded-t-2xl`} />

                {/* Icon */}
                <div className={`w-14 h-14 ${m.iconBg} rounded-2xl flex items-center justify-center mb-5 ${m.iconColor}`}>
                  {m.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-1">{m.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-4">{m.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{m.desc}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <svg className="w-4 h-4 text-accent-green shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* API Badge */}
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${m.badgeBg} mt-auto self-start`}>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Disponível via API
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
