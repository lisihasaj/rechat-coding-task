import { useId } from "react";
import { Status } from "components/home/TaskStatus.tsx";
import MainContainer from "components/ui/MainContainer.tsx";
import TaskItem from "components/home/TaskItem.tsx";

export default function TasksContainer() {
    const tasks = [
        {
            id: useId(),
            title: "Task 1",
            description: "lores ipsum hala hola hila hulu dada mada toto voto",
            status: "Todo",
        },
        {
            id: useId(),
            title: "Task 1",
            description: "lores ipsum hala hola hila hulu dada mada toto voto",
            status: "inProgress",
        },
        {
            id: useId(),
            title: "Task 1",
            description: "lores ipsum hala hola hila hulu dada mada toto voto",
            status: "Blocked",
        },
        {
            id: useId(),
            title: "Task 1",
            description: "lores ipsum hala hola hila hulu dada mada toto voto",
            status: "InQA",
        },
    ];

    return (
        <div className="w-full flex-1 bg-brand-dark flex flex-col overflox-hidden rounded-t-[1.8rem] shadow-lg">
            <MainContainer className="w-full text-white py-[1rem] text-xl">
                Tasks
            </MainContainer>
            <MainContainer className="w-full flex-1 bg-brand-light rounded-t-[1.8rem] text-gray-500 flex justify-center items-start py-[2.5rem]">
                {/*<span className="text-lg">No items</span>*/}
                <div className="w-full grid grid-cols-2 gap-4">
                    {tasks.map((task, index) => (
                        <TaskItem
                            key={index}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            status={task.status as Status}
                        />
                    ))}
                </div>
            </MainContainer>
        </div>
    );
}
