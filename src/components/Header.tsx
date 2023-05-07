import ElementsContainer from "components/ElementsContainer.tsx";

export default function Header() {
    return (
        <ElementsContainer className="bg-brand-dark py-[1rem]">
            <span className="text-white text-lg">Task Management</span>
        </ElementsContainer>
    );
}
