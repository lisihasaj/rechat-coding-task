import { useState } from "react";
import { PlusIcon } from "components/ui/SvgIcons.tsx";
import MainContainer from "components/wrappers/MainContainer.tsx";
import PageTitle from "components/ui/PageTitle.tsx";
import TextInput from "components/ui/TextInput.tsx";
import Textarea from "components/ui/Textarea.tsx";
import Button from "components/ui/Button.tsx";
import TasksContainer from "components/home/TasksContainer.tsx";
import PageTransition from "components/wrappers/PageTransition.tsx";

export default function Home() {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    return (
        <PageTransition className="min-h-screen bg-white flex flex-col gap-10">
            <MainContainer className="flex-col">
                <PageTitle title="Add a new task" />
                <div className="w-full flex flex-col gap-2">
                    <TextInput
                        value={task}
                        onChange={(value) => setTask(value)}
                        placeholder="Title"
                    />
                    <Textarea
                        value={description}
                        onChange={(value) => setDescription(value)}
                        placeholder="Description"
                        rows={5}
                    />
                    <Button type="submit" variant="fill">
                        <PlusIcon className="h-6 w-6" />
                        Add
                    </Button>
                </div>
            </MainContainer>
            <TasksContainer />
        </PageTransition>
    );
}
