import { satisfies } from './satisfies'

type DataType = [string, string, boolean]
type DataSetType = Array<DataType>

const runTests = (...dataSet: DataSetType) => {
  describe.each(dataSet)(`satisfies(%s, %s)`, (v, m, expected) => {
    it(`returns ${expected}`, () => {
      expect(satisfies(v, m)).toStrictEqual(expected)
    })
  })
}

describe('satisfies', () => {
  runTests(
    ['1.0.0', '^1', true],
    ['1.0.0', '^1.0', true],
    ['1.0.0', '^1.0.0', true],
    ['1.2.0', '^1.0.0', true],
    ['v1.2.0', '^1.0.0', true],
    ['2.0.0', '^1.0.0', false],
    ['1.0.0', '^1.2.0', false],
    ['1.0.1', '^1.2.0', false],
    ['1.3.4', '^1.2.5', true],
    ['1.0.0', '~1.2.0', false],
    ['1.0.0', '~1.0.1', false],
    ['1.0.1', '~1.0.0', true],
    ['1.3.4', '~1.2.5', false],
    ['1.0.0', '~1.0.0', true],
    ['1.0.0-alpha.1', '^1.0.0', true],
    ['1.1.0-alpha.1', '^1.0.0', true],
    ['1.2.0', '>1.0.0', true],
    ['1.2.0', '<1.0.0', false],
    ['1.0.0', '<=1.0.0', true],
    ['1.0.0', '<=2.0.0', true],
    ['1.0.1', '1.0.0', false],
    ['1.0.0', '1.0.0', true],
    ['10.1.8', '>10.0.4', true],
    ['10.1.8', '>=10.0.4', true],
    ['10.0.1', '=10.0.1', true],
    ['10.0.1', '=10.1.*', false],
    ['10.1.1', '<10.2.2', true],
    ['10.1.1', '<10.0.2', false],
    ['10.1.1', '<=10.2.2', true],
    ['10.1.1', '<=10.1.1', true],
    ['10.1.1', '<=10.0.2', false],
    ['10.1.1', '>=10.0.2', true],
    ['10.1.1', '>=10.1.1', true],
    ['10.1.1', '>=10.2.2', false],
    ['3', '3.x.x', true],
    ['3.3', '3.x.x', true],
    ['3.3.3', '3.x.x', true],
    ['3.x.x', '3.3.3', true],
    ['3.3.3', '3.X.X', true],
    ['3.3.3', '3.3.x', true],
    ['3.3.3', '3.*.*', true],
    ['3.3.3', '3.3.*', true],
    ['3.0.3', '3.0.*', true],
    ['1.1.0', '1.2.x', false],
    ['1.1.0', '2.x.x', false],
    ['2.0.0', '<2.x.x', false],
    ['2.0.0', '<=2.x.x', true],
    ['2.0.0', '>2.x.x', false],
  )
})
