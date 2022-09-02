import { TextField } from '@mui/material';

export function QuantityNumberInput({
	label,
	value,
	onChange,
}: {
	label: string;
	value: number;
	onChange: (value: number) => void;
}) {
	return (
		<>
			<TextField
				label={label}
				value={value}
				onChange={e => {
					const value = parseInt(e.target.value);
					if (value > 0) {
						onChange(value);
					}
				}}
				type='number'
			/>
		</>
	);
}
