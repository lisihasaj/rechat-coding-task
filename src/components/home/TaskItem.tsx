import TaskStatus, { Status } from "components/home/TaskStatus";
import { DeleteIcon, EditIcon } from "components/ui/SvgIcons";
import { Link } from "react-router-dom";
import { PATHS } from "router/paths";
import { useTasksContext } from "lib/context/TasksContext";

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
        <div className="w-full h-[11rem] px-[1rem] pt-[0.8rem] pb-[1rem] bg-white flex flex-col justify-between rounded-md shadow-md gap-y-6">
            <div className="w-full flex flex-col gap-2">
                <span className="w-full text-base font-medium text-black">
                    {props.title}
                </span>
                <span className="w-full text-sm text-gray-700 line-clamp-3">
                    {props.description}
                </span>
            </div>
            <div className="w-full flex flex-row gap-3 items-center">
                <TaskStatus status={props.status as Status} />
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
    );
}
