import cs from "classnames";

interface Props {
    placeholder: string;
    isFocused: boolean;
    ofTextarea?: boolean;
}

export default function InputPlaceholder(props: Props) {
    return (
        <span
            className={cs(
                "w-fit absolute left-[1rem] -translate-y-1/2 z-10 transition-all duration-100 ease-in-out",
                props.isFocused
                    ? "top-[0.7rem] text-gray-700 text-xs"
                    : "text-base text-gray-400 group-focus-within:text-xs group-focus-within:top-[0.7rem] group-focus-within:text-gray-700 focus:text-xs focus:top-[0.7rem] focus:text-gray-700",
                props.ofTextarea
                    ? props.isFocused
                        ? ""
                        : "top-[1rem]"
                    : "top-1/2",
            )}
        >
            {props.placeholder}
        </span>
    );
}
