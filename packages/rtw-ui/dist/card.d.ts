import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

interface RtwCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
}
declare function RtwCard({ className, title, description, footer, children, ...props }: RtwCardProps): react_jsx_runtime.JSX.Element;

export { RtwCard, type RtwCardProps };
