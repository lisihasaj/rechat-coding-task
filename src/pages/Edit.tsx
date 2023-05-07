import MainContainer from "components/ui/MainContainer.tsx";
import PageTitle from "components/ui/PageTitle.tsx";
import TextInput from "components/ui/TextInput.tsx";
import { useState } from "react";
import Textarea from "components/ui/Textarea.tsx";
import SelectInput from "components/ui/SelectInput.tsx";
import Button from "components/ui/Button.tsx";
import { EditIcon } from "components/ui/SvgIcons.tsx";

export default function Edit() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const statusOptions = [
        { value: "Todo", label: "Todo" },
        { value: "InProgress", label: "In Progress" },
        { value: "Blocked", label: "Blocked" },
        { value: "InQA", label: "In QA" },
        { value: "Done", label: "Done" },
    ];

    return (
        <MainContainer className="flex-col bg-white min-h-screen pb-[3rem]">
            <PageTitle title="Edit Task" />
            <div className="w-full flex flex-col gap-3">
                <TextInput
                    value={title}
                    onChange={(value) => setTitle(value)}
                    placeholder="Title"
                />
                <Textarea
                    value={description}
                    onChange={setDescription}
                    placeholder="Description"
                    rows={20}
                />
                <SelectInput
                    value={status}
                    onClick={(value) => setStatus(value)}
                    placeholder="Status"
                    options={statusOptions}
                />
                <div className="w-full grid grid-cols-2 gap-2">
                    <Button type="submit" variant="fill">
                        <EditIcon className="w-5 h-5" />
                        Save
                    </Button>
                    <Button type="button" variant="outline">
                        Cancel
                    </Button>
                </div>
            </div>
        </MainContainer>
    );
}
