import cs from "classnames";

interface Props {
    className?: string;
    title?: string;
}

export default function PageTitle(props: Props) {
    return (
        <div
            className={cs(
                "w-full py-[1.5rem] text-xl font-medium",
                props.className,
            )}
        >
            {props.title}
        </div>
    );
}
