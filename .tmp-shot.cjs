const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 1536, height: 1400 } });
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push('PAGEERROR: ' + err.message));
  page.on('requestfailed', req => errors.push('REQFAIL: ' + req.url() + ' ' + (req.failure() && req.failure().errorText)));
  page.on('response', res => { if (res.status() >= 400) errors.push('HTTP' + res.status() + ': ' + res.url()); });
  await page.goto('http://localhost:5173/v2', { waitUntil: 'networkidle' });
  await page.waitForSelector('#companion', { timeout: 15000 }).catch(e => console.log('selector wait failed', e.message));
  await page.locator('#companion').scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -140));
  await page.waitForTimeout(900);
  await page.locator('#companion').screenshot({ path: `C:/Users/prakarti/AppData/Local/Temp/claude/C--Users-prakarti-Desktop-projects-sakhi1/fdc45f4b-9005-4bbc-80af-516c57c36be6/scratchpad/bc_v2_desktop.png` });
  console.log('ERRORS:', JSON.stringify(errors, null, 2));
  await browser.close();
})();
