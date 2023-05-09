import { Status } from "components/home/TaskStatus";
import MainContainer from "components/wrappers/MainContainer";
import TaskItem from "components/home/TaskItem";
import cs from "classnames";
import { Task } from "components/home/TaskItem";
import { useTasksContext } from "lib/context/TasksContext";
import { useMediaQuery } from "lib/hooks/useMediaQuery";

export default function TasksContainer() {
    const { tasks } = useTasksContext();
    const [aboveSmallTablet] = useMediaQuery(`(min-width: 620px)`);

    return (
        <div className="w-full flex-1 bg-brand-dark flex flex-col overflox-hidden rounded-t-[1.8rem] shadow-lg">
            <MainContainer className="w-full text-white py-[1rem] text-xl">
                Tasks
            </MainContainer>
            <MainContainer
                className={cs(
                    "1024:py-[1.5rem]",
                    "w-full flex-1 bg-brand-light rounded-t-[1.8rem] text-gray-500 flex justify-center py-[2.5rem]",
                    tasks && tasks.length < 1 ? "items-center" : "items-start",
                )}
            >
                {tasks && tasks.length < 1 ? (
                    <span className="text-base font-medium text-gray-500 text-center">
                        You have nothing to do. <br /> Go get some rest.
                    </span>
                ) : (
                    <div
                        className={cs(
                            "620:grid-cols-1 620:gap-2",
                            "400:grid-cols-2 400:gap-4",
                            "w-full grid grid-cols-1 gap-3",
                        )}
                    >
                        {aboveSmallTablet && (
                            <div className="w-full grid grid-cols-4 gap-2 text-base taxt-gray-500 font-medium px-[1rem]">
                                <span className="text-start">Title</span>
                                <span className="text-start">Description</span>
                                <span className="text-center">Status</span>
                                <span className="text-end">Actions</span>
                            </div>
                        )}
                        {tasks?.map((task: Task, index: number) => (
                            <TaskItem
                                key={index}
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                status={task.status as Status}
                            />
                        ))}
                    </div>
                )}
            </MainContainer>
        </div>
    );
}
