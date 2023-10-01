import { twMerge } from 'tailwind-merge';

type InputType = 'primary' | 'secondary' | 'neutral';

export interface InputProps {
  children?: React.ReactNode;
  attrs?: React.InputHTMLAttributes<HTMLInputElement>;
  type?: InputType;
  outline?: boolean;
  fontSize?: FontSizeType;
  block?: boolean;
}

const inputConfig = {
  // Input types
  primary: {
    color: 'border-b-primary',
    outline: 'border border-primary rounded-lg',
  },
  secondary: {
    color: 'border-b-secondary',
    outline: 'border border-secondary rounded-lg',
  },
  neutral: {
    color: 'border-b-neutral',
    outline: 'border border-neutral rounded-lg',
  },

  // Font sizes
  xsmall: 'text-xs',
  small: 'text-s',
  medium: 'text-m',
  large: 'text-lg',
  xlarge: 'text-xlg',
  xxlarge: 'text-xxlg',
};

export default function Input(props: InputProps) {
  const styles = twMerge(`input
		${inputConfig[props.type || 'neutral'].color}
		${props.outline ? inputConfig[props.type || 'neutral'].outline : null}
	`);

  return (
    <input
      {...props.attrs}
      className={`${styles} ${inputConfig[props.fontSize || 'medium']} ${
        props.block && 'block'
      }`}
    >
      {props.children}
    </input>
  );
}
