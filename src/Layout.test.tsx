import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test } from 'vitest';
import { Layout } from './Layout';

test('Renders app', () => {
	render(
		<MemoryRouter>
			<Layout>App</Layout>
		</MemoryRouter>
	);

	expect(screen.getByText('Fruit Market')).toBeInTheDocument();
});
