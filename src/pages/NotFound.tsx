import PageTransition from "components/wrappers/PageTransition";
import MainContainer from "components/wrappers/MainContainer.tsx";
import { Link } from "react-router-dom";
import { PATHS } from "router/paths.ts";
import { ArrowLeftIcon } from "components/ui/SvgIcons.tsx";

export default function NotFound() {
    return (
        <PageTransition>
            <MainContainer className="h-screen flex-col items-center justify-center gap-5">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-xl">Page not found</p>
                <Link to={PATHS().home} className="flex flex-row items-center">
                    <ArrowLeftIcon className="w-5 h-5" />
                    Go back
                </Link>
            </MainContainer>
        </PageTransition>
    );
}
