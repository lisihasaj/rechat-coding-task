import { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PATHS } from "router/paths";

// Layouts
import AppLayout from "layouts/AppLayout";

// Pages
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Edit from "pages/Edit";

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
        path: PATHS(":taskId").edit,
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
