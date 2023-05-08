import {
    createContext,
    PropsWithChildren,
    useReducer,
    useContext,
} from "react";

// Initial state props
interface FormContextState {
    values: { [key: string]: string | undefined };
    errors: { [key: string]: string | undefined };
}

// Context initial state
const initialState: FormContextState = {
    values: {},
    errors: {},
};

// Reducer props
type FormContextActionType =
    | "set_field_value"
    | "set_field_error"
    | "reset_fields"
    | "reset_errors"
    | "reset_multiple";
type FormContextActionPayload = { [key: string]: string | undefined };
interface FormContextActions {
    type: FormContextActionType;
    payload: FormContextActionPayload;
}

// The Reducer
const reducer = (state: FormContextState, action: FormContextActions) => {
    const { type, payload } = action;

    switch (type) {
        case "set_field_value":
            return {
                ...state,
                values: {
                    ...state.values,
                    ...payload,
                } as { [key: string]: string | undefined },
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
        default:
            return { ...state };
    }
};

// Context props
interface FormContextProps {
    values: { [key: string]: string | undefined };
    setValues: (key: string, value: string) => void;
    isDirty: boolean;
    resetFields: () => void;
    handleSubmit: (fields: string[]) => void;
    errors: { [key: string]: string | undefined };
    clearError: (field: string) => void;
}

// Context
const FormContext = createContext<FormContextProps>({
    values: {},
    setValues() {},
    isDirty: false,
    resetFields() {},
    handleSubmit() {},
    errors: {},
    clearError() {},
});

// Context provider
export function FormContextProvider(props: PropsWithChildren) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Handle field value change
    const setValues = (key: string, value: string) => {
        dispatch({ type: "set_field_value", payload: { [key]: value } });
    };

    // Check if values are empty
    const isDirty = Object.values(state.values).some((value) => value !== "");

    // Reset fields
    const resetFields = () => {
        dispatch({ type: "reset_multiple", payload: {} });
    };

    // Handle submit
    const handleSubmit = (fields: string[]) => {
        const emptyFields = fields.filter(
            (field) =>
                state.values[field] === "" || state.values[field] === undefined,
        );

        // Check if all fields have values
        if (emptyFields.length > 0) {
            const errors = emptyFields.reduce((obj, field) => {
                return {
                    ...obj,
                    [field]: "This field is required",
                };
            }, {} as { [key: string]: string | undefined });

            dispatch({ type: "set_field_error", payload: errors });
        } else {
            console.log(state.values);
        }
    };

    // Clear errors by field name
    const clearError = (field: string) => {
        dispatch({ type: "set_field_error", payload: { [field]: undefined } });
    };

    return (
        <FormContext.Provider
            value={{
                values: state.values,
                errors: state.errors,
                setValues,
                isDirty,
                resetFields,
                handleSubmit,
                clearError,
            }}
        >
            {props.children}
        </FormContext.Provider>
    );
}

// Context consumer hook
export function useFormContext() {
    const context = useContext(FormContext);
    if (typeof context === "undefined")
        throw new Error(
            "useFormContext() cannot be used outside <FormContextProvider></FormContextProvider>",
        );
    return context;
}
