import { compare } from './compare'

import type { Operator } from '../types'

type DataType = [string, string, Operator, boolean]
type DataSetType = Array<DataType>

const runTests = (...dataSet: DataSetType) => {
  describe.each(dataSet)(
    `compare(%s, %s, %s)`,
    (v1, v2, operator, expected) => {
      it(`returns ${expected}`, () => {
        expect(compare(v1, v2, operator)).toStrictEqual(expected)
      })
    },
  )
}

describe('compare', () => {
  runTests(
    ['10.1.8', '10.0.4', '>', true],
    ['10.1.8', '10.0.4', '>=', true],
    ['10.0.1', '10.0.1', '=', true],
    ['10.0.1', '10.1.*', '=', false],
    ['3.3.3', '3.x.x', '<', false],
    ['3.3.3', '3.x.x', '>=', true],
    ['10.1.1', '10.2.2', '<', true],
    ['10.1.1', '10.0.2', '<', false],
    ['10.1.1', '10.2.2', '<=', true],
    ['10.1.1', '10.1.1', '<=', true],
    ['10.1.1', '10.0.2', '<=', false],
    ['10.1.1', '10.0.2', '>=', true],
    ['10.1.1', '10.1.1', '>=', true],
    ['10.1.1', '10.2.2', '>=', false],
  )
})
