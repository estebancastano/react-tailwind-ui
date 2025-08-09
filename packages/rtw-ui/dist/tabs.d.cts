import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

interface RtwTabItem {
    value: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
}
interface RtwTabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    items: RtwTabItem[];
    className?: string;
}
declare function RtwTabs({ defaultValue, value, onValueChange, items, className }: RtwTabsProps): react_jsx_runtime.JSX.Element;

export { type RtwTabItem, RtwTabs, type RtwTabsProps };
