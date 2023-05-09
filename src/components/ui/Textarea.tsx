import { ChangeEvent } from "react";
import cs from "classnames";
import { StringExtension as String } from "lib/extensions/string.extension";
import { useTasksContext } from "lib/context/TasksContext";
import InputErrorElement from "components/ui/InputErrorElement";

interface Props {
    className?: string;
    name: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
}

export default function Textarea(props: Props) {
    const { values, setValues, errors, clearError } = useTasksContext();

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        clearError(props.name);
        const value = String.capitalize(e.target.value);
        e.target.value = value;
        setValues(props.name, value);
    };

    return (
        <div
            className={cs(
                "relative group w-full h-fit bg-primary rounded-md overflow-hidden",
                props.className,
            )}
        >
            <div
                className={cs(
                    "w-full border-b-[2px] transition-colors duration-100 ease-in-out z-0",
                    errors[props.name]
                        ? "border-red-500"
                        : "border-gray-300 group-focus-within:border-brand-dark",
                )}
            >
                <textarea
                    value={values[props.name] ?? ""}
                    rows={props.rows ? props.rows : 4}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    autoComplete={props.disabled ? "off" : "on"}
                    autoCorrect="on"
                    className={cs(
                        "w-full bg-transparent text-base p-[1rem]",
                        errors[props.name]
                            ? "text-red-500"
                            : "text-gray-500 group-focus-within:text-black",
                    )}
                    onChange={handleChange}
                />
                <InputErrorElement
                    hasError={typeof errors[props.name] !== "undefined"}
                />
            </div>
        </div>
    );
}
