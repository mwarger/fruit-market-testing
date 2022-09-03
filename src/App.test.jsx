import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { test } from 'vitest';
import App from './App';

test('renders app', () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
});
