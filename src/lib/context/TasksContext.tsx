import {
    createContext,
    PropsWithChildren,
    useReducer,
    useContext,
    useEffect,
    useMemo,
} from "react";
import { STATUS_TYPES, TASKS } from "lib/constants";
import { Task } from "components/home/TaskItem";
import { useParams } from "react-router-dom";
import { StorageExtension as Storage } from "lib/extensions/storage.extension";
import { ArrayExtension as Array } from "lib/extensions/array.extension";
import { toast } from "react-toastify";

type Obj = { [key: string]: string | undefined } | {};

// Initial state props
interface TasksContextState {
    values: {
        title?: string;
        description?: string;
        status?: string;
    };
    errors: Obj;
    tasks: Task[];
}

// Context initial state
const initialState: TasksContextState = {
    values: {},
    errors: {},
    tasks: Storage.get(TASKS) || [],
};

// Reducer props
type TasksContextActionType =
    | "set_field_value"
    | "set_field_error"
    | "reset_fields"
    | "reset_errors"
    | "reset_multiple"
    | "set_multiple"
    | "add_task";
type TasksContextActionPayload = Obj;
interface TasksContextActions {
    type: TasksContextActionType;
    payload: TasksContextActionPayload;
}

// The Reducer
const reducer = (state: TasksContextState, action: TasksContextActions) => {
    const { type, payload } = action;

    switch (type) {
        case "set_field_value":
            return {
                ...state,
                values: {
                    ...state.values,
                    ...payload,
                },
            };
        case "set_field_error":
            return {
                ...state,
                errors: {
                    ...state.errors,
                    ...payload,
                },
            };
        case "reset_fields":
            return {
                ...state,
                values: {},
            };
        case "reset_errors":
            return {
                ...state,
                errors: {},
            };
        case "reset_multiple":
            return {
                ...state,
                values: {},
                errors: {},
            };
        case "add_task":
            return {
                ...state,
                tasks: [...state.tasks, payload] as Task[],
            };
        case "set_multiple":
            return {
                ...state,
                ...payload,
            };
        default:
            return { ...state };
    }
};

// Context props
interface TasksContextProps {
    values: { [key: string]: string | undefined };
    setValues: (key: string, value: string) => void;
    isDirty: boolean;
    resetFields: () => void;
    addTask: (fields: string[]) => void;
    editTask: (fields: string[], taskId: string) => void;
    deleteTask: (taskId: string) => void;
    errors: { [key: string]: string | undefined };
    clearError: (field: string) => void;
    tasks: Task[];
}

// Context
const TasksContext = createContext<TasksContextProps>({
    values: {},
    setValues() {},
    isDirty: false,
    resetFields() {},
    addTask() {},
    editTask() {},
    deleteTask() {},
    errors: {},
    clearError() {},
    tasks: [],
});

// Context provider
export function TasksContextProvider(props: PropsWithChildren) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { taskId } = useParams();
    const storedTasks = useMemo(
        () => Storage.get(TASKS) || [],
        [taskId, JSON.stringify(state.tasks)],
    );

    // Handle field value change
    const setValues = (key: string, value: string) => {
        dispatch({ type: "set_field_value", payload: { [key]: value } });
    };

    // Reset fields
    const resetFields = () => {
        dispatch({ type: "reset_multiple", payload: {} });
    };

    // Check if values are empty
    const isDirty = Object.values(state.values).some((value) => value !== "");

    // Group all empty fields into an Array
    const emptyFields = (fields: string[]) =>
        fields.filter(
            (field) =>
                state.values[field as keyof typeof state.values] === "" ||
                state.values[field as keyof typeof state.values] === undefined,
        );

    // Set errors for empty fields
    const setErrors = (emptyFields: string[]) => {
        const errors = emptyFields.reduce((obj, field) => {
            return {
                ...obj,
                [field]: "Field is required",
            };
        }, {} as Obj);

        dispatch({ type: "set_field_error", payload: errors });
    };

    // Add a new task
    const addTask = (fields: string[]) => {
        // Check if all fields have values
        if (emptyFields(fields).length > 0) {
            setErrors(emptyFields(fields));
        } else {
            const newTask = {
                id: String(Date.now()),
                status: STATUS_TYPES.Todo,
                history: [
                    {
                        createdAt: new Date().toISOString(),
                        status: STATUS_TYPES.Todo,
                        ...state.values,
                    },
                ],
                ...state.values,
            };

            Storage.set(TASKS, [...storedTasks, newTask]);
            dispatch({
                type: "set_multiple",
                payload: {
                    tasks: Storage.get(TASKS) || [],
                    values: {},
                },
            });
            toast.success("Task added successfully");
        }
    };

    // Edit existing task
    const editTask = (fields: string[], taskId: string) => {
        if (!taskId) return;
        // Check if all fields have values
        if (emptyFields(fields).length > 0) {
            setErrors(emptyFields(fields));
        } else {
            const targetTaskHistory = storedTasks.find(
                (t: Task) => t.id === taskId,
            ).history;

            const updatedTasks = Array.updateItemById(storedTasks, {
                id: taskId,
                ...state.values,
                history: [
                    ...targetTaskHistory,
                    {
                        createdAt: new Date().toISOString(),
                        description: state.values.description,
                        status: state.values.status,
                        title: state.values.title,
                    },
                ],
            });

            Storage.set(TASKS, updatedTasks);
            dispatch({
                type: "set_multiple",
                payload: {
                    tasks: updatedTasks,
                },
            });
            toast.success("Task updated successfully");
        }
    };

    // Delete existing task
    const deleteTask = (taskId: string) => {
        if (!taskId) return;
        const filteredTasks = storedTasks.filter((t: Task) => t.id !== taskId);
        Storage.set(TASKS, filteredTasks);
        dispatch({
            type: "set_multiple",
            payload: {
                tasks: filteredTasks,
            },
        });
        toast.success("Task deleted successfully");
    };

    // Clear errors by field name
    const clearError = (field: string) => {
        dispatch({ type: "set_field_error", payload: { [field]: undefined } });
    };

    useEffect(() => {
        if (taskId) {
            const task = storedTasks.find((t: Task) => t.id === taskId);
            if (task) {
                dispatch({ type: "set_multiple", payload: { values: task } });
            }
        }
    }, [taskId]);

    return (
        <TasksContext.Provider
            value={{
                values: state.values,
                errors: state.errors,
                setValues,
                isDirty,
                resetFields,
                addTask,
                editTask,
                deleteTask,
                clearError,
                tasks: state.tasks,
            }}
        >
            {props.children}
        </TasksContext.Provider>
    );
}

// Context consumer hook
export function useTasksContext() {
    const context = useContext(TasksContext);
    if (typeof context === "undefined")
        throw new Error(
            "useTasksContext() cannot be used outside <TasksContextProvider></TasksContextProvider>",
        );
    return context;
}
