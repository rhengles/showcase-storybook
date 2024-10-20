import { mergeProps, splitProps } from 'solid-js';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
	props = mergeProps({ size: 'small' }, props);
	const [local, rest] = splitProps(props, [
		'primary',
		'size',
		'backgroundColor',
	]);

	return (
		<button
			type="button"
			style={{ 'background-color': local.backgroundColor }}
			{...rest}
			classList={{
				'storybook-button--small': local.size === 'small',
				'storybook-button--medium': local.size === 'medium',
				'storybook-button--large': local.size === 'large',
				'storybook-button': true,
				'storybook-button--primary': local.primary === true,
				'storybook-button--secondary': local.primary === false,
			}}
		/>
	);
};
