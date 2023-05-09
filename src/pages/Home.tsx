import { TasksContextProvider } from "lib/context/TasksContext.tsx";
import MainContainer from "components/wrappers/MainContainer";
import PageTitle from "components/ui/PageTitle.tsx";
import TasksContainer from "components/home/TasksContainer.tsx";
import PageTransition from "components/wrappers/PageTransition";
import Form from "components/Form.tsx";

export default function Home() {
    return (
        <PageTransition className="min-h-screen bg-white flex flex-col gap-10">
            <TasksContextProvider>
                <MainContainer className="flex-col">
                    <PageTitle title="Add a new task" />
                    <Form textareaRows={5} />
                </MainContainer>
                <TasksContainer />
            </TasksContextProvider>
        </PageTransition>
    );
}
