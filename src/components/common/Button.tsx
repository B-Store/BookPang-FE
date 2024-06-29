import React from 'react';
import styles from './styles/Button.module.scss';

export const Button = ({
  type = 'submit',
  id,
  label,
  primary,
  disabled,
  readonly,
  size = 'medium',
  block,
  ...props
}: ButtonType) => {
  return (
    <button
      type={type}
      className={`${styles['button']}
                ${size !== 'medium' ? styles[size] : ''}
                ${primary ? styles['primary'] : ''}
                ${block ? styles['block'] : ''}
            `}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

interface ButtonType {
  type: 'button' | 'submit' | 'reset';
  label: string;
  size?: 'small' | 'medium' | 'large';
  primary?: boolean;
  disabled?: boolean;
  readonly?: string;
  id?: string;
  block?: boolean;
  onClick?: (value?: any) => {} | void;
  style?: {};
}