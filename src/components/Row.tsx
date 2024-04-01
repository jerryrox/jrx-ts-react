import { ComponentProps } from "react";

interface IParam extends ComponentProps<"div"> {
    fullWidth?: boolean;
    fullHeight?: boolean;
    flexWrap?: boolean;
}

const Row = ({
    fullWidth,
    fullHeight,
    flexWrap,
    children,
    style,
    ...props
}: IParam) => {

    return (
        <div {...props} style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            boxSizing: "border-box",
            width: fullWidth ? "100%" : undefined,
            height: fullHeight ? "100%" : undefined,
            flexWrap: flexWrap ? "wrap" : undefined,
            ...style,
        }}>
            {children}
        </div>
    );
};
export default Row;