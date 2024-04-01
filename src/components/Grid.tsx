import { ComponentProps } from "react";

interface IParam extends ComponentProps<"div"> {
    gap?: number | string;
    columns?: number;
    rows?: number;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

const Grid = ({
    gap,
    columns,
    rows,
    fullWidth,
    fullHeight,
    children,
    style,
    ...props
}: IParam) => {

    return (
        <div {...props} style={{
            display: "grid",
            gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : undefined,
            gridTemplateRows: rows ? `repeat(${rows}, 1fr)` : undefined,
            gap,
            width: fullWidth ? "100%" : undefined,
            height: fullHeight ? "100%" : undefined,
            ...style,
        }}>
            {children}
        </div>
    );
};
export default Grid;