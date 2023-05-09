import { STATUS_TYPES } from "lib/constants";
import cs from "classnames";

export type Status = keyof typeof STATUS_TYPES;

interface Props {
    status: Status;
}

export default function TaskStatus(props: Props) {
    return (
        <span
            className={cs(
                "620:w-fit",
                "w-full px-3 py-1.5 rounded-md bg-brand-dark text-xs text-white text-center",
            )}
        >
            {props.status}
        </span>
    );
}
