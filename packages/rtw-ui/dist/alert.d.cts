import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type AlertTone = "info" | "success" | "warning" | "destructive";
interface RtwAlertProps extends React.HTMLAttributes<HTMLDivElement> {
    tone?: AlertTone;
    title?: string;
    description?: string | React.ReactNode;
}
declare function RtwAlert({ tone, title, description, className, ...props }: RtwAlertProps): react_jsx_runtime.JSX.Element;

export { RtwAlert, type RtwAlertProps };
