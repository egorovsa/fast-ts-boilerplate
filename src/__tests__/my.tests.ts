import testFunction from '../ts/test-function';

test('My Function is hello', () => {
    expect(testFunction('hello')).toBe('hello');
});