import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonType = 'primary' | 'secondary' | 'neutral';

interface ButtonProps {
  children?: React.ReactNode;
  attrs?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  type?: ButtonType;
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
  const styles = twMerge(`btn
	${buttonConfig[props.type || 'neutral'].bgColor}
	${buttonConfig[props.type || 'neutral'].color}
	${props.outline ? buttonConfig[props.type || 'neutral'].outline : null}
	${props.text ? buttonConfig[props.type || 'neutral'].text : null}
  `);

  return (
    <button
      {...props.attrs}
      className={`${styles} ${buttonConfig[props.fontSize || 'medium']}
	`}
    >
      {props.children}
    </button>
  );
}
