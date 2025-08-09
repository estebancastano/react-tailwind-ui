import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

interface RtwModalProps {
    title: string;
    description?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    triggerLabel?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}
declare function RtwModal({ title, description, open, onOpenChange, triggerLabel, children, footer, }: RtwModalProps): react_jsx_runtime.JSX.Element;

export { RtwModal, type RtwModalProps };
