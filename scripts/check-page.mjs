import { chromium } from 'playwright'

const url = process.argv[2] || 'http://localhost:5173/'
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('pageerror', (e) => errors.push(`PAGE: ${e.message}`))
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`CONSOLE: ${msg.text()}`)
})

await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })

for (const sec of [5, 10, 15, 20, 25, 30]) {
  await page.waitForTimeout(sec === 5 ? 5000 : 5000)
  const state = await page.evaluate(() => {
    const boot = document.querySelector('.fixed.inset-0.z-50')
    const main = document.querySelector('#root > div > div:nth-child(2)')
    return {
      bootOpacity: boot ? getComputedStyle(boot).opacity : null,
      bootDisplay: boot ? getComputedStyle(boot).display : null,
      mainOpacity: main ? getComputedStyle(main).opacity : null,
      hasHome: !!document.body.textContent?.includes('MY-CREATIONS'),
      hasBoot: !!document.body.textContent?.includes('Booting PIXEL SKIN STUDIO'),
      rootLen: document.getElementById('root')?.innerHTML.length ?? 0,
    }
  })
  console.log(`@${sec}s`, JSON.stringify(state))
}

console.log('Errors:', errors.length ? errors : '(none)')
await browser.close()
