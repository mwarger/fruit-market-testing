import { render, fireEvent, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { QuantityNumberInput } from './QuantityNumberInput';

test('should change value', () => {
	const mockFunction = vi.fn();

	render(
		<QuantityNumberInput label='Quantity' value={1} onChange={mockFunction} />
	);

	expect(mockFunction).toHaveBeenCalledTimes(0);

	const input = screen.getByLabelText('Quantity');

	expect(input.value).toBe('1');

	fireEvent.change(input, { target: { value: '2' } });
	expect(mockFunction).toHaveBeenCalledTimes(1);
	expect(mockFunction).toHaveBeenCalledWith(2);
});
