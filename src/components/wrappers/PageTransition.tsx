import { PropsWithChildren, CSSProperties } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import cs from "classnames";

interface Props extends PropsWithChildren {
    className?: string;
    style?: CSSProperties;
}

export default function PageTransition(props: Props) {
    const { pathname } = useLocation();

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.div
            key={pathname}
            variants={variants}
            initial="hidden"
            animate="visible"
            className={cs("relative w-full", props.className)}
            style={props.style}
        >
            {props.children}
        </motion.div>
    );
}
