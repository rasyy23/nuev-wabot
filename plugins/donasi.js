let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL Axiata [081952892568]
│ • Telkomsel [082177889663]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/nuenov
│ • GoPay [081952892568]
│ • Dana [081952892568]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
