import { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PATHS } from "router/paths.ts";

// Layouts
import AppLayout from "../layouts/AppLayout.tsx";

// Pages
import NotFound from "pages/NotFound.tsx";
import Home from "pages/Home.tsx";
import Edit from "pages/Edit.tsx";

const appRoutes: RouteObject[] = [
    {
        path: PATHS().home,
        element: (
            <AppLayout>
                <Home />
            </AppLayout>
        ),
    },
    {
        path: PATHS().edit,
        element: (
            <AppLayout>
                <Edit />
            </AppLayout>
        ),
    },
    {
        path: PATHS().notFound,
        element: (
            <AppLayout>
                <NotFound />
            </AppLayout>
        ),
    },
];

export default function Routes() {
    return <AnimatePresence>{useRoutes(appRoutes)}</AnimatePresence>;
}
