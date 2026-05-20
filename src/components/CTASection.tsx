'use client'

import { useState } from 'react'

export default function CTASection() {
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', wpp: '', cidade: '', tipo: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const formatPhoneNumber = (value: string) => {
    const clean = value.replace(/\D/g, '')
    const digits = clean.slice(0, 11)
    
    if (digits.length <= 2) {
      return digits.length > 0 ? `(${digits}` : digits
    }
    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    }
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setForm((prev) => ({ ...prev, wpp: formatted }))
  }

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.nome || !form.empresa || !form.wpp || !form.email) {
      alert('Por favor, preencha todos os campos obrigatórios (*).')
      return
    }
    if (!emailRegex.test(form.email)) {
      alert('Por favor, insira um e-mail válido.')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: form }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setStatus('error')
    }
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
          <div id="contato" className="bg-white dark:bg-surface-card-dark rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] min-h-[400px] flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center py-6 animate-fade-in flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-500 shadow-sm">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                  Demonstração Solicitada!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
                  Seus dados foram enviados com sucesso. Gostaria de prosseguir para o WhatsApp para falar com nosso suporte e acelerar a demonstração?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(
                        `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}. Gostaria de conhecer a plataforma CargaFy. WhatsApp: ${form.wpp}`
                      )
                      window.open(`https://wa.me/5511994599115?text=${msg}`, '_blank')
                      setStatus('idle')
                      setForm({ nome: '', empresa: '', email: '', wpp: '', cidade: '', tipo: '' })
                    }}
                    className="flex-1 bg-accent-green hover:bg-green-700 text-white py-3 px-6 rounded-lg text-sm font-bold transition-all shadow-[0_4px_16px_rgba(22,163,74,0.3)] cursor-pointer border-none text-center"
                  >
                    Sim, ir para o WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setStatus('idle')
                      setForm({ nome: '', empresa: '', email: '', wpp: '', cidade: '', tipo: '' })
                    }}
                    className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-3 px-6 rounded-lg text-sm font-bold transition-all cursor-pointer border-none"
                  >
                    Voltar / Não agora
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-5">
                  Quero conhecer a plataforma
                </h3>

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="nome" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Seu nome *</label>
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
                    <label htmlFor="empresa" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Empresa *</label>
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
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="exemplo@empresa.com.br"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="wpp" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">WhatsApp *</label>
                    <input
                      type="tel"
                      id="wpp"
                      placeholder="(11) 99999-9999"
                      value={form.wpp}
                      onChange={handlePhoneChange}
                      className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all font-body"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-4">
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
                  <div>
                    <label htmlFor="tipo" className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">Tipo de empresa</label>
                    <div className="relative">
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
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full bg-accent-green hover:bg-green-700 text-white py-3.5 rounded-lg text-[15px] font-bold font-heading transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(22,163,74,0.3)] cursor-pointer border-none disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Enviando...' : status === 'error' ? 'Erro ao enviar. Tentar novamente' : 'Quero conhecer a plataforma →'}
                </button>
                {status === 'error' && (
                  <p className="mt-3 text-xs text-red-600 dark:text-red-400 font-medium text-center animate-fade-in">
                    ✗ Falha ao processar o envio do e-mail. Por favor, tente novamente ou fale conosco direto pelo WhatsApp.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
