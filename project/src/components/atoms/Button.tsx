import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'neutral';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;
  text?: boolean;
  fontSize?: FontSizeType;
}

const buttonConfig = {
  // Button types
  primary: {
    bgColor: 'bg-primary',
    color: 'text-white',
    outline: 'border border-primary text-primary bg-transparent',
    text: 'text-primary bg-transparent',
  },
  secondary: {
    bgColor: 'bg-secondary',
    color: 'text-white',
    outline: 'border border-secondary text-secondary bg-transparent',
    text: 'text-secondary bg-transparent',
  },
  neutral: {
    bgColor: 'bg-neutral',
    color: 'text-black',
    outline: 'border border-black text-neutral bg-transparent',
    text: 'text-neutral bg-transparent',
  },

  // Font sizes
  xsmall: 'text-xs',
  small: 'text-s',
  medium: 'text-m',
  large: 'text-lg',
  xlarge: 'text-xlg',
  xxlarge: 'text-xxlg',
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'neutral',
    outline = false,
    text = false,
    fontSize = 'medium',
    className = '',
    ...restProps
  } = props;

  const styles = twMerge(`btn
	${buttonConfig[variant].bgColor}
	${buttonConfig[variant].color}
	${props.outline ? buttonConfig[variant].outline : ''}
	${props.text ? buttonConfig[variant].text : ''}
	${className}
  `);

  return (
    <button
      {...restProps}
      className={`${styles} ${buttonConfig[fontSize]}
	`}
    >
      {children}
    </button>
  );
}
