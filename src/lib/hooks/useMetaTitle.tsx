/*
This is a custom hook in React called useMetaTitle. It uses the useLocation hook from react-router-dom,
a set of predefined PATHS, and a StringExtension from a third-party library to dynamically set the document.title based on the current URL path.

The hook begins by calling the useLocation hook to get the pathname of the current URL.
The pathname is the part of the URL after the domain name, which in this case, represents the current page's path.

Next, the hook initializes three constants: mainTitle, titleHyphen, and pageTitle.

mainTitle is a string containing the main title of the application, which is "Rechat task" in this case.

titleHyphen is a string containing a hyphen separator, which is used to separate the main title and the page title.

pageTitle is the title of the current page, which is extracted from the pathname. The pathname is split using the "/" character,
and the second element is used as the pageTitle. This second element of the pathname is then capitalized
using the StringExtension.capitalize() method, and the "-" character is replaced with a space.

Finally, the hook checks if the current pathname is the home page using the predefined PATHS().home constant.
If the pathname is the home page, the document.title is set to the mainTitle. Otherwise, the document.title is set to
mainTitle concatenated with titleHyphen and pageTitle.

This custom hook provides an easy way to set the document title dynamically based on the current page's URL in a React application.
It encapsulates the logic for setting the document title and can be reused throughout the application wherever a dynamic document title is required.
* */

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
