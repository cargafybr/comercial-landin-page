import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-surface-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-700 dark:border-slate-800">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 no-underline mb-3">
              <div className="w-[38px] h-[38px] rounded-[10px] overflow-hidden relative">
                <Image src="/images/logo_cargafy.jpg" alt="CargaFy" width={38} height={38} className="object-cover" />
              </div>
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                Carga<span className="text-brand-400">Fy</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 dark:text-slate-500 leading-relaxed max-w-[260px] mb-5">
              A plataforma de emissão de CTe e MDFe mais rápida e simples do Brasil. Tecnologia a serviço do transporte.
            </p>

            {/* Contact items */}
            <div className="space-y-2 mb-4">
              <a href="mailto:contato@cargafy.com.br" className="flex items-center gap-2 text-[13px] text-gray-400 dark:text-slate-500 hover:text-white transition-colors no-underline">
                <svg className="w-3.5 h-3.5 text-brand-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                contato@cargafy.com.br
              </a>
              <a href="https://wa.me/5511994599115" className="flex items-center gap-2 text-[13px] text-gray-400 dark:text-slate-500 hover:text-white transition-colors no-underline">
                <svg className="w-3.5 h-3.5 text-brand-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.89 10.7 19.79 19.79 0 011.9 2.14 2 2 0 013.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                (11) 99459-9115
              </a>
              <a href="https://wa.me/5549982666688" className="flex items-center gap-2 text-[13px] text-gray-400 dark:text-slate-500 hover:text-white transition-colors no-underline">
                <svg className="w-3.5 h-3.5 text-brand-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.89 10.7 19.79 19.79 0 011.9 2.14 2 2 0 013.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                (49) 9826-6688
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { label: 'Instagram', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></> },
                { label: 'LinkedIn', icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="w-[34px] h-[34px] bg-gray-800 dark:bg-slate-800 border border-gray-700 dark:border-slate-700 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-all no-underline group">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px] text-gray-400 dark:text-slate-500 group-hover:text-white">{s.icon}</svg>
                </a>
              ))}
              <a href="https://wa.me/5511994599115" aria-label="WhatsApp" className="w-[34px] h-[34px] bg-gray-800 dark:bg-slate-800 border border-gray-700 dark:border-slate-700 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-all no-underline group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px] text-gray-400 dark:text-slate-500 group-hover:text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="font-heading text-[13px] font-bold text-white tracking-wider mb-4">Plataforma</h4>
            <nav className="flex flex-col gap-2.5">
              {['Emissor CTe', 'Emissor MDFe', 'Gerador CIOT', 'Emissão em lote', 'Integrações', 'API REST'].map((link) => (
                <a key={link} href="#" className="text-[13px] text-gray-500 dark:text-slate-500 hover:text-white transition-colors no-underline">{link}</a>
              ))}
            </nav>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-heading text-[13px] font-bold text-white tracking-wider mb-4">Empresa</h4>
            <nav className="flex flex-col gap-2.5">
              {['Sobre nós', 'Blog', 'Carreiras', 'Parceiros', 'Imprensa'].map((link) => (
                <a key={link} href="#" className="text-[13px] text-gray-500 dark:text-slate-500 hover:text-white transition-colors no-underline">{link}</a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-[13px] font-bold text-white tracking-wider mb-4">Legal</h4>
            <nav className="flex flex-col gap-2.5">
              {['Política de privacidade', 'Termos de uso', 'LGPD'].map((link) => (
                <a key={link} href="#" className="text-[13px] text-gray-500 dark:text-slate-500 hover:text-white transition-colors no-underline">{link}</a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 dark:text-slate-600">
          <span>© 2025 CargaFy Tecnologia Ltda. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 dark:hover:text-slate-400 transition-colors no-underline">Política de privacidade</a>
            <a href="#" className="hover:text-gray-400 dark:hover:text-slate-400 transition-colors no-underline">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
