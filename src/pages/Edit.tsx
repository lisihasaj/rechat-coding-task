import MainContainer from "components/wrappers/MainContainer";
import PageTitle from "components/ui/PageTitle";
import PageTransition from "components/wrappers/PageTransition";
import Form from "components/Form";
import { TasksContextProvider } from "lib/context/TasksContext";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { StorageExtension } from "lib/extensions/storage.extension";
import { TASKS } from "lib/constants";
import { Task } from "components/home/TaskItem";
import { PATHS } from "router/paths";
import { ArrowLeftIcon } from "components/ui/SvgIcons";
import TaskHistory from "components/edit/TaskHistory.tsx";

export default function Edit() {
    const { taskId } = useParams();
    const navigate = useNavigate();

    // Redirect to 404 if task doesn't exist
    useEffect(() => {
        const task = StorageExtension.get(TASKS)?.find(
            (t: Task) => t.id === taskId,
        );
        if (!task) {
            navigate(PATHS().notFound);
        }
    }, [taskId]);

    return (
        <PageTransition>
            <TasksContextProvider>
                <MainContainer className="flex-col bg-white min-h-screen pb-[3rem]">
                    <PageTitle title="Edit Task" />
                    <Form textareaRows={20} isEditPage />
                    <Link
                        to={PATHS().home}
                        className="mt-[2rem] flex flex-row items-center gap-2"
                    >
                        <ArrowLeftIcon className="w-5 h-5" />
                        Go back
                    </Link>
                    <TaskHistory />
                </MainContainer>
            </TasksContextProvider>
        </PageTransition>
    );
}
