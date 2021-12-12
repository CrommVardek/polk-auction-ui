import { numberWithCommas } from '../../src/utils/DisplayUtils';

test('Number should be formatted as expected with commas', () => {
  const bigNumber = 123456789;
  const expectedResult = '123,456,789';
  expect(numberWithCommas(bigNumber)).toBe(expectedResult);
});

test('Number with decimals should be formatted as expected with commas', () => {
  const bigNumber = 123456789.35987;
  const expectedResult = '123,456,789.35987';
  expect(numberWithCommas(bigNumber)).toBe(expectedResult);
});
