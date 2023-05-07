import { StringExtension as String } from "lib/extensions/string.extension.ts";
import cs from "classnames";

interface Props {
    className?: string;
    disabled?: boolean;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function TextInput(props: Props) {
    return (
        <div
            className={cs(
                "relative group w-full h-[3rem] rounded-md bg-primary overflow-hidden",
                props.className,
            )}
        >
            <input
                value={props.value}
                placeholder={props.placeholder}
                disabled={props.disabled}
                className={cs(
                    "w-full h-full px-[1rem] bg-transparent text-base text-gray-500 border-b-[2px] border-gray-300 group-focus-within:border-brand-dark group-focus-within:text-black transition-colors duration-100 ease-in-out",
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
