/* global describe it */
import * as ID from 'incremental-dom'
import * as superviews from '../../index.js'
import * as template from 'raw-loader!./template.html'
import { assert } from 'chai'

global.require = function (moduleName) {
  return moduleName === 'incremental-dom' ? ID : void 0
}

global.module = new module.constructor()

describe('DOM test', () => {
  it('dummy for coverage(browser)', () => {
    superviews('', '', void 0, 'browser')
  })

  it('dummy for coverage(es6)', () => {
    superviews('', '', void 0, 'es6')
  })

  it('dummy for coverage(amd)', () => {
    superviews('', '', void 0, 'amd')
  })

  it('dummy for coverage("default")', () => {
    superviews('', '', void 0, '')
  })

  const bed = document.getElementById('testbed')
  assert(bed !== null)

  const result = superviews(template, 'test', void 0, 'cjs')

  ;(new Function(result))()

  const f = global.module.exports
  const data = {
    items: [
      {name: 'item0', key: 'key0'},
      {name: 'item1', key: 'key1'}
    ],
    content02: 'content02',
    value11: 'value11',
    value12: 'value12',

    condition13: true,
    condition14: false,

    condition15: true,
    condition16: false,

    condition17: true,
    condition18: true,
    condition20: false,

    condition21: true,
    condition23: false,
    condition24: false
  }

  const getData = function (node) {
    return node['__incrementalDOMData']
  }

  ID.patch(bed, f, data)

  it('child --', () => {
    const element = bed.firstElementChild

    assert.equal(element.tagName, 'DIV')

    assert.equal(element.textContent, 'this is content00.')
  })

  it('child 01', () => {
    const elements = bed.querySelectorAll('.idTest01')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.equal(element.tagName, 'DIV')

    assert.equal(element.textContent, 'this is content01.')
  })

  it('child 02', () => {
    const elements = bed.querySelectorAll('.idTest02')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.equal(element.tagName, 'DIV')

    assert.equal(element.textContent, 'this is content02.')
  })

  it('child 03', () => {
    const elements = bed.querySelectorAll('.idTest03')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.equal(element.id, 'idTest03')
  })

  it('child 04', () => {
    const elements = bed.querySelectorAll('.idTest04')

    assert.equal(elements.length, 1)

    const element = elements[0]

    const idData = getData(element)

    assert.equal(idData.key, 'keyTest04')
  })

  it('child 05', () => {
    const elements = bed.querySelectorAll('.idTest05')

    assert.equal(elements.length, data.items.length)

    for (let index = 0; index < elements.length; ++index) {
      const element = elements[index]

      const item = data.items[index]

      assert.equal(element.textContent, item.name)
    }
  })

  it('child 06', () => {
    const elements = bed.querySelectorAll('.idTest06')

    assert.equal(elements.length, data.items.length)

    for (let index = 0; index < elements.length; ++index) {
      const element = elements[index]

      const item = data.items[index]

      const idData = getData(element)

      assert.match(idData.key, new RegExp('_' + item.key + '$'))

      assert.equal(element.textContent, item.name)
    }
  })

  it('child 07', () => {
    const elements = bed.querySelectorAll('.idTest07')

    assert.equal(elements.length, data.items.length)

    for (let index = 0; index < elements.length; ++index) {
      const element = elements[index]

      const item = data.items[index]

      const idData = getData(element)

      assert.equal(idData.key, 'keyTest07' + '_' + String(index))

      assert.equal(element.textContent, item.name)
    }
  })

  it('child 08', () => {
    const elements = bed.querySelectorAll('.idTest08')

    assert.equal(elements.length, data.items.length)

    for (let index = 0; index < elements.length; ++index) {
      const element = elements[index]

      const item = data.items[index]

      const idData = getData(element)

      assert.equal(idData.key, 'keyTest08' + '_' + item.key)

      assert.equal(element.textContent, item.name)
    }
  })

  it('child 09', () => {
    const elements = bed.querySelectorAll('.idTest09')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.exists(element.onclick)
  })

  it('child 10', () => {
    const elements = bed.querySelectorAll('.idTest10')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.equal(element.style.cssText, 'display: none;')
  })

  it('child 11', () => {
    const elements = bed.querySelectorAll('.idTest11')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.exists(element.dataset.value)

    assert.equal(element.dataset.value, data.value11)
  })

  it('child 12', () => {
    const elements = bed.querySelectorAll('.idTest12')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.exists(element.dataset.value)

    assert.equal(element.dataset.value, 'value.' + data.value12)
  })

  it('child 13', () => {
    const elements = bed.querySelectorAll('.idTest13')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.equal(element.textContent, '')
  })

  it('child 14', () => {
    const elements = bed.querySelectorAll('.idTest14')

    assert.equal(elements.length, 1)

    const element = elements[0]

    assert.equal(element.textContent, 'content14')
  })

  it('child 15', () => {
    const elements = bed.querySelectorAll('.idTest15')

    assert.equal(elements.length, 1)
  })

  it('child 16', () => {
    const elements = bed.querySelectorAll('.idTest16')

    assert.equal(elements.length, 0)
  })

  it('child 17', () => {
    const elements = bed.querySelectorAll('.idTest17')

    assert.equal(elements.length, 1)
  })

  it('child 18', () => {
    const elements = bed.querySelectorAll('.idTest18')

    assert.equal(elements.length, 0)
  })

  it('child 19', () => {
    const elements = bed.querySelectorAll('.idTest19')

    assert.equal(elements.length, 0)
  })

  it('child 20', () => {
    const elements = bed.querySelectorAll('.idTest20')

    assert.equal(elements.length, 0)
  })

  it('child 21', () => {
    const elements = bed.querySelectorAll('.idTest21')

    assert.equal(elements.length, 1)
  })

  it('child 22', () => {
    const elements = bed.querySelectorAll('.idTest22')

    assert.equal(elements.length, 0)
  })

  it('child 23', () => {
    const elements = bed.querySelectorAll('.idTest23')

    assert.equal(elements.length, 0)
  })

  it('child 24', () => {
    const elements = bed.querySelectorAll('.idTest24')

    assert.equal(elements.length, 0)
  })

  it('child 25', () => {
    const elements = bed.querySelectorAll('.idTest25')

    assert.equal(elements.length, 1)
  })

  it('child 26', () => {
    assert.exists(data.idTest26)

    assert(data.idTest26.classList.contains('idTest26'))
  })
})
