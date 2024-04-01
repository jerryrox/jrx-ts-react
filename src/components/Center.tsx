import { ComponentProps } from "react";

interface IParam extends ComponentProps<"div"> {
}

const Center = ({
    children,
    style,
    ...props
}: IParam) => {

    return (
        <div {...props} style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            ...style,
        }}>
            {children}
        </div>
    );
};
export default Center;