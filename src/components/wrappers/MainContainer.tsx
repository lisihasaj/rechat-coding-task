import { PropsWithChildren } from "react";
import cs from "classnames";

interface Props extends PropsWithChildren {
    className?: string;
}

export default function MainContainer(props: Props) {
    return (
        <div
            className={cs(
                "480:px-[3rem]",
                "relative w-full flex px-[1.5rem]",
                props.className,
            )}
        >
            {props.children}
        </div>
    );
}
