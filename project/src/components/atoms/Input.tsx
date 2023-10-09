import React from 'react';
import { twMerge } from 'tailwind-merge';

type InputVariant = 'primary' | 'secondary' | 'neutral';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  variant?: InputVariant;
  outline?: boolean;
  fontSize?: FontSizeType;
  block?: boolean;
}

const inputConfig = {
  // Input types
  primary: {
    color: 'border-b-primary',
    outline: 'border border-primary',
  },
  secondary: {
    color: 'border-b-secondary',
    outline: 'border border-secondary',
  },
  neutral: {
    color: 'border-b-neutral',
    outline: 'border border-neutral',
  },

  // Font sizes
  xsmall: 'text-xs',
  small: 'text-s',
  medium: 'text-m',
  large: 'text-lg',
  xlarge: 'text-xlg',
  xxlarge: 'text-xxlg',
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      children,
      variant = 'neutral',
      outline = false,
      fontSize = 'medium',
      block = false,
      className = '',
      ...restProps
    } = props;

    const styles = twMerge(`input
		${inputConfig[variant].color}
		${outline ? inputConfig[variant].outline : ''}
		${inputConfig[fontSize]}
		${block ? 'block' : ''}
		${className}
	  `);

    return (
      <input {...restProps} ref={ref} className={`${styles}`}>
        {children}
      </input>
    );
  },
);
Input.displayName = 'Input';

export default Input;
