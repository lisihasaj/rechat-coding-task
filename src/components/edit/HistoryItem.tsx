import { Status } from "components/home/TaskStatus";
import cs from "classnames";
import { DateExtension } from "lib/extensions/date.extension";

interface Props {
    index: number;
    title: string;
    description: string;
    status: Status;
    createdAt: string;
}

export default function HistoryItem(props: Props) {
    return (
        <div
            className={cs(
                "w-full p-[1rem] flex flex-col text-xs",
                props.index === 0 ? "border-t border-b" : "border-b",
            )}
        >
            <div className="flex flex-row justify-between items-center">
                <span className="font-medium">
                    {props.index === 0 ? "Created at:" : "Updated at:"}
                </span>
                <span>
                    {DateExtension.getTimeDistance(props.createdAt) as string}
                </span>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span className="font-medium">Title:</span>
                <span>{props.title}</span>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span className="font-medium">Description:</span>
                <span className="w-[50%] line-clamp-1 text-end">
                    {props.description}
                </span>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span className="font-medium">Status:</span>
                <span>{props.status}</span>
            </div>
        </div>
    );
}
