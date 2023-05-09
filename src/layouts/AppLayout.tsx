import { PropsWithChildren } from "react";
import cs from "classnames";
import Header from "components/Header";

export default function AppLayout(props: PropsWithChildren) {
    return (
        <div
            className={cs(
                "1024:w-[800px]",
                "840:w-[80%]",
                "620:w-[90%]",
                "relative w-full min-h-screen flex flex-col items-center",
            )}
        >
            <Header />
            {props.children}
        </div>
    );
}
