import { parse, tokenize } from '@emmetio/abbreviation'
import { markupAbbreviation, parseMarkup, resolveConfig, stringifyMarkup } from 'emmet'

export const LIMITES_EMMET = { entrada: 500, nodos: 200, repeticion: 50, profundidad: 40, salida: 50000 }

export class LimiteEmmetError extends Error {}

const excesoNodos = () => new LimiteEmmetError('La expansión supera el límite total de 200 elementos. Reduce las repeticiones combinadas.')

// El árbol de tokens todavía NO ha materializado los multiplicadores.
// Sumar hermanos y multiplicar subárboles permite rechazar el exceso antes de expandir.
function contarPrevio(nodo, profundidad = 0) {
  if (profundidad > LIMITES_EMMET.profundidad) {
    throw new LimiteEmmetError('La abreviatura supera el límite de 40 niveles de anidación.')
  }
  const repeticiones = nodo.repeat?.count || 1
  if (!Number.isSafeInteger(repeticiones) || repeticiones > LIMITES_EMMET.repeticion) {
    throw new LimiteEmmetError('El límite es de 50 repeticiones por operador (*).')
  }
  let total = nodo.type === 'TokenElement' ? 1 : 0
  for (const hijo of nodo.elements) {
    total += contarPrevio(hijo, profundidad + 1)
    if (total > LIMITES_EMMET.nodos) throw excesoNodos()
  }
  total *= repeticiones
  if (total > LIMITES_EMMET.nodos) throw excesoNodos()
  return total
}

export function expandirSeguro(entrada) {
  // Se cuenta la entrada original: los espacios no permiten eludir los 500 caracteres.
  if (entrada.length > LIMITES_EMMET.entrada) {
    throw new LimiteEmmetError('La abreviatura es demasiado larga (máximo 500 caracteres).')
  }
  const abreviatura = entrada.trim()
  if (!abreviatura) return ''
  contarPrevio(parse(tokenize(abreviatura)))
  const config = resolveConfig({ type: 'markup', syntax: 'html' })
  const base = markupAbbreviation(abreviatura)
  // Revisar nombres YA numerados: lorem$@1000 también genera texto masivo.
  const revisar = [...base.children]
  while (revisar.length) {
    const nodo = revisar.pop()
    const lorem = /^lorem[a-z]*(\d*)(?:-(\d*))?$/i.exec(nodo.name ?? '')
    if (lorem && Math.max(Number(lorem[1] || 30), Number(lorem[2] || 0)) > 100) {
      throw new LimiteEmmetError('El límite de lorem es de 100 palabras por elemento.')
    }
    revisar.push(...nodo.children)
  }
  const arbol = parseMarkup(base, config)
  // Los snippets, como !, pueden añadir nodos. Comprobar también el árbol resuelto.
  const pendientes = [...arbol.children]
  let total = 0
  while (pendientes.length) {
    const nodo = pendientes.pop()
    if (++total > LIMITES_EMMET.nodos) throw excesoNodos()
    pendientes.push(...nodo.children)
  }
  const html = stringifyMarkup(arbol, config)
  if (html.length > LIMITES_EMMET.salida) {
    throw new LimiteEmmetError('El HTML generado supera el límite de 50.000 caracteres.')
  }
  return html
}

export function mensajeEmmet(error) {
  return error instanceof LimiteEmmetError ? error.message : 'Abreviatura no válida. Revisa los operadores.'
}
