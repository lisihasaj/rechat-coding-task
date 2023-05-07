import { useMetaTitle } from "lib/hooks/useMetaTitle.tsx";
import Routes from "router/Routes.tsx";

export default function App() {
    useMetaTitle();

    return (
        <>
            <Routes />
        </>
    );
}
