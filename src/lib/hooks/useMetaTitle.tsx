import { useLocation } from "react-router-dom";
import { PATHS } from "router/paths";
import { StringExtension as String } from "lib/extensions/string.extension";

export function useMetaTitle() {
    const { pathname } = useLocation();

    const mainTitle = "Rechat task";
    const titleHyphen = " - ";
    const pageTitle = String.capitalize(
        pathname.split("/")[1].replace("-", " "),
    );

    if (pathname === PATHS().home) {
        document.title = mainTitle;
    } else {
        document.title = mainTitle + titleHyphen + pageTitle;
    }
}
