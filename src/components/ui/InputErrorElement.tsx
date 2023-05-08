interface Props {
    hasError: boolean;
}

export default function InputErrorElement(props: Props) {
    if (!props.hasError) return <></>;

    return (
        <span className="absolute top-0 left-[.3rem] text-lg text-red-500">
            *
        </span>
    );
}
