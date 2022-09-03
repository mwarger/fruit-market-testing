import { expect, test } from 'vitest';

const HELLO_WORLD = 'Hello';
// check that the length of the string is correct
test('hello', () => {
	expect(HELLO_WORLD.length).toBe(5);
});
