import MockupDashboard from './MockupDashboard'

export default function Hero() {
  return (
    <section className="relative pt-[140px] pb-20 px-6 overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-green-50/60 dark:from-surface-dark dark:via-surface-dark-secondary dark:to-surface-dark">
      {/* Decorative orbs */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(22,163,74,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(22,163,74,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text */}
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-5 border border-brand-200/60 dark:border-brand-700/30">
            <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse-dot" />
            Novo · Emissão em segundos
          </div>

          <h1 className="font-heading text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.15] text-slate-900 dark:text-white tracking-tight mb-5">
            O emissor de{' '}
            <em className="not-italic gradient-text">CTe e MDFe</em>{' '}
            mais rápido e simples para sua transportadora
          </h1>

          <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-[480px] mb-8 leading-relaxed">
            Emita CTe, MDFe e gere CIOT em segundos, com automação inteligente e suporte especializado para sua operação nunca parar.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 flex-wrap mb-8">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 bg-accent-green hover:bg-green-700 text-white px-7 py-3.5 rounded-lg text-[15px] font-bold transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(22,163,74,0.3)] hover:shadow-[0_8px_24px_rgba(22,163,74,0.35)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              Começar Agora
            </a>
            <a
              href="https://wa.me/5511994599115"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-6 py-3.5 rounded-lg text-[15px] font-semibold border-[1.5px] border-slate-200 dark:border-slate-700 transition-all hover:-translate-y-0.5 hover:border-accent-green-light hover:text-accent-green dark:hover:border-accent-green-light dark:hover:text-accent-green-light"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-2.5">
            <span className="text-yellow-400 text-[15px] tracking-wider">★★★★★</span>
            <span className="text-[13px] text-slate-600 dark:text-slate-400">
              <strong className="text-slate-800 dark:text-white">5.0</strong> no Google · +200 transportadoras ativas
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="hidden md:block">
          <MockupDashboard />
        </div>
      </div>
    </section>
  )
}
