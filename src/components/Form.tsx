import { EditIcon, PlusIcon } from "components/ui/SvgIcons.tsx";
import { useTasksContext } from "lib/context/TasksContext.tsx";
import TextInput from "components/ui/TextInput.tsx";
import Textarea from "components/ui/Textarea.tsx";
import Button from "components/ui/Button.tsx";
import SelectInput from "components/ui/SelectInput.tsx";
import { useParams } from "react-router-dom";
import { STATUS_TYPES } from "lib/constants.ts";

interface Props {
    textareaRows?: number;
    isEditPage?: boolean;
}

export default function Form(props: Props) {
    const { isDirty, resetFields, addTask, editTask } = useTasksContext();
    const { taskId } = useParams();

    const statusOptions = [
        { value: STATUS_TYPES.Todo, label: STATUS_TYPES.Todo },
        { value: STATUS_TYPES.InProgress, label: STATUS_TYPES.InProgress },
        { value: STATUS_TYPES.Blocked, label: STATUS_TYPES.Blocked },
        { value: STATUS_TYPES.InQA, label: STATUS_TYPES.InQA },
        { value: STATUS_TYPES.Done, label: STATUS_TYPES.Done },
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
                                editTask(
                                    ["title", "description", "status"],
                                    taskId!,
                                )
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
                    onClick={() => addTask(["title", "description"])}
                >
                    <PlusIcon className="h-6 w-6" />
                    Add
                </Button>
            )}
        </div>
    );
}
