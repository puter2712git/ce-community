import { twMerge } from 'tailwind-merge';

type LabelType = 'primary' | 'secondary' | 'neutral';

export interface LabelProps {
  children?: React.ReactNode;
  attrs?: React.LabelHTMLAttributes<HTMLLabelElement>;
  type?: LabelType;
  fontSize?: FontSizeType;
}

const labelConfig = {
  // Label types
  primary: {
    color: 'text-primary',
  },
  secondary: {
    color: 'text-secondary',
  },
  neutral: {
    color: 'text-neutral',
  },

  // Font sizes
  xsmall: 'text-xs',
  small: 'text-s',
  medium: 'text-m',
  large: 'text-lg',
  xlarge: 'text-xlg',
  xxlarge: 'text-xxlg',
};

export default function Label(props: LabelProps) {
  const styles = twMerge(`
		${labelConfig[props.type || 'neutral'].color}
	`);

  return (
    <label
      {...props.attrs}
      className={`${styles} ${labelConfig[props.fontSize || 'medium']}`}
    >
      {props.children}
    </label>
  );
}
