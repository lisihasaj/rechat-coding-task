export const PATHS = (
    arg1 = "",
): {
    home: string;
    add: string;
    edit: string;
    notFound: string;
} => {
    return {
        home: `/`,
        add: `/add-task`,
        edit: `/edit-task/${arg1}`,
        notFound: `*`,
    };
};
