import MainContainer from "components/wrappers/MainContainer";
import { PATHS } from "router/paths";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation();

    // BreadCrumbs solution that needs to be refactored since the current solution is not scalable
    return (
        <MainContainer className="bg-brand-dark py-[1rem] flex-row items-center gap-2">
            <Link to={PATHS().home} className="text-white text-xl">
                Task Management
            </Link>
            {pathname !== PATHS().home && (
                <>
                    <span className="text-xl text-white">{">"}</span>
                    <Link to={pathname} className="text-white text-xl">
                        Edit
                    </Link>
                </>
            )}
        </MainContainer>
    );
}
