import TaskStatus, { Status } from "components/home/TaskStatus";
import { DeleteIcon, EditIcon } from "components/ui/SvgIcons";
import { Link } from "react-router-dom";
import { PATHS } from "router/paths";
import { useTasksContext } from "lib/context/TasksContext";
import cs from "classnames";

interface Props {
    id: string;
    index?: number;
    title: string;
    description: string;
    status: Status;
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: Status;
};

export default function TaskItem(props: Props) {
    const { deleteTask } = useTasksContext();

    return (
        <div
            className={cs(
                "620:flex-row 620:justify-normal 620:gap-y-0 620:gap-x-2 620:h-fit",
                "w-full h-[11rem] px-[1rem] pt-[0.8rem] pb-[1rem] bg-white flex flex-col justify-between rounded-md shadow-md gap-y-6",
            )}
        >
            <div
                className={cs(
                    "620:flex-row 620:items-center",
                    "w-full flex flex-col gap-2",
                )}
            >
                <span className="w-full text-base font-medium text-black text-start">
                    {props.title}
                </span>
                <span
                    className={cs(
                        "620:line-clamp-2",
                        "w-full text-sm text-gray-700 line-clamp-3 text-start",
                    )}
                >
                    {props.description}
                </span>
            </div>
            <div
                className={cs(
                    "620:gap-2 620:grid 620:grid-cols-2",
                    "w-full flex flex-row gap-3 items-center",
                )}
            >
                <div
                    className={cs(
                        "620:w-full 620:flex 620:justify-center",
                        "w-fit",
                    )}
                >
                    <TaskStatus status={props.status as Status} />
                </div>
                <div
                    className={cs(
                        "flex flex-row items-center justify-end gap-2",
                    )}
                >
                    <Link
                        type="button"
                        to={PATHS(props.id).edit}
                        className="text-black hover:text-brand-dark transition-colors duration-100"
                    >
                        <EditIcon className="h-5 w-5" />
                    </Link>
                    <button
                        type="button"
                        className="text-red-500"
                        onClick={() => deleteTask(props.id)}
                    >
                        <DeleteIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
