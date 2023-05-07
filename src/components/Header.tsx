import MainContainer from "components/ui/MainContainer.tsx";

export default function Header() {
    return (
        <MainContainer className="bg-brand-dark py-[1rem]">
            <span className="text-white text-xl">Task Management</span>
        </MainContainer>
    );
}
