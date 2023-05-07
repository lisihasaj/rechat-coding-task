export const PATHS = (
    arg1 = "",
): {
    home: string;
    edit: string;
    notFound: string;
} => {
    return {
        home: `/`,
        edit: `/edit-task/${arg1}`,
        notFound: `*`,
    };
};
