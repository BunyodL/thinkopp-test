import { mergeClassNames } from "@/app/utils/mergeClassNames";
import { ReactNode } from "react";

type TitleProps = {
    children: ReactNode;
    className?: string;
};

export const Title = ({ children, className }: TitleProps) => {
    return (
        <h1 className={mergeClassNames("text-5xl font-semibold max-lg:text-4xl max-md:text-3xl max-sm:text-2xl", className)}>
            {children}
        </h1>
    );
};
