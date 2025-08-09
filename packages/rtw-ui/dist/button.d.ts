import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type LibVariant = "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
type LibSize = "sm" | "md" | "lg" | "icon";
interface RtwButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: LibVariant;
    size?: LibSize;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare function RtwButton({ className, children, variant, size, loading, leftIcon, rightIcon, disabled, ...props }: RtwButtonProps): react_jsx_runtime.JSX.Element;
declare namespace RtwButton {
    var displayName: string;
}

export { RtwButton, type RtwButtonProps };
