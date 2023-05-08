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
                "w-full flex flex-row justify-center items-center border px-[1rem] py-[.8rem] rounded-md gap-2 disabled:cursor-not-allowed",
                props.variant === "outline" &&
                    "bg-white enabled:border-black enabled:text-black disabled:border-gray-300 disabled:text-gray-300",
                props.variant === "fill" &&
                    "bg-brand-dark enabled:border-brand-dark enabled:text-white disabled:text-gray-300",
            )}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}
