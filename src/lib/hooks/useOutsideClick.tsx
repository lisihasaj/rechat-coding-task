/*
This is a custom hook in React called useOutsideClick. It uses the useEffect hook to listen for clicks outside a
specified component and calls a callback function when a click is detected.

The hook takes two arguments: a ref object that represents the component being tracked, and a callback function
that is called when a click is detected outside the component.

Inside the hook, a handleClick function is defined that takes a MouseEvent object. This function checks whether
the ref object is defined and whether the clicked element is outside the component by using the contains() method.
If the clicked element is outside the component, the callback function is called.

The useEffect hook is used to add an event listener for clicks to the document object. When the component is mounted,
the handleClick function is added as an event listener to the click event. The useEffect hook also returns a cleanup
function that removes the event listener when the component is unmounted.

Overall, this custom hook allows developers to easily detect clicks outside a component and perform a specified action when a click is detected.
This can be useful in cases where a component should be hidden or closed when a user clicks outside of it, such as dropdown menus or modals.
* */

import { useEffect } from "react";

export function useOutsideClick(ref: any, callback: () => void) {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
}
