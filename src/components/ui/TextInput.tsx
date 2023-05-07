import { StringExtension as String } from "lib/extensions/string.extension.ts";
import cs from "classnames";
import InputPlaceholder from "components/ui/InputPlaceholder.tsx";

interface Props {
    className?: string;
    disabled?: boolean;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function TextInput(props: Props) {
    const hasValue = typeof props.value !== "undefined" && props.value !== "";

    return (
        <div
            className={cs(
                "relative group w-full rounded-md bg-primary overflow-hidden",
                props.className,
            )}
        >
            <InputPlaceholder
                placeholder={props.placeholder!}
                isFocused={hasValue}
            />
            <input
                value={props.value}
                disabled={props.disabled}
                className={cs(
                    "w-full h-full bg-transparent text-base text-gray-500 border-b-[2px] border-gray-300 group-focus-within:border-brand-dark group-focus-within:text-black group-focus-within:pb-[0.5rem] group-focus-within:pt-[1.5rem] transition-colors duration-100 ease-in-out z-0",
                    hasValue ? "pt-[1.5rem] pb-[0.5rem] px-[1rem]" : "p-[1rem]",
                )}
                onChange={(e) => {
                    const value = String.capitalize(e.target.value);
                    e.target.value = value;
                    props.onChange(value);
                }}
            />
        </div>
    );
}
