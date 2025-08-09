import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type BadgeTone = "primary" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info" | "muted";
interface RtwBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
}
declare function RtwBadge({ tone, className, children, ...props }: RtwBadgeProps): react_jsx_runtime.JSX.Element;

export { RtwBadge, type RtwBadgeProps };
