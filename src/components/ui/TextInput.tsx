import { ChangeEvent } from "react";
import { StringExtension as String } from "lib/extensions/string.extension.ts";
import cs from "classnames";
import { useFormContext } from "lib/context/FormContext.tsx";
import InputErrorElement from "components/ui/InputErrorElement.tsx";

interface Props {
    className?: string;
    disabled?: boolean;
    name: string;
    placeholder?: string;
}

export default function TextInput(props: Props) {
    const { values, setValues, errors, clearError } = useFormContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        clearError(props.name); // Clear error when user starts typing
        const value = String.capitalize(e.target.value); // Capitalize first letter
        e.target.value = value; // Set value to capitalized value
        setValues(props.name, value); // Set value in form context
    };

    return (
        <div
            className={cs(
                "relative group w-full rounded-md bg-primary overflow-hidden",
                props.className,
            )}
        >
            <input
                value={values[props.name] ?? ""}
                disabled={props.disabled}
                placeholder={props.placeholder}
                className={cs(
                    "w-full h-full bg-transparent text-base p-[1rem] border-b-[2px] transition-colors duration-100 ease-in-out z-0",
                    errors[props.name]
                        ? "border-red-500 text-red-500"
                        : "border-gray-300 text-gray-500 group-focus-within:border-brand-dark group-focus-within:text-black",
                )}
                onChange={handleChange}
            />
            <InputErrorElement
                hasError={typeof errors[props.name] !== "undefined"}
            />
        </div>
    );
}
