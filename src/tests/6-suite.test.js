import { assert, describe, expect, it } from 'vitest';

describe('Tests about Foo', () => {
	it('foo', () => {
		assert.equal(Math.sqrt(4), 2);
	});

	it('bar', () => {
		expect(1 + 1).eq(2);
	});

	it('snapshot', () => {
		expect({ foo: 'bar' }).toMatchSnapshot();
	});
});
