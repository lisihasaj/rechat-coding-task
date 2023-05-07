import { PropsWithChildren } from "react";
import cs from "classnames";

interface Props extends PropsWithChildren {
    className?: string;
    disabled?: boolean;
    type: "button" | "submit" | "reset";
    variant: "fill" | "outline";
    onClick?: () => void;
}

export default function Button(props: Props) {
    return (
        <button
            type={props.type}
            className={cs(
                "w-full flex flex-row justify-center items-center border px-[1rem] py-[.8rem] rounded-md gap-2",
                props.disabled && "cursor-not-allowed text-gray-100",
                props.variant === "outline" &&
                    "bg-white border-black text-black",
                props.variant === "fill" &&
                    "bg-brand-dark border-brand-dark text-white",
            )}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}
