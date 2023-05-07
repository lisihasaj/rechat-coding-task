import { PropsWithChildren } from "react";
import cs from "classnames";

export default function AppLayout(props: PropsWithChildren) {
    return (
        <div
            className={cs(
                "1024:w-[70%]",
                "840:w-[80%]",
                "620:w-[90%]",
                "w-full min-h-screen",
            )}
        >
            {props.children}
        </div>
    );
}
