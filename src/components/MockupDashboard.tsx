export default function MockupDashboard() {
  return (
    <div className="relative animate-float">
      {/* Desktop Mockup */}
      <div className="bg-slate-900 dark:bg-surface-card-dark rounded-2xl p-5 shadow-2xl ring-1 ring-white/10">
        {/* Window Bar */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>

        {/* Screen */}
        <div className="bg-gray-900 dark:bg-[#0A0F1A] rounded-xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gray-800 dark:bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-gray-700 dark:border-slate-700">
            <span className="font-heading text-sm font-bold text-white">
              Carga<span className="text-brand-400">Fy</span>
            </span>
            <div className="flex items-center gap-1.5 text-xs text-green-400">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-dot" />
              SEFAZ Online
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-4">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5 mb-4">
              {[
                { label: 'CTe hoje', value: '347', delta: '↑ 12%' },
                { label: 'MDFe ativos', value: '84', delta: '↑ 8%' },
                { label: 'CIOT gerado', value: '126', delta: '↑ 5%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-800 dark:bg-slate-800/60 rounded-xl p-3 border border-gray-700 dark:border-slate-700/50">
                  <div className="text-[10px] text-gray-400 dark:text-slate-500 mb-1">{stat.label}</div>
                  <div className="font-heading text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] text-green-400">{stat.delta}</div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="bg-gray-800 dark:bg-slate-800/60 rounded-xl overflow-hidden border border-gray-700 dark:border-slate-700/50">
              {[
                { doc: 'CTe 003847', status: 'Autorizado', color: 'text-green-400 bg-green-400/15' },
                { doc: 'CTe 003848', status: 'Processando', color: 'text-blue-400 bg-blue-400/15' },
                { doc: 'MDFe 000192', status: 'Encerrado', color: 'text-green-400 bg-green-400/15' },
                { doc: 'CTe 003849', status: 'Autorizado', color: 'text-green-400 bg-green-400/15' },
              ].map((row, i, arr) => (
                <div
                  key={row.doc}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-xs text-gray-300 dark:text-slate-400 ${i < arr.length - 1 ? 'border-b border-gray-700 dark:border-slate-700/50' : ''
                    }`}
                >
                  <span>{row.doc}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${row.color}`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Mockup */}
      <div className="absolute -bottom-5 -right-5 w-[100px] bg-gray-800 dark:bg-slate-800 rounded-2xl p-2.5 border-[3px] border-gray-700 dark:border-slate-600 shadow-2xl">
        <div className="bg-gray-900 dark:bg-[#0A0F1A] rounded-xl overflow-hidden">
          <div className="bg-brand-600 px-2 py-1.5 text-center">
            <span className="font-heading text-[8px] text-white font-bold">CargaFy</span>
          </div>
          <div className="p-2 space-y-1">
            {[
              { label: 'CTe emitido', color: 'bg-green-400' },
              { label: 'MDFe aberto', color: 'bg-blue-400' },
              { label: 'CIOT gerado', color: 'bg-yellow-400' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 dark:bg-slate-800/80 rounded-md px-1.5 py-1 text-[7px] text-gray-300 dark:text-slate-400 flex items-center gap-1">
                <div className={`w-1 h-1 rounded-full ${item.color} shrink-0`} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
