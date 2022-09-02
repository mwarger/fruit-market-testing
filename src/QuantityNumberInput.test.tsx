import { render, fireEvent, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import { QuantityNumberInput } from './QuantityNumberInput';

let value = 1;

function updateValue(newValue: number) {
	value = newValue;
}

test('should change value', () => {
	const mock = vi.fn().mockImplementation(updateValue);

	const results = render(
		<QuantityNumberInput label='Quantity' value={value} onChange={mock} />
	);

	expect(mock).toHaveBeenCalledTimes(0);

	const input = screen.getByLabelText('Quantity') as HTMLInputElement;

	expect(input.value).toBe('1');

	fireEvent.change(input, { target: { value: '23' } });
	expect(mock).toHaveBeenCalledTimes(1);
	expect(mock).toHaveBeenCalledWith(23);

	results.rerender(
		<QuantityNumberInput label='Quantity' value={value} onChange={mock} />
	);

	expect(input.value).toBe('23');
});
