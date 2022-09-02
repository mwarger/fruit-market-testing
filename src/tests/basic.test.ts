import { assert, expect, test } from 'vitest';

const HELLO_WORLD = 'Hello';

// check that the length of the string is correct
test('hello', () => {
	expect(HELLO_WORLD.length).toBe(5);
});

// Arrange, Act, Assert
test('addition', () => {
	// Arrange
	const a = 1;
	const b = 2;

	// Act
	const result = a + b;

	// Assert
	expect(result).toBe(3);
});

// test that two numbers added together are equal to the sum of those two numbers
test('addition', () => {
	// expect the sum of 1 and 2 to be 3
	expect(1 + 2).toBe(3);
});

// test that two numbers multiplied together are equal to the product of those two numbers
test('multiplication', () => {
	// expect the product of 2 and 3 to be 6
	expect(2 * 3).toBe(6);
});

test('JSON', () => {
	const input = {
		foo: 'hello',
		bar: 'world',
	};

	const output = JSON.stringify(input);

	expect(output).eq('{"foo":"hello","bar":"world"}');
	assert.deepEqual(JSON.parse(output), input, 'matches original');
});
