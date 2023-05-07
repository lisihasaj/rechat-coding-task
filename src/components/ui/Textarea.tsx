import cs from "classnames";
import { StringExtension as String } from "lib/extensions/string.extension.ts";

interface Props {
    className?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
}

export default function Textarea(props: Props) {
    return (
        <div
            className={cs(
                "relative group w-full h-fit bg-primary rounded-md overflow-hidden",
                props.className,
            )}
        >
            <div className="w-full border-b-[2px] border-gray-300 group-focus-within:border-brand-dark transition-colors duration-100 ease-in-out z-0">
                <textarea
                    value={props.value}
                    rows={props.rows ? props.rows : 4}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    autoComplete={props.disabled ? "off" : "on"}
                    autoCorrect="on"
                    className={cs("w-full bg-transparent text-base p-[1rem]")}
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
