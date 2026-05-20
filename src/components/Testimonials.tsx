import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    text: '"Reduzimos drasticamente o tempo operacional da empresa. O que levava 20 minutos agora fazemos em menos de 2. Suporte impecável."',
    name: 'Ricardo Mendes',
    role: 'Diretor · Transportadora Mendes SP',
    initials: 'RM',
    color: 'bg-brand-600',
  },
  {
    text: '"Sistema extremamente simples e rápido. Minha equipe aprendeu em menos de uma hora. Nunca mais tivemos erro na emissão de CTe."',
    name: 'Ana Carolina Luz',
    role: 'Sócia · LogiSul Transportes SC',
    initials: 'AC',
    color: 'bg-accent-green',
  },
  {
    text: '"Melhor custo benefício para emissão fiscal que já testamos. A integração com SEFAZ é instantânea e o CIOT automático economizou horas por semana."',
    name: 'Marcos Oliveira',
    role: 'Proprietário · Frete Rápido Lages',
    initials: 'MO',
    color: 'bg-purple-600',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-surface-dark-secondary">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
            Depoimentos
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Quem usa, recomenda
          </h2>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-[520px] mx-auto leading-relaxed">
            Transportadoras de todo o Brasil confiando na Cargafy para a gestão fiscal do dia a dia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="bg-white dark:bg-surface-card-dark rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:shadow-brand-900/10 transition-all duration-300 hover:-translate-y-1">
                {/* Stars */}
                <div className="text-yellow-400 text-sm mb-4 tracking-wider">★★★★★</div>

                {/* Text */}
                <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-5 italic">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-[38px] h-[38px] rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                    <span className="font-heading text-[13px] font-bold text-white">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
