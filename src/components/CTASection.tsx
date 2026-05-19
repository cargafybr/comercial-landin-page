'use client'

import { useState } from 'react'

export default function CTASection() {
  const [form, setForm] = useState({ nome: '', empresa: '', wpp: '', cidade: '', tipo: '' })

  const handleSubmit = () => {
    if (!form.nome || !form.empresa || !form.wpp) {
      alert('Por favor, preencha nome, empresa e WhatsApp.')
      return
    }
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}. Gostaria de conhecer a plataforma CargaFy. WhatsApp: ${form.wpp}`
    )
    window.open(`https://wa.me/5511994599115?text=${msg}`, '_blank')
  }

  return (
    <section id="demo" className="py-24 px-6 bg-gradient-to-br from-brand-900 to-brand-600 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Text */}
          <div>
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-4 border border-white/20">
              Comece agora
            </span>
            <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-white tracking-tight mb-4 leading-tight">
              Automatize a emissão da sua transportadora
            </h2>
            <p className="text-base text-white/75 leading-relaxed mb-8">
              Sem contratos longos. Sem taxa de implantação. Comece em minutos e veja sua operação ganhar velocidade hoje mesmo.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-3">
              {['Suporte humano via WhatsApp', '100% aderente ao SEFAZ', 'Presentes em SP e SC'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-white/85 text-sm">
                  <svg className="w-4 h-4 text-green-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div id="contato" className="bg-white dark:bg-surface-card-dark rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-5">
              Quero conhecer a plataforma
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="nome" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Seu nome</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="João Silva"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all font-body"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  placeholder="Transportadora XYZ"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all font-body"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="wpp" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">WhatsApp</label>
                <input
                  type="tel"
                  id="wpp"
                  placeholder="(11) 99999-9999"
                  value={form.wpp}
                  onChange={(e) => setForm({ ...form, wpp: e.target.value })}
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all font-body"
                />
              </div>
              <div>
                <label htmlFor="cidade" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Cidade</label>
                <input
                  type="text"
                  id="cidade"
                  placeholder="São Paulo - SP"
                  value={form.cidade}
                  onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                  className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all font-body"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="tipo" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Tipo de empresa</label>
              <select
                id="tipo"
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all font-body appearance-none"
              >
                <option value="">Selecione...</option>
                <option>Transportadora autônoma</option>
                <option>Pequena transportadora (até 10 veículos)</option>
                <option>Transportadora média (10–50 veículos)</option>
                <option>Grande transportadora (50+ veículos)</option>
                <option>Escritório de contabilidade</option>
                <option>Outro</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-accent-green hover:bg-green-700 text-white py-3.5 rounded-lg text-[15px] font-bold font-heading transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(22,163,74,0.3)] cursor-pointer border-none"
            >
              Quero conhecer a plataforma →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
