import { useRef, useState } from "react";
import cs from "classnames";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { useTasksContext } from "lib/context/TasksContext";
import InputErrorElement from "components/ui/InputErrorElement";

export type Option = {
    label: string;
    value: string;
    isActive?: boolean;
};

interface Props {
    className?: string;
    name: string;
    placeholder?: string;
    disabled?: boolean;
    options?: Option[];
}

export default function SelectInput(props: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const { values, setValues, errors, clearError } = useTasksContext();

    const hasValue = values[props.name] !== undefined;

    const handleSelect = (value: string) => {
        clearError(props.name);
        setValues(props.name, value);
        setIsOpen(false);
    };

    useOutsideClick(ref, () => setIsOpen(false));

    return (
        <div
            className={cs(
                "relative group w-full flex flex-col",
                props.className,
            )}
            ref={ref}
        >
            <button
                type="button"
                disabled={props.disabled}
                className={cs(
                    "w-full h-[3.4rem] bg-primary rounded-md z-0 overflow-hidden",
                    isOpen && "absolute top-0 left-0",
                )}
                onClick={() => setIsOpen(true)}
            >
                <div
                    className={cs(
                        "w-full h-full p-[1rem] text-left border-b-[2px] whitespace-nowrap",
                        hasValue ? "text-black" : "text-gray-500",
                        errors[props.name]
                            ? "border-red-500"
                            : "border-gray-300",
                    )}
                >
                    {hasValue
                        ? props.options?.find(
                              (o) => o.value === values[props.name],
                          )?.label
                        : props.placeholder}
                </div>
                <InputErrorElement
                    hasError={typeof errors[props.name] !== "undefined"}
                />
            </button>
            {isOpen && (
                <div className="w-full h-full bg-primary rounded-md shadow-md z-10 py-[0.5rem] flex flex-col">
                    {props.options ? (
                        props.options.map((option, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handleSelect(option.value)}
                                disabled={
                                    !option.isActive ||
                                    option.value === values[props.name]
                                }
                                className={cs(
                                    "w-full px-[1rem] py-[0.5rem] text-base text-start",
                                    option.value === values[props.name]
                                        ? "text-brand-dark"
                                        : option.isActive
                                        ? "text-black hover:text-brand-dark"
                                        : "text-gray-400",
                                )}
                            >
                                {option.label}
                            </button>
                        ))
                    ) : (
                        <li
                            onClick={() => setIsOpen(false)}
                            className="w-full text-gray-500 text-base h-full p-[1rem]"
                        >
                            No options provided.
                        </li>
                    )}
                </div>
            )}
        </div>
    );
}
