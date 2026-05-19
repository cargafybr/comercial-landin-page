import ScrollReveal from './ScrollReveal'
import Image from 'next/image'

const founders = [
  {
    name: 'Marcos Vinicius Angeli Costa',
    role: 'Engenheiro de Software Sênior',
    photo: '/images/marcos_profile.jpeg',
    desc: 'Especialista em arquitetura de sistemas e soluções de alta performance. Apaixonado por simplificar processos complexos através da tecnologia.',
    skills: ['Arquitetura de Software', 'APIs de alta performance', 'Sistemas fiscais', 'Sistemas distribuídos'],
  },
  {
    name: 'Otávio Alexandre Ramos',
    role: 'Engenheiro de Software Especialista & Tech Lead',
    photo: '/images/otavio_profile.jpg',
    desc: 'Líder técnico com foco em escalabilidade e excelência de código. Experiência sólida em engenharia de produto e condução de equipes de alto nível.',
    skills: ['Liderança técnica', 'Escalabilidade', 'Engenharia de produto', 'Segurança de dados'],
  },
]

export default function SobreNos() {
  return (
    <section id="sobre" className="py-24 px-6 bg-white dark:bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 dark:bg-brand-900/30 text-brand-800 dark:text-brand-400 text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-brand-200/60 dark:border-brand-700/30">
            Quem somos
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Os engenheiros por trás da CargaFy
          </h2>
          <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-[580px] mx-auto leading-relaxed">
            Construída por desenvolvedores que entendem de tecnologia e de transporte.
          </p>
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {founders.map((f, i) => (
            <ScrollReveal key={f.name} delay={i * 150}>
              <div className="group relative bg-white dark:bg-surface-card-dark rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-brand-900/20 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden card-glow-blue">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-accent-green scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-350" />

                {/* Avatar */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg shrink-0 ring-2 ring-slate-200 dark:ring-slate-700">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight">{f.name}</h3>
                    <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mt-0.5">{f.role}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{f.desc}</p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {f.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
