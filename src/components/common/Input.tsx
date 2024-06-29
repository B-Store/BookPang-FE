import React from 'react';
import styles from './styles/Input.module.scss';

export const Input = ({
  type = 'text',
  id,
  name = id,
  label,
  labelShow,
  labelColor,
  placeholder,
  required = false,
  inputSize = 'medium',
  buttonType,
  buttonText,
  textDescShow = 'null',
  textDesc,
  ...props
}: InputType) => {
  return (
    <div className={`${styles['input-container']} ${inputSize !== 'medium' ? styles[inputSize] : ''}`}>
      <label
        htmlFor={id}
        className={`${styles['input-label']}
                ${labelColor ? styles[labelColor] : ''}
                ${labelShow ? '' : styles['blind']}`}
      >
        {label}
        {required && <span className={styles['input-required-point']}>*</span>}
      </label>
      <div className={styles['input-wrap']}>
        <input
          type={type}
          id={id}
          name={name}
          className={`${styles['input']}`}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      </div>
      {textDescShow !== 'null' && <p className={`${styles['input-text']} ${styles[textDescShow]}`}>{textDesc}</p>}
    </div>
  );
};


interface InputType {
  id: string;
  label: string;
  type?: string;
  name?: string;
  labelShow: boolean;
  labelColor?: string;
  placeholder?: string;
  value?: string | number | undefined;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  inputSize?: 'small' | 'medium' | 'large';
  buttonType?: 'null' | 'search';
  buttonText?: string;
  textDescShow?: 'null' | 'basic' | 'success' | 'fail';
  textDesc?: string;
  onChange?: (value?: any) => {} | void;
  onBlur?: (value?: any) => {} | void;
  onKeyUp?: (value?: any) => {} | void;
  style?: {};
}

// Input.defaultProps = {
//   id: null,
//   required: false,
//   disabled: false,
//   readonly: false,
//   labelShow: true,
//   placeholder: null,
//   inputSize: 'medium',
//   buttonType: null,
//   buttonText: null,
//   textDescShow: 'null',
//   textDesc: '',
//   onClick: undefined,
// };
