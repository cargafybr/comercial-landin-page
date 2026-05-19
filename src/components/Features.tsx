import ScrollReveal from './ScrollReveal'

const featureItems = [
  'Emissor de CTe',
  'Emissor de MDFe',
  'Geração de CIOT',
  'Recepção de NF-e',
  'Averbação automática',
  'Emissão em lote',
]

const timelineSteps = [
  { step: 'Passo 1', title: 'Recepção das NF-e', sub: 'Importe uma ou mais notas de uma só vez', color: 'bg-green-400', borderColor: 'border-green-400' },
  { step: 'Passo 2', title: 'Revisão e complemento', sub: 'Motorista, veículo, rota', color: 'bg-blue-400', borderColor: 'border-blue-400' },
  { step: 'Passo 3', title: 'Envio ao SEFAZ', sub: 'Retorno em segundos', color: 'bg-purple-400', borderColor: 'border-purple-400' },
  { step: 'Passo 4', title: 'CIOT gerado automaticamente', sub: 'Averbação inclusa', color: 'bg-yellow-400', borderColor: 'border-yellow-400' },
  { step: 'Concluído', title: 'CTe Autorizado ✓', sub: 'Danfe disponível para download', color: 'bg-green-400', borderColor: 'border-green-400', highlight: true },
]

export default function Features() {
  return (
    <section id="transportadoras" className="py-24 px-6 bg-white dark:bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features List */}
          <div>
            <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
              Recursos completos
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
              Tudo em uma única ferramenta
            </h2>
            <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-[520px] leading-relaxed mb-8">
              Do primeiro CTe ao encerramento do MDFe, a CargaFy cobre toda a operação fiscal do seu transporte.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {featureItems.map((f, i) => (
                <ScrollReveal key={f} delay={i * 80}>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-surface-card-dark rounded-lg border border-slate-200 dark:border-slate-800 transition-all hover:bg-brand-100 hover:border-brand-500 dark:hover:bg-brand-900/20 dark:hover:border-brand-700/50 cursor-default">
                    <div className="w-7 h-7 shrink-0 bg-accent-green-soft dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 pt-1">{f}</span>
                  </div>
                </ScrollReveal>
              ))}
              <ScrollReveal delay={featureItems.length * 80}>
                <div className="sm:col-span-2 flex items-start gap-3 p-4 bg-slate-50 dark:bg-surface-card-dark rounded-lg border border-slate-200 dark:border-slate-800 transition-all hover:bg-brand-100 hover:border-brand-500 dark:hover:bg-brand-900/20 dark:hover:border-brand-700/50 cursor-default">
                  <div className="w-7 h-7 shrink-0 bg-accent-green-soft dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-accent-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 pt-1">Gestão centralizada de todos os documentos</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Timeline */}
          <ScrollReveal>
            <div className="bg-slate-900 dark:bg-surface-card-dark rounded-2xl p-8 shadow-2xl ring-1 ring-white/5">
              <div className="text-slate-500 dark:text-slate-500 text-[11px] font-semibold tracking-[1px] mb-6">FLUXO DE EMISSÃO</div>
              <div className="relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gray-700 dark:bg-slate-700" />

                {timelineSteps.map((s, i) => (
                  <div key={s.step} className={`relative ${i < timelineSteps.length - 1 ? 'mb-6' : ''}`}>
                    {/* Dot */}
                    <div className={`absolute -left-[17px] top-1 w-3.5 h-3.5 rounded-full border-2 ${s.borderColor} bg-slate-900 dark:bg-surface-card-dark flex items-center justify-center`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                    </div>

                    <div className="text-[11px] text-gray-400 dark:text-slate-500 mb-1">{s.step}</div>
                    <div className={`font-heading text-[13px] font-semibold ${s.highlight ? 'text-green-400' : 'text-white'}`}>{s.title}</div>
                    <div className="text-[11px] text-gray-500 dark:text-slate-600 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
