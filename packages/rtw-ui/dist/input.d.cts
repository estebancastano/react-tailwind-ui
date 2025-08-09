import * as React from 'react';

interface RtwInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
}
declare const RtwInput: React.ForwardRefExoticComponent<RtwInputProps & React.RefAttributes<HTMLInputElement>>;

export { RtwInput, type RtwInputProps };
