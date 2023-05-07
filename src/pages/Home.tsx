import { useState } from "react";
import ElementsContainer from "components/ElementsContainer.tsx";
import PageTitle from "components/PageTitle.tsx";
import TextInput from "components/TextInput.tsx";
import Textarea from "components/Textarea.tsx";
import Button from "components/Button.tsx";
import { Plus } from "components/SvgIcons.tsx";

export default function Home() {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="relative w-full min-h-screen bg-white">
            <ElementsContainer className="flex-col">
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
                    <Button type="submit">
                        <Plus />
                        Add
                    </Button>
                </div>
            </ElementsContainer>
        </div>
    );
}
