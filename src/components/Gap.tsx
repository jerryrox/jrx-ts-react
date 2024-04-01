import { ComponentProps } from "react";

interface IParam extends ComponentProps<"div"> {
    width?: string | number;
    height?: string | number;
    vertical?: string | number;
    horizontal?: string | number;
    flex?: number;
}

const Gap = ({
    width,
    height,
    vertical,
    horizontal,
    flex,
    children,
    style,
    ...props
}: IParam) => {

    return (
        <div {...props} style={{
            marginRight: width ?? horizontal,
            marginTop: height ?? vertical,
            flex,
            ...style,
        }}>
            {children}
        </div>
    );
};
export default Gap;