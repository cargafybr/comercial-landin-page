import ScrollReveal from './ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Fale com um consultor',
    desc: 'Entre em contato com nosso time e nós cuidamos de toda a configuração para você.',
    color: 'from-brand-500 to-brand-700',
    iconColor: 'text-brand-400',
  },
  {
    num: '02',
    title: 'Configure o certificado',
    desc: 'Importe seu certificado digital A1 e configure os dados fiscais.',
    color: 'from-purple-500 to-purple-700',
    iconColor: 'text-purple-400',
  },
  {
    num: '03',
    title: 'Integre via API',
    desc: 'Conecte seu ERP ou sistema à nossa API REST para automação completa.',
    color: 'from-amber-500 to-amber-700',
    iconColor: 'text-amber-400',
  },
  {
    num: '04',
    title: 'Emita documentos',
    desc: 'Comece a emitir CTe, MDFe e gerar CIOT em segundos.',
    color: 'from-emerald-500 to-emerald-700',
    iconColor: 'text-emerald-400',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-surface-dark-secondary">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
            Como funciona
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Simples de começar,<br className="hidden sm:block" /> poderoso de usar.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-brand-500/30 via-purple-500/30 via-amber-500/30 to-emerald-500/30" />

          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 120}>
              <div className="relative flex flex-col items-center text-center">
                {/* Number Circle */}
                <div className={`w-[52px] h-[52px] rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg relative z-10 ring-4 ring-slate-50 dark:ring-surface-dark-secondary`}>
                  <span className="font-heading text-sm font-bold text-white">{s.num}</span>
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-surface-card-dark rounded-2xl p-6 border border-slate-200 dark:border-slate-800 w-full">
                  <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
