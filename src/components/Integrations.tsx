import ScrollReveal from './ScrollReveal'

const integrations = [
  {
    title: 'SEFAZ',
    desc: 'Autorização direta',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
  {
    title: 'ERP',
    desc: 'Integração via API',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
    ),
  },
  {
    title: 'CIOT',
    desc: 'Geração automática',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
    ),
  },
  {
    title: 'APIs REST',
    desc: 'Webhooks e eventos',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
    ),
  },
]

export default function Integrations() {
  return (
    <section id="contadores" className="py-24 px-6 bg-slate-900 dark:bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-400/15 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-blue-400/20">
            Integrações
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-white tracking-tight mb-4 leading-tight">
            Conectado a tudo que você já usa
          </h2>
          <p className="text-[17px] text-slate-400 max-w-[520px] mx-auto leading-relaxed">
            Integrações nativas com os principais sistemas do ecossistema de transporte e fiscal do Brasil.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Left cards */}
          {integrations.slice(0, 2).map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="bg-gray-800 dark:bg-surface-card-dark border border-gray-700 dark:border-slate-800 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-brand-600/10 hover:border-brand-500/40 hover:-translate-y-1 cursor-default">
                <div className="w-[50px] h-[50px] bg-gray-700 dark:bg-slate-800 rounded-[14px] mx-auto mb-3 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-heading text-sm font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-slate-500">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}

          {/* Center card - CargaFy hub */}
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-br from-brand-700 to-brand-600 border border-brand-500/40 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default shadow-lg shadow-brand-600/20">
              <div className="w-[50px] h-[50px] bg-white/15 rounded-[14px] mx-auto mb-3 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="7" width="14" height="11" rx="2" />
                  <path d="M5 4h8l2 3H5z" />
                  <path d="M16 13l4 0M18 11l2 2-2 2" />
                </svg>
              </div>
              <h4 className="font-heading text-base font-bold text-white mb-1">CargaFy</h4>
              <p className="text-[11px] text-white/60">Hub central</p>
            </div>
          </ScrollReveal>

          {/* Right cards */}
          {integrations.slice(2).map((item, i) => (
            <ScrollReveal key={item.title} delay={(i + 3) * 100}>
              <div className="bg-gray-800 dark:bg-surface-card-dark border border-gray-700 dark:border-slate-800 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-brand-600/10 hover:border-brand-500/40 hover:-translate-y-1 cursor-default">
                <div className="w-[50px] h-[50px] bg-gray-700 dark:bg-slate-800 rounded-[14px] mx-auto mb-3 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-heading text-sm font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-slate-500">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
