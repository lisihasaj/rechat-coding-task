import { EditIcon, PlusIcon } from "components/ui/SvgIcons.tsx";
import { useFormContext } from "lib/context/FormContext.tsx";
import TextInput from "components/ui/TextInput.tsx";
import Textarea from "components/ui/Textarea.tsx";
import Button from "components/ui/Button.tsx";
import SelectInput from "components/ui/SelectInput.tsx";

interface Props {
    textareaRows?: number;
    isEditPage?: boolean;
}

export default function Form(props: Props) {
    const { isDirty, resetFields, handleSubmit } = useFormContext();

    const statusOptions = [
        { value: "Todo", label: "Todo" },
        { value: "InProgress", label: "In Progress" },
        { value: "Blocked", label: "Blocked" },
        { value: "InQA", label: "In QA" },
        { value: "Done", label: "Done" },
    ];

    return (
        <div className="w-full flex flex-col gap-2">
            <TextInput name="title" placeholder="Title" />
            <Textarea
                name="description"
                placeholder="Description"
                rows={props.textareaRows}
            />
            {props.isEditPage ? (
                <>
                    <SelectInput
                        name="status"
                        placeholder="Status"
                        options={statusOptions}
                    />
                    <div className="w-full grid grid-cols-2 gap-2">
                        <Button
                            type="button"
                            variant="fill"
                            disabled={!isDirty}
                            onClick={() =>
                                handleSubmit(["title", "description", "status"])
                            }
                        >
                            <EditIcon className="w-5 h-5" />
                            Save
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            disabled={!isDirty}
                            onClick={() => resetFields()}
                        >
                            Cancel
                        </Button>
                    </div>
                </>
            ) : (
                <Button
                    type="button"
                    variant="fill"
                    disabled={!isDirty}
                    onClick={() => handleSubmit(["title", "description"])}
                >
                    <PlusIcon className="h-6 w-6" />
                    Add
                </Button>
            )}
        </div>
    );
}
