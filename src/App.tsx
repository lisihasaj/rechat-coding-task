import { useMetaTitle } from "lib/hooks/useMetaTitle";
import Routes from "router/Routes";

export default function App() {
    useMetaTitle();

    return (
        <>
            <Routes />
        </>
    );
}
