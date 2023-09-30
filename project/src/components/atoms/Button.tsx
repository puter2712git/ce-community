import React from 'react';

interface ButtonProps {
  isOutline: boolean;
  color: 'normal' | 'primary' | 'secondary';
  size: 'nm' | 'sm' | 'lg' | 'xlg';
}

export default function Button({
  children,
  onClick,
  props,
}: {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  props: ButtonProps;
}) {
  const map = {
    color: {
      normal: 'text-normal border-normal',
      primary: 'text-primary border-primary',
      secondary: 'text-secondary border-secondary',
    },
    size: {
      nm: 'text-nm',
      sm: 'text-sm',
      lg: 'text-lg',
      xlg: 'text-xlg',
    },
  };

  let outline = props.isOutline && 'border-solid border';

  return (
    <button
      className={`btn ${outline} ${map.color[props.color]} ${
        map.size[props.size]
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
