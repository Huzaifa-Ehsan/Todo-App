import {
  ChangeEventHandler,
  CSSProperties,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode
} from 'react';
import {InputProps as StandardInputProps} from '@mui/material/Input/Input';

export interface ITextField<T = Element> {
  value?: string | unknown;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  type?: InputHTMLAttributes<T>['type'];
  placeholder?: string;
  label?: string | ReactNode;
  isReadOnly?: boolean;
  styleProps?: CSSProperties;
  onFocus?: (_event: FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  StartAdornment?: ReactNode;
  EndAdornment?: ReactNode;
  focused?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  name?: string;
  inputLabel?: string | ReactNode;
  required?: boolean;
  InputProps?: Partial<StandardInputProps>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  maxWidth?: boolean;
  className?: string;
}
