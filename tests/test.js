import { expect, test } from '@playwright/test'

const actor = 'Paciente'
const nombreCasoUso = 'Generar diagnóstico'

test(`Un ${actor} espera que pueda "${nombreCasoUso}"`, async ({ page }) => {
  await page.goto('/')

	let iter = 1

  expect(await page.textContent('#Diagnósticos')).toContain('Diagnósticos')
  await page.click('#Diagnósticos')

  expect(await page.textContent('a[href="/diagnosticos/nuevo"]')).toContain(
    'Generar diagnóstico'
  )
  await page.click('a[href="/diagnosticos/nuevo"]')

  expect(await page.textContent('h1')).toContain('Generar diagnóstico')

  await page.screenshot({ path: `tests/screenshots/${iter++}-${nombreCasoUso}.png` })

  expect(await page.textContent('.chatbot__options > button:nth-child(1)')).toContain('General')

	await page.click('.chatbot__options > button:nth-child(1)')

	await page.waitForTimeout(1000)

	await page.screenshot({ path: `tests/screenshots/${iter++}-${nombreCasoUso}.png` })

	for (let i = 0; i < 21; i++) {
		expect(await page.textContent('.chatbot__options > button:nth-child(1)')).toContain('Sí')
	}

  page.close()
})
