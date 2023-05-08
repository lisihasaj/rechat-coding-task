import { FormContextProvider } from "lib/context/FormContext.tsx";
import MainContainer from "components/wrappers/MainContainer";
import PageTitle from "components/ui/PageTitle.tsx";
import TasksContainer from "components/home/TasksContainer.tsx";
import PageTransition from "components/wrappers/PageTransition";
import Form from "components/Form.tsx";

export default function Home() {
    return (
        <PageTransition className="min-h-screen bg-white flex flex-col gap-10">
            <MainContainer className="flex-col">
                <PageTitle title="Add a new task" />
                <FormContextProvider>
                    <Form textareaRows={5} />
                </FormContextProvider>
            </MainContainer>
            <TasksContainer />
        </PageTransition>
    );
}
