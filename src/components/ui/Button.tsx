import { PropsWithChildren } from "react";
import cs from "classnames";

interface Props extends PropsWithChildren {
    className?: string;
    disabled?: boolean;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function Button(props: Props) {
    return (
        <button
            type={props.type}
            className={cs(
                "w-full flex flex-row justify-center items-center bg-brand-dark px-[1rem] py-[.7rem] rounded-md text-white gap-2",
                props.disabled && "cursor-not-allowed text-gray-100",
            )}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}
