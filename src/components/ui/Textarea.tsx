import cs from "classnames";
import { StringExtension as String } from "lib/extensions/string.extension.ts";
import InputPlaceholder from "components/ui/InputPlaceholder.tsx";

interface Props {
    className?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
}

export default function Textarea(props: Props) {
    const hasValue = typeof props.value !== "undefined" && props.value !== "";

    return (
        <div
            className={cs(
                "relative group w-full h-fit bg-primary rounded-md overflow-hidden",
                props.className,
            )}
        >
            <InputPlaceholder
                placeholder={props.placeholder!}
                isFocused={props.value !== ""}
                ofTextarea
            />
            <div className="w-full border-b-[2px] border-gray-300 group-focus-within:border-brand-dark transition-colors duration-100 ease-in-out z-0">
                <textarea
                    value={props.value}
                    rows={props.rows ? props.rows : 4}
                    disabled={props.disabled}
                    autoComplete={props.disabled ? "off" : "on"}
                    autoCorrect="on"
                    className={cs(
                        "w-full bg-transparent text-base group-focus-within:pb-[0.5rem] group-focus-within:pt-[1.5rem]",
                        hasValue
                            ? "pt-[1.5rem] pb-[0.5rem] px-[1rem]"
                            : "p-[1rem]",
                    )}
                    onChange={(e) => {
                        const value = String.capitalize(e.target.value);
                        e.target.value = value;
                        props.onChange(value);
                    }}
                />
            </div>
        </div>
    );
}
