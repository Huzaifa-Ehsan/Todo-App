import React, {forwardRef} from 'react';
import {Button, CircularProgress, Tooltip} from '@mui/material';
import {IButtonComponent} from './button.type';

export const ButtonComponent = forwardRef<HTMLButtonElement, IButtonComponent>(
  (
    {
      buttonText,
      onClick,
      isLoading,
      color = 'primary',
      className,
      startIcon,
      endIcon,
      variant = 'contained',
      type = 'button',
      style,
      onMouseEnter,
      onMouseLeave,
      TooltipText = '',
      TooltipPlacement = 'top',
      TooltipClassName,
      TooltipStyles,
      id,
      sx
    },
    ref
  ) => {
    return (
      <Tooltip
        className={TooltipClassName}
        title={TooltipText}
        placement={TooltipPlacement}
        style={TooltipStyles}
      >
        <Button
          sx={sx}
          id={id}
          ref={ref}
          disableElevation
          onClick={onClick}
          color={color}
          style={{textTransform: 'capitalize', margin: '10px 0', ...style}}
          className={className}
          variant={variant}
          disabled={isLoading}
          type={type}
          startIcon={startIcon}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          endIcon={
            isLoading ? <CircularProgress color={color} size="20px" /> : endIcon
          }
        >
          {buttonText}
        </Button>
      </Tooltip>
    );
  }
);

ButtonComponent.displayName = 'ButtonComponent';
