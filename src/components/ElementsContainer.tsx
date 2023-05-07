import { PropsWithChildren } from "react";
import cs from "classnames";

interface Props extends PropsWithChildren {
    className?: string;
}

export default function ElementsContainer(props: Props) {
    return (
        <div className={cs("w-full flex px-[3rem]", props.className)}>
            {props.children}
        </div>
    );
}
