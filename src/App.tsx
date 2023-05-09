import { useMetaTitle } from "lib/hooks/useMetaTitle";
import Routes from "router/Routes";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "lib/hooks/useMediaQuery";
import cs from "classnames";

export default function App() {
    const [mobile] = useMediaQuery(`(max-width: 480px)`);

    useMetaTitle();

    return (
        <>
            <ToastContainer
                position={mobile ? "top-center" : "top-right"}
                toastClassName={cs(
                    "shadow-lg border text-[1rem] overflow-hidden",
                    mobile ? "rounded-0" : "rounded-lg",
                )}
                closeButton={!mobile}
                className="z-[6000]"
                hideProgressBar={true}
                autoClose={5000}
                pauseOnFocusLoss={true}
                pauseOnHover={true}
                closeOnClick={true}
            />
            <Routes />
        </>
    );
}
