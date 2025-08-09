import * as react_jsx_runtime from 'react/jsx-runtime';

interface RtwSelectItem {
    label: string;
    value: string;
    disabled?: boolean;
}
interface RtwSelectProps {
    items: RtwSelectItem[];
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    label?: string;
    disabled?: boolean;
}
declare function RtwSelect({ items, placeholder, value, defaultValue, onValueChange, className, label, disabled, }: RtwSelectProps): react_jsx_runtime.JSX.Element;

export { RtwSelect, type RtwSelectItem, type RtwSelectProps };
