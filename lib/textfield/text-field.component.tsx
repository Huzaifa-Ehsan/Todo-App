import React, {forwardRef} from 'react';
import {InputAdornment, TextField} from '@mui/material';
import { ITextField } from './text-field.types';

export const TextFieldComponent = forwardRef<
  HTMLInputElement | HTMLDivElement,
  ITextField
>(
  (
    {
      value,
      onChange,
      type = 'text',
      placeholder,
      label,
      isReadOnly = false,
      onFocus,
      StartAdornment,
      EndAdornment,
      focused,
      onKeyDown,
      name,
      styleProps,
      inputLabel,
      required,
      InputProps,
      inputProps,
      maxWidth,
      className
    },
    ref
  ) => {
    return (
      <>
        {inputLabel ? (
          <label
            htmlFor={name}
            style={{
              fontSize: '16px',
              color: '#000',
              fontWeight: 500,
              lineHeight: '18px',
              display: 'block'
            }}
          >
            {inputLabel}{' '}
            <span style={{color: '#000'}}>{required ? '*' : null}</span>
          </label>
        ) : null}
        <TextField
          fullWidth={maxWidth}
          id={name}
          name={name}
          focused={focused}
          ref={ref}
          style={{...styleProps}}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          label={label}
          onKeyDown={onKeyDown}
          InputProps={{
            readOnly: isReadOnly,
            startAdornment: StartAdornment ? (
              <InputAdornment position="start">{StartAdornment}</InputAdornment>
            ) : null,
            endAdornment: EndAdornment ? (
              <InputAdornment position="end">{EndAdornment}</InputAdornment>
            ) : null,
            ...InputProps
          }}
          inputProps={{...inputProps}}
          onFocus={onFocus}
          className={className}
        />
      </>
    );
  }
);

TextFieldComponent.displayName = 'TextFieldComponent';
