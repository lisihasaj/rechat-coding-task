import {
    createContext,
    PropsWithChildren,
    useReducer,
    useContext,
} from "react";

// Initial state props
interface FormContextState {
    title: string;
    description: string;
    status: string | undefined;
}
//
// Context initial state
const initialState: FormContextState = {
    title: "",
    description: "",
    status: undefined,
};

// Reducer props
type FormContextActionType =
    | "set_multiple"
    | "set_title"
    | "set_description"
    | "set_status";
//
type SingleActionPayload = string | undefined;
type FormContextActionPayload =
    | SingleActionPayload
    | { [key: string]: SingleActionPayload };
//
interface FormContextActions {
    type: FormContextActionType;
    payload: FormContextActionPayload;
}
//
// Context actions reducer
const reducer = (state: FormContextState, action: FormContextActions) => {
    const { type, payload } = action;

    switch (type) {
        case "set_title":
            return {
                ...state,
                title: payload as string,
            };
        case "set_description":
            return {
                ...state,
                description: payload as string,
            };
        case "set_status":
            return {
                ...state,
                status: payload as string | undefined,
            };
        case "set_multiple":
            return {
                ...state,
                ...(payload as { [key: string]: SingleActionPayload }),
            };
        default:
            return { ...state };
    }
};

// Context props
interface FormContextProps {
    title: string;
    description: string;
    status: string | undefined;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setStatus: (value: string | undefined) => void;
}
//
// Context
const TableContext = createContext<FormContextProps>({
    title: "",
    description: "",
    status: undefined,
    setTitle() {},
    setDescription() {},
    setStatus() {},
});

// Context provider
export function FormContextProvider(props: PropsWithChildren) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Handle title change
    const setTitle = (value: string) => {
        dispatch({ type: "set_title", payload: value });
    };

    // Handle description change
    const setDescription = (value: string) => {
        dispatch({ type: "set_description", payload: value });
    };

    // Handle status change
    const setStatus = (value: string | undefined) => {
        dispatch({ type: "set_status", payload: value });
    };

    return (
        <TableContext.Provider
            value={{
                title: state.title,
                setTitle,
                description: state.description,
                setDescription,
                status: state.status,
                setStatus,
            }}
        >
            {props.children}
        </TableContext.Provider>
    );
}

// Context consumer hook
export function useFormContext() {
    const context = useContext(TableContext);
    if (typeof context === "undefined")
        throw new Error(
            "useFormContext() cannot be used outside <FormContextProvider></FormContextProvider>",
        );
    return context;
}
