import { validate } from './'

type DataType = [string, boolean]
type DataSetType = Array<DataType>

const runTests = (...dataSet: DataSetType) => {
  describe.each(dataSet)(`validate(%s)`, (v, expected) => {
    it(`returns ${expected}`, () => {
      expect(validate(v)).toStrictEqual(expected)
    })
  })
}

describe('validate', () => {
  runTests(
    ['foo', false],
    ['6.3.', false],
    ['1.2.3a', false],
    ['1.2.-3a', false],
    ['v1.0.0', true],
    ['01.0.0', true],
    ['1.0.x', true],
    ['1.0.0-rc.1', true],
    ['1.0.0-alpha', true],
    ['1.0.0-build.3928', true],
    ['1.0.0+20130313144700', true],
    ['1.2.3.100', true],
    ['2020', true],
    ['=1.0', false],
    ['>1.0.0', false],
  )
})
