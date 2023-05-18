import {CSSProperties, MouseEventHandler, ReactNode} from 'react';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material';

type TooltipPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';
type FormType = 'button' | 'submit';
type Variant = 'outlined' | 'contained' | 'text';
export type BaseColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
export type Color = BaseColors;

export interface IButtonComponent {
  buttonText: string;
  onClick: () => void;
  isLoading?: boolean;
  color?: Color | 'inherit';
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: Variant;
  type?: FormType;
  style?: CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  TooltipText?: any;
  TooltipPlacement?: TooltipPlacement;
  TooltipClassName?: string;
  TooltipStyles?: CSSProperties;
  id?: string;
  sx?: SxProps<Theme>;
}
