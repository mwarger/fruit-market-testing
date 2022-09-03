import { expect, test } from 'vitest';

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
