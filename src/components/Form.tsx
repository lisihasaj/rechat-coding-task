import { EditIcon, PlusIcon } from "components/ui/SvgIcons";
import { useTasksContext } from "lib/context/TasksContext";
import TextInput from "components/ui/TextInput";
import Textarea from "components/ui/Textarea";
import Button from "components/ui/Button";
import SelectInput from "components/ui/SelectInput";
import { useParams } from "react-router-dom";
import { STATUS_TYPES, TASKS } from "lib/constants";
import { StorageExtension } from "lib/extensions/storage.extension.ts";
import { Task } from "components/home/TaskItem.tsx";

interface Props {
    textareaRows?: number;
    isEditPage?: boolean;
}

export default function Form(props: Props) {
    const { isDirty, resetFields, addTask, editTask } = useTasksContext();
    const { taskId } = useParams();

    const currentStatus = StorageExtension.get(TASKS)?.find(
        (t: Task) => t.id === taskId,
    )?.status;

    const statusOptions = [
        {
            value: STATUS_TYPES.Todo,
            label: STATUS_TYPES.Todo,
            isActive:
                !currentStatus ||
                currentStatus === STATUS_TYPES.Blocked ||
                currentStatus === STATUS_TYPES.InQA,
        },
        {
            value: STATUS_TYPES.InProgress,
            label: STATUS_TYPES.InProgress,
            isActive: currentStatus === STATUS_TYPES.Todo,
        },
        {
            value: STATUS_TYPES.Blocked,
            label: STATUS_TYPES.Blocked,
            isActive: currentStatus === STATUS_TYPES.InProgress,
        },
        {
            value: STATUS_TYPES.InQA,
            label: STATUS_TYPES.InQA,
            isActive: currentStatus === STATUS_TYPES.InProgress,
        },
        {
            value: STATUS_TYPES.Done,
            label: STATUS_TYPES.Done,
            isActive: currentStatus === STATUS_TYPES.InQA,
        },
        {
            value: STATUS_TYPES.Deployed,
            label: STATUS_TYPES.Deployed,
            isActive: currentStatus === STATUS_TYPES.Done,
        },
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
