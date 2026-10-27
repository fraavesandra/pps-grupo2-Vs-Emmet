import test from 'node:test'
import assert from 'node:assert/strict'
import { expandirSeguro } from '../../src/utils/emmetSeguro.js'

test('rechaza multiplicadores anidados y grupos antes de materializarlos', () => {
  for (const value of ['ul>li*50>span*50', '(div>span*50)*50', '((li*50)*50)*50']) {
    assert.throws(() => expandirSeguro(value), /límite total/)
  }
})
test('suma hermanos: admite 200 y rechaza 201 nodos', () => {
  assert.equal((expandirSeguro('i*50+b*50+em*50+span*50').match(/<(i|b|em|span)>/g) || []).length, 200)
  assert.throws(() => expandirSeguro('i*50+b*50+em*50+span*50+p'), /límite total/)
})
test('500 caracteres originales, incluidos espacios; 501 rechazados', () => {
  assert.ok(expandirSeguro('p{' + 'a'.repeat(497) + '}'))
  assert.throws(() => expandirSeguro('p{' + 'a'.repeat(498) + '}'), /500 caracteres/)
  assert.throws(() => expandirSeguro(' '.repeat(501)), /500 caracteres/)
})
test('valida vacío, inválido, repetición individual y profundidad', () => {
  assert.equal(expandirSeguro(''), '')
  assert.throws(() => expandirSeguro('>'))
  assert.throws(() => expandirSeguro('li*51'), /50 repeticiones/)
  assert.throws(() => expandirSeguro('div>'.repeat(41) + 'p'), /40 niveles/)
})
test('texto literal con asterisco no se confunde con multiplicación', () => {
  assert.ok(expandirSeguro('p{Precio *9999}').includes('Precio *9999'))
})
test('lorem grande, rangos y numeración se acotan antes de generar texto', () => {
  for (const value of ['lorem1000000', 'loremsp100-99999', 'lorem$@1000*2']) {
    assert.throws(() => expandirSeguro(value), /100 palabras/)
  }
  assert.ok(expandirSeguro('lorem10'))
})
test('ejemplos normales, agrupación y snippet HTML5 conservados', () => {
  assert.equal((expandirSeguro('ul>li*5').match(/<li>/g)||[]).length, 5)
  assert.equal((expandirSeguro('(div>span*5)*5').match(/<span>/g)||[]).length, 25)
  assert.match(expandirSeguro('!'), /<!DOCTYPE html>/i)
})
test('salida textual demasiado grande no se devuelve al DOM', () => {
  assert.throws(() => expandirSeguro('(p{' + 'a'.repeat(480) + '}*50)*3'), /50.000 caracteres/)
})
