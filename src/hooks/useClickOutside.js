import {useEffect} from "react";

export default function useClickOutside(refs, onClickOutside) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            for (let ref of refs){
                if (ref.current && ref.current.contains(event.target)) {
                    return;
                }
            }
            onClickOutside();
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs]);
}