import { TasksContextProvider } from "lib/context/TasksContext";
import MainContainer from "components/wrappers/MainContainer";
import PageTitle from "components/ui/PageTitle";
import TasksContainer from "components/home/TasksContainer";
import PageTransition from "components/wrappers/PageTransition";
import Form from "components/Form";

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
