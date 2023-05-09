/*
This is a custom hook in React called useMediaQuery. It uses the useEffect and useState hooks to listen to changes in a media query
and return a boolean value indicating whether the media query matches or not.

The hook takes a single argument query, which is a string representing a media query.
It initializes a matches state using useState hook and sets its initial value to the result of the getMatches function, which is defined within the hook.

getMatches function checks if the window object is defined (as window is only available in the browser environment
and not in server-side rendering) and returns the result of window.matchMedia(query).matches.
This method checks if the media query passed as an argument matches the current device's media features.

The hook uses useEffect to listen to changes in the query passed as an argument.
The useEffect hook runs the function returned from it whenever the query parameter changes. The function performs the following actions:

- It initializes the matchMedia object with the media query string.
- It calls the handleChange function to set the initial value of matches.
- It adds an event listener to the matchMedia object that listens for changes to the media query and calls the handleChange function when the query changes.
- It returns a cleanup function that removes the event listener added in step 3.
- The handleChange function updates the matches state to the result of getMatches called with the query parameter.

Finally, the useMediaQuery hook returns an array containing the matches state. This array can be destructured in the calling component to access the matches state.

Overall, this custom hook allows developers to easily create media query-aware components in React
without having to write repetitive code for setting up event listeners and updating state.
* */

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const getMatches = (query: string): boolean => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    };

    const [matches, setMatches] = useState<boolean>(getMatches(query));

    const handleChange = () => {
        setMatches(getMatches(query));
    };

    useEffect(() => {
        const matchMedia = window.matchMedia(query);
        handleChange();
        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, [query]);

    return [matches];
}
