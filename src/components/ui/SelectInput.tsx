import { useRef, useState } from "react";
import cs from "classnames";
import { useOutsideClick } from "lib/hooks/useOutsideClick.tsx";

interface Props {
    className?: string;
    value: string;
    onClick: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    options?: {
        label: string;
        value: string;
    }[];
}

export default function SelectInput(props: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const hasValue = typeof props.value !== "undefined" && props.value !== "";

    const handleSelect = (value: string) => {
        props.onClick(value);
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
                    "w-full p-[1rem] bg-primary rounded-md text-left z-0",
                    hasValue ? "text-black" : "text-gray-500",
                    isOpen && "absolute top-0 left-0",
                )}
                onClick={() => setIsOpen(true)}
            >
                {hasValue
                    ? props.options?.find((o) => o.value === props.value)?.label
                    : props.placeholder}
            </button>
            {isOpen && (
                <ul className="w-full h-full bg-primary rounded-md shadow-md z-10 py-[0.5rem]">
                    {props.options ? (
                        props.options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(option.value)}
                                className={cs(
                                    "w-full px-[1rem] py-[0.5rem] text-base text-gray-500 hover:text-brand-dark",
                                    option.value === props.value &&
                                        "text-brand-dark",
                                )}
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li
                            onClick={() => setIsOpen(false)}
                            className="w-full text-gray-500 text-base h-full p-[1rem]"
                        >
                            No options provided.
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}
