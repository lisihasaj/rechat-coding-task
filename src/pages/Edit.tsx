import MainContainer from "components/wrappers/MainContainer";
import PageTitle from "components/ui/PageTitle.tsx";
import PageTransition from "components/wrappers/PageTransition";
import Form from "components/Form.tsx";
import { FormContextProvider } from "lib/context/FormContext.tsx";

export default function Edit() {
    return (
        <PageTransition>
            <MainContainer className="flex-col bg-white min-h-screen pb-[3rem]">
                <PageTitle title="Edit Task" />
                <FormContextProvider>
                    <Form textareaRows={20} isEditPage />
                </FormContextProvider>
            </MainContainer>
        </PageTransition>
    );
}
