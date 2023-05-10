import { useParams } from "react-router-dom";
import { Task, TaskHistoryItem } from "components/home/TaskItem";
import HistoryItem from "components/edit/HistoryItem";
import { useTasksContext } from "lib/context/TasksContext";

export default function TaskHistory() {
    const { taskId } = useParams();
    const { tasks } = useTasksContext();

    const taskHistory = () => {
        if (!taskId) return [];
        return tasks?.find((t: Task) => t.id === taskId)?.history || [];
    };

    return (
        <div className="w-full flex flex-col mt-5 border-t py-[1rem]">
            <span className="text-base font-medium mb-2">Task history:</span>
            <div className="w-full flex flex-col px-[.5rem]">
                {taskHistory().map((item: TaskHistoryItem, index: number) => (
                    <HistoryItem
                        key={index}
                        index={index}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                        createdAt={item.createdAt}
                    />
                ))}
            </div>
        </div>
    );
}
