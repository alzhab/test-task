import {ReactElement} from 'react';

export interface InputProps {
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
  onChange: (val: string) => void,
  secureTextEntry?: boolean,
  error?: string;
  mask?: string;
  value: string;
  caretHidden?: boolean;
  textArea?: boolean;
  Icon?: any
}
