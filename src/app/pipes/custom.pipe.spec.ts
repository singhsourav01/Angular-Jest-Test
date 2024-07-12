import { CustomPipe } from './custom.pipe';

describe('CustomPipe', () => {
  var testCases = [
      { text: "", limit: 6, expectedResult: ''},
      { text: '', limit: 6, expectedResult: ''},
      { text: 'George', limit: 6, expectedResult: 'George'},
      { text: 'George', limit: 5, expectedResult: 'Georg...'}
  ];
  testCases.forEach(testCase => {
      it.only(`should return ${testCase.expectedResult} for text ${testCase.text} and limit ${testCase.limit}`, () => {
          // arrange
          var customPipe = new CustomPipe();
          // act
          var result = customPipe.transform(testCase.text, testCase.limit);
          // assert
          expect(result).toBe(testCase.expectedResult);
      });
  });
});